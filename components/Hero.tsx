import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80"
          alt="Masáž - hero pozadí"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B7F]/90 via-[#002B7F]/75 to-black/60" />
      </div>

      {/* Decorative gold bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FCD116]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <p className="text-[#FCD116] text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-4">
          Mobilní masér · Krumvíř a okolí
        </p>
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Masáže, které{" "}
          <span className="text-[#FCD116]">přijdou za vámi</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Profesionální sportovní, rekondiční a relaxační masáže přímo u vás doma.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="bg-[#FCD116] text-[#002B7F] px-8 py-4 rounded-full font-semibold text-base hover:bg-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5"
          >
            Objednat masáž
          </a>
          <a
            href="#sluzby"
            className="border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white hover:bg-white/10 transition-all"
          >
            Zobrazit služby
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
        <span>Scrollujte</span>
        <div className="w-0.5 h-8 bg-white/20 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#FCD116]/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
