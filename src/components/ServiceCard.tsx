import { Service } from "@/lib/types";
import {
  Lock,
  Sprout,
  Sparkles,
  Microscope,
  Eye,
  Ribbon,
  Scissors,
  Flower2,
  User,
  Baby,
  ClipboardList,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  locs_maintenance: <Lock className="w-5 h-5 text-orchid" />,
  depart_locs: <Sprout className="w-5 h-5 text-green-600" />,
  locs_extensions: <Sparkles className="w-5 h-5 text-yellow-500" />,
  microlocs: <Microscope className="w-5 h-5 text-purple-500" />,
  invisible_locs: <Eye className="w-5 h-5 text-lavender" />,
  tresses: <Ribbon className="w-5 h-5 text-pink" />,
  sew_in: <Scissors className="w-5 h-5 text-blue-500" />,
  coiffure_naturelle: <Flower2 className="w-5 h-5 text-green-500" />,
  homme: <User className="w-5 h-5 text-slate-600" />,
  enfants: <Baby className="w-5 h-5 text-pink" />,
  autre: <ClipboardList className="w-5 h-5 text-mblack/50" />,
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-orchid/5">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            {categoryIcons[service.category] || <Sparkles className="w-5 h-5 text-orchid" />}
            <h3 className="font-semibold text-mblack">{service.name}</h3>
          </div>
          <p className="text-sm text-mblack/60 mt-1">{service.description}</p>
          <p className="text-xs text-mblack/40 mt-2">
            Duree: {service.duration}
          </p>
        </div>
        <div className="text-right ml-4 flex-shrink-0">
          <p className="text-xl font-bold text-orchid">{service.price_note}</p>
          <a
            href="https://mwema-beaut-inc.square.site"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block bg-pink text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-pink/90 transition-colors"
          >
            Reserver
          </a>
        </div>
      </div>
    </div>
  );
}
