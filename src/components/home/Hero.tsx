"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest-light to-sage min-h-[85vh] flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cream rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brown-light rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-cream/20 text-cream px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              Artisanat fran&ccedil;ais &bull; Cire de soja naturelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6"
          >
            Parfumez votre
            <br />
            <span className="text-cream-dark">intérieur</span> avec douceur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cream/80 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
          >
            Découvrez nos fondants parfumés artisanaux, fabriqués avec des
            ingrédients naturels pour créer une ambiance chaleureuse et
            envoûtante chez vous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/produits">
              <Button variant="secondary" size="lg">
                Découvrir nos fondants
              </Button>
            </Link>
            <Link href="/a-propos">
              <Button variant="outline" size="lg" className="!border-cream !text-cream hover:!bg-cream/10">
                Notre histoire
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
