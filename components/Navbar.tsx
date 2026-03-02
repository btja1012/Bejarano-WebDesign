"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { translations, type Lang } from "@/lib/translations";

const langOptions: { code: Lang; label: string; href: string }[] = [
  { code: "en", label: "EN", href: "/" },
  { code: "es", label: "ES", href: "/es" },
  { code: "ja", label: "JP", href: "/ja" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const lang: Lang = pathname.startsWith("/es")
    ? "es"
    : pathname.startsWith("/ja")
    ? "ja"
    : "en";

  const { links } = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href={langOptions.find((l) => l.code === lang)?.href ?? "/"} className="flex items-center gap-2 group">
          <span className="text-2xl font-light text-white/30 group-hover:text-white/60 transition-colors select-none">川</span>
          <span className="text-sm font-semibold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">Kawa</span>
        </a>

        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/40 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-1">
          {langOptions.map((opt, i) => (
            <span key={opt.code} className="flex items-center">
              {i > 0 && <span className="text-white/15 mx-1 text-xs">·</span>}
              <a
                href={opt.href}
                className={`text-xs tracking-widest transition-colors ${
                  lang === opt.code
                    ? "text-white/70"
                    : "text-white/20 hover:text-white/50"
                }`}
              >
                {opt.label}
              </a>
            </span>
          ))}
        </div>

        <button
          className="md:hidden text-white/40 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/5 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/40 hover:text-white transition-colors text-xs font-medium tracking-widest uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
            {langOptions.map((opt) => (
              <a
                key={opt.code}
                href={opt.href}
                className={`text-xs tracking-widest transition-colors ${
                  lang === opt.code
                    ? "text-white/70"
                    : "text-white/20 hover:text-white/50"
                }`}
              >
                {opt.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
