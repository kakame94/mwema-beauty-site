"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

const allProducts: Product[] = [
  { id: "sheaphoria-champaka", name: "Sheaphoria Champaka", category: "beurres", price: 23.99, currency: "CAD", description: "Beurre corporel au champaka, hydratation intense avec un parfum floral exotique.", ingredients: "Beurre de karite, huile de coco, extrait de champaka, vitamine E", ideal_for: "Peau seche, hydratation quotidienne", image: "champaka.jpg" },
  { id: "sheaphoria-mango", name: "Sheaphoria Mango Madness", category: "beurres", price: 23.99, currency: "CAD", description: "Beurre corporel a la mangue, texture fondante et parfum tropical.", ingredients: "Beurre de karite, beurre de mangue, huile de jojoba, vitamine E", ideal_for: "Tous types de peau", image: "mango.jpg" },
  { id: "sheaphoria-fragrance-free", name: "Sheaphoria Fragrance Free", category: "beurres", price: 23.99, currency: "CAD", description: "Beurre corporel sans parfum pour les peaux sensibles.", ingredients: "Beurre de karite pur, huile de coco vierge, vitamine E", ideal_for: "Peau sensible, enfants", image: "fragrance-free.jpg" },
  { id: "sheaphoria-island-sensation", name: "Sheaphoria Island Sensation", category: "beurres", price: 23.99, currency: "CAD", description: "Beurre corporel aux notes tropicales.", ingredients: "Beurre de karite, huile de coco, extraits tropicaux, vitamine E", ideal_for: "Tous types de peau", image: "island-sensation.jpg" },
  { id: "harmony", name: "Harmony", category: "capillaire", price: 23.99, currency: "CAD", description: "Spray hydratant pour locs et cheveux naturels. Legeret sans residus.", ingredients: "Eau, huile d'argan, aloe vera, glycerine vegetale", ideal_for: "Locs, cheveux naturels, retwist", image: "harmony.jpg" },
  { id: "vibrant-locks", name: "Vibrant Locks", category: "capillaire", price: 26.99, currency: "CAD", description: "Huile capillaire nourrissante pour locs brillants et en sante.", ingredients: "Huile de ricin, huile d'argan, huile de jojoba, vitamine E", ideal_for: "Locs, cheveux secs, cuir chevelu", image: "vibrant-locks.jpg" },
  { id: "spray-huile-combo", name: "Spray & Huile Combo", category: "capillaire", price: 45.99, currency: "CAD", description: "Le duo parfait: Harmony spray + Vibrant Locks huile pour un soin complet.", ingredients: "Voir Harmony + Vibrant Locks", ideal_for: "Routine complete locs", image: "combo.jpg" },
];

const filters = [
  { key: "all", label: "Tous" },
  { key: "beurres", label: "Beurres corporels" },
  { key: "capillaire", label: "Soins capillaires" },
];

export default function BoutiquePage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-mblack font-[family-name:var(--font-heading)]">
          Boutique
        </h1>
        <p className="mt-2 text-mblack/60">
          Produits naturels artisanaux pour cheveux et corps
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              active === f.key
                ? "bg-orchid text-white"
                : "bg-white text-mblack/70 hover:bg-orchid/10 border border-orchid/20"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
