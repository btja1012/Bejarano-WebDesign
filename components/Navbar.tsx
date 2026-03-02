"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Source", href: "#philosophy" },
  { label: "Journey", href: "#timeline" },
  { label: "Work", href: "#projects" },
  { label: "Connect", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <a href="#" className="flex items-center gap-2 group">
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
        </div>
      )}
    </nav>
  );
}
