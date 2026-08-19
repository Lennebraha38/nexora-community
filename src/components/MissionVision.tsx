"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Rev({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MissionVision() {
  return (
    <>
      {/* ═══════════════════════ MISYON ═══════════════════════ */}
      <section id="misyon" className="relative bg-bg-1">
        <div className="relative mx-auto max-w-[1100px] px-6 py-32 md:py-44">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <Rev>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-2 mb-6">01 &mdash; Misyonumuz</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] mb-8" style={{ textWrap: "balance" }}>
                Yalniz kodlama devrini{" "}
                <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">kapatıyoruz.</span>
              </h2>
              <p className="text-[#9d9daa] text-[16px] leading-[1.8] max-w-md">
                Her seviyeden yazilimcinin takildigi an destek buldugu, dogru takimlari olusturdugu ve fikirlerini calisan projelere donusturdugu bir ekosistem insa ediyoruz.
              </p>
            </Rev>
            <Rev delay={0.12}>
              <div className="space-y-4 mt-4 md:mt-14">
                {[
                  { n: "01", t: "Bilgi Paylasimi", d: "Deneyimler, kaynaklar, canli atolyeler." },
                  { n: "02", t: "Takim Ruhu", d: "Birlikte ureten topluluklar kuruyoruz." },
                  { n: "03", t: "Kolektif Gelistirme", d: "Fikirler gercek projelere donusuyor." },
                ].map((x) => (
                  <div key={x.n} className="group flex gap-5 p-5 rounded-2xl border border-white/[0.04] hover:border-accent/20 hover:bg-white/[0.015] transition-all duration-300">
                    <span className="font-mono text-[11px] text-accent/50 shrink-0 mt-0.5">{x.n}</span>
                    <div>
                      <h3 className="font-display font-semibold text-[14px] mb-1">{x.t}</h3>
                      <p className="text-[#9d9daa] text-[13px] leading-relaxed">{x.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Rev>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ BOLUM AYIRICISI ═══════════════════════ */}
      <div className="relative bg-bg-1">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-3 py-6">
            <div className="flex-1 h-px bg-white/[0.04]" />
            <div className="flex gap-1.5">
              <div className="w-1 h-1 rounded-full bg-accent/40" />
              <div className="w-1 h-1 rounded-full bg-cyan/30" />
              <div className="w-1 h-1 rounded-full bg-accent/40" />
            </div>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════ VIZYON ═══════════════════════ */}
      <section id="vizyon" className="relative bg-bg">
        <div className="relative mx-auto max-w-[1100px] px-6 py-32 md:py-44">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <Rev className="order-2 md:order-1">
              <div className="relative p-8 md:p-10 rounded-3xl border border-white/[0.05] bg-bg-1">
                <blockquote className="font-display text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium leading-[1.45] tracking-[-0.01em] mb-8">
                  &ldquo;Sadece kod yazilan bir topluluk degil,
                  <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent"> teknoloji dunyasinda gelecegi seklendiren </span>
                  projelerin dogdugu bir merkez olmak istiyoruz.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-cyan" />
                  <div>
                    <p className="text-[12px] font-semibold">Nexora Vizyonu</p>
                    <p className="text-[11px] text-[#5c5c6b] font-mono">2024 — Sonsuzluk</p>
                  </div>
                </div>
              </div>
            </Rev>
            <Rev delay={0.12} className="order-1 md:order-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan mb-6">02 &mdash; Vizyonumuz</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] mb-8" style={{ textWrap: "balance" }}>
                Turkiye&apos;nin en aktif{" "}
                <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">teknoloji hub&apos;ina</span> donusmek.
              </h2>
              <p className="text-[#9d9daa] text-[16px] leading-[1.8] max-w-md mb-10">
                Kuresel olcekte yazilimcilarin ilk adresi haline gelen, en ureten ve en ilham verici ekosistem olmayi hedefliyoruz.
              </p>
              <ul className="space-y-3.5">
                {["Turkiye'nin en buyuk gelistirici toplulugu olmak", "Kuresel olcekte taninan bir teknoloji merkezi olmak", "Basarili projelerin dogdugu nokta olmak"].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </Rev>
          </div>
        </div>
      </section>
    </>
  );
}
