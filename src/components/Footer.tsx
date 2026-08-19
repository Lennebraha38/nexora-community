"use client";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-3 border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1100px] px-6 py-12 md:py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-cyan flex items-center justify-center">
                <span className="font-display font-bold text-white text-[11px]">N</span>
              </div>
              <span className="font-display font-semibold text-[14px] tracking-[-0.02em]">Nexora</span>
            </div>
            <p className="text-[#9d9daa] text-[13px] leading-relaxed max-w-xs">
              Turkiye&apos;nin en aktif gelistirici toplulugu.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display font-semibold text-[12px] mb-2.5">Topluluk</h4>
              <ul className="space-y-1.5">
                {[{ l: "Ozellikler", h: "#ozellikler" }, { l: "Misyon", h: "#misyon" }, { l: "Vizyon", h: "#vizyon" }].map((x) => (
                  <li key={x.h}><a href={x.h} className="text-[12px] text-[#9d9daa] hover:text-[#f0f0f2] transition-colors">{x.l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[12px] mb-2.5">Iletisim</h4>
              <ul className="space-y-1.5">
                <li><a href="mailto:nexoratoplulugu@gmail.com" className="text-[12px] text-[#9d9daa] hover:text-[#f0f0f2] transition-colors">E-posta</a></li>
                <li><a href="#iletisim" className="text-[12px] text-[#9d9daa] hover:text-[#f0f0f2] transition-colors">Form</a></li>
              </ul>
            </div>
          </div>
          <div className="flex md:justify-end gap-2">
            <a href="https://github.com/nexora-community" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-[#5c5c6b] hover:text-[#f0f0f2] hover:border-white/[0.08] transition-all" aria-label="GitHub">
              <Github className="w-3.5 h-3.5" />
            </a>
            <a href="https://twitter.com/nexoratopluluk" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-center text-[#5c5c6b] hover:text-[#f0f0f2] hover:border-white/[0.08] transition-all" aria-label="Twitter">
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <div className="pt-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-[#5c5c6b] font-mono">&copy; 2024 Nexora Toplulugu</p>
          <p className="text-[10px] text-[#5c5c6b] font-mono">Istanbul &middot; Uzaktan</p>
        </div>
      </div>
    </footer>
  );
}
