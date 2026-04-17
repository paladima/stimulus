# Stimulus AI — Next.js 14 Multilingual Landing Site

Production-ready landing site for [only-fans.ai](https://only-fans.ai) built with Next.js 14 App Router, featuring full internationalization (EN/RU/ES), SSG for all pages, and Railway deployment.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| i18n | next-intl 3.x |
| Database | MySQL/TiDB via Drizzle ORM |
| Auth | JWT (admin panel) |
| Email | Nodemailer |
| Deployment | Railway (Docker) |

## Pages

The site generates **164+ static pages** across 3 locales:

- **Homepage** (EN/RU/ES)
- **6 standalone pages** (how-it-works, features, interface, calculator, faq, about)
- **39 SEO pages** (ai-chatter, chatbot, agency-software, CRM, etc.)
- **8 blog articles** with listing page
- **Privacy & Terms**
- **Admin panel** (login, leads dashboard)
- **9 API routes** (contact form, admin auth, leads CRUD, CSV export)

## Getting Started

```bash
pnpm install
cp .env.example .env  # Fill in your values
pnpm dev
```

## Environment Variables

See `.env.example` for the full list. Key variables:

- `DATABASE_URL` — MySQL connection string
- `JWT_SECRET` — Admin session signing
- `SMTP_*` — Contact form email delivery
- `NEXT_PUBLIC_SITE_URL` — Canonical URL for SEO

## Deployment (Railway)

The project includes a `Dockerfile` and `railway.toml` for one-click Railway deployment:

1. Push to GitHub
2. Connect repo in Railway dashboard
3. Set environment variables
4. Deploy

Railway will automatically build using the Dockerfile and serve on port 3000.

## i18n Architecture

- **Routing**: `/en/*`, `/ru/*`, `/es/*` with automatic locale detection
- **Default locale**: English (no prefix redirect)
- **Content**: All page content translated in `src/data/*.{en,ru,es}.ts`
- **UI strings**: `src/messages/{en,ru,es}.json`
- **SEO**: hreflang tags, per-locale sitemap.xml, dynamic lang attribute

## Project Structure

```
src/
  app/
    [locale]/(marketing)/     # All public pages with locale routing
    admin/                     # Admin panel (no locale)
    api/                       # API route handlers
    sitemap.ts                 # Dynamic multilingual sitemap
    robots.ts                  # robots.txt
  components/                  # Shared UI components
  data/                        # Page content (EN/RU/ES)
  hooks/                       # Custom React hooks
  i18n/                        # next-intl config
  lib/server/                  # Server utilities (DB, auth)
  messages/                    # UI translation strings
```
