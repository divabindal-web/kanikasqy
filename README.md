# Kanika Gupta Shori — Personal Website

Premium editorial personal-brand site. Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**. Light "quiet-luxury" theme: parchment, antique gold, Playfair Display + Inter, tasteful scroll motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace the photos

Drop real images into `public/images/`, keeping the **same filenames**:

| File | Where it shows | Suggested size |
|------|----------------|----------------|
| `hero-portrait.jpg` | Hero | portrait, 4:5 (e.g. 1200×1500) |
| `about-portrait.jpg` | About | portrait, 4:5 (e.g. 1000×1250) |
| `og.jpg` | Social share preview | 1200×630 |

Kanika's real photos are already placed (hero + about), and the OG image is built from one of them. The "Beyond Work" section is typographic and needs no photo. When higher-resolution portraits become available, just overwrite `hero-portrait.jpg` / `about-portrait.jpg` with the same filenames at a 4:5 crop.

## Edit content

All News, Awards, and Articles live in **`lib/content.ts`**. Each entry has a `slug`, `title`, `excerpt`, optional `body`, and `originalUrl`.

- Add the full text of a piece by filling its `body` field (separate paragraphs with a blank line). When `body` is present the detail page renders it in full; when it's empty the page shows the excerpt plus a "Read the original" link.
- To add a new item, copy an existing object in the relevant array.

The contact form delivers via `mailto:` to the address in `components/Connect.tsx` (`CONTACT_EMAIL`). Change it there, or swap the handler for a Formspree/endpoint POST if you add a backend.

## Deploy (GitHub → Vercel)

1. Create a new GitHub repo and push this folder (commit via GitHub Desktop as usual).
2. In Vercel: **New Project → Import** the repo.
3. Framework preset auto-detects **Next.js**. No env vars needed. Click **Deploy**.
4. Add the custom domain `kanikaguptashori.com` in Vercel → Project → Settings → Domains.

## Structure

```
app/
  layout.tsx            fonts + SEO metadata
  page.tsx              home (all sections)
  news|awards|article/
    page.tsx            full index listing
    [slug]/page.tsx     readable detail page
components/              Nav, Hero, About, Stats, PressMarquee,
                         Awards, News, Articles, BeyondWork,
                         Connect, Footer, + Reveal/CountUp helpers
lib/content.ts          all editorial content (single source of truth)
public/images/          photos + OG (placeholders included)
```
