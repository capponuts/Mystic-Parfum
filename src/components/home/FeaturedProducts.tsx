"use client";

import { motion } from "framer-motion";
import { getFeaturedProducts } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl font-bold text-forest mb-4">
            Nos coups de coeur
          </h2>
          <p className="text-sage text-lg max-w-2xl mx-auto">
            Une sélection de nos fondants les plus appréciés, choisis avec soin
            pour vous faire découvrir l&apos;univers Maison Parfumée.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/produits">
            <Button variant="outline">Voir tous nos fondants</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
