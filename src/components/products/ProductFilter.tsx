"use client";

import { categories } from "@/lib/data";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export default function ProductFilter({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeCategory === "all"
              ? "bg-forest text-cream"
              : "bg-cream-dark text-brown-dark hover:bg-sage-light/30"
          }`}
        >
          Tous
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => onCategoryChange(cat.slug)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === cat.slug
                ? "bg-forest text-cream"
                : "bg-cream-dark text-brown-dark hover:bg-sage-light/30"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-sage-light/30 bg-warm-white text-brown-dark text-sm cursor-pointer"
      >
        <option value="default">Tri par défaut</option>
        <option value="price-asc">Prix croissant</option>
        <option value="price-desc">Prix décroissant</option>
        <option value="name">Nom A-Z</option>
      </select>
    </div>
  );
}
