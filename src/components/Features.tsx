"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, MessageCircle, Lightbulb, Trophy, BookOpen, Users, GitBranch, Sparkles } from "lucide-react";

const f = [
  { icon: Code2, title: "Yazilim Atolyeleri", desc: "Haftalik canli kodlama atolyeleri.", c: "#008cff", w: true },
  { icon: MessageCircle, title: "Anlik Destek", desc: "Takildigin an yardim al.", c: "#36d6e7", w: false },
  { icon: Lightbulb, title: "Proje Fikirleri", desc: "Paylas, takim kur.", c: "#ffb84d", w: false },
  { icon: Trophy, title: "Hackathon", desc: "Aylik yarismalar ve oduller.", c: "#ff5c8a", w: true },
  { icon: BookOpen, title: "Kaynak Kutuphanesi", desc: "Topluluk kaynaklari.", c: "#4ade80", w: false },
  { icon: Users, title: "Takim Bulma", desc: "Startup ekibi kur.", c: "#c084fc", w: false },
  { icon: GitBranch, title: "Acik Kaynak", desc: "Birlikte projeler gelistir.", c: "#60a5fa", w: true },
  { icon: Sparkles, title: "Kariyer", desc: "Is ilanlari ve network.", c: "#facc15", w: false },
];

export default function Features() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section id="ozellikler" data-nav className="max-w-[1200px] mx-auto px-4 md:px-6 pb-4">
      <div className="rounded-3xl border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-12 lg:p-16">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-12 md:mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#008cff] mb-5">03 &mdash; Neler Sunuyoruz</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.02em]">
            Gelistan <span className="text-[#008cff]">ekosistemi.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {f.map((x, i) => (
            <motion.div key={x.title} initial={{ opacity: 0, y: 14 }} animate={v ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.04, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`group p-5 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.015] transition-all ${x.w ? "md:col-span-2" : ""}`}>
              <div className="w-9 h-9 rounded-lg mb-3.5 flex items-center justify-center" style={{ background: `${x.c}18` }}>
                <x.icon className="w-4 h-4" strokeWidth={1.8} style={{ color: x.c }} />
              </div>
              <h3 className="font-display font-semibold text-[13px] mb-1">{x.title}</h3>
              <p className="text-white/30 text-[12px] leading-relaxed">{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
