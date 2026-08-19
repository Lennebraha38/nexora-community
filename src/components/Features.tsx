"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, MessageCircle, Lightbulb, Trophy, BookOpen, Users, GitBranch, Sparkles } from "lucide-react";

const f = [
  { icon: Code2, title: "Yazilim Atolyeleri", desc: "Her hafta canli kodlama atolyeleri.", c: "from-accent to-violet-400", w: true },
  { icon: MessageCircle, title: "Anlik Destek", desc: "Takildigin an topluluktan yardim.", c: "from-cyan to-teal-400", w: false },
  { icon: Lightbulb, title: "Proje Fikirleri", desc: "Fikirlerini paylas, takim kur.", c: "from-amber-400 to-orange-400", w: false },
  { icon: Trophy, title: "Hackathon", desc: "Aylik yarismalar ve oduller.", c: "from-rose-400 to-pink-400", w: true },
  { icon: BookOpen, title: "Kaynak Kutuphanesi", desc: "Topluluk kaynaklari.", c: "from-emerald-400 to-green-400", w: false },
  { icon: Users, title: "Takim Bulma", desc: "Startup ekibi kur.", c: "from-fuchsia-400 to-purple-400", w: false },
  { icon: GitBranch, title: "Acik Kaynak", desc: "Birlikte projeler gelistir.", c: "from-blue-400 to-indigo-400", w: true },
  { icon: Sparkles, title: "Kariyer", desc: "Is ilanlari ve network.", c: "from-yellow-400 to-amber-400", w: false },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="ozellikler" className="relative bg-bg-2">
      <div className="relative mx-auto max-w-[1100px] px-6 py-32 md:py-44">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
          className="mb-14 md:mb-18"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-2 mb-6">03 &mdash; Neler Sunuyoruz</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]" style={{ textWrap: "balance" }}>
            Gelistan{" "}
            <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">ekosistemi.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {f.map((x, i) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.05, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
              className={`group p-5 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.015] transition-all duration-300 ${x.w ? "md:col-span-2" : ""}`}
            >
              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${x.c} flex items-center justify-center mb-3.5 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}>
                <x.icon className="w-4 h-4 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-[14px] mb-1">{x.title}</h3>
              <p className="text-[#9d9daa] text-[13px] leading-relaxed">{x.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
