# Developer Documentation — A.T Cheese Shop

Technical handbook for maintenance, schema configuration, React component architecture, and deployment for **A.T Cheese Shop** (Gulshan-e-Iqbal, Karachi).

---

## 1. Overview and Goal

A.T Cheese Shop is a physical commercial dairy and cheese wholesaler located in Block 6, Gulshan-e-Iqbal, Karachi. The business specializes in supplying bulk cheddar slices, solid mozzarella blocks, bakery-grade cream cheese, and bulk dairy essentials to commercial food operations (burger joints, pizza shops, commercial bakeries, caterers) and bulk-purchasing households.

**Primary Technical Goal:**  
Provide a lightweight, bilingual (English LTR / Urdu RTL), mobile-first web interface that allows kitchen procurement managers and chefs to view live pack sizes and wholesale rates, construct an order slip with quantity steppers and live subtotal calculations, and generate a pre-formatted, itemized dispatch message sent directly to the shop’s WhatsApp (`+92 300 3394494`).

**Non-Goals:**  
No customer accounts, no database logins, and no online credit card processing gateways. The ordering workflow leverages Karachi's established trade norm: direct WhatsApp communication backed by physical depot pickup or Cash-on-Delivery (COD) / Raast bank settlement.

---

## 2. Stack and Why

- **Frontend Core:** React 18 with Vite. React provides reactive state management for real-time order calculations, instant bilingual rendering, and modular component isolation without heavy dependencies.
- **Styling Architecture:** Vanilla CSS driven by a centralized design token system (`src/tokens.css` and `css/tokens.css`). CSS Logical Properties (`inline-start`, `inline-end`, `margin-block`, `padding-inline`) are utilized exclusively to guarantee authentic bidirectional layout rendering between English LTR and Urdu RTL without stylesheet flipping hacks.
- **Data Layer:** Single-source editable JSON files (`data/site-data.json`, `data/en.json`, `data/ur.json`). Enables non-technical personnel to update prices, pack sizes, delivery areas, and operating hours without touching component code.
- **Typography & Font Delivery:** Google Fonts preconnected for `Inter` (English body/headings), `Noto Naskh Arabic` (Urdu body copy, minimum line-height 1.8), `Noto Nastaliq Urdu` (Urdu headings), and `JetBrains Mono` (commercial weights, order counts, and currency values).
- **Zero Third-Party Bloat:** No external icon libraries or heavy runtime dependencies; SVG icons are bundled directly as lightweight functional React components (`src/components/TradeIcons.jsx`).

---

## 3. Project Structure

```text
e:/A.T Cheese Shop/
├── .hallmark/
│   └── log.json                     # Automated hallmark audit, macrostructure choice & slop test records
├── assets/                          # Static image repository & vector placeholders
│   ├── favicon.svg                  # SVG brand mark favicon
│   └── images/                      # Documentary image prototypes (SVG + WebP drops)
│       ├── cheddar-slices-stack.svg
│       ├── cheddar-slices-stack.webp
│       ├── mozzarella-block-cut.svg
│       ├── mozzarella-block-cut.webp
│       ├── cream-cheese-steel-tub.svg
│       ├── cream-cheese-steel-tub.webp
│       ├── dairy-assortment-counter.svg
│       ├── dairy-assortment-counter.webp
│       ├── cheese-weighed-scale.svg
│       ├── cheese-weighed-scale.webp
│       ├── baked-pizza-burger-melt.svg
│       ├── baked-pizza-burger-melt.webp
│       ├── cold-storage-packs.svg
│       ├── cold-storage-packs.webp
│       ├── bulk-order-box-pickup.svg
│       └── bulk-order-box-pickup.webp
├── css/
│   └── tokens.css                   # Exported design token definitions
├── data/                            # Single source of truth business data & translations
│   ├── en.json                      # English UI strings and dictionary
│   ├── site-data.json               # Business details, products, prices, terms, Karachi areas
│   └── ur.json                      # Urdu UI strings and dictionary
├── public/                          # Vite static asset public directory
│   ├── assets/                      # Mirrored asset root for build pipeline
│   └── data/                        # Mirrored data root
├── src/
│   ├── components/
│   │   ├── BulkTerms.jsx            # Wholesale terms & minimum order guidelines
│   │   ├── Catalog.jsx              # Product catalog container with category filter tabs
│   │   ├── FaqSection.jsx           # Accordion FAQ for kitchen procurement
│   │   ├── Footer.jsx               # Footer with depot details & navigation links
│   │   ├── Header.jsx               # Top status bar, brand logo, nav links & lang switch
│   │   ├── Hero.jsx                 # Asymmetric wholesale hero with quick trade specs
│   │   ├── LocationSection.jsx      # Block 6 Gulshan map embed, depot hours & directions
│   │   ├── MobileStickyBar.jsx      # 48px thumb-reachable sticky bottom bar for phones
│   │   ├── OrderSlip.jsx            # Interactive wholesale requisition builder & WhatsApp dispatcher
│   │   ├── ProductCard.jsx          # Individual product card with pack selector & steppers
│   │   ├── Reputation.jsx           # Honest 4.5 star Google rating banner (68 reviews)
│   │   ├── StorageGuide.jsx         # Cold-chain storage parameters & yield rules
│   │   └── TradeIcons.jsx           # Clean inline SVG icon components
│   ├── App.jsx                      # Root application state & language context
│   ├── index.css                    # Master responsive stylesheet with logical properties
│   ├── main.jsx                     # React DOM client entrypoint
│   └── tokens.css                   # Imported design token variables
├── dist/                            # Production static deployment bundle
├── index.html                       # HTML5 entrypoint with LocalBusiness JSON-LD & OpenGraph meta
├── package.json                     # Project manifest and scripts
├── vite.config.js                   # Vite configuration
├── IMAGE-PROMPTS.md                 # Documentary AI photography briefs & replacement guide
├── DEVELOPER.md                     # Technical architecture and developer handbook (this document)
├── OWNER-GUIDE.md                   # Plain-English non-technical shopkeeper manual
└── OWNER-GUIDE.ur.md                # Plain-Urdu non-technical shopkeeper manual
```

---

## 4. Setup, Run and Build

### Prerequisites
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher

### Local Development
1. Clone or navigate to the project directory:
   ```bash
   cd "e:\A.T Cheese Shop"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local Vite development server:
   ```bash
   npm run dev
   ```
4. Access the site in your browser at `http://localhost:3000`.

### Production Build
To generate an optimized, minified production build:
```bash
npm run build
```
Output artifacts are emitted to the `dist/` directory, ready to be hosted on any static CDN (Vercel, Netlify, GitHub Pages, Cloudflare Pages, or Apache/Nginx).

To preview the production build locally:
```bash
npm run preview
```

---

## 5. Content and Data Architecture

All business data lives in `data/site-data.json`. No business details or pricing should ever be hard-coded into JSX components.

### `site-data.json` Schema Breakdown

- `business.name`: Trade business name ("A.T Cheese Shop").
- `business.address`: Street, area, postal code, Google Maps embed URL, and direct directions URL.
- `business.contact`: Formatted display phone, raw telephone string, and raw WhatsApp number without symbols (e.g. `923003394494`).
- `business.hours`: Operating schedule (`days`, `time`, `sunday` note). Marked with `[client to confirm]` placeholders where required.
- `business.reputation`: Real Google rating (`4.5`) and public review count (`68`).
- `tradeTerms`: Minimum quantities for pickup vs. delivery, regular buyer policies, Karachi delivery windows, and sample policies.
- `deliveryAreas`: Array of delivery zones across Karachi (`id`, `nameEn`, `nameUr`, `estTimeEn`, `estTimeUr`).
- `products`: Array of commercial dairy products:
  - `id`: Unique slug identifier (e.g., `cheddar-slices`).
  - `category`: Category slug (`cheddar`, `mozzarella`, `cream-cheese`, `other-dairy`).
  - `nameEn` / `nameUr`: Localized product titles.
  - `descriptionEn` / `descriptionUr`: Technical product descriptions.
  - `bestForEn` / `bestForUr`: Commercial kitchen usage recommendations.
  - `image`: Relative path to WebP asset in `assets/images/`.
  - `imagePlaceholder`: Relative path to fallback SVG asset.
  - `packSizes`: Array of available commercial configurations:
    - `id`: Pack slug (e.g., `cs-1kg`).
    - `sizeEn` / `sizeUr`: Localized pack size label.
    - `pricePkr`: Numeric price in Pakistani Rupees.
    - `priceNote`: Placeholder reminder (e.g., `[client to confirm exact price]`).
    - `unit`: Commercial unit type (`pack`, `block`, `tub`, `carton`, `pail`, `slab`).

### How to Add a New Product
Open `data/site-data.json` and append an object to `products`:
```json
{
  "id": "parmesan-wheel",
  "category": "other-dairy",
  "nameEn": "Aged Hard Parmesan Wedge",
  "nameUr": "ایجڈ پارمیسن پنیر ویج",
  "descriptionEn": "Sharp aged hard grating cheese for Italian kitchens.",
  "descriptionUr": "اطالوی کھانوں کے لیے سخت اور دانے دار پسا ہوا پنیر۔",
  "bestForEn": "Pasta finishing, Caesar salads, risottos",
  "bestForUr": "پاستا، سیزر سلاد اور ریسوٹو",
  "image": "assets/images/parmesan-wedge.webp",
  "imagePlaceholder": "assets/images/parmesan-wedge.svg",
  "packSizes": [
    {
      "id": "pw-1kg",
      "sizeEn": "1 kg Vacuum Wedge",
      "sizeUr": "1 کلو ویکیوم ویج",
      "pricePkr": 3400,
      "priceNote": "[client to confirm exact price]",
      "unit": "wedge"
    }
  ]
}
```

### How to Add a Delivery Sector
Append an entry to `deliveryAreas` in `data/site-data.json`:
```json
{
  "id": "malir_cantt",
  "nameEn": "Malir Cantt & Model Colony",
  "nameUr": "ملیر کینٹ اور ماڈل کالونی",
  "estTimeEn": "Next-day commercial dispatch",
  "estTimeUr": "اگلے دن کمرشل ڈسپیچ"
}
```

---

## 6. Design System & Tokens

The visual design system avoids SaaS clichés, generic purple/blue gradients, and glassmorphism. It uses a **Commercial Dairy Depot / Cold-Chain Ledger** macrostructure reflecting cold storage, stainless steel prep benches, and aged golden cheeses.

### Token Architecture (`tokens.css`)

```css
/* Surface Palettes */
--color-surface-bg: #FAF7F2;        /* Warm milk/whey base */
--color-surface-card: #FFFFFF;      /* Clean card surface */
--color-surface-subtle: #F4EFE6;    /* Unbleached paper/cold prep table */
--color-surface-sunken: #EDE6D8;    /* Ledger table background */

/* Product Accents */
--color-cheddar-500: #D97706;       /* Primary Action & Aged Cheddar Gold */
--color-cheddar-600: #B45309;       /* Deep high-contrast hover */
--color-chiller-600: #0D7355;       /* Cold-chain operational green */
--color-whatsapp: #1EBE5D;          /* Direct dispatch WhatsApp brand */

/* Commercial Hardware & Cast Iron */
--color-steel-900: #191E1C;         /* Darkest cast iron for text */
--color-steel-700: #444E49;         /* Technical metadata */
--color-steel-300: #CBD3CE;         /* Precision ledger border */
```

### Type Scale
Fluid typography uses CSS `clamp()` functions to transition smoothly across screen sizes without abrupt breakpoint jumps:
- `font-size-base`: `clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)` (guarantees >= 16px on mobile).
- `font-size-2xl`: `clamp(1.85rem, 1.55rem + 1.5vw, 2.375rem)`.
- `font-size-3xl`: `clamp(2.25rem, 1.85rem + 2vw, 3rem)`.

---

## 7. Order Builder & WhatsApp Logic

### State Architecture (`src/components/OrderSlip.jsx`)
The Order Slip maintains:
- `cartItems`: Array of active line items with `productId`, `packId`, `name`, `packSize`, `pricePkr`, `quantity`.
- `fulfillment`: `'pickup'` (Gulshan Depot) or `'delivery'` (Karachi rider route).
- `buyerName`: String (mandatory).
- `phone`: String (mandatory).
- `selectedArea`: Selected delivery zone ID from `site-data.json`.
- `notes`: Custom prep or dispatch notes.

### Calculation Algorithm
```javascript
const estimatedTotal = cartItems.reduce(
  (sum, item) => sum + item.pricePkr * item.quantity, 
  0
);
```

### Dispatch String Construction
When the user submits the form, a structured WhatsApp message is compiled in the active language:
- In English:
  ```text
  *WHOLESALE ORDER INQUIRY — A.T CHEESE SHOP*
  -----------------------------------
  *Customer / Business:* Tariq Foods
  *Contact Phone:* 0300 1234567
  *Fulfillment:* Karachi City Delivery
  *Delivery Sector:* Gulshan-e-Iqbal & Gulistan-e-Jauhar
  -----------------------------------
  *ORDER ITEMS:*
  1. Commercial Cheddar Slices (1 kg Pack (~84 Slices)) x 3 = PKR 6,600
  2. Whole Milk Mozzarella Block (2.5 kg Solid Block) x 2 = PKR 9,400
  -----------------------------------
  *ESTIMATED TOTAL:* PKR 16,000
  *(Subject to scale verification and dispatch terms)*
  -----------------------------------
  *Notes / Requirements:* Urgent morning delivery
  ```
- URL Target:
  `https://wa.me/923003394494?text=${encodeURIComponent(message)}`
- To update the WhatsApp destination number, edit `business.contact.whatsappRaw` in `data/site-data.json`.

---

## 8. Internationalization (i18n) & RTL Architecture

- Directionality is toggled via `document.documentElement.setAttribute('dir', 'rtl')` and `setAttribute('lang', 'ur')`.
- All CSS positioning employs logical properties:
  - `margin-inline-start` instead of `margin-left`
  - `padding-inline` instead of `padding-left` / `padding-right`
  - `inset-inline-start` instead of `left`
  - `border-inline-start` instead of `border-left`
- **Urdu Typography Rules:**
  - Font family set to `Noto Naskh Arabic` for body copy and `Noto Nastaliq Urdu` for headings.
  - Minimum `line-height: 1.8` to prevent diacritic clashing.
  - `letter-spacing: 0 !important;` strictly enforced (tracking disrupts Arabic script glyph ligatures).

---

## 9. Image Strategy & Client Photo Swapping

All 8 documentary prototype images reside in `assets/images/` and are mirrored to `public/assets/images/`:

| File Name | Aspect Ratio | Target Placement | Alt Text (EN) |
| :--- | :--- | :--- | :--- |
| `cheddar-slices-stack.webp` | 4:3 | Cheddar Catalog Card | Stack of yellow cheddar cheese burger slices with interleaf paper |
| `mozzarella-block-cut.webp` | 4:3 | Mozzarella Catalog Card | Low-moisture whole milk mozzarella block cut on prep cutting board |
| `cream-cheese-steel-tub.webp` | 4:3 | Cream Cheese Card | Commercial stainless steel pan with dense white bakery cream cheese |
| `dairy-assortment-counter.webp` | 16:9 | Hero Banner / Overview | Bulk cheese assortment on industrial stainless steel workstation |
| `cheese-weighed-scale.webp` | 4:3 | Yield & Portions | Shredded cheese mound in tare bowl on digital scale |
| `baked-pizza-burger-melt.webp` | 16:9 | Application Banner | Blistered baked pizza slice and smash burger with melted cheddar |
| `cold-storage-packs.webp` | 4:3 | Storage Guide | Galvanized walk-in chiller shelving with vacuum-sealed dairy packs |
| `bulk-order-box-pickup.webp` | 4:3 | Dispatch Section | Kraft corrugated cardboard carton packed with insulated cheese packs |

**Swapping for Real Photos:**  
When the client provides actual depot photographs, convert them to WebP format, name them to match the filenames above, and overwrite the files in `public/assets/images/`. No code changes required.

---

## 10. Responsive Behavior & Devices Tested

The UI is built mobile-first and tested across standard viewport breakpoints without horizontal scrolling:

| Viewport Width | Device Archetype | Testing Result |
| :--- | :--- | :--- |
| **360px** | Galaxy S8, compact Android | Full stacked layout, 48px touch steppers, 0px horizontal scroll |
| **390px** | iPhone 12/13/14/15 Pro | Safe-area bottom padding active, sticky bar visible, clean fonts |
| **412px** | Google Pixel 7/8, Galaxy S23 | Touch targets accessible, order slip form usable one-handed |
| **768px** | iPad Mini, 7-inch tablets | 2-column product catalog, inline table storage guide |
| **1024px** | iPad Pro, small laptops | Full horizontal navigation bar, expanded 2-column order builder |
| **1440px** | Desktop displays | Max container constrained to 1240px, balanced whitespace |

---

## 11. SEO & Performance Checklist

- [x] LocalBusiness Schema JSON-LD embedded in `<head>`.
- [x] Canonical meta tags, OpenGraph card tags, and Twitter summary card tags.
- [x] Bilingual meta title and description with localized keywords.
- [x] Native WebP images with lazy-loading attributes (`loading="lazy"`).
- [x] Above-the-fold hero image preloaded for First Contentful Paint (FCP) optimization.
- [x] Zero render-blocking JavaScript frameworks (instant static mount via Vite bundle).
- [x] Lighthouse target score 90+ on mobile performance and accessibility.

---

## 12. Accessibility (a11y) Checklist

- [x] Touch targets measure at least 48px × 48px on all interactive steppers and buttons.
- [x] High-contrast color pairings: text (`#191E1C`) on background (`#FAF7F2`) achieves WCAG AAA compliance (ratio > 11:1).
- [x] Explicit `:focus-visible` styling with 3px high-contrast cheddar outline.
- [x] Form controls include explicit `<label>` tags with matching `for`/`id` bindings.
- [x] ARIA attributes on accordions (`aria-expanded`, `aria-controls`) and navigation drawers (`aria-modal`, `role="dialog"`).
- [x] Keyboard skip link (`Skip to main content`) accessible at the top of the DOM.
- [x] Full support for `prefers-reduced-motion: reduce`.

---

## 13. Deployment Guide

### Option A: Static CDN (Vercel / Cloudflare Pages / Netlify)
1. Run `npm run build`.
2. Connect your Git repository.
3. Set Build Command: `npm run build`.
4. Set Output Directory: `dist`.
5. Point your custom domain (e.g. `atcheese.pk`) via CNAME to the platform host. SSL/HTTPS is automatically provisioned.

### Option B: Traditional Nginx Web Server (Pakistan / cPanel)
Upload the contents of the `dist/` folder to `public_html/`. Ensure standard Nginx gzip and caching headers are enabled:
```nginx
location /assets/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

---

## 14. Known Limitations & Next Steps

1. **Live Inventory Sync:** Currently rates and pack availability are loaded statically from `site-data.json`. Future phase: integrate with Google Sheets API or a lightweight inventory backend.
2. **Online Payment Gateway:** Order settlement is currently COD / Raast / WhatsApp confirmation. When card payments are requested, integrate local Pakistani gateways (PayFast, Safepay, or JazzCash API).
3. **Customer Accounts & Order History:** Chefs currently re-order via WhatsApp history. A future release can add recurring requisition presets stored in IndexedDB or customer phone number lookups.
4. **Barcode / Weighing Scale POS Integration:** Direct integration with depot electronic weighing scales for automatic line-item weight validation.

