"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getProductBySlug } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const categoryLabels: Record<string, string> = {
  floraux: "Floral",
  fruites: "Fruité",
  gourmands: "Gourmand",
  boises: "Boisé",
};

const categoryEmojis: Record<string, string> = {
  floraux: "🌸",
  fruites: "🍊",
  gourmands: "🍫",
  boises: "🌲",
};

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-forest mb-4">
            Produit introuvable
          </h1>
          <Link href="/produits">
            <Button variant="outline">Retour à la boutique</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/produits"
          className="inline-flex items-center gap-2 text-sage hover:text-forest transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Retour aux produits
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="aspect-square bg-gradient-to-br from-sage-light/30 to-cream-dark rounded-2xl flex items-center justify-center"
          >
            <span className="text-[120px]">
              {categoryEmojis[product.category]}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge variant="category">
              {categoryLabels[product.category]}
            </Badge>

            <h1 className="font-heading text-4xl font-bold text-forest mt-4 mb-4">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-brown mb-6">
              {product.price.toFixed(2)}&euro;
            </p>

            <p className="text-brown-dark/80 leading-relaxed mb-8">
              {product.longDescription}
            </p>

            <div className="space-y-3 mb-8 bg-cream-dark rounded-xl p-5">
              <div className="flex justify-between text-sm">
                <span className="text-sage">Senteurs</span>
                <span className="text-brown-dark font-medium">{product.scent}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sage">Poids</span>
                <span className="text-brown-dark font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sage">Durée de diffusion</span>
                <span className="text-brown-dark font-medium">{product.burnTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-3 bg-cream-dark rounded-lg px-3 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 hover:bg-cream rounded transition-colors cursor-pointer"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 hover:bg-cream rounded transition-colors cursor-pointer"
                >
                  <Plus size={18} />
                </button>
              </div>

              <Button onClick={handleAddToCart} size="lg" className="flex-1 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                {added ? "Ajouté !" : "Ajouter au panier"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
