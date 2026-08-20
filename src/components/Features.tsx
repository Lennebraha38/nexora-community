"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, MessageCircle, Lightbulb, Trophy, BookOpen, Users, GitBranch, Sparkles } from "lucide-react";

const f = [
  { icon: Code2, title: "Yazilim Atolyeleri", desc: "Haftalik canli kodlama atolyeleri ile pratik yap.", c: "#a855f7", w: true },
  { icon: MessageCircle, title: "Anlik Destek", desc: "Takildigin an topluluktan anlik yardim al.", c: "#22d3ee", w: false },
  { icon: Lightbulb, title: "Proje Fikirleri", desc: "Fikirlerini paylas, takim kur.", c: "#fbbf24", w: false },
  { icon: Trophy, title: "Hackathon", desc: "Aylik yarismalar, oduller ve network. Projelerini sun, one cik.", c: "#fb7185", w: true },
  { icon: BookOpen, title: "Kaynak Kutuphanesi", desc: "Topluluk tarafindan olusturulan egitim materyalleri.", c: "#34d399", w: false },
  { icon: Users, title: "Takim Bulma", desc: "Calisma grubu veya startup ekibi kur.", c: "#c084fc", w: false },
  { icon: GitBranch, title: "Acik Kaynak", desc: "Birlikte acik kaynak projeler gelistir, portfoyunu genislet.", c: "#60a5fa", w: true },
  { icon: Sparkles, title: "Kariyer", desc: "Is ilanlari ve network firsatlari.", c: "#facc15", w: false },
];

export default function Features() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="ozellikler" data-nav className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-purple/25 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-12 md:mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
            <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">03 &mdash; Neler Sunuyoruz</span>
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Gelistan <span className="neon-gradient">ekosistemi.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {f.map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 16 }}
              animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 + i * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`group relative p-6 rounded-2xl glass hover:border-white/15 transition-all duration-300 overflow-hidden ${x.w ? "md:col-span-2" : ""}`}
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" style={{ background: `${x.c}22` }} />
              <div className="relative">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: `${x.c}1a`, boxShadow: `0 0 20px ${x.c}22` }}>
                  <x.icon className="w-5 h-5" strokeWidth={1.8} style={{ color: x.c }} />
                </div>
                <h3 className="font-display font-semibold text-[14px] mb-1.5">{x.title}</h3>
                <p className="text-white/35 text-[13px] leading-relaxed">{x.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}