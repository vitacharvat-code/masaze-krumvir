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
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group" onClick={handleNavClick}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
            <Image src="/logo.svg" alt="Masáže Krumvíř" fill className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-[#002B7F] text-lg leading-tight block">
              Masáže Krumvíř
            </span>
            <span className="text-[#CE1126] text-xs tracking-widest uppercase">
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
              className="text-[#002B7F]/70 hover:text-[#002B7F] transition-colors text-sm font-medium tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-[#002B7F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#001E5E] transition-colors"
          >
            Objednat se
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#002B7F] p-2"
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
        } bg-white border-t border-gray-100`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNavClick}
              className="text-[#002B7F]/70 hover:text-[#002B7F] transition-colors text-base font-medium py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className="bg-[#002B7F] text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center hover:bg-[#001E5E] transition-colors"
          >
            Objednat se
          </a>
        </div>
      </div>
    </header>
  );
}
