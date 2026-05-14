# Mayan Studios

Private real-estate listing site for two studio residences at Mayan 2, Yas Island, Abu Dhabi.

## Stack
- **Astro 5** — zero-JS by default, ~10KB shipped
- **Vanilla CSS** with editorial luxury palette (navy / antique gold / warm ivory)
- **Custom lightbox + responsive gallery** — no third-party JS deps
- **Formspree** placeholder endpoint for inquiry forms — replace the `action` URL in `src/components/InquiryForm.astro` with your own form ID before going live

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the built site
```

## Deploy to Vercel

```bash
vercel              # first time: links project and deploys preview
vercel --prod       # production deploy
```

Vercel auto-detects Astro and uses the `vercel.json` config in this repo.

## Pages
- `/`                  — Portfolio landing
- `/mayan-studio-a`    — 5th floor unit (active listing)
- `/mayan-studio-b`    — 2nd floor unit (coming soon)

## Replace before launch
- `src/components/InquiryForm.astro` — Formspree endpoint
- `src/components/Footer.astro`, contact sections — email & WhatsApp number
- `src/layouts/Layout.astro` — `Astro.site` URL when custom domain is set
