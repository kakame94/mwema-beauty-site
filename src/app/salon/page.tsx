"use client";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/lib/types";

const allServices: Service[] = [
  { id: "starter-locs", name: "Starter Locs", category: "locs", price: 120, duration_hours: 3, description: "Creation de nouvelles locs. Consultation incluse pour determiner la taille et le style." },
  { id: "microlocs", name: "Microlocs", category: "locs", price: 150, duration_hours: 4, description: "Microlocs fines et elegantes pour un look raffine." },
  { id: "invisible-locs", name: "Invisible Locs", category: "locs", price: 140, duration_hours: 3.5, description: "Locs invisibles avec un rendu naturel et discret." },
  { id: "locs-extensions", name: "Locs Extensions", category: "locs", price: 160, duration_hours: 4, description: "Extensions de locs pour plus de longueur et de volume." },
  { id: "french-curls", name: "French Curls", category: "locs", price: 130, duration_hours: 3, description: "French curls avec locs, un style tendance et elegant." },
  { id: "interlocking", name: "Interlocking", category: "locs", price: 95, duration_hours: 2.5, description: "Maintenance par interlocking pour des locs nettes et durables." },
  { id: "retwist", name: "Retwist", category: "locs", price: 85, duration_hours: 2, description: "Retwist classique pour rafraichir vos locs." },
  { id: "locs-maintenance", name: "Locs Maintenance", category: "locs", price: 65, duration_hours: 1.5, description: "Entretien general: nettoyage, hydratation, retouches." },
  { id: "locs-repair", name: "Locs Repair", category: "locs", price: 75, duration_hours: 2, description: "Reparation de locs endommagees, cassees ou amincies." },
  { id: "senegalese-twists", name: "Senegalese Twists", category: "tresses", price: 100, duration_hours: 3, description: "Tresses senegalaises classiques, elegantes et protectrices." },
  { id: "cornrows", name: "Cornrows", category: "tresses", price: 70, duration_hours: 2, description: "Cornrows pour hommes et femmes, styles varies." },
  { id: "tresses-africaines", name: "Tresses Africaines", category: "tresses", price: 90, duration_hours: 2.5, description: "Tresses africaines traditionnelles, multiples styles." },
  { id: "natural-hair-styling", name: "Coiffure Cheveux Naturels", category: "coiffure", price: 75, duration_hours: 2, description: "Coiffure et mise en forme de cheveux naturels." },
  { id: "formation-interlocking", name: "Formation Interlocking", category: "formation", price: 300, duration_hours: 6, description: "Formation professionnelle a la technique d'interlocking." },
];

const filters = [
  { key: "all", label: "Tous" },
  { key: "locs", label: "Locs" },
  { key: "tresses", label: "Tresses" },
  { key: "coiffure", label: "Coiffure" },
  { key: "formation", label: "Formations" },
];

export default function SalonPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? allServices : allServices.filter((s) => s.category === active);

  return (
    <div>
      <section className="bg-gradient-to-br from-pink/20 to-lavender/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-mblack font-[family-name:var(--font-heading)]">
            Salon & Services
          </h1>
          <p className="mt-2 text-mblack/60">
            Specialistes en locs, tresses et coiffure naturelle a Montreal
          </p>
          <div className="mt-4 inline-flex items-center gap-4 text-sm text-mblack/70">
            <span>3879 Rue Gertrude, Montreal</span>
            <span>|</span>
            <a href="tel:5145944350" className="text-orchid font-medium hover:underline">
              (514) 594-4350
            </a>
            <span>|</span>
            <span>Mar-Sam 9h-17h</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f.key
                  ? "bg-pink text-white"
                  : "bg-white text-mblack/70 hover:bg-pink/10 border border-pink/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* TikTok section */}
      <section className="bg-mblack py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-heading)] mb-2">
            Nos realisations
          </h2>
          <p className="text-white/60 mb-8">
            Suivez-nous sur TikTok et Instagram pour des tutoriels et inspirations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Interlocking Tutorial", url: "https://www.tiktok.com/@mwema.beauty/video/7321909128572472582" },
              { title: "Locs Maintenance", url: "https://www.tiktok.com/@mwema.beauty/video/7479913249744358661" },
              { title: "Retwist Tutorial", url: "https://www.tiktok.com/@mwema.beauty/video/7306910673571777798" },
            ].map((video) => (
              <a
                key={video.url}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-colors group"
              >
                <div className="text-4xl mb-3">🎬</div>
                <p className="text-white font-medium text-sm group-hover:text-yellow transition-colors">
                  {video.title}
                </p>
                <p className="text-white/40 text-xs mt-1">Voir sur TikTok</p>
              </a>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.instagram.com/mwema.beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink/90 transition-colors"
            >
              Instagram @mwema.beauty
            </a>
            <a
              href="https://www.tiktok.com/@mwema.beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-mblack px-6 py-2 rounded-full text-sm font-medium hover:bg-cream transition-colors"
            >
              TikTok @mwema.beauty
            </a>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h3 className="font-semibold text-mblack mb-2">Politique de reservation</h3>
        <p className="text-sm text-mblack/60 leading-relaxed">
          Delai de 48h pour annuler ou changer la date de votre rendez-vous.
          Frais d&apos;annulation : 50% de la facture. Delai de grace de 10 minutes
          avant l&apos;application de frais de retard.
        </p>
      </section>
    </div>
  );
}
