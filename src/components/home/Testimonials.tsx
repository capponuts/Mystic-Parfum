"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    text: "Les fondants Vanille de Madagascar sont absolument divins ! Le parfum remplit toute la maison pendant des heures. Je ne peux plus m'en passer.",
    rating: 5,
  },
  {
    name: "Sophie D.",
    text: "Qualité exceptionnelle et senteurs naturelles. Le Caramel Beurre Salé est mon préféré, on dirait une crêperie bretonne ! Bravo pour cet artisanat.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    text: "J'ai offert le coffret Boisés à ma femme, elle a adoré. Le Santal Doré est incroyablement apaisant. On commande régulièrement depuis.",
    rating: 5,
  },
];

export default function Testimonials() {
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
            Ce que disent nos clients
          </h2>
          <p className="text-sage text-lg max-w-2xl mx-auto">
            Des milliers de foyers parfumés et des clients conquis par nos
            créations artisanales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-warm-white rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-brown text-brown"
                  />
                ))}
              </div>
              <p className="text-brown-dark/80 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="font-semibold text-forest">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
