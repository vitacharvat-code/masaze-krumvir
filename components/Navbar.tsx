"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#certifikace", label: "Certifikace" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#002B7F] shadow-lg"
          : "bg-[#002B7F]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group" onClick={handleNavClick}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
            <Image src="/logo.svg" alt="Masáže Krumvír" fill className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-white text-lg leading-tight block">
              Masáže Krumvír
            </span>
            <span className="text-[#FCD116] text-xs tracking-widest uppercase">
              Cristian Balaci
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-[#FCD116] transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-[#FCD116] text-[#002B7F] px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition-colors"
          >
            Objednat se
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#002B7F] border-t border-white/10`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              className="text-white/80 hover:text-[#FCD116] transition-colors text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className="bg-[#FCD116] text-[#002B7F] px-5 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-yellow-300 transition-colors"
          >
            Objednat se
          </a>
        </div>
      </div>
    </header>
  );
}
