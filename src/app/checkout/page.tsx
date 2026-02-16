"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const shippingCost = totalPrice >= 30 ? 0 : 4.9;
  const finalTotal = totalPrice + shippingCost;

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle size={72} className="mx-auto text-forest mb-6" />
          <h1 className="font-heading text-3xl font-bold text-forest mb-3">
            Commande confirmée !
          </h1>
          <p className="text-sage mb-8">
            Merci pour votre commande. Vous recevrez un email de confirmation
            sous peu. Vos fondants seront expédiés dans les 48h.
          </p>
          <Link href="/">
            <Button>Retour à l&apos;accueil</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-forest mb-4">
            Votre panier est vide
          </h1>
          <Link href="/produits">
            <Button>Voir nos fondants</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/panier"
          className="inline-flex items-center gap-2 text-sage hover:text-forest transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Retour au panier
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl font-bold text-forest mb-10"
        >
          Finaliser la commande
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-warm-white rounded-2xl p-6">
              <h2 className="font-heading text-xl font-semibold text-forest mb-6">
                Informations de livraison
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Adresse
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Confirmer la commande &mdash; {finalTotal.toFixed(2)}&euro;
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-warm-white rounded-2xl p-6 h-fit sticky top-24"
          >
            <h2 className="font-heading text-xl font-semibold text-forest mb-6">
              Votre commande
            </h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span className="text-brown-dark">
                    {item.product.name} &times; {item.quantity}
                  </span>
                  <span className="font-medium text-brown-dark">
                    {(item.product.price * item.quantity).toFixed(2)}&euro;
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-sage-light/20 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-sage">Sous-total</span>
                <span>{totalPrice.toFixed(2)}&euro;</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-sage">Livraison</span>
                <span>{shippingCost === 0 ? "Gratuite" : `${shippingCost.toFixed(2)}€`}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-sage-light/20">
                <span className="text-brown-dark">Total</span>
                <span className="text-brown">{finalTotal.toFixed(2)}&euro;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
