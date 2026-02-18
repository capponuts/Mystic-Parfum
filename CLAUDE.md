# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mystic Parfum (mysticparfum.fr / mysticparfum.com) — a French-language e-commerce site for artisanal scented wax melts (fondants parfumés). Built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. No backend/database — all product data is static and cart state persists via localStorage. DA: white/green clean theme with blue accent (#2596BE). Site made by Kapinfo.fr.

**Current state:** Site is in "coming soon" mode. The `/` route shows a standalone construction page. The full shop is accessible via `/home` and other routes under the `(shop)` route group.

## Commands

```bash
npm run dev      # Dev server on http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

## Architecture

### Routing (App Router with Route Groups)

The app uses Next.js route groups to separate the construction page from the shop:

- `/` — "Site en construction" standalone page (no Header/Footer)
- `(shop)/` — Route group with shared layout (Header + Footer + CartProvider)
  - `/home` — Full homepage (Hero, FeaturedProducts, Categories, Testimonials)
  - `/produits` — Product listing with category filters (`?category=floraux`)
  - `/produits/[slug]` — Product detail page (dynamic route)
  - `/panier` — Shopping cart
  - `/checkout` — Checkout form with order confirmation
  - `/a-propos` — About page
  - `/contact` — Contact form

### Layouts

- `src/app/layout.tsx` — Root layout (fonts + globals only, no nav)
- `src/app/(shop)/layout.tsx` — Shop layout (Header + Footer + CartProvider)

### State Management

`CartContext` (`src/lib/cart-context.tsx`) wraps the shop via `CartProvider` in the `(shop)` layout. Access cart state with the `useCart()` hook. Cart persists to localStorage under key `"mystic-parfum-cart"`. Shipping is free when total >= €30, otherwise €4.90.

### Data Layer

All product data lives in `src/lib/data.ts` as static TypeScript objects (12 products, 4 categories: floraux, fruites, gourmands, boises). Helper functions: `getProductBySlug()`, `getProductsByCategory()`, `getFeaturedProducts()`. No API layer exists.

### Types

`src/types/index.ts` defines `Product`, `CartItem`, `Category`, and `CategoryInfo` interfaces.

### Component Organization

- `src/components/ui/` — Reusable primitives (Button, Badge)
- `src/components/layout/` — Header (sticky, with mobile menu), Footer (includes Kapinfo credit)
- `src/components/home/` — Home page sections
- `src/components/products/` — ProductCard, ProductGrid, ProductFilter
- `src/components/cart/` — CartItem, CartSummary

### Styling

Tailwind CSS v4 with a custom color theme defined via `@theme` in `globals.css`. Key colors: `forest` (emerald green #1A6B4A, primary CTA), `sage` (muted sage green, neutral), `brown` (cerulean blue #2596BE, accent), `cream` (white/very light green backgrounds). Fonts: Playfair Display (headings), Lato (body) via next/font.

## Key Conventions

- All UI text is in French
- Components using hooks (useState, useContext, etc.) require `"use client"` directive
- Framer Motion handles entrance animations and hover effects
- Product filtering uses `useMemo` for performance
- Images use Next.js `Image` component
- Navigation uses Next.js `Link` for client-side transitions
- Footer includes "Création Kapinfo.fr" with logo
- Deployed on Vercel, domains: mysticparfum.fr / mysticparfum.com
