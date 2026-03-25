# Tattoo Shop Website Template

Modern, fast, replicable website for tattoo studios.
Built with **Astro 5** + **Tailwind CSS 4** + **Sitepins CMS**.

## Quick Start

```bash
cd /Users/doug/projects/tattoo-site
npm install
npm run dev
```

## Project Structure

```
src/content/config/
  shop.yaml        ← Shop details, contact, hours, FAQ
  artists.yaml     ← Artist profiles and bios
  gallery.yaml     ← Gallery items with style tags
  reviews.yaml     ← Customer reviews
src/layouts/
  BaseLayout.astro ← Nav, footer, meta tags
src/pages/
  index.astro      ← Main page (all 7 sections)
src/styles/
  global.css       ← Design system, animations
public/images/
  gallery/         ← Drop tattoo photos here
  artists/         ← Drop artist headshots here
```

## Customising for a New Shop

1. Edit `src/content/config/shop.yaml` (name, address, hours, FAQ, socials)
2. Edit `src/content/config/artists.yaml` (artist profiles)
3. Drop photos into `public/images/gallery/` and update `gallery.yaml`
4. Drop headshots into `public/images/artists/`
5. Edit `src/content/config/reviews.yaml` with real reviews
6. (Optional) Change accent colour in `tailwind.config.mjs`

## Deploy (Free)

**Vercel:** Push to GitHub → import at vercel.com → auto-deploys.
**Cloudflare Pages:** Push to GitHub → connect at pages.cloudflare.com → build: `npm run build`, output: `dist`.

## CMS (Sitepins - Free)

1. Sign up at sitepins.com (free tier)
2. Connect your GitHub repo
3. Point content folder to `src/content/config/`
4. Point media to `public/images/`
5. Shop owner edits via browser — auto-deploys on save

## Phase 2: Claude AI Chatbot

Set `features.chatbot_enabled: true` in shop.yaml.
FAQ data doubles as the chatbot knowledge base.
Uses Vercel Edge Function + Anthropic Messages API (Haiku).

## Tech Stack

| Layer | Tech | Why |
|-------|------|-----|
| Framework | Astro 5 | Zero JS, perfect Lighthouse |
| Styling | Tailwind 4 | Utility-first, dark theme |
| Hosting | Vercel/Cloudflare | Free, global CDN |
| CMS | Sitepins | Free, Git-based, visual |
| AI (Phase 2) | Claude Haiku | Fast, affordable chat |
