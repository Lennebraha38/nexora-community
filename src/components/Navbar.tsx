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
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const secs = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (e) => {
        e.forEach((x) => {
          if (x.isIntersecting) setActive(x.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    secs.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Hero'da gosterilen basit logo - scroll yokken */}
      <div
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          show ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-10 h-[72px] max-w-[1200px] mx-auto">
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
              <span className="font-display font-bold text-white text-[13px]">N</span>
            </div>
            <span className="font-display font-semibold text-[16px] tracking-[-0.02em]">
              Nexora
            </span>
          </a>
        </div>
      </div>

      {/* Scroll'dan sonra gorunen floating nav */}
      <motion.div
        initial={false}
        animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <nav className="flex items-center gap-2 px-2 py-2 rounded-2xl bg-[#131319]/90 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/50">
          <a href="#top" className="flex items-center gap-2 px-3 py-1.5 mr-1">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
              <span className="font-display font-bold text-white text-[10px]">N</span>
            </div>
          </a>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-3.5 py-[6px] text-[12px] font-medium rounded-xl transition-colors duration-200 ${
                active === l.href.replace("#", "")
                  ? "text-white"
                  : "text-[#5c5c6b] hover:text-[#9d9daa]"
              }`}
            >
              {active === l.href.replace("#", "") && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-white/[0.07] rounded-xl"
                  transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </a>
          ))}

          <a
            href="#iletisim"
            className="ml-1 px-4 py-[6px] text-[12px] font-semibold bg-accent text-white rounded-xl hover:bg-accent-2 transition-colors"
          >
            Katil
          </a>
        </nav>
      </motion.div>

      {/* Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed top-4 right-4 z-50 md:hidden p-2.5 rounded-xl bg-[#131319]/90 backdrop-blur-xl border border-white/[0.06] text-[#9d9daa] hover:text-white transition-all ${
          show || open ? "opacity-100" : "opacity-0 pointer-events-none"
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
            className="fixed inset-0 z-40 bg-[#07070a]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="space-y-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="block text-center px-8 py-4 text-xl font-display font-semibold text-[#9d9daa] hover:text-white transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#iletisim"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="block mt-6 mx-auto px-10 py-3.5 bg-accent text-white text-lg font-semibold rounded-xl text-center w-fit"
              >
                Katil
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
