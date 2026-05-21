export default function Contact() {
  return (
    <section id="kontakt" className="section-padding bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#CE1126] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Ozvěte se
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#002B7F] leading-tight mb-4">
            Kontakt
          </h2>
          <div className="w-16 h-1 bg-[#FCD116] rounded mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Zavolejte nebo napište — ozvu se co nejdříve a domluvíme termín,
            který vám vyhovuje.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Phone — primary, highlighted */}
          <a
            href="tel:+420734440215"
            className="flex flex-col items-center text-center gap-4 p-10 bg-[#002B7F] text-white hover:bg-[#001E5E] transition-colors group sm:col-span-1"
          >
            <div className="w-14 h-14 bg-[#FCD116] flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Telefon</p>
              <p className="font-display font-bold text-2xl group-hover:text-[#FCD116] transition-colors">
                +420 734 440 215
              </p>
              <p className="text-white/40 text-sm mt-2">Volejte nebo SMS</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:balacicristian8@gmail.com"
            className="flex flex-col items-center text-center gap-4 p-10 bg-white border border-gray-100 hover:border-[#002B7F]/20 hover:shadow-md transition-all group"
          >
            <div className="w-14 h-14 bg-[#002B7F]/8 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-2">E-mail</p>
              <p className="font-display font-bold text-lg text-[#002B7F] group-hover:text-[#CE1126] transition-colors break-all">
                balacicristian8@gmail.com
              </p>
              <p className="text-gray-400 text-sm mt-2">Odpovím do 24 hodin</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center text-center gap-4 p-10 bg-white border border-gray-100">
            <div className="w-14 h-14 bg-[#002B7F]/8 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-2">Oblast</p>
              <p className="font-display font-bold text-lg text-[#002B7F]">
                Krumvíř a okolí
              </p>
              <p className="text-gray-400 text-sm mt-2">Přijedu přímo k vám</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
