"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Poptávka masáže – ${form.name}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nTelefon: ${form.phone}\n\nZpráva:\n${form.message}`
    );
    window.location.href = `mailto:cristian@masazekrumvir.cz?subject=${subject}&body=${body}`;
    setSent(true);
  };

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
            Zavolejte, napište e-mail nebo vyplňte formulář — ozvu se co
            nejdříve a domluvíme termín, který vám vyhovuje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <a
              href="tel:+420734440215"
              className="flex items-center gap-5 p-6 bg-[#002B7F] text-white rounded-2xl hover:bg-[#001E5E] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#FCD116] rounded-xl flex items-center justify-center text-[#002B7F] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Telefon</p>
                <p className="font-semibold text-lg group-hover:text-[#FCD116] transition-colors">
                  +420 734 440 215
                </p>
              </div>
            </a>

            <a
              href="mailto:cristian@masazekrumvir.cz"
              className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#FCD116]/50 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-[#002B7F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">E-mail</p>
                <p className="font-semibold text-[#002B7F] group-hover:text-[#CE1126] transition-colors">
                  cristian@masazekrumvir.cz
                </p>
              </div>
            </a>

            <div className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl">
              <div className="w-12 h-12 bg-[#002B7F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Oblast</p>
                <p className="font-semibold text-[#002B7F]">Krumvíř a okolí</p>
                <p className="text-gray-400 text-sm">Přijedu přímo k vám</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#FCD116]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#002B7F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-[#002B7F] mb-2">
                  Zpráva připravena!
                </h3>
                <p className="text-gray-500 text-sm">
                  Otevřelo se vám okno e-mailového klienta. Ozvu se brzy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-xl text-[#002B7F] mb-2">
                  Napište mi
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jan Novák"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B7F] focus:ring-2 focus:ring-[#002B7F]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Telefon (nepovinné)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+420 xxx xxx xxx"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B7F] focus:ring-2 focus:ring-[#002B7F]/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">
                    Zpráva
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Jaký typ masáže vás zajímá? Kdy byste se chtěli objednat?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#002B7F] focus:ring-2 focus:ring-[#002B7F]/10 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#002B7F] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#001E5E] transition-colors mt-1"
                >
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
