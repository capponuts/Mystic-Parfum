"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/lib/cart-context";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const categoryLabels: Record<string, string> = {
    floraux: "Floral",
    fruites: "Fruité",
    gourmands: "Gourmand",
    boises: "Boisé",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-warm-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
    >
      <Link href={`/produits/${product.slug}`}>
        <div className="aspect-square bg-gradient-to-br from-sage-light/30 to-cream-dark relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-300">
              {product.category === "floraux" && "🌸"}
              {product.category === "fruites" && "🍊"}
              {product.category === "gourmands" && "🍫"}
              {product.category === "boises" && "🌲"}
            </span>
          </div>
          <div className="absolute top-3 left-3">
            <Badge variant="category">{categoryLabels[product.category]}</Badge>
          </div>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/produits/${product.slug}`}>
          <h3 className="font-heading text-lg font-semibold text-forest group-hover:text-brown transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sage text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-brown">
            {product.price.toFixed(2)}&euro;
          </span>
          <button
            onClick={() => addItem(product)}
            className="p-2 rounded-lg bg-forest text-cream hover:bg-forest-light transition-colors cursor-pointer"
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
