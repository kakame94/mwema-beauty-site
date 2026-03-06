import Link from "next/link";
import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-mblack text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-3">
              Mwema Beauty
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Hair, Body & Locs Experts<br />
              Soins naturels artisanaux faits a Montreal.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/mwema.beauty/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@mwema.beauty" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.48a4.85 4.85 0 01-3.77-1.77V6.69h3.77z"/></svg>
              </a>
              <a href="https://www.threads.com/@mwema.beauty" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.773.786c-1.022-3.678-3.594-5.517-7.548-5.539-2.748.02-4.772.916-6.02 2.668-1.19 1.665-1.814 4.04-1.84 7.07v.01c.025 3.027.65 5.403 1.84 7.07 1.25 1.753 3.272 2.65 6.02 2.668 2.207-.013 3.86-.487 5.2-1.49 1.534-1.15 2.2-2.79 2.2-4.103h-.007c0-1.553-.762-2.813-2.2-3.646-1.022-.59-2.37-.927-3.904-.972a8.78 8.78 0 00-.334-.004c-1.168 0-2.148.208-2.846.607-.748.427-1.127 1.032-1.127 1.8 0 .752.333 1.32.99 1.69.615.346 1.456.528 2.49.541l.164.002c.946 0 1.753-.14 2.328-.387.502-.217.756-.496.756-.837l2.77.003c-.005 1.453-.782 2.593-2.25 3.293-.974.465-2.176.716-3.604.734h-.114c-1.546-.026-2.876-.358-3.954-.988-1.236-.722-1.863-1.784-1.863-3.153 0-1.382.695-2.504 2.065-3.333 1.15-.696 2.657-1.065 4.356-1.065.14 0 .282.003.425.008 2.065.06 3.803.543 5.158 1.432 1.655 1.086 2.532 2.764 2.532 4.844 0 2.143-1.03 4.46-3.216 6.097-1.837 1.375-4.144 2.074-6.86 2.074z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/boutique" className="hover:text-white transition-colors">Boutique</Link></li>
              <li><Link href="/salon" className="hover:text-white transition-colors">Salon & Services</Link></li>
              <li><Link href="/histoire" className="hover:text-white transition-colors">Notre Histoire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Gertrude, Verdun, QC H4G 1R6
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:5145944350" className="hover:text-white transition-colors">(514) 594-4350</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:samia@mwemabeauty.com" className="hover:text-white transition-colors">samia@mwemabeauty.com</a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Mar-Sam: 8h-19h | Dim: 7h-16h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          &copy; 2025 Mwema Beauty. Tous droits reserves.
        </div>
      </div>
    </footer>
  );
}
