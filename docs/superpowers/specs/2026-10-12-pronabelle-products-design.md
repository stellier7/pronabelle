# Pronabelle Products — Design Spec

**Date:** 2026-10-12  
**Repo:** `stellier7/pronabelle`  
**Source pattern:** `stellier7/sala-de-belleza-scarleth` products stack  
**Status:** Approved in conversation; awaiting implementation plan

## Goal

Add Scarleth’s full products experience to Pronabelle Eco Salon: homepage autoscroll marquee, catalog page, product modal, cart, and WhatsApp checkout — populated only with the 11 packshot products the owner provided.

## Non-goals

- No prices (`price: null` unless added later)
- No extra products beyond the approved 11
- No shared multi-salon template extraction
- No rebuild of Pronabelle’s existing hero/services/gallery/visit sections beyond wiring nav and section insertion

## Approach

Port Scarleth’s products stack as-is into Pronabelle:

1. Copy `products.js` and adapt branding/cart key
2. Add `productos.html` catalog page
3. Append product CSS to Pronabelle `styles.css`, retuned to Pronabelle color tokens
4. Extend `config.js` with products, categories, and UI strings
5. Store packshots under `images/products/`
6. Insert homepage `#productos` section and nav/cart chrome

## Architecture

| Piece | Role |
|---|---|
| `config.js` | Product data, categories, Spanish UI copy |
| `products.js` | Cards, marquee, catalog filters/search, modal, cart, WhatsApp helpers |
| `index.html` | `#productos` marquee section, product modal, cart drawer, script includes |
| `productos.html` | Full catalog (chips + search + grid) |
| `styles.css` | Product/marquee/catalog/cart/modal styles using Pronabelle CSS variables |
| `images/products/*` | 11 clean packshots |

Cart persistence key: `pronabelle-cart-v1` (not Scarleth’s key).

WhatsApp checkout uses Pronabelle’s existing `whatsappNumber` / default messaging pattern from `config.js`.

## Products (exactly these 11)

All are `featured: true` so they appear in the homepage marquee. Catalog shows the same list.

| id | name | category | image (planned) |
|---|---|---|---|
| `inebrya-no-yellow-shampoo` | Inebrya Ice Cream No-Yellow Shampoo | Champús | `images/products/inebrya-no-yellow-shampoo.jpg` |
| `sentience-blonde-shot-shampoo` | Sentience Blonde Shot Shampoo | Champús | `images/products/sentience-blonde-shot-shampoo.jpg` |
| `kava-rescue-shampoo` | Kava Kava Rescue Shampoo | Champús | `images/products/kava-rescue-shampoo.jpg` |
| `kava-rescue-mask` | Kava Kava Rescue Mask | Tratamientos | `images/products/kava-rescue-mask.jpg` |
| `revlon-45-days-coppers` | Revlon 45 Days Total Color Care — Intense Coppers | Color | `images/products/revlon-45-days-coppers.jpg` |
| `revlon-45-days-reds` | Revlon 45 Days Total Color Care — Brave Reds | Color | `images/products/revlon-45-days-reds.jpg` |
| `primont-color-plex-5` | Primont Color Plex Nº 5 Bond Intense Repair | Tratamientos | `images/products/primont-color-plex-5.jpg` |
| `tigi-luxe-lipgloss` | TIGI Luxe Lipgloss | Maquillaje | `images/products/tigi-luxe-lipgloss.jpg` |
| `artdeco-lifting-foundation` | ARTDECO High Performance Lifting Foundation | Maquillaje | `images/products/artdeco-lifting-foundation.jpg` |
| `byothea-antiage-eye` | BYOTHEA Anti-Age Eye Contour Cream | Cuidado | `images/products/byothea-antiage-eye.jpg` |
| `dnature-collagen-eye` | D’Nature Mineral Collagen Eye Cream | Cuidado | `images/products/dnature-collagen-eye.jpg` |

**Excluded by owner approval:** Kava group shot, Kava Rescue Serum, D’Nature Hydrating Face Serum, shelf photos used only for brand discovery.

### Source packshot mapping

Copy owner-uploaded packshots into `images/products/` with the filenames above:

| product id | source upload (conversation assets) |
|---|---|
| `inebrya-no-yellow-shampoo` | Inebrya Ice Cream No-Yellow bottle packshot |
| `sentience-blonde-shot-shampoo` | Sentience Blonde Shot purple pump packshot |
| `kava-rescue-shampoo` | Kava Kava Rescue Shampoo solo pink bottle |
| `kava-rescue-mask` | Kava Kava Rescue Mask solo pink jar |
| `revlon-45-days-coppers` | Revlon 45 Days Intense Coppers tube |
| `revlon-45-days-reds` | Revlon 45 Days Brave Reds tube |
| `primont-color-plex-5` | Primont Color Plex Nº 5 white pump bottle |
| `tigi-luxe-lipgloss` | TIGI Luxe Lipgloss multi-shade packshot |
| `artdeco-lifting-foundation` | ARTDECO High Performance Lifting Foundation |
| `byothea-antiage-eye` | BYOTHEA Anti-Age eye contour cream box + jar |
| `dnature-collagen-eye` | D’Nature Mineral Collagen Eye Cream (left bottle of duo shot; crop or use full duo if cleaner) |

### Categories (filter order)

```
Champús
Tratamientos
Color
Maquillaje
Cuidado
```

### Crop

Packshots are clean white-background product photos → `crop: null` for all unless a specific image needs framing later.

## UX flow

1. Homepage `#productos` shows eyebrow/title/subtitle + infinite autoscroll marquee of featured cards.
2. Card click opens product modal (image, name, category, “Agregar al carrito”, “Consultar por WhatsApp”).
3. CTA “Ver todos los productos” links to `productos.html`.
4. Catalog page: category chips + search, same cards/modal/cart behavior.
5. Cart drawer: quantity controls, remove, WhatsApp checkout composed from cart lines.
6. Nav includes “Productos” link and cart badge control (Scarleth pattern).

## Placement & chrome

- Insert `#productos` **between Servicios and Galería**.
- Add nav “Productos” → `productos.html`.
- Keep Pronabelle brand/nav/footer structure; catalog page uses Pronabelle chrome (name, WhatsApp CTA, footer).
- Spanish UI strings live under `config.ui` (products eyebrow/title/subtitle/view-all, catalog labels, cart labels) following Scarleth’s keys where practical.

## Visual adaptation

- Reuse Scarleth product component structure (cards, marquee track, catalog toolbar/grid, modal, cart drawer).
- Restyle with Pronabelle tokens already in `config.colors` / CSS variables:
  - cream/black backgrounds
  - pink accent (`#FF5CAD`)
  - white/soft ink text
- Avoid light-theme Scarleth cream paste-in; product surfaces should feel native to Pronabelle’s dark brand.

## Error handling

- Missing product images: card still renders with empty/broken image fallback behavior already in Scarleth helpers (or a simple placeholder if needed).
- Empty cart / empty filter results: show Scarleth-style empty states with Pronabelle copy.
- `localStorage` unavailable: cart helpers fail soft (no crash).
- Unknown product ids in cart: ignore on read.

## Verification

- Desktop + phone-width: marquee animates, cards open modal, add-to-cart updates badge.
- Catalog chips/search filter the 11 products correctly.
- Cart WhatsApp handoff opens with Pronabelle number and product names.
- Nav Productos / Ver todos routes work both ways.
- Existing Pronabelle sections (hero, services, gallery, visit) still load and behave.

## File change summary

| File | Change |
|---|---|
| `products.js` | New (ported + `pronabelle-cart-v1`) |
| `productos.html` | New (Pronabelle-branded catalog) |
| `config.js` | Add products, categories, product UI strings |
| `index.html` | Products section, modal, cart, scripts, nav link |
| `styles.css` | Product-related CSS, Pronabelle-tuned |
| `images/products/*` | 11 packshot files |
| `README.md` | Brief note that products are config-driven |

## Open items

None for v1. Prices remain unset.
