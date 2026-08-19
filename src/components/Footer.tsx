"use client";

import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-start mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">N</span>
              </div>
              <span className="font-display font-semibold text-[15px] tracking-tight">
                Nexora
              </span>
            </div>
            <p className="text-text-muted text-[14px] leading-relaxed max-w-xs">
              Turkiye&apos;nin en aktif gelistirici toplulugu. Birlikte
              ogreniyoruz, buyuyoruz ve uretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display font-semibold text-[13px] mb-3">Topluluk</h4>
              <ul className="space-y-2">
                {[
                  { label: "Ozellikler", href: "#ozellikler" },
                  { label: "Misyon", href: "#misyon" },
                  { label: "Vizyon", href: "#vizyon" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-[13px] text-text-muted hover:text-text transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-[13px] mb-3">Iletisim</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:nexoratoplulugu@gmail.com" className="text-[13px] text-text-muted hover:text-text transition-colors">
                    E-posta
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="text-[13px] text-text-muted hover:text-text transition-colors">
                    Form
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex md:justify-end gap-2.5">
            <a
              href="https://github.com/nexora-community"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-white/[0.1] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/nexoratopluluk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/[0.04] border border-border flex items-center justify-center text-text-muted hover:text-text hover:border-white/[0.1] transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-text-dim font-mono">
            &copy; 2024 Nexora Toplulugu
          </p>
          <p className="text-[11px] text-text-dim font-mono">
            Istanbul &middot; Uzaktan
          </p>
        </div>
      </div>
    </footer>
  );
}
