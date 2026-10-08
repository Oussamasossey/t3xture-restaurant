# Saveur — demo restaurant site

A production-ready, UI-only restaurant website for a fictional 28-seat
seasonal kitchen in San Francisco. Built as a front-end demo: the
reservation form validates and confirms in the browser, nothing is sent to
a server.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom design-token layer (`tailwind.config.ts`)
- **Framer Motion** for scroll reveals, page transitions and the lightbox
- **shadcn/ui-style primitives** (Button, Input, Textarea, Label, Badge, Card, Dialog)
- **React Hook Form + Zod** for the reservation form
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also runs next lint)
npm run start      # serve the production build
npm run lint       # eslint
npx tsc --noEmit   # typecheck
```

## Pages

| Route           | Contents                                                        |
| --------------- | --------------------------------------------------------------- |
| `/`             | Hero, story + stats, signature dishes, chef, gallery, hours, guest book, CTA |
| `/menu`         | 25 dishes across starters, mains, desserts and drinks, with accessible tabs and dietary tags |
| `/reservation`  | Validated booking form with a simulated confirmation state      |
| `/about`        | Origin story, values, timeline, gallery                          |
| `/contact`      | Address/phone/email cards, directions, map panel, hours          |

Plus `app/sitemap.ts`, `app/robots.ts`, per-route metadata with canonical
URLs, JSON-LD `Restaurant` schema and a generated `opengraph-image`.

## Structure

```
app/            routes, layout, fonts, metadata, SEO files
components/     navbar, footer, dish cards, menu tabs, lightbox,
                reservation form, reveals, section/page headers, ui/ primitives
data/           menu.ts (25 dishes), site.ts (hours, testimonials, gallery, chef)
lib/            cn() helper, motion variants
public/         static assets
```

## Notes

- **Images** are loaded from Unsplash; the host is allow-listed in
  `next.config.mjs`. Swap `data/*.ts` image fields for local files to go
  offline.
- **Reservation is demo-only.** To make it real, post the form values to a
  route handler in `app/api/` and return the confirmation payload.
- **Map** on `/contact` is a styled static panel; drop an `<iframe>` embed
  into the marked block for a live map.
- All content (name, address, dishes, prices, testimonials) is fictional.
