"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  MessageCircle,
  Lightbulb,
  Trophy,
  BookOpen,
  Users,
  GitBranch,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Yazilim Atolyeleri",
    desc: "Her hafta canli kodlama atolyeleri.",
    accent: "from-accent to-violet-400",
    wide: true,
  },
  {
    icon: MessageCircle,
    title: "Anlik Destek",
    desc: "Takildigin an topluluktan yardim.",
    accent: "from-cyan to-teal-400",
    wide: false,
  },
  {
    icon: Lightbulb,
    title: "Proje Fikirleri",
    desc: "Fikirlerini paylas, takim kur.",
    accent: "from-amber-400 to-orange-400",
    wide: false,
  },
  {
    icon: Trophy,
    title: "Hackathon",
    desc: "Aylik yarismalar, oduller, network. Projelerini sun, toplulukta one cik.",
    accent: "from-rose-400 to-pink-400",
    wide: true,
  },
  {
    icon: BookOpen,
    title: "Kaynak Kutuphanesi",
    desc: "Topluluk kaynaklari.",
    accent: "from-emerald-400 to-green-400",
    wide: false,
  },
  {
    icon: Users,
    title: "Takim Bulma",
    desc: "Calisma grubu veya startup ekibi kur.",
    accent: "from-fuchsia-400 to-purple-400",
    wide: false,
  },
  {
    icon: GitBranch,
    title: "Acik Kaynak",
    desc: "Birlikte acik kaynak projeler gelistir. Portfoyunu genislet, topluluga deger kat.",
    accent: "from-blue-400 to-indigo-400",
    wide: true,
  },
  {
    icon: Sparkles,
    title: "Kariyer Firsatlari",
    desc: "Is ilanlari ve network.",
    accent: "from-yellow-400 to-amber-400",
    wide: false,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ozellikler" className="py-28 md:py-40 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-soft mb-5">
            03 &mdash; Neler Sunuyoruz
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-balance">
            Gelistan{" "}
            <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
              ekosistemi.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className={`group relative p-6 rounded-2xl border border-border hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300 ${
                f.wide ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.accent} flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}
              >
                <f.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-[15px] mb-1.5">
                {f.title}
              </h3>
              <p className="text-text-muted text-[14px] leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
