export default function HistoirePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-lavender/30 to-cream py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-mblack font-[family-name:var(--font-heading)] leading-tight">
            Notre Histoire
          </h1>
          <p className="mt-4 text-xl text-mblack/60 italic">
            &laquo; Mwema &raquo; signifie bonte et beaute en swahili
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-mblack font-[family-name:var(--font-heading)] mb-4">
            La naissance de Mwema Beauty
          </h2>
          <p className="text-mblack/70 leading-relaxed">
            Mwema Beauty est ne de la vision de Samia Fahome, passionnee par les
            soins capillaires naturels et les locs. Installee a Montreal, dans le
            quartier de Verdun, Samia a cree un espace ou chaque cliente peut
            embrasser et sublimer sa beaute naturelle.
          </p>
          <p className="text-mblack/70 leading-relaxed mt-4">
            Le nom &laquo; Mwema &raquo; vient du swahili et porte en lui les
            valeurs fondatrices du salon : la bonte envers soi-meme, la beaute
            dans sa forme la plus authentique, et le soin apporte a chaque
            personne qui franchit nos portes.
          </p>
        </div>

        <div className="bg-orchid/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-mblack font-[family-name:var(--font-heading)] mb-4">
            Notre expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-orchid mb-2">Locs & Soins capillaires</h3>
              <p className="text-sm text-mblack/70 leading-relaxed">
                Specialistes en microlocs, sistalocs, interlocking, retwist,
                extensions et reparation. Chaque tete de locs est unique, et
                nous adaptons nos techniques a votre texture et vos objectifs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orchid mb-2">Tresses & Coiffure</h3>
              <p className="text-sm text-mblack/70 leading-relaxed">
                Cornrows, tresses senegalaises, tresses africaines et coiffure
                naturelle. Des styles protecteurs qui respectent vos cheveux
                tout en vous sublimant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orchid mb-2">Produits Sheaphoria</h3>
              <p className="text-sm text-mblack/70 leading-relaxed">
                Notre ligne de beurres corporels artisanaux a base de karite
                pur. Fabriques a Montreal avec des ingredients naturels,
                disponibles en plusieurs parfums et en version sans fragrance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-orchid mb-2">Formation</h3>
              <p className="text-sm text-mblack/70 leading-relaxed">
                Samia partage son expertise en offrant des formations
                professionnelles en interlocking et techniques de locs pour
                les coiffeuses et coiffeurs qui souhaitent developper leurs
                competences.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-mblack font-[family-name:var(--font-heading)] mb-4">
            Nos valeurs
          </h2>
          <div className="space-y-4">
            {[
              { title: "Naturel", desc: "Ingredients naturels et biologiques. Pas de produits chimiques agressifs. Respect de vos cheveux et de votre peau." },
              { title: "Artisanal", desc: "Chaque produit Sheaphoria est fabrique a la main a Montreal avec soin et attention aux details." },
              { title: "Communaute", desc: "Plus de 5 600 abonnes sur Instagram nous font confiance. Mwema Beauty, c'est une famille." },
              { title: "Expertise", desc: "Des annees d'experience en locs et coiffure naturelle. Samia forme aussi la prochaine generation de specialistes." },
            ].map((v) => (
              <div key={v.title} className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-orchid rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-mblack">{v.title}</h3>
                  <p className="text-sm text-mblack/60">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orchid text-white py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-3">
            Venez nous rencontrer
          </h2>
          <p className="text-white/80 mb-6">
            3879 Rue Gertrude, Montreal, QC H4G 1R6<br />
            Mardi - Samedi : 9h - 17h
          </p>
          <a
            href="tel:5145944350"
            className="inline-block bg-yellow text-mblack px-8 py-3 rounded-full font-semibold hover:bg-yellow/90 transition-colors"
          >
            Appeler (514) 594-4350
          </a>
        </div>
      </section>
    </div>
  );
}
