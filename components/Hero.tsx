import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#faf9f7] flex flex-col lg:flex-row overflow-hidden pt-16 sm:pt-20">
      {/* Left: editorial content */}
      <div className="flex-1 flex items-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
        <div className="w-full max-w-lg">
          {/* Eyebrow */}
          <p className="text-[#CE1126] text-xs font-semibold tracking-[0.3em] uppercase mb-8">
            Krumvíř · Mobilní masér
          </p>

          {/* Headline */}
          <h1 className="font-display leading-[1.05] mb-6">
            <span className="text-5xl sm:text-6xl xl:text-[4.5rem] font-bold text-[#1a1a1a] block">
              Masáže,
            </span>
            <span className="text-5xl sm:text-6xl xl:text-[4.5rem] font-bold text-[#1a1a1a] block">
              které přijdou
            </span>
            <span className="text-5xl sm:text-6xl xl:text-[4.5rem] font-bold italic text-[#002B7F] block">
              za vámi.
            </span>
          </h1>

          {/* Decorative rule + name */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#FCD116]" />
            <span className="text-gray-400 text-xs tracking-[0.25em] uppercase">
              Cristian Balaci
            </span>
          </div>

          {/* Body */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-sm">
            Profesionální sportovní, rekondiční a relaxační masáže přímo u vás
            doma. Bez čekáren, bez dopravy — váš čas je vzácný.
          </p>

          {/* CTAs — sharp, not rounded-full */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="bg-[#002B7F] text-white px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:bg-[#001E5E] transition-colors text-center"
            >
              Objednat masáž
            </a>
            <a
              href="#sluzby"
              className="border border-[#002B7F]/25 text-[#002B7F] px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase hover:border-[#002B7F] hover:bg-[#002B7F]/5 transition-colors text-center"
            >
              Naše služby
            </a>
          </div>
        </div>
      </div>

      {/* Right: photo panel */}
      <div className="relative lg:w-[45%] min-h-[55vw] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80"
          alt="Masáž"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle blue overlay */}
        <div className="absolute inset-0 bg-[#002B7F]/10" />

        {/* Name badge — editorial detail */}
        <div className="absolute bottom-8 left-8 bg-white px-5 py-3 shadow-lg hidden lg:block">
          <p className="font-display font-bold text-[#002B7F] text-lg leading-tight">
            Cristian Balaci
          </p>
          <p className="text-gray-400 text-xs tracking-[0.2em] uppercase mt-0.5">
            Certifikovaný masér
          </p>
        </div>

        {/* Yellow accent strip */}
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#FCD116]" />
      </div>
    </section>
  );
}
