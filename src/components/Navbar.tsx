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
  const [active, setActive] = useState("");

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", s, { passive: true });
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => {
    const secs = document.querySelectorAll("[data-nav]");
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => { if (x.isIntersecting) setActive(x.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
      >
        <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0916]/90 backdrop-blur-xl border border-neon-purple/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            : "bg-transparent border border-transparent"
        }`}>
          <a href="#top" className="flex items-center gap-2 pl-2 pr-3 py-1 mr-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <span className="font-display font-bold text-white text-[11px]">N</span>
            </div>
            <span className="font-display font-semibold text-[13px] tracking-tight">Nexora</span>
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-1.5 text-[12px] font-medium rounded-full transition-colors ${
                active === l.href.replace("#", "") ? "text-white" : "text-white/35 hover:text-white/70"
              }`}
            >
              {active === l.href.replace("#", "") && (
                <motion.div
                  layoutId="navglow"
                  className="absolute inset-0 bg-white/10 rounded-full border border-neon-purple/25"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}

          <a href="#iletisim" className="btn-neon ml-1 px-4 py-1.5 text-[12px] font-semibold text-white rounded-full">
            Katil
          </a>
        </div>
      </motion.header>

      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-4 right-4 z-50 md:hidden p-2.5 rounded-full bg-[#0a0916]/90 backdrop-blur-xl border border-neon-purple/20 text-white/60 hover:text-white transition-all ${
          scrolled || open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Menu"
      >
        {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#05050a]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-grid opacity-40" />
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative text-2xl font-display font-bold text-white/50 hover:text-white transition-colors my-2"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#iletisim"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="btn-neon mt-8 px-8 py-3 text-white font-semibold rounded-full"
            >
              Katil
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}