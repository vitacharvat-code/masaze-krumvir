import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#001A52] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-white">Masáže Krumvír</p>
                <p className="text-[#FCD116] text-xs tracking-widest">Cristian Balaci</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Mobilní masér přijíždějící přímo k vám — Krumvíř a okolí.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#FCD116] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Nabídka
            </p>
            <ul className="flex flex-col gap-2">
              {["Sportovní masáž", "Rekondiční masáž", "Relaxační masáž", "Baňkování", "Tejping"].map(
                (s) => (
                  <li key={s}>
                    <a
                      href="#sluzby"
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#FCD116] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Kontakt
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+420734440215"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  +420 734 440 215
                </a>
              </li>
              <li>
                <a
                  href="mailto:cristian@masazekrumvir.cz"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  cristian@masazekrumvir.cz
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">Krumvíř a okolí</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {year} Cristian Balaci. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-3 h-5 inline-block rounded-sm bg-[#002B7F] border border-white/20" />
            <span className="w-3 h-5 inline-block rounded-sm bg-[#FCD116]" />
            <span className="w-3 h-5 inline-block rounded-sm bg-[#CE1126]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
