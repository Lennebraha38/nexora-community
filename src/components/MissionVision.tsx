"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function R({ children, c = "", d = 0 }: { children: React.ReactNode; c?: string; d?: number }) {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={c}>
      {children}
    </motion.div>
  );
}

export default function MissionVision() {
  return (
    <div className="space-y-4 px-4 md:px-6 max-w-[1200px] mx-auto pb-4">
      {/* ════════════════════ MISYON ════════════════════ */}
      <section id="misyon" data-nav className="grid md:grid-cols-[1fr_1.2fr] gap-0 rounded-3xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <R>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#008cff] mb-5">01 &mdash; Misyonumuz</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-6">
              Yalniz kodlama<br />devrini{" "}
              <span className="text-[#008cff]">kapatıyoruz.</span>
            </h2>
            <p className="text-white/35 text-[15px] leading-[1.75] max-w-sm">
              Her seviyeden yazilimcinin takildigi an destek buldugu, dogru takimlari olusturdugu ve fikirlerini calisan projelere donusturdugu ekosistem.
            </p>
          </R>
        </div>
        <div className="p-8 md:p-12 lg:p-16 border-t md:border-t-0 md:border-l border-white/[0.06]">
          <R d={0.1}>
            <div className="space-y-3">
              {[
                { n: "01", t: "Bilgi Paylasimi", d: "Deneyimler, kaynaklar, canli atolyeler." },
                { n: "02", t: "Takim Ruhu", d: "Birlikte ureten topluluklar kuruyoruz." },
                { n: "03", t: "Kolektif Gelistirme", d: "Fikirler gercek projelere donusuyor." },
              ].map((x) => (
                <div key={x.n} className="flex gap-4 p-4 rounded-xl border border-white/[0.04] hover:border-[#008cff]/20 hover:bg-white/[0.015] transition-all">
                  <span className="font-mono text-[10px] text-[#008cff]/50 mt-0.5">{x.n}</span>
                  <div>
                    <h3 className="font-display font-semibold text-[13px] mb-0.5">{x.t}</h3>
                    <p className="text-white/30 text-[12px] leading-relaxed">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ════════════════════ VIZYON ════════════════════ */}
      <section id="vizyon" data-nav className="grid md:grid-cols-[1.2fr_1fr] gap-0 rounded-3xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden">
        <div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/[0.06] order-2 md:order-1">
          <R d={0.1}>
            <div className="relative p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-[#050505]">
              <blockquote className="font-display text-[clamp(1rem,2vw,1.35rem)] font-medium leading-[1.45] tracking-[-0.01em] mb-6">
                &ldquo;Sadece kod yazilan bir topluluk degil,
                <span className="text-[#008cff]"> teknoloji dunyasinda gelecegi seklendiren </span>
                projelerin dogdugu bir merkez olmak.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#008cff]" />
                <div>
                  <p className="text-[12px] font-semibold">Nexora Vizyonu</p>
                  <p className="text-[11px] text-white/20 font-mono">2024 — Sonsuzluk</p>
                </div>
              </div>
            </div>
          </R>
        </div>
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-1 md:order-2">
          <R>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#36d6e7] mb-5">02 &mdash; Vizyonumuz</p>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-6">
              Turkiye&apos;nin en aktif{" "}
              <span className="text-[#36d6e7]">teknoloji hub&apos;ina</span> donusmek.
            </h2>
            <p className="text-white/35 text-[15px] leading-[1.75] max-w-sm mb-8">
              Kuresel olcekte yazilimcilarin ilk adresi haline gelen ekosistem.
            </p>
            <ul className="space-y-3">
              {["Buyuk bir gelistirici toplulugu olmak", "Kuresel taninan teknoloji merkezi olmak", "Basarili projelerin dogdugu nokta olmak"].map((x) => (
                <li key={x} className="flex items-start gap-3 text-[13px] text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36d6e7] mt-1.5 shrink-0" />
                  {x}
                </li>
              ))}
            </ul>
          </R>
        </div>
      </section>
    </div>
  );
}
