"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/salon", label: "Salon & Services" },
  { href: "/histoire", label: "Notre Histoire" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orchid/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Mwema Beauty"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-mblack font-[family-name:var(--font-heading)]">
              Mwema Beauty
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-mblack/70 hover:text-orchid transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:5145944350"
              className="bg-orchid text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orchid/90 transition-colors"
            >
              (514) 594-4350
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-mblack" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orchid/10 animate-fade-in-up">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-mblack/80 hover:text-orchid py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:5145944350"
              className="block bg-orchid text-white px-4 py-3 rounded-full text-center font-medium"
            >
              Appeler (514) 594-4350
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
