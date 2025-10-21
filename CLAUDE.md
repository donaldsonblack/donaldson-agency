# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 marketing landing page for Donaldson Agency, built with TypeScript, React 19, and Tailwind CSS v4. The project uses Biome for linting/formatting and is configured with shadcn/ui components using the "New York" style.

### Key Features
- Marketing landing page
- MDX-based blog system
- Contact form with email notifications
- Google Analytics 4 tracking
- Newsletter/contact form submissions stored in database

## Development Commands

### Core Workflows
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production bundle with Turbopack
- `npm start` - Start production server
- `npm run lint` - Check code quality with Biome
- `npm run format` - Format code with Biome (writes changes)

### Component Management
This project is configured to use shadcn/ui via MCP (Model Context Protocol). The shadcn MCP server is already configured in `.mcp.json`.

To add shadcn components:
1. Use the MCP tools available (`mcp__shadcn__*` functions)
2. Or run: `npx shadcn@latest add <component-name>`

## Architecture & Code Structure

### Framework & Routing
- **Next.js 15** with App Router (not Pages Router)
- All routes live in `src/app/` directory
- Server Components by default (mark with `'use client'` when client-side features needed)

### Styling System
- **Tailwind CSS v4** (newer inline theme syntax, not traditional config file)
- CSS variables defined in `src/app/globals.css` using `@theme inline` block
- Custom variant for dark mode: `@custom-variant dark (&:is(.dark *))`
- **shadcn/ui** configured with:
  - Style: "New York"
  - Base color: neutral
  - CSS variables enabled
  - Icon library: lucide-react
  - Border radius: 0.625rem (10px)

### Path Aliases
Configured in `tsconfig.json`:
- `@/*` maps to `./src/*`
- Components: `@/components`
- Utils: `@/lib/utils`
- UI components: `@/components/ui`
- Hooks: `@/hooks`

### Key Utilities
- `cn()` function in `src/lib/utils.ts` - Combines clsx and tailwind-merge for conditional className handling

### Animation
- `motion` package (v12.23.24) available for animations
- `tw-animate-css` package integrated for Tailwind animations

## Code Quality & Formatting

This project uses **Biome** (not ESLint/Prettier):
- Schema version: 2.2.0
- Indent: 2 spaces
- VCS integration enabled with Git
- React and Next.js recommended rules enabled
- Auto-organize imports on save
- Ignores: `node_modules`, `.next`, `dist`, `build`

**Important**: Run `npm run lint` before committing. Fix issues with `npm run format`.

## BMAD-METHOD Directory

The `BMAD-METHOD/` directory contains a separate external framework (BMad-CORE v6 Alpha) for human-AI collaboration in software development. This is a cloned git submodule/external project and should be treated as **read-only** in this repository.

- Do not modify files in `BMAD-METHOD/`
- The bmad framework is not part of the main application build
- It provides AI agent workflows but is not integrated into the app runtime

## Font Configuration

Uses Geist font family from Vercel:
- `geist-sans` - Primary sans-serif font
- `geist-mono` - Monospace font
- Both configured in `src/app/layout.tsx` via `next/font/google`

## Build & Runtime

- **Turbopack** enabled for both dev and build (faster than webpack)
- TypeScript strict mode enabled
- Target: ES2017
- Module resolution: bundler
- JSX preserved for Next.js processing

## Git Workflow

Current branch: `main`
- Clean working directory at conversation start
- Standard git workflow (no special branching strategy evident)

## Key Dependencies

Production:
- `next` (15.5.6) - Framework
- `react` / `react-dom` (19.1.0)
- `tailwindcss` (v4) with `@tailwindcss/postcss`
- `class-variance-authority` - Component variants
- `lucide-react` - Icons
- `motion` - Animations
- `clsx` + `tailwind-merge` - ClassName utilities

Development:
- `@biomejs/biome` - Linting and formatting
- `typescript` - Type checking
- `shadcn` - Component CLI

### Planned Stack Additions

**Database (Turso + Drizzle ORM)**:
- `@libsql/client` - Turso database client
- `drizzle-orm` - Type-safe ORM
- `drizzle-kit` - Schema migrations
- Use for: contact form submissions, newsletter signups

**Email (Resend)**:
- `resend` - Email API client
- `react-email` - Email templates with React
- Use for: contact form notifications, newsletter confirmations

**Blog (MDX)**:
- `contentlayer` - Transform MDX to type-safe data
- `next-mdx-remote` or `@next/mdx` - MDX processing
- `rehype-*` and `remark-*` - MDX plugins for syntax highlighting, etc.
- Blog posts stored in `content/blog/*.mdx`

**Forms & Validation**:
- `react-hook-form` - Form state management
- `zod` - Type-safe schema validation
- `@hookform/resolvers` - Connect Zod to React Hook Form

**Analytics**:
- Google Analytics 4 via `next/script`
- `react-cookie-consent` or custom banner - GDPR compliance

**SEO**:
- `next-sitemap` - Auto-generate sitemap.xml
- `@vercel/og` - Dynamic Open Graph images

## shadcn/ui Components

Components are configured to be added to:
- Location: `src/components/ui/`
- Style: New York (more modern, cleaner design)
- Uses RSC (React Server Components) by default
- TypeScript + TSX files
- CSS variables for theming (light/dark mode support built-in)

When adding components, they will use the project's design tokens defined in `globals.css`.
