"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-forest via-forest-light to-sage relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brown rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cream rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Sparkles size={48} className="mx-auto text-brown mb-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-cream mb-6"
        >
          Mystic Parfum
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-block bg-cream/15 text-cream/90 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Site en construction
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/70 text-lg sm:text-xl leading-relaxed mb-10"
        >
          Nous pr&eacute;parons quelque chose de mystique pour vous.
          <br />
          Nos fondants parfum&eacute;s artisanaux arrivent bient&ocirc;t.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:contact@mysticparfum.fr"
            className="text-brown hover:text-brown-light transition-colors font-medium"
          >
            contact@mysticparfum.fr
          </a>
          <span className="hidden sm:inline text-cream/30">|</span>
          <span className="text-cream/50 text-sm">
            mysticparfum.fr
          </span>
        </motion.div>
      </div>
    </section>
  );
}
