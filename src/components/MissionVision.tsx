"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function useAnimate(threshold = -80) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: `${threshold}px` });
  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useAnimate();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MissionVision() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════ MISYON ═══════════════════════════════════════════════════ */}
      <section id="misyon" className="relative py-32 md:py-44">
        {/* Section background - subtle raised panel */}
        <div className="absolute inset-0 bg-bg-raised/50" />
        {/* Top glow line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        {/* Bottom glow line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
        {/* Side decorative elements */}
        <div className="absolute top-20 left-0 w-px h-32 bg-gradient-to-b from-accent/20 to-transparent hidden lg:block" />
        <div className="absolute bottom-20 right-0 w-px h-32 bg-gradient-to-t from-accent/20 to-transparent hidden lg:block" />

        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <Reveal>
              <div className="mb-10 md:mb-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-soft mb-6">
                  01 &mdash; Misyonumuz
                </p>
                <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-8 text-balance">
                  Yalniz kodlama devrini{" "}
                  <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
                    kapatıyoruz.
                  </span>
                </h2>
                <p className="text-text-muted text-[17px] leading-[1.8] max-w-md">
                  Her seviyeden yazilimcinin takildigi an destek buldugu, dogru
                  takimlari olusturdugu ve fikirlerini calisan projelere
                  donusturdugu bir ekosistem insa ediyoruz.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4 mt-4 md:mt-16">
                {[
                  { num: "01", title: "Bilgi Paylasimi", desc: "Deneyimler, kaynaklar, canli atolyeler." },
                  { num: "02", title: "Takim Ruhu", desc: "Birlikte ureten topluluklar kuruyoruz." },
                  { num: "03", title: "Kolektif Gelistirme", desc: "Fikirler gercek projelere donusuyor." },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="group flex gap-5 p-6 rounded-2xl border border-border/60 hover:border-accent/20 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <span className="font-mono text-[11px] text-accent/60 shrink-0 mt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-[15px] mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-text-muted text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SEPARATOR ═══════════════════════════════════════════════ */}
      <div className="relative py-16 md:py-24">
        {/* Full-width decorative divider */}
        <div className="relative max-w-[1100px] mx-auto px-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
              <div className="w-1 h-1 rounded-full bg-cyan/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════ VIZYON ═══════════════════════════════════════════════════ */}
      <section id="vizyon" className="relative py-32 md:py-44">
        {/* Section background - different tone */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-raised/30 to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent" />

        <div className="relative mx-auto max-w-[1100px] px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <Reveal className="order-2 md:order-1">
              <div className="relative p-8 md:p-10 rounded-3xl border border-border/60 bg-bg-raised/80 backdrop-blur-sm">
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
                <blockquote className="font-display text-[clamp(1.2rem,2.5vw,1.7rem)] font-medium leading-[1.45] tracking-[-0.01em] mb-8">
                  &ldquo;Sadece kod yazilan bir topluluk degil,
                  <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
                    {" "}teknoloji dunyasinda gelecegi seklendiren{" "}
                  </span>
                  projelerin dogdugu bir merkez olmak istiyoruz.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-cyan" />
                  <div>
                    <p className="text-[13px] font-semibold">Nexora Vizyonu</p>
                    <p className="text-[12px] text-text-dim font-mono">2024 &mdash; Sonsuzluk</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} className="order-1 md:order-2">
              <div className="mb-10 md:mb-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan mb-6">
                  02 &mdash; Vizyonumuz
                </p>
                <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] mb-8 text-balance">
                  Turkiye&apos;nin en aktif{" "}
                  <span className="bg-gradient-to-r from-cyan to-accent bg-clip-text text-transparent">
                    teknoloji hub&apos;ina
                  </span>{" "}
                  donusmek.
                </h2>
                <p className="text-text-muted text-[17px] leading-[1.8] max-w-md mb-10">
                  Kuresel olcekte yazilimcilarin ilk adresi haline gelen,
                  en ureten ve en ilham verici ekosistem olmayi hedefliyoruz.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Turkiye'nin en buyuk gelistirici toplulugu olmak",
                  "Kuresel olcekte taninan bir teknoloji merkezi olmak",
                  "Basarili projelerin dogdugu nokta olmak",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[15px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
