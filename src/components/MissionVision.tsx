"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, HeartHandshake, Lightbulb, Target, Eye } from "lucide-react";

function R({ children, c = "", d = 0 }: { children: React.ReactNode; c?: string; d?: number }) {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={c}>
      {children}
    </motion.div>
  );
}

const mission = [
  { icon: Users, t: "Bilgi Paylasimi", d: "Deneyimler, kaynaklar, canli atolyeler." },
  { icon: HeartHandshake, t: "Takim Ruhu", d: "Birlikte ureten topluluklar kuruyoruz." },
  { icon: Lightbulb, t: "Kolektif Gelistirme", d: "Fikirler gercek projelere donusuyor." },
];

const vision = [
  "Turkiye'nin en buyuk gelistirici toplulugu olmak",
  "Kuresel olcekte taninan bir teknoloji merkezi olmak",
  "Basarili projelerin dogdugu nokta olmak",
];

export default function MissionVision() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-4">
      {/* ═══════════════ MISYON ═══════════════ */}
      <section id="misyon" data-nav className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <R>
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <Target className="w-3.5 h-3.5 text-neon-purple" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">01 &mdash; Misyonumuz</span>
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              Yalniz kodlama devrini{" "}
              <span className="neon-gradient">kapatıyoruz.</span>
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.8] max-w-md">
              Her seviyeden yazilimcinin takildigi an destek buldugu, dogru
              takimlari olusturdugu ve fikirlerini calisan projelere
              donusturdugu ekosistem.
            </p>
          </R>

          <R d={0.12}>
            <div className="space-y-3">
              {mission.map((x, i) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="group flex gap-4 p-5 rounded-2xl glass hover:border-neon-purple/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center shrink-0">
                    <x.icon className="w-5 h-5 text-neon-purple" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[14px] mb-1">{x.t}</h3>
                    <p className="text-white/35 text-[12px] leading-relaxed">{x.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ═══════════════ AYIRICI ═══════════════ */}
      <div className="flex items-center gap-4 py-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-neon-purple/50" />
        <div className="w-1 h-1 rounded-full bg-neon-cyan/50" />
        <div className="w-2 h-2 rounded-full bg-neon-purple/50" />
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-neon-purple/25 to-transparent" />
      </div>

      {/* ═══════════════ VIZYON ═══════════════ */}
      <section id="vizyon" data-nav className="py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <R className="order-2 md:order-1">
            <div className="relative p-8 md:p-10 rounded-3xl glass overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-neon-purple/20 rounded-full blur-[80px] animate-glow" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-neon-cyan/15 rounded-full blur-[80px] animate-glow" style={{ animationDelay: "1.5s" }} />
              <div className="relative">
                <Eye className="w-8 h-8 text-neon-cyan mb-6" strokeWidth={1.5} />
                <blockquote className="font-display text-[clamp(1.1rem,2.3vw,1.6rem)] font-medium leading-[1.4] tracking-[-0.01em] mb-6">
                  &ldquo;Sadece kod yazilan bir topluluk degil,
                  <span className="neon-gradient"> teknoloji dunyasinda gelecegi seklendiren </span>
                  projelerin dogdugu bir merkez olmak.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
                  <div>
                    <p className="text-[12px] font-semibold">Nexora Vizyonu</p>
                    <p className="text-[11px] text-white/30 font-mono">2024 &mdash; Sonsuzluk</p>
                  </div>
                </div>
              </div>
            </div>
          </R>

          <R d={0.12} className="order-1 md:order-2">
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                <Eye className="w-3.5 h-3.5 text-neon-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">02 &mdash; Vizyonumuz</span>
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
              Turkiye&apos;nin en aktif{" "}
              <span className="neon-gradient">teknoloji hub&apos;ina</span> donusmek.
            </h2>
            <p className="text-white/45 text-[15px] leading-[1.8] max-w-md mb-8">
              Kuresel olcekte yazilimcilarin ilk adresi haline gelen ekosistem.
            </p>
            <ul className="space-y-3.5">
              {vision.map((x, i) => (
                <motion.li
                  key={x}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 text-[14px] text-white/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)] mt-2 shrink-0" />
                  {x}
                </motion.li>
              ))}
            </ul>
          </R>
        </div>
      </section>
    </div>
  );
}