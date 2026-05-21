import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#001A52]">
      {/* Big CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 border-b border-white/10">
        <p className="text-[#FCD116] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          Zavolejte nebo napište
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <a
              href="tel:+420734440215"
              className="font-display font-bold text-white leading-none hover:text-[#FCD116] transition-colors block"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
            >
              +420 734 440 215
            </a>
            <a
              href="mailto:cristian@masazekrumvir.cz"
              className="text-white/40 hover:text-white/80 text-sm mt-3 block transition-colors"
            >
              cristian@masazekrumvir.cz
            </a>
            <p className="text-white/30 text-sm mt-1">Krumvíř a okolí</p>
          </div>
          <a
            href="#kontakt"
            className="inline-block bg-[#FCD116] text-[#002B7F] px-8 py-4 font-semibold text-sm tracking-[0.08em] uppercase hover:bg-yellow-300 transition-colors self-start lg:self-auto flex-shrink-0"
          >
            Objednat masáž
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 relative flex-shrink-0">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-white/30 text-xs">
            © {year} Cristian Balaci. Všechna práva vyhrazena.
          </span>
        </div>
        {/* Romanian flag colours */}
        <div className="flex items-center gap-1">
          <span className="w-3 h-5 inline-block bg-[#003DA5] border border-white/10" />
          <span className="w-3 h-5 inline-block bg-[#FCD116]" />
          <span className="w-3 h-5 inline-block bg-[#CE1126]" />
        </div>
      </div>
    </footer>
  );
}
