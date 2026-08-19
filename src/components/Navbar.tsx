"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Misyon", href: "#misyon" },
  { label: "Vizyon", href: "#vizyon" },
  { label: "Ozellikler", href: "#ozellikler" },
  { label: "Iletisim", href: "#iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-accent/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-neon flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-gradient">NEXORA</span>
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#iletisim"
              className="ml-4 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent to-accent-dark text-white rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Katil
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted hover:text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-muted hover:text-foreground hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#iletisim"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-lg text-center font-medium"
              >
                Katil
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
