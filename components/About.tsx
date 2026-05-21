import Image from "next/image";

export default function About() {
  return (
    <section id="o-mne" className="section-padding bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Cristi_certificate.png"
                alt="Cristian Balaci - masér"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#002B7F] text-white rounded-xl p-5 shadow-xl max-w-[180px]">
              <p className="font-display text-3xl font-bold text-[#FCD116]">13+</p>
              <p className="text-sm leading-tight mt-1 text-white/80">
                let zkušeností
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#CE1126] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              O mně
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#002B7F] leading-tight mb-6">
              Cristian Balaci
            </h2>
            <div className="w-16 h-1 bg-[#FCD116] rounded mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Jsem <strong className="text-[#002B7F]">mobilní masér</strong> působící v Krumvíři a celém okolí. Věřím, že
              kvalitní masáž by neměla být privilegiem, ale zaslouženou odměnou.
              Přijedu přímo za vámi, ať jste doma, v práci nebo na tréninku
              sportovního klubu.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Mám za sebou kurzy sportovní masáže, relaxačních technik,
              baňkování, tejpingu i lávových kamenů. Každou masáž přizpůsobuji
              individuálním potřebám klienta, ať hledáte regeneraci po sportu,
              úlevu od stresu, nebo pomoc s chronickým napětím.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Přináším s sebou všechno potřebné vybavení. Vám stačí jen pohodlné
              místo a chuť se uvolnit.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Mobilní masáže", "Jižní Morava", "Individuální přístup"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-[#002B7F]/10 text-[#002B7F] px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
