import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Mystic Parfum"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-heading text-lg font-bold text-cream">
                Mystic Parfum
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Fondants parfumés artisanaux aux senteurs envoûtantes,
              fabriqués avec passion en France.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Boutique</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produits" className="text-cream/70 hover:text-cream transition-colors">
                  Tous les fondants
                </Link>
              </li>
              <li>
                <Link href="/produits?category=floraux" className="text-cream/70 hover:text-cream transition-colors">
                  Floraux
                </Link>
              </li>
              <li>
                <Link href="/produits?category=gourmands" className="text-cream/70 hover:text-cream transition-colors">
                  Gourmands
                </Link>
              </li>
              <li>
                <Link href="/produits?category=boises" className="text-cream/70 hover:text-cream transition-colors">
                  Boisés
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="text-cream/70 hover:text-cream transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/70 hover:text-cream transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>contact@mysticparfum.fr</li>
              <li>Fabriqué en France</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-sm text-cream/50">
          <p>&copy; {new Date().getFullYear()} Mystic Parfum. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
