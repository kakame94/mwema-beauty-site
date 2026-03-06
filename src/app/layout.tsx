import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Mwema Beauty | Hair, Body & Locs Experts - Montreal",
  description:
    "Salon de coiffure specialise en locs, tresses et soins capillaires naturels a Montreal. Produits artisanaux Sheaphoria. Fondee par Samia Fahome.",
  keywords: "locs montreal, tresses, coiffure naturelle, sheaphoria, beurre corporel, mwema beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
