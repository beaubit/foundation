# Anila & Jawad Iqbal Foundation – Website

A Next.js 14 + Tailwind project matching the Canva designs.

## Stack
- Next.js 14 (App Router) + TypeScript
- TailwindCSS + Framer Motion
- Prisma + Postgres (Supabase/Neon)
- Stripe Checkout + Webhooks (placeholders wired)
- next-seo, GA4

## Quick start
```bash
pnpm i # or npm/yarn
cp .env.example .env.local  # fill in your real keys
pnpm dev
```

## Fonts
- Archivo Black (display), Quattrocento (body) via `next/font`

## Brand
- Teal `#1DABBA`, Grey `#868B91`, White `#FFFFFF`, Black `#000000`
- Leaf pattern & tree watermark SVGs are in `/public` and applied via Tailwind extensions.

## Routes
- `/` – Hero CTA + 10s slideshow
- `/about`, `/partners`, `/donate`, `/blog`, `/blog/[slug]`
- `/partners/[partner]` – sample detail pages
- `/admin` – dashboard (scaffold), `/admin/blog` – blog management list
- API: `/api/checkout`, `/api/stripe/webhook` (placeholders)

## Prisma
- Run `npx prisma migrate dev` after setting `DATABASE_URL`

## Stripe
- Fill `STRIPE_*` env vars. Add webhook endpoint: `/api/stripe/webhook`.
- Implement Checkout session create and webhook handling in the API routes.

## TODO (nice-to-haves)
- Auth (Clerk/NextAuth) + role gates
- Blog CRUD pages in admin
- Real image/video embeds and partner data from DB
- Accessibility polish for hover-expand cards
- CI/CD with Vercel
