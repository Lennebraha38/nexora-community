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
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const s = () => setScroll(window.scrollY > 100);
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
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
      >
        <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
          scroll
            ? "bg-black/80 backdrop-blur-xl border-white/10"
            : "bg-transparent border-transparent"
        }`}>
          <a href="#top" className="flex items-center gap-2 px-3 py-1.5 mr-1">
            <div className="w-6 h-6 rounded-md bg-[#008cff] flex items-center justify-center">
              <span className="font-display font-bold text-white text-[10px]">N</span>
            </div>
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3 py-1.5 text-[12px] font-medium rounded-full transition-colors ${
                active === l.href.replace("#", "") ? "text-white" : "text-white/30 hover:text-white/60"
              }`}
            >
              {active === l.href.replace("#", "") && (
                <motion.div
                  layoutId="np"
                  className="absolute inset-0 bg-white/8 rounded-full"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}

          <a href="#iletisim" className="ml-1 px-4 py-1.5 text-[12px] font-semibold bg-[#008cff] text-white rounded-full">
            Katil
          </a>
        </div>
      </motion.nav>

      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-50 md:hidden p-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 text-white/50 hover:text-white"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-4"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-display font-bold text-white/40 hover:text-white transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#iletisim"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 px-8 py-3 bg-[#008cff] text-white font-semibold rounded-full"
            >
              Katil
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
