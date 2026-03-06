import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

const featuredProducts: Product[] = [
  {
    id: "sheaphoria-champaka",
    name: "Sheaphoria Champaka",
    category: "beurres",
    price: 23.99,
    currency: "CAD",
    description: "Beurre corporel au champaka, hydratation intense avec un parfum floral exotique.",
    ingredients: "Beurre de karite, huile de coco, extrait de champaka, vitamine E",
    ideal_for: "Peau seche, hydratation quotidienne",
    image: "champaka.jpg",
  },
  {
    id: "sheaphoria-mango",
    name: "Sheaphoria Mango Madness",
    category: "beurres",
    price: 23.99,
    currency: "CAD",
    description: "Beurre corporel a la mangue, texture fondante et parfum tropical.",
    ingredients: "Beurre de karite, beurre de mangue, huile de jojoba, vitamine E",
    ideal_for: "Tous types de peau",
    image: "mango.jpg",
  },
  {
    id: "sheaphoria-fragrance-free",
    name: "Sheaphoria Fragrance Free",
    category: "beurres",
    price: 23.99,
    currency: "CAD",
    description: "Beurre corporel sans parfum pour les peaux sensibles.",
    ingredients: "Beurre de karite pur, huile de coco vierge, vitamine E",
    ideal_for: "Peau sensible, enfants",
    image: "fragrance-free.jpg",
  },
  {
    id: "harmony",
    name: "Harmony",
    category: "capillaire",
    price: 23.99,
    currency: "CAD",
    description: "Spray hydratant pour locs et cheveux naturels.",
    ingredients: "Eau, huile d'argan, aloe vera, glycerine vegetale",
    ideal_for: "Locs, cheveux naturels",
    image: "harmony.jpg",
  },
  {
    id: "vibrant-locks",
    name: "Vibrant Locks",
    category: "capillaire",
    price: 26.99,
    currency: "CAD",
    description: "Huile capillaire nourrissante pour locs brillants et en sante.",
    ingredients: "Huile de ricin, huile d'argan, huile de jojoba, vitamine E",
    ideal_for: "Locs, cheveux secs",
    image: "vibrant-locks.jpg",
  },
  {
    id: "spray-huile-combo",
    name: "Spray & Huile Combo",
    category: "capillaire",
    price: 45.99,
    currency: "CAD",
    description: "Le duo parfait: Harmony spray + Vibrant Locks huile.",
    ingredients: "Voir Harmony + Vibrant Locks",
    ideal_for: "Routine complete locs",
    image: "combo.jpg",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orchid via-lavender to-pink min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orchid rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight animate-fade-in-up">
            Mwema Beauty
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-white/90 font-light">
            Hair, Body & Locs Experts
          </p>
          <p className="mt-2 text-lg text-white/70">
            Soins naturels artisanaux faits a Montreal
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/boutique"
              className="bg-white text-orchid px-8 py-3 rounded-full font-semibold text-lg hover:bg-cream transition-colors shadow-lg"
            >
              Decouvrir nos produits
            </Link>
            <Link
              href="/salon"
              className="bg-yellow text-mblack px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow/90 transition-colors shadow-lg"
            >
              Reserver un soin
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            5 600+ abonnes nous font confiance sur Instagram
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-mblack font-[family-name:var(--font-heading)]">
            Nos Produits
          </h2>
          <p className="mt-2 text-mblack/60">
            Sheaphoria &mdash; beurres corporels artisanaux au karite
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/boutique"
            className="inline-block border-2 border-orchid text-orchid px-6 py-2 rounded-full font-medium hover:bg-orchid hover:text-white transition-colors"
          >
            Voir toute la boutique
          </Link>
        </div>
      </section>

      {/* SALON */}
      <section className="bg-lavender/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-mblack font-[family-name:var(--font-heading)]">
              Notre Salon
            </h2>
            <p className="mt-2 text-mblack/60">
              Specialistes en locs, tresses et coiffure naturelle
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5!2d-73.5726!3d45.4668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzAMIk4gNzPCsDM0JzIxIlc!5e0!3m2!1sfr!2sca!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mwema Beauty Salon - Montreal"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-mblack mb-3">Informations</h3>
                <ul className="space-y-2 text-sm text-mblack/70">
                  <li className="flex items-start gap-2">
                    <span className="text-orchid mt-0.5">&#9679;</span>
                    3879 Rue Gertrude, Montreal, QC H4G 1R6
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orchid mt-0.5">&#9679;</span>
                    <a href="tel:5145944350" className="hover:text-orchid">(514) 594-4350</a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orchid mt-0.5">&#9679;</span>
                    samia@mwemabeauty.com
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orchid mt-0.5">&#9679;</span>
                    Mardi - Samedi: 9h - 17h
                  </li>
                </ul>
              </div>
              <Link
                href="/salon"
                className="bg-pink text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-pink/90 transition-colors"
              >
                Voir nos services & reserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-mblack font-[family-name:var(--font-heading)] mb-4">
            Mwema signifie &laquo; bonte &raquo; en swahili
          </h2>
          <p className="text-mblack/60 leading-relaxed">
            Fonde par Samia Fahome a Montreal, Mwema Beauty est ne de la passion
            pour les soins capillaires naturels et les locs. Notre mission :
            sublimer votre beaute naturelle avec des produits artisanaux et un
            savoir-faire authentique.
          </p>
          <Link
            href="/histoire"
            className="inline-block mt-6 border-2 border-orchid text-orchid px-6 py-2 rounded-full font-medium hover:bg-orchid hover:text-white transition-colors"
          >
            Decouvrir notre histoire
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-orchid/10 py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-mblack font-[family-name:var(--font-heading)] mb-2">
            Restez connectee
          </h2>
          <p className="text-mblack/60 text-sm mb-6">
            Recevez nos conseils beaute, promotions et nouveautes.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre courriel"
              className="flex-1 px-4 py-3 rounded-full border border-orchid/20 text-sm focus:outline-none focus:border-orchid bg-white text-mblack"
            />
            <button
              type="submit"
              className="bg-orchid text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-orchid/90 transition-colors"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
