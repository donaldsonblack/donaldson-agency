# Donaldson Agency

A modern marketing agency website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Beautiful, animated landing page with Framer Motion
- 📧 Functional contact form with Resend email integration
- 📊 Google Analytics 4 tracking
- 🎯 shadcn/ui components with "New York" style
- 🌙 Light/dark mode support
- 📱 Fully responsive design
- 🚀 Optimized for performance with Turbopack

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion (motion)
- **Icons**: Lucide React
- **Email**: Resend + React Email
- **Analytics**: Google Analytics 4
- **Code Quality**: Biome (linting & formatting)

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Linting & Formatting

```bash
# Check code quality
npm run lint

# Format code
npm run format
```

## Deployment

### Docker Deployment (Ubuntu Server)

This project is ready for Docker deployment. See detailed instructions:

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Full deployment guide for Ubuntu
- **[DOCKER.md](./DOCKER.md)** - Docker commands reference

**Quick Deploy:**

```bash
# On your Ubuntu server
./deploy.sh
```

### Vercel Deployment

Alternatively, deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Environment Variables

Required environment variables:

```env
# Resend Email
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=your-email@example.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

See `.env.production.example` for the full template.

## Project Structure

```
donaldson-agency/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── emails/          # Email templates
│   └── lib/             # Utility functions
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── deploy.sh           # Deployment script
```

## Documentation

- [CLAUDE.md](./CLAUDE.md) - Development guidelines for AI assistants
- [IMPLEMENTATION.md](./IMPLEMENTATION.md) - Feature implementation guides
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Server deployment instructions
- [DOCKER.md](./DOCKER.md) - Docker reference

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Resend](https://resend.com/docs)
