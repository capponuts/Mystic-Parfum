"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">
            Contactez-nous
          </h1>
          <p className="text-sage text-lg max-w-2xl mx-auto">
            Une question, une suggestion ou simplement envie de discuter
            parfums ? N&apos;hésitez pas à nous écrire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="bg-forest/10 rounded-2xl p-10 text-center">
                <h2 className="font-heading text-2xl font-bold text-forest mb-3">
                  Message envoyé !
                </h2>
                <p className="text-sage">
                  Merci pour votre message. Nous vous répondrons dans les plus
                  brefs délais.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-warm-white rounded-2xl p-8 shadow-sm space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-sm font-medium text-brown-dark mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-light/30 bg-cream focus:outline-none focus:ring-2 focus:ring-forest/30 resize-none"
                  />
                </div>
                <Button type="submit" size="lg">
                  Envoyer le message
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-warm-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-forest" />
                </div>
                <h3 className="font-heading font-semibold text-forest">Email</h3>
              </div>
              <p className="text-sage text-sm">contact@maison-parfumee.fr</p>
            </div>

            <div className="bg-warm-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-forest" />
                </div>
                <h3 className="font-heading font-semibold text-forest">Atelier</h3>
              </div>
              <p className="text-sage text-sm">
                Atelier Maison Parfumée
                <br />
                France
              </p>
            </div>

            <div className="bg-warm-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-forest/10 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-forest" />
                </div>
                <h3 className="font-heading font-semibold text-forest">Horaires</h3>
              </div>
              <p className="text-sage text-sm">
                Lun - Ven : 9h - 18h
                <br />
                Réponse sous 48h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
