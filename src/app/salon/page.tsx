"use client";
import { useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/lib/types";
import {
  LayoutGrid, Lock, Sprout, Sparkles, Microscope, Ribbon, Scissors,
  User, Baby, ClipboardList, Instagram, Video,
} from "lucide-react";

const allServices: Service[] = [
  // === LOCS MAINTENANCE ===
  { id: "locs-maintenance-crochet", name: "Locs Maintenance (Crochet)", category: "locs_maintenance", price: 300, price_note: "300$+", duration: "3h30+", description: "Bain revitalisant 3 etapes, massage aromatique du cuir chevelu, soin vapeur stimulant, methode crochet pour les racines, coiffure personnalisee. Cycle: 3 a 6 mois." },
  { id: "locs-retwist", name: "Locs Retwist", category: "locs_maintenance", price: 115, price_note: "115$+", duration: "2h30+", description: "Retwist des racines pour conserver la forme et la proprete des locs. Shampoing inclus." },
  { id: "locs-interlock", name: "Locs Interlocking", category: "locs_maintenance", price: 135, price_note: "135$+", duration: "2h+", description: "Methode interlocking pour resserrer les racines. Ideal pour locs matures (8 a 12 semaines). Shampoing inclus." },
  { id: "microlocs-retightening", name: "Microlocs/Sisterlocs Resserrage", category: "locs_maintenance", price: null, price_note: "Prix variable", duration: "30min+", description: "Resserrage periodique des racines de microlocs/sisterlocs. Shampoing inclus." },
  { id: "retwist-coiffure", name: "Retwist et Coiffure Specifique", category: "locs_maintenance", price: 155, price_note: "155$+", duration: "2h", description: "Retwist avec coiffure specifique. Envoyez une photo de la coiffure desiree 24h avant le RDV." },
  { id: "retwist-special", name: "Retwist Special", category: "locs_maintenance", price: 110, price_note: "110$ + taxes", duration: "2h30", description: "Retwist + Shampoing + Coiffure de base (torsades barrel ou doubles). Promotion speciale." },
  { id: "detox-retwist-reparation", name: "Detox Retwist + Reparation (10+ locs) + Coiffure", category: "locs_maintenance", price: 350, price_note: "350$", duration: "Variable", description: "Detox complet, retwist, reparation de plus de 10 locs et coiffure simple." },
  { id: "locs-styling-event", name: "Coiffure Locs Evenement/Mariage", category: "locs_maintenance", price: null, price_note: "Prix variable", duration: "1h+", description: "Coiffure mariage sur locs. Inclut consultation, seance d'essai, coiffure jour J, pose accessoires, deplacement." },
  { id: "shampoo-locs", name: "Shampoo Locs", category: "locs_maintenance", price: 50, price_note: "50$", duration: "30min", description: "Shampoing pour locs." },
  { id: "hot-oil-treatment", name: "Hot Oil Treatment", category: "locs_maintenance", price: 90, price_note: "90$", duration: "2h45", description: "Soin profond a l'huile chaude pour hydrater, nourrir et reparer les cheveux." },
  { id: "braid-and-band", name: "Braid and Band", category: "locs_maintenance", price: 50, price_note: "50$", duration: "30min", description: "Braid and band pour locs." },
  { id: "coloration-locs", name: "Coloration Locs", category: "locs_maintenance", price: 100, price_note: "100$+", duration: "2h30+", description: "Coloration de locs. Photo de la couleur desiree requise avant le RDV. Prix varie selon longueur et etat." },

  // === DEPART DE LOCS ===
  { id: "starter-locs-comb-coils", name: "Depart de Locs: Comb Coils", category: "depart_locs", price: 300, price_note: "300$+", duration: "3h+", description: "Methode comb coil standard. Inclut lavage, soin et consultation pour determiner la taille des locs." },
  { id: "starter-locs-instant", name: "Depart de Locs: Instant Locs (Crochet)", category: "depart_locs", price: 550, price_note: "550$+", duration: "5h+", description: "Technique instant/crochet sur cheveux naturels sans extensions. Acompte 50% requis." },
  { id: "starter-locs-interlocks", name: "Depart de Locs: Interlocks", category: "depart_locs", price: 350, price_note: "350$+", duration: "4h30+", description: "Demarrage de locs par methode interlock." },
  { id: "starter-locs-vanilles", name: "Depart de Locs: Vanilles / 2 Strand Twists", category: "depart_locs", price: 400, price_note: "400$+", duration: "4h30+", description: "Demarrage de locs par vanilles. Methode douce, entretien facile au debut." },
  { id: "wicks-combiner-locs", name: "Wicks / Combiner les Locs", category: "depart_locs", price: null, price_note: "Prix variable", duration: "7h", description: "Fusion de 2 ou plusieurs locs. Consultation requise avant." },

  // === LOCS EXTENSIONS ===
  { id: "small-locs-extensions", name: "Small Locs Extensions (inclus)", category: "locs_extensions", price: 950, price_note: "950$+", duration: "5h+", description: "Extensions de locs petites. Consultation requise. Extensions incluses." },
  { id: "medium-locs-extensions", name: "Medium Locs Extensions (inclus)", category: "locs_extensions", price: 750, price_note: "750$+", duration: "5h+", description: "Extensions de locs moyennes. Consultation requise. Extensions incluses." },
  { id: "curly-locs-extension", name: "Curly Locs Extension 8 pouces", category: "locs_extensions", price: 1000, price_note: "1000$", duration: "6h", description: "Extensions de locs boucles 8 pouces." },
  { id: "partial-install", name: "Partial Install (dessus ou arriere)", category: "locs_extensions", price: 470, price_note: "470$", duration: "4h30", description: "Installation partielle d'extensions (haut ou arriere de la tete)." },

  // === MICROLOCS ===
  { id: "microlocs-twist", name: "Microlocs Twist (avec tes cheveux)", category: "microlocs", price: 750, price_note: "750$+", duration: "9h+", description: "Microlocs avec tes propres cheveux. Entretien regulier necessaire." },
  { id: "microlocs-twist-extension", name: "Microlocs Twist avec Extensions", category: "microlocs", price: 650, price_note: "650$+", duration: "5h30+", description: "Microlocs avec extensions pour longueur et volume supplementaires." },
  { id: "microlocs-ext-interlock-8", name: "Microlocs Extensions Interlocking 8 pouces", category: "microlocs", price: 934, price_note: "934$", duration: "9h", description: "Microlocs extensions interlocking 8 pouces. Consultation requise." },
  { id: "microlocs-ext-interlock-12", name: "Microlocs Extensions Interlocking 12 pouces", category: "microlocs", price: 1069, price_note: "1069$", duration: "9h", description: "Microlocs extensions interlocking 12 pouces. Installation la plus permanente. Consultation requise." },

  // === INVISIBLE LOCS ===
  { id: "invisible-locs", name: "Invisible Locs (meches incluses)", category: "invisible_locs", price: 200, price_note: "200$+", duration: "4h30+", description: "Invisible locs longueur BOB/epaules. Couleurs: 1B, 350. Meches incluses." },

  // === TRESSES / BRAIDS ===
  { id: "small-knotless", name: "Small Knotless Braids (meches incluses)", category: "tresses", price: 205, price_note: "205$+", duration: "5h30+", description: "Petites knotless braids. Couleurs: 1, 1B, 4, 350. Cheveux demeles et sans produit requis." },
  { id: "smedium-knotless", name: "SMedium Knotless Braids (meches incluses)", category: "tresses", price: 195, price_note: "195$+", duration: "3h30+", description: "Knotless braids taille small-medium. Meches incluses." },
  { id: "medium-knotless", name: "Medium Knotless Braids (meches incluses)", category: "tresses", price: 190, price_note: "190$+", duration: "3h30+", description: "Knotless braids moyennes. Meches incluses." },
  { id: "large-knotless", name: "Large Knotless Braids (meches incluses)", category: "tresses", price: 175, price_note: "175$+", duration: "2h30+", description: "Grandes knotless braids. Meches incluses." },
  { id: "jumbo-knotless", name: "Jumbo Knotless Braids (meches incluses)", category: "tresses", price: 165, price_note: "165$+", duration: "2h30+", description: "Jumbo knotless braids. Meches incluses." },
  { id: "small-fulani", name: "Small Fulani Braids (meches incluses)", category: "tresses", price: 195, price_note: "195$+", duration: "4h+", description: "Petites tresses Fulani. Meches incluses." },
  { id: "medium-fulani", name: "Medium Fulani Braids (meches incluses)", category: "tresses", price: 180, price_note: "180$+", duration: "3h30+", description: "Tresses Fulani moyennes. Meches incluses." },
  { id: "large-fulani", name: "Large Fulani Braids (meches incluses)", category: "tresses", price: 140, price_note: "140$+", duration: "Variable", description: "Grandes tresses Fulani. Meches incluses." },
  { id: "senegalese-twist", name: "Senegalese Twist (meches incluses)", category: "tresses", price: 215, price_note: "215$+", duration: "4h+", description: "Tresses senegalaises. Coiffure protectrice avec extensions synthetiques. Meches incluses." },
  { id: "passion-twist", name: "Passion Twists (meches NON incluses)", category: "tresses", price: 145, price_note: "145$+", duration: "4h+", description: "Passion twists longueur mi-dos. 9 paquets de Freetress waterwave requis. Meches non incluses." },
  { id: "butterfly-locs", name: "Butterfly Locs (meches incluses)", category: "tresses", price: 200, price_note: "200$+", duration: "4h", description: "Butterfly locs methode crochet. Couleurs: 1B, 1B/27, 30. Meches incluses." },
  { id: "french-curls", name: "French Curls (meches incluses)", category: "tresses", price: 239, price_note: "239$+", duration: "4h30+", description: "French curls longueur taille. Meches incluses." },
  { id: "stitch-braids", name: "Stitch Braids (meches incluses)", category: "tresses", price: null, price_note: "Prix variable", duration: "Variable", description: "Stitch braids longueur mi-dos. Meches incluses. Prix varie selon design." },
  { id: "half-up-half-down", name: "Half Up Half Down", category: "tresses", price: 150, price_note: "150$+", duration: "2h30+", description: "8-10 stitch braids devant, sew-in ou crochet derriere. Meches pour braids incluses." },
  { id: "butterfly-cornrows", name: "Butterfly Cornrows (4-6)", category: "tresses", price: 120, price_note: "120$", duration: "2h30", description: "4 a 6 cornrows butterfly." },
  { id: "braided-ponytail", name: "Queue de Cheval Tressee (meches incluses)", category: "tresses", price: 130, price_note: "130$+", duration: "1h30+", description: "Queue de cheval tressee longueur mi-dos. Meches incluses." },
  { id: "touch-up", name: "Touch Up / Rafraichir Coiffure", category: "tresses", price: 95, price_note: "95$+", duration: "2h30", description: "Retouche de knotless braids, butterfly locs, etc. Extensions incluses." },
  { id: "defaire-tresses", name: "Defaire Tresses / Hair Take-down", category: "tresses", price: 65, price_note: "65$+", duration: "1h+", description: "Retrait de coiffure protectrice." },

  // === SEW IN ===
  { id: "sew-in-closure", name: "Sew In with Closure", category: "sew_in", price: 145, price_note: "145$", duration: "2h30", description: "Tissage ferme avec closure." },
  { id: "sew-in-leave-out", name: "Sew In Leave Out", category: "sew_in", price: 120, price_note: "120$", duration: "Variable", description: "Tissage avec leave out." },

  // === COIFFURE NATURELLE ===
  { id: "coiffure-nappy", name: "Coiffure Naturelle (sans extension)", category: "coiffure_naturelle", price: 70, price_note: "70$+", duration: "2h30", description: "Coiffure avec tes propres cheveux naturels. Avec ou sans decoration." },

  // === HOMME ===
  { id: "men-twist-box-braids", name: "Homme: Vanilles ou Box Braids", category: "homme", price: 90, price_note: "90$+", duration: "1h30+", description: "Vanilles ou box braids pour hommes. Prix varie selon la taille." },
  { id: "men-cornrows-design", name: "Homme: Cornrows avec Design", category: "homme", price: null, price_note: "Prix variable", duration: "2h", description: "Cornrows pour hommes avec motifs personnalises. Cheveux demeles et blow dry requis." },
  { id: "cornrows-simple", name: "Cornrows (4 tresses collees)", category: "homme", price: 35, price_note: "35$+", duration: "30min+", description: "4 cornrows elegants. Prix varie selon le nombre de cornrows." },

  // === ENFANTS ===
  { id: "kids-hairstyle", name: "Coiffure Enfants (moins de 12 ans)", category: "enfants", price: 100, price_note: "100$", duration: "3h30", description: "Coiffure enfant forfait unique. Cheveux demeles et sans produits. Moins de 12 ans." },

  // === AUTRES ===
  { id: "consultation", name: "Consultation", category: "autre", price: 35, price_note: "35$", duration: "15min", description: "Consultation avant service." },
  { id: "blow-dry", name: "Blow Dry", category: "autre", price: 25, price_note: "25$", duration: "30min", description: "Sechage au sechoir." },
];

const filters = [
  { key: "all", label: "Tous", icon: <LayoutGrid className="w-4 h-4" /> },
  { key: "locs_maintenance", label: "Entretien Locs", icon: <Lock className="w-4 h-4" /> },
  { key: "depart_locs", label: "Depart Locs", icon: <Sprout className="w-4 h-4" /> },
  { key: "locs_extensions", label: "Extensions", icon: <Sparkles className="w-4 h-4" /> },
  { key: "microlocs", label: "Microlocs", icon: <Microscope className="w-4 h-4" /> },
  { key: "tresses", label: "Tresses", icon: <Ribbon className="w-4 h-4" /> },
  { key: "sew_in", label: "Sew In", icon: <Scissors className="w-4 h-4" /> },
  { key: "homme", label: "Homme", icon: <User className="w-4 h-4" /> },
  { key: "enfants", label: "Enfants", icon: <Baby className="w-4 h-4" /> },
  { key: "autre", label: "Autre", icon: <ClipboardList className="w-4 h-4" /> },
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
          <div className="mt-4 inline-flex items-center gap-4 text-sm text-mblack/70 flex-wrap justify-center">
            <span>Gertrude, Verdun, Montreal</span>
            <span>|</span>
            <a href="tel:5145944350" className="text-orchid font-medium hover:underline">
              (514) 594-4350
            </a>
            <span>|</span>
            <span>Mar-Sam 8h-19h | Dim 7h-16h</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                active === f.key
                  ? "bg-pink text-white"
                  : "bg-white text-mblack/70 hover:bg-pink/10 border border-pink/20"
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-mblack/50 mb-6">
          {filtered.length} service{filtered.length > 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
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
                <Video className="w-10 h-10 text-pink mx-auto mb-3" />
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
          Delai de grace de 10 minutes, apres quoi des frais de retard de 10$+ s&apos;appliquent.
          48h pour annuler ou changer la date du rendez-vous.
          Frais d&apos;annulation : 50% de la facture (non remboursable, non transferable, non negotiable).
        </p>
      </section>
    </div>
  );
}
