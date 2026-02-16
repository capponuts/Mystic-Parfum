"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Award, Flame } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description:
      "Nos fondants sont fabriqués à partir de cire de soja pure et d'huiles essentielles naturelles. Aucun additif chimique.",
  },
  {
    icon: Heart,
    title: "Fait avec amour",
    description:
      "Chaque fondant est coulé et parfumé à la main dans notre atelier. Un savoir-faire artisanal transmis avec passion.",
  },
  {
    icon: Award,
    title: "Qualité premium",
    description:
      "Nous sélectionnons les meilleures matières premières pour vous offrir des parfums intenses et longue durée.",
  },
  {
    icon: Flame,
    title: "Longue diffusion",
    description:
      "Nos fondants offrent 8 à 10 heures de diffusion par cube, pour profiter pleinement de chaque senteur.",
  },
];

export default function AProposPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-forest to-forest-light text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-heading text-5xl font-bold mb-6">
                Notre histoire
              </h1>
              <p className="text-cream/80 text-lg leading-relaxed mb-6">
                Maison Parfumée est née d&apos;une passion simple : créer des
                ambiances olfactives uniques pour chaque intérieur. Depuis notre
                petit atelier, nous imaginons et fabriquons des fondants parfumés
                qui transforment votre quotidien.
              </p>
              <p className="text-cream/80 text-lg leading-relaxed">
                Chaque création est le fruit d&apos;un travail minutieux, alliant
                tradition artisanale et recherche des plus belles matières
                premières naturelles. Notre mission ? Vous offrir un moment de
                bien-être à chaque fois que vous allumez votre brûle-parfum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <Image
                src="/logo.jpg"
                alt="Maison Parfumée"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              Nos valeurs
            </h2>
            <p className="text-sage text-lg max-w-2xl mx-auto">
              Quatre piliers qui guident chacune de nos créations et font la
              différence Maison Parfumée.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-warm-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-forest" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest mb-3">
                  {value.title}
                </h3>
                <p className="text-sage text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl font-bold text-forest mb-4">
              Notre processus artisanal
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sélection des matières",
                desc: "Nous choisissons avec soin notre cire de soja et nos huiles essentielles auprès de fournisseurs éthiques et certifiés.",
              },
              {
                step: "02",
                title: "Création & dosage",
                desc: "Chaque recette est développée et testée pour atteindre l'équilibre parfait entre intensité et subtilité du parfum.",
              },
              {
                step: "03",
                title: "Coulage à la main",
                desc: "Nos fondants sont coulés un par un dans notre atelier, puis contrôlés avant d'être soigneusement emballés pour vous.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-cream rounded-2xl p-8 shadow-sm"
              >
                <span className="text-5xl font-bold text-forest/15 font-heading">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-semibold text-forest mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-sage leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
