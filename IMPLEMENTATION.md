# Implementation Guides

Complete setup instructions for the Donaldson Agency marketing site stack.

## Table of Contents
1. [Database Setup (Turso + Drizzle)](#database-setup-turso--drizzle)
2. [Email Setup (Resend + React Email)](#email-setup-resend--react-email)
3. [MDX Blog Setup (Contentlayer)](#mdx-blog-setup-contentlayer)
4. [Google Analytics 4 Setup](#google-analytics-4-setup)
5. [Project Structure](#project-structure)
6. [Environment Variables](#environment-variables-template)

---

## Database Setup (Turso + Drizzle)

### 1. Install Dependencies
```bash
npm install @libsql/client drizzle-orm
npm install -D drizzle-kit
```

### 2. Create Turso Database
```bash
# Install Turso CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Create database
turso db create donaldson-agency

# Get database URL
turso db show donaldson-agency --url

# Create auth token
turso db tokens create donaldson-agency
```

### 3. Environment Variables
Add to `.env.local`:
```env
TURSO_DATABASE_URL="libsql://[your-db].turso.io"
TURSO_AUTH_TOKEN="[your-token]"
```

### 4. Drizzle Configuration
Create `drizzle.config.ts` in project root:
```typescript
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
} satisfies Config;
```

### 5. Database Schema
Create `src/lib/db/schema.ts`:
```typescript
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const contacts = sqliteTable('contacts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export const subscribers = sqliteTable('subscribers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  subscribedAt: integer('subscribed_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
});
```

### 6. Database Client
Create `src/lib/db/client.ts`:
```typescript
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema });
```

### 7. Run Migrations
```bash
# Generate migration
npx drizzle-kit generate:sqlite

# Push to database
npx drizzle-kit push:sqlite
```

### 8. Optional: Add to package.json scripts
```json
{
  "scripts": {
    "db:generate": "drizzle-kit generate:sqlite",
    "db:push": "drizzle-kit push:sqlite",
    "db:studio": "drizzle-kit studio"
  }
}
```

---

## Email Setup (Resend + React Email)

### 1. Install Dependencies
```bash
npm install resend react-email
npm install -D @react-email/components
```

### 2. Get Resend API Key
1. Sign up at https://resend.com
2. Create API key
3. Add domain or use onboarding email for testing

### 3. Environment Variables
Add to `.env.local`:
```env
RESEND_API_KEY="re_xxxxxxxxxxxxx"
RESEND_FROM_EMAIL="onboarding@resend.dev"  # or your verified domain
RESEND_TO_EMAIL="your-email@example.com"   # Where to receive contact forms
```

### 4. Email Templates
Create `src/emails/contact-notification.tsx`:
```typescript
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f6f9fc' }}>
        <Container style={{ margin: '0 auto', padding: '20px 0 48px' }}>
          <Heading style={{ fontSize: '24px', marginBottom: '16px' }}>
            New Contact Form Submission
          </Heading>
          <Section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px' }}>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ margin: '0 0 12px' }}>
              <strong>Message:</strong>
            </Text>
            <Text style={{ margin: '0', whiteSpace: 'pre-wrap' }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
```

### 5. Server Action for Contact Form
Create `src/app/actions/contact.ts`:
```typescript
'use server';

import { Resend } from 'resend';
import { db } from '@/lib/db/client';
import { contacts } from '@/lib/db/schema';
import ContactNotification from '@/emails/contact-notification';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    // Save to database
    await db.insert(contacts).values({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New contact from ${formData.name}`,
      react: ContactNotification({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}
```

### 6. Example Contact Form Component
Create `src/components/contact-form.tsx`:
```typescript
'use client';

import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    });

    setIsSubmitting(false);

    if (result.success) {
      setMessage({ type: 'success', text: 'Thank you! We\'ll be in touch soon.' });
      e.currentTarget.reset();
    } else {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-md border p-2"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {message && (
        <p className={message.type === 'success' ? 'text-green-600' : 'text-red-600'}>
          {message.text}
        </p>
      )}
    </form>
  );
}
```

---

## MDX Blog Setup (Contentlayer)

### 1. Install Dependencies
```bash
npm install contentlayer next-contentlayer date-fns
npm install -D rehype-pretty-code rehype-autolink-headings rehype-slug shiki
```

### 2. Contentlayer Configuration
Create `contentlayer.config.ts` in project root:
```typescript
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    published: { type: 'boolean', default: true },
    image: { type: 'string' },
    author: { type: 'string', default: 'Donaldson Agency' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('blog/', ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace('blog/', '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
});
```

### 3. Update next.config.ts
```typescript
import { withContentlayer } from 'next-contentlayer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default withContentlayer(nextConfig);
```

### 4. Update tsconfig.json
Add to existing `paths` object:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".contentlayer/generated"
  ]
}
```

### 5. Create Blog Content Directory
```bash
mkdir -p content/blog
```

### 6. Example Blog Post
Create `content/blog/first-post.mdx`:
```mdx
---
title: "Welcome to Our Blog"
description: "Our first blog post about marketing excellence and digital strategy"
date: 2025-01-15
published: true
image: "/blog/first-post.jpg"
author: "Donaldson Agency"
---

## Welcome to the Donaldson Agency Blog!

This is our first blog post. We're excited to share insights on marketing, branding, and digital strategy.

### What We'll Cover

- Marketing best practices
- Brand development strategies
- Digital transformation tips
- Case studies and success stories

Stay tuned for more content!
```

### 7. Blog List Page
Create `src/app/blog/page.tsx`:
```typescript
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Donaldson Agency',
  description: 'Marketing insights, strategies, and industry news',
};

export default function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post._id} className="rounded-lg border p-6">
            <Link href={post.url}>
              <h2 className="mb-2 text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
              <p className="mb-4 text-muted-foreground">{post.description}</p>
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
```

### 8. Blog Post Page
Create `src/app/blog/[slug]/page.tsx`:
```typescript
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}
```

### 9. Blog Prose Styling

**Note**: Tailwind CSS v4 doesn't use `@tailwindcss/typography` plugin the same way as v3. Custom prose styles are already included in `src/app/globals.css` that provide typography styling for blog posts.

The `.prose` class will automatically style your MDX content with proper spacing, font sizes, and colors that adapt to light/dark mode.

---

## Google Analytics 4 Setup

### 1. Get GA4 Measurement ID
1. Go to Google Analytics (https://analytics.google.com)
2. Create a new property
3. Set up a Data Stream for your website
4. Copy the Measurement ID (format: G-XXXXXXXXXX)

### 2. Environment Variables
Add to `.env.local`:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### 3. Create Analytics Component
Create `src/components/analytics.tsx`:
```typescript
'use client';

import Script from 'next/script';

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('GA Measurement ID not found');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
```

### 4. Cookie Consent Banner
Install dependency:
```bash
npm install react-cookie-consent
```

Create `src/components/cookie-consent.tsx`:
```typescript
'use client';

import CookieConsent from 'react-cookie-consent';

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="donaldson-agency-cookie-consent"
      style={{
        background: 'hsl(var(--card))',
        borderTop: '1px solid hsl(var(--border))',
      }}
      buttonStyle={{
        background: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))',
        fontSize: '14px',
        borderRadius: '0.5rem',
        padding: '8px 16px',
      }}
      declineButtonStyle={{
        background: 'hsl(var(--secondary))',
        color: 'hsl(var(--secondary-foreground))',
        fontSize: '14px',
        borderRadius: '0.5rem',
        padding: '8px 16px',
      }}
      expires={365}
      onAccept={() => {
        console.log('Cookies accepted');
      }}
      onDecline={() => {
        console.log('Cookies declined');
      }}
    >
      <span style={{ fontSize: '14px' }}>
        This website uses cookies to enhance user experience and analyze site traffic.
      </span>
    </CookieConsent>
  );
}
```

### 5. Add to Root Layout
Update `src/app/layout.tsx`:
```typescript
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@/components/analytics';
import { CookieConsentBanner } from '@/components/cookie-consent';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Donaldson Agency',
  description: 'Marketing excellence and digital strategy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
```

---

## Project Structure

After implementing all features, your project structure will look like:

```
donaldson-agency/
├── content/                      # MDX blog content
│   └── blog/
│       ├── first-post.mdx
│       └── *.mdx
├── drizzle/                      # Database migration files (auto-generated)
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── contact.ts        # Server actions
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx      # Individual blog post
│   │   │   └── page.tsx          # Blog list
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page (optional separate page)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx            # Root layout with Analytics
│   │   └── page.tsx              # Landing page
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── analytics.tsx
│   │   ├── contact-form.tsx
│   │   └── cookie-consent.tsx
│   ├── emails/
│   │   └── contact-notification.tsx
│   ├── lib/
│   │   ├── db/
│   │   │   ├── client.ts
│   │   │   └── schema.ts
│   │   └── utils.ts
│   └── hooks/                    # (optional) Custom hooks
├── .contentlayer/                # Generated by Contentlayer (gitignored)
├── .env.local                    # Environment variables (gitignored)
├── .gitignore
├── .mcp.json                     # MCP server config
├── biome.json
├── components.json               # shadcn/ui config
├── contentlayer.config.ts        # Contentlayer configuration
├── drizzle.config.ts             # Drizzle configuration
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── IMPLEMENTATION.md             # This file
```

---

## Environment Variables Template

Create `.env.local` (this file is gitignored):

```env
# Turso Database
TURSO_DATABASE_URL="libsql://[your-db].turso.io"
TURSO_AUTH_TOKEN="[your-token]"

# Resend Email
RESEND_API_KEY="re_xxxxxxxxxxxxx"
RESEND_FROM_EMAIL="noreply@yourdomain.com"  # Or onboarding@resend.dev for testing
RESEND_TO_EMAIL="your-email@example.com"     # Where contact forms are sent

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

**Important Security Notes**:
- `.env.local` should already be in `.gitignore`
- Never commit environment variables to version control
- Use different values for development/staging/production
- Keep API keys and tokens secure

---

## Next Steps

1. **Install all dependencies**:
   ```bash
   npm install @libsql/client drizzle-orm resend react-email contentlayer next-contentlayer date-fns react-cookie-consent
   npm install -D drizzle-kit @react-email/components rehype-pretty-code rehype-autolink-headings rehype-slug shiki
   ```

2. **Set up Turso database** (follow Database Setup section)

3. **Get Resend API key** (follow Email Setup section)

4. **Get Google Analytics Measurement ID** (follow Analytics Setup section)

5. **Create configuration files**:
   - `drizzle.config.ts`
   - `contentlayer.config.ts`
   - Update `next.config.ts`
   - Update `tsconfig.json`

6. **Create directory structure**:
   ```bash
   mkdir -p src/lib/db src/emails src/app/actions src/app/blog content/blog
   ```

7. **Implement components and pages** (use code examples from sections above)

8. **Test everything**:
   - Run dev server: `npm run dev`
   - Test contact form
   - Create test blog post
   - Verify analytics tracking

9. **Deploy** (recommended: Vercel)
   - Add environment variables in hosting platform
   - Verify all features work in production
