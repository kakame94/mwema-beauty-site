import { Service } from "@/lib/types";

const categoryIcons: Record<string, string> = {
  locs: "🔒",
  tresses: "🪢",
  coiffure: "💇‍♀️",
  formation: "🎓",
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-orchid/5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{categoryIcons[service.category] || "✨"}</span>
            <h3 className="font-semibold text-mblack">{service.name}</h3>
          </div>
          <p className="text-sm text-mblack/60 mt-1">{service.description}</p>
          <p className="text-xs text-mblack/40 mt-2">
            Duree: {service.duration_hours}h
          </p>
        </div>
        <div className="text-right ml-4 flex-shrink-0">
          <p className="text-xl font-bold text-orchid">{service.price}$</p>
          <button className="mt-2 bg-pink text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-pink/90 transition-colors">
            Reserver
          </button>
        </div>
      </div>
    </div>
  );
}
