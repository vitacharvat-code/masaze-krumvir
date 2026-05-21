const certifications = [
  {
    title: "Sportovní masáž",
    description: "Technika zaměřená na sportovce a fyzicky aktivní klienty, regenerace a prevence zranění.",
  },
  {
    title: "Relaxační masáž",
    description: "Komplexní přístupy k celotělové relaxaci, uvolnění stresu a harmonizaci organismu.",
  },
  {
    title: "Baňkování",
    description: "Terapeutická metoda s využitím vakuových baněk pro hlubokou práci se svalovinou.",
  },
  {
    title: "Kinesio tejping",
    description: "Aplikace elastických tejpů pro podporu svalů, kloubů a urychlení regenerace.",
  },
  {
    title: "Masáž lávovými kameny",
    description: "Prohřívací masáž vulkanickými kameny pro hluboké uvolnění svalů a navození pohody.",
  },
];

export default function Certifications() {
  return (
    <section id="certifikace" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[#CE1126] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Vzdělání
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#002B7F] leading-tight mb-6">
              Certifikace
            </h2>
            <div className="w-16 h-px bg-[#FCD116] mb-6" />
            <p className="text-gray-500 leading-relaxed text-lg">
              Každá technika, kterou nabízím, je podložena absolvovaným kurzem.
              Vzdělávám se průběžně, abych vám mohl nabídnout skutečně kvalitní
              péči.
            </p>
            <div className="mt-10 p-6 bg-[#002B7F]/5 border border-[#002B7F]/10 rounded-2xl">
              <p className="font-display font-bold text-4xl text-[#002B7F] mb-1">5</p>
              <p className="text-gray-500 text-sm">absolvovaných kurzů</p>
            </div>
          </div>

          {/* Right: list */}
          <div className="flex flex-col gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-[#FCD116]/60 hover:shadow-md transition-all duration-200 bg-white group"
              >
                <div className="flex-shrink-0 w-10 flex items-start pt-0.5">
                  <span className="text-sm font-bold text-[#FCD116] bg-[#002B7F] px-2 py-0.5 rounded-full tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#002B7F] text-base mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
