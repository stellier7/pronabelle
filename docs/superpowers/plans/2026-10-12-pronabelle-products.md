# Pronabelle Products Implementation Plan

> **For agentic workers:** Execute inline in this session. Steps use checkbox syntax for tracking.

**Goal:** Port Scarleth’s products stack into Pronabelle with 11 owner packshots (marquee, catalog, cart, WhatsApp).

**Architecture:** Copy `products.js` + catalog page; extend `config.js` / `index.html` / `styles.css`; store packshots in `images/products/`.

**Tech Stack:** Static HTML/CSS/JS (no build), localStorage cart, WhatsApp deep links.

## Global Constraints

- Exactly 11 products from owner packshots; `price: null`
- Cart key: `pronabelle-cart-v1`
- `#productos` between Servicios and Galería
- Restyle for Pronabelle dark/pink tokens
- Spanish UI strings

---

### Task 1: Assets + products.js + CSS

- [x] Copy 11 packshots into `images/products/`
- [x] Port `products.js` with Pronabelle cart key/event
- [x] Append product CSS tuned for dark theme

### Task 2: Config + homepage + catalog page

- [x] Add products/categories/UI strings to `config.js`
- [x] Wire `#productos`, nav, scripts on `index.html`
- [x] Add Pronabelle-branded `productos.html`
- [x] README note + commit/push + browser verify
