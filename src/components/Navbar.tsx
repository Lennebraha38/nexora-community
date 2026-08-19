"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Misyon", href: "#misyon" },
  { label: "Vizyon", href: "#vizyon" },
  { label: "Neler Sunuyoruz", href: "#ozellikler" },
  { label: "Iletisim", href: "#iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 h-16 lg:h-[72px]">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="font-display font-bold text-white text-sm">N</span>
          </div>
          <span className="font-display font-semibold text-[15px] tracking-tight text-text">
            Nexora
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-[13px] font-medium text-text-muted hover:text-text rounded-lg hover:bg-white/[0.04] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="ml-3 px-5 py-2 text-[13px] font-semibold bg-accent text-white rounded-lg hover:bg-accent-soft transition-colors duration-200"
          >
            Katil
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-text-muted hover:text-text"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-text-muted hover:text-text rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setOpen(false)}
                className="block mt-2 px-3 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg text-center"
              >
                Katil
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
