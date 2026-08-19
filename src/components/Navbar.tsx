"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Misyon", href: "#misyon" },
  { label: "Vizyon", href: "#vizyon" },
  { label: "Ozellikler", href: "#ozellikler" },
  { label: "Iletisim", href: "#iletisim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1200px] flex items-center justify-between px-6 lg:px-10 h-[60px]">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow">
            <span className="font-display font-bold text-white text-[13px]">N</span>
          </div>
          <span className="font-display font-semibold text-[16px] tracking-[-0.02em]">
            Nexora
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-0.5 p-1 rounded-xl bg-white/[0.03] border border-border/50">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-[7px] text-[13px] font-medium rounded-lg transition-all duration-200 ${
                  activeSection === l.href.replace("#", "")
                    ? "text-text"
                    : "text-text-dim hover:text-text-muted"
                }`}
              >
                {activeSection === l.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.06] border border-white/[0.06] rounded-lg"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </div>

          <a
            href="#iletisim"
            className="ml-4 px-5 py-[7px] text-[13px] font-semibold bg-accent text-white rounded-lg hover:bg-accent-soft transition-all duration-200 shadow-md shadow-accent/15 hover:shadow-accent/30"
          >
            Katil
          </a>
        </div>

        {/* Mobile */}
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
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border"
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
                className="block mt-3 px-3 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg text-center"
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
