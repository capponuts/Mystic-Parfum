"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";

export default function CartSummary() {
  const { totalItems, totalPrice } = useCart();

  const shippingCost = totalPrice >= 30 ? 0 : 4.9;
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="bg-warm-white rounded-2xl p-6 shadow-sm sticky top-24">
      <h2 className="font-heading text-xl font-semibold text-forest mb-6">
        Récapitulatif
      </h2>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between">
          <span className="text-sage">Sous-total ({totalItems} article{totalItems > 1 ? "s" : ""})</span>
          <span className="text-brown-dark font-medium">{totalPrice.toFixed(2)}&euro;</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sage">Livraison</span>
          <span className="text-brown-dark font-medium">
            {shippingCost === 0 ? (
              <span className="text-forest">Gratuite</span>
            ) : (
              `${shippingCost.toFixed(2)}€`
            )}
          </span>
        </div>
        {shippingCost > 0 && (
          <p className="text-xs text-sage">
            Livraison gratuite dès 30&euro; d&apos;achat
          </p>
        )}
        <div className="border-t border-sage-light/20 pt-3 flex justify-between">
          <span className="font-semibold text-brown-dark">Total</span>
          <span className="font-bold text-xl text-brown">{finalTotal.toFixed(2)}&euro;</span>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full" size="lg">
          Passer commande
        </Button>
      </Link>
    </div>
  );
}
