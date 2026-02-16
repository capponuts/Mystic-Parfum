"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types";
import { useCart } from "@/lib/cart-context";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center gap-4 bg-warm-white rounded-xl p-4">
      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-sage-light/30 to-cream-dark flex items-center justify-center flex-shrink-0">
        <span className="text-3xl">
          {item.product.category === "floraux" && "🌸"}
          {item.product.category === "fruites" && "🍊"}
          {item.product.category === "gourmands" && "🍫"}
          {item.product.category === "boises" && "🌲"}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-semibold text-forest truncate">
          {item.product.name}
        </h3>
        <p className="text-sage text-sm">{item.product.price.toFixed(2)}&euro; / unité</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          className="p-1 rounded-md hover:bg-cream-dark transition-colors cursor-pointer"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          className="p-1 rounded-md hover:bg-cream-dark transition-colors cursor-pointer"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="text-right">
        <p className="font-bold text-brown">
          {(item.product.price * item.quantity).toFixed(2)}&euro;
        </p>
        <button
          onClick={() => removeItem(item.product.id)}
          className="text-sage hover:text-red-500 transition-colors mt-1 cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
