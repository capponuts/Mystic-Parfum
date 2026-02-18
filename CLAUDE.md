# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mystic Parfum (mysticparfum.fr / mysticparfum.com) — a French-language e-commerce site for artisanal scented wax melts (fondants parfumés). Built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. No backend/database — all product data is static and cart state persists via localStorage. DA: white/green clean theme with blue accent (#2596BE).

## Commands

```bash
npm run dev      # Dev server on http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint
```

## Architecture

### Routing (App Router)

- `/` — Home (Hero, FeaturedProducts, Categories, Testimonials)
- `/produits` — Product listing with category filters and sorting via query params (`?category=floraux`)
- `/produits/[slug]` — Product detail page (dynamic route)
- `/panier` — Shopping cart
- `/checkout` — Checkout form with order confirmation
- `/a-propos` — About page
- `/contact` — Contact form

### State Management

`CartContext` (`src/lib/cart-context.tsx`) wraps the app via `CartProvider` in `layout.tsx`. Access cart state with the `useCart()` hook. Cart persists to localStorage under key `"mystic-parfum-cart"`. Shipping is free when total >= €30, otherwise €4.90.

### Data Layer

All product data lives in `src/lib/data.ts` as static TypeScript objects (12 products, 4 categories: floraux, fruites, gourmands, boises). Helper functions: `getProductBySlug()`, `getProductsByCategory()`, `getFeaturedProducts()`. No API layer exists.

### Types

`src/types/index.ts` defines `Product`, `CartItem`, `Category`, and `CategoryInfo` interfaces.

### Component Organization

- `src/components/ui/` — Reusable primitives (Button, Badge)
- `src/components/layout/` — Header (sticky, with mobile menu), Footer
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
