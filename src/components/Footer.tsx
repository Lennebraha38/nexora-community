"use client";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.35)]">
                <span className="font-display font-bold text-white text-[11px]">N</span>
              </div>
              <span className="font-display font-semibold text-[14px] tracking-tight">Nexora</span>
            </div>
            <p className="text-white/30 text-[12px] leading-relaxed max-w-xs">
              Turkiye&apos;nin en aktif gelistirici toplulugu. Birlikte ogreniyoruz, buyuyoruz ve uretiyoruz.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display font-semibold text-[12px] mb-3 text-white/60">Topluluk</h4>
              <ul className="space-y-2">
                {[{ l: "Ozellikler", h: "#ozellikler" }, { l: "Misyon", h: "#misyon" }, { l: "Vizyon", h: "#vizyon" }].map((x) => (
                  <li key={x.h}><a href={x.h} className="text-[12px] text-white/35 hover:text-neon-purple transition-colors">{x.l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[12px] mb-3 text-white/60">Iletisim</h4>
              <ul className="space-y-2">
                <li><a href="mailto:nexoratoplulugu@gmail.com" className="text-[12px] text-white/35 hover:text-neon-cyan transition-colors">E-posta</a></li>
                <li><a href="#iletisim" className="text-[12px] text-white/35 hover:text-neon-cyan transition-colors">Form</a></li>
              </ul>
            </div>
          </div>
          <div className="flex md:justify-end gap-2">
            <a href="https://github.com/nexora-community" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-neon-purple/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/nexoratopluluk" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-white/20 font-mono">&copy; 2024 Nexora Toplulugu</p>
          <p className="text-[10px] text-white/20 font-mono">Istanbul &middot; Uzaktan</p>
        </div>
      </div>
    </footer>
  );
}