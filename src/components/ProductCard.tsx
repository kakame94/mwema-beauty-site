import Image from "next/image";
import { Product } from "@/lib/types";
import { ShoppingBag } from "lucide-react";

const categoryColors: Record<string, string> = {
  beurres: "from-yellow/40 to-yellow/20",
  capillaire: "from-lavender/40 to-lavender/20",
};

export default function ProductCard({ product }: { product: Product }) {
  const hasImage = [
    "fragrance-free.jpg",
    "mango.jpg",
    "banner.jpg",
    "logo.jpg",
  ].includes(product.image);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group">
      <div
        className={`h-48 bg-gradient-to-br ${categoryColors[product.category] || "from-cream to-white"} flex items-center justify-center relative overflow-hidden`}
      >
        {hasImage ? (
          <Image
            src={`/images/${product.image}`}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="text-5xl font-bold text-mblack/10 font-[family-name:var(--font-heading)] group-hover:scale-110 transition-transform">
            {product.name.charAt(0)}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-orchid font-medium uppercase tracking-wider mb-1">
          {product.category === "beurres" ? "Beurre corporel" : "Soin capillaire"}
        </p>
        <h3 className="font-semibold text-mblack text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-mblack/60 mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-orchid">{product.price}$</span>
          <button className="bg-orchid text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-orchid/90 transition-colors flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5" />
            Acheter
          </button>
        </div>
      </div>
    </div>
  );
}
