import Image from "next/image";

const services = [
  {
    title: "Sportovní masáž",
    description:
      "Cílená masáž pro sportovce i aktivní jedince. Pomáhá s regenerací svalů po zátěži, urychluje hojení, předchází zraněním a zvyšuje sportovní výkonnost.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    accent: "#002B7F",
  },
  {
    title: "Rekondiční masáž",
    description:
      "Hluboká masáž zaměřená na celkovou obnovu organismu. Uvolňuje přetížené svalové skupiny, obnovuje pohyblivost a pomáhá při chronickém napětí.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
    accent: "#002B7F",
  },
  {
    title: "Relaxační masáž",
    description:
      "Celotělová masáž pro úlevu od stresu a navození hlubokého klidu. Jemné harmonické techniky uklidňují nervový systém a obnovují vnitřní rovnováhu.",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=600&q=80",
    accent: "#002B7F",
  },
  {
    title: "Baňkování",
    description:
      "Tradiční terapeutická metoda využívající podtlak baněk. Zlepšuje prokrvení, podporuje lymfatický systém, uvolňuje hluboké svalové napětí a detoxikuje tkáně.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=600&q=80",
    accent: "#CE1126",
  },
  {
    title: "Tejping",
    description:
      "Aplikace kinesiotejpů na svalové a kloubní partie. Redukuje bolest, snižuje otoky, podporuje správnou svalovou funkci a urychluje regeneraci po zranění.",
    image:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80",
    accent: "#002B7F",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="section-padding bg-[#002B7F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#FCD116] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Co nabízím
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Nabídka masáží
          </h2>
          <div className="w-16 h-1 bg-[#FCD116] rounded mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FCD116]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B7F]/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#FCD116] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[#FCD116] rounded-2xl p-6 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <p className="font-display font-bold text-2xl text-[#002B7F] mb-3">
                Máte zájem?
              </p>
              <p className="text-[#002B7F]/75 text-sm leading-relaxed mb-6">
                Přijedu přímo za vámi. Stačí se ozvat a domluvíme termín, který
                vám vyhovuje.
              </p>
            </div>
            <a
              href="#kontakt"
              className="block text-center bg-[#002B7F] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#001E5E] transition-colors"
            >
              Kontaktujte mě
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
