"use client";

import { motion } from "framer-motion";
import { Zap, Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="glow-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-neon flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-gradient">NEXORA</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Turkiye&apos;nin en aktif gelistirici toplulugu. Birlikte
              ogreniyoruz, buyuyoruz ve uretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-3">Topluluk</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#ozellikler" className="hover:text-accent transition-colors">
                    Ozellikler
                  </a>
                </li>
                <li>
                  <a href="#misyon" className="hover:text-accent transition-colors">
                    Misyon
                  </a>
                </li>
                <li>
                  <a href="#vizyon" className="hover:text-accent transition-colors">
                    Vizyon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Kaynaklar</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Dokumantasyon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="hover:text-accent transition-colors">
                    Iletisim
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:justify-end gap-3">
            <motion.a
              href="https://github.com/nexora-community"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/nexoratopluluk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon/20 hover:text-neon transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted font-mono">
            &copy; 2024 Nexora Toplulugu. Tum haklari saklidir.
          </p>
          <p className="text-xs text-muted flex items-center gap-1">
            <Heart className="w-3 h-3 text-red-500" /> ile yapildi
          </p>
        </div>
      </div>
    </footer>
  );
}
