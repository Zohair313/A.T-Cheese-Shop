# A.T Cheese Shop

Bilingual (English / Urdu) marketing site for A.T Cheese Shop, a bulk commercial cheese
supplier in Gulshan-e-Iqbal, Karachi. Built with React 18 and Vite.

## Features

- Product catalogue with bulk pricing, order slip, and WhatsApp ordering
- English and Urdu copy with RTL support (`data/en.json`, `data/ur.json`)
- Customer-facing pages: hero, catalogue, storage guide, bulk terms, FAQ, location, footer
- SEO metadata and LocalBusiness JSON-LD in `index.html`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html            Vite entry + SEO metadata
src/                  React app, components, styles
data/                 Source content (English / Urdu / site data)
public/               Static assets served as-is (images, data, favicon)
assets/               Original image assets
css/tokens.css        Standalone design tokens
OWNER-GUIDE.md        Guide for the shop owner (English)
OWNER-GUIDE.ur.md     Guide for the shop owner (Urdu)
DEVELOPER.md          Developer documentation
```

## Documentation

- [`DEVELOPER.md`](DEVELOPER.md) — architecture and implementation notes
- [`OWNER-GUIDE.md`](OWNER-GUIDE.md) — how to update products, prices, and contact details
