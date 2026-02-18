# Mystic Parfum

Site e-commerce pour **Mystic Parfum** — fondants parfumés artisanaux fabriqués en France.

🌐 [mysticparfum.fr](https://mysticparfum.fr) | [mysticparfum.com](https://mysticparfum.com)

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **UI** : React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Déploiement** : Vercel
- **Données** : Statiques (pas de backend/BDD)

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande         | Description              |
|------------------|--------------------------|
| `npm run dev`    | Serveur de développement |
| `npm run build`  | Build de production      |
| `npm start`      | Serveur de production    |
| `npm run lint`   | Linting ESLint           |

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine (fonts)
│   ├── page.tsx            # Page "en construction"
│   └── (shop)/             # Route group boutique
│       ├── layout.tsx      # Layout avec Header/Footer
│       ├── home/           # Homepage complète
│       ├── produits/       # Catalogue + fiches produit
│       ├── panier/         # Panier
│       ├── checkout/       # Commande
│       ├── a-propos/       # Notre histoire
│       └── contact/        # Contact
├── components/
│   ├── ui/                 # Composants réutilisables
│   ├── layout/             # Header, Footer
│   ├── home/               # Sections homepage
│   ├── products/           # Cartes et grille produits
│   └── cart/               # Composants panier
├── lib/                    # Données, contexte panier
└── types/                  # Interfaces TypeScript
```

## Création

Site réalisé par [Kapinfo.fr](https://kapinfo.fr)
