"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl font-bold text-forest mb-4">
            Explorez nos univers
          </h2>
          <p className="text-sage text-lg max-w-2xl mx-auto">
            Chaque catégorie est un voyage olfactif unique, pensé pour éveiller
            vos sens et transformer votre quotidien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/produits?category=${cat.slug}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-cream rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <span className="text-5xl mb-4 block">{cat.icon}</span>
                  <h3 className="font-heading text-xl font-semibold text-forest mb-2 group-hover:text-brown transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sage text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
