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
    desc: "Her hafta canli kodlama atolyeleri ile pratik yapma firsati.",
    color: "from-accent to-accent-dark",
    span: "col-span-1 md:col-span-2",
    large: true,
  },
  {
    icon: MessageCircle,
    title: "Anlik Destek",
    desc: "Takildigin an topluluktan anlik yardim al.",
    color: "from-neon to-cyan-600",
    span: "col-span-1",
    large: false,
  },
  {
    icon: Lightbulb,
    title: "Proje Fikirleri",
    desc: "Fikirlerini toplulukla paylas, takim kur, gerceklestir.",
    color: "from-yellow-500 to-orange-500",
    span: "col-span-1",
    large: false,
  },
  {
    icon: Trophy,
    title: "Hackathon'lar",
    desc: "Yarismalar ve hackathon'larla yeteneklerini goster. Her ay duzenlenen yarismalarda projelerini sun, oduller kazan ve toplulukta one cik.",
    color: "from-purple-500 to-pink-500",
    span: "col-span-1 md:col-span-2",
    large: true,
  },
  {
    icon: BookOpen,
    title: "Kaynak Kutuphanesi",
    desc: "Topluluk tarafindan olusturulmus egitim materyalleri.",
    color: "from-green-500 to-emerald-600",
    span: "col-span-1",
    large: false,
  },
  {
    icon: Users,
    title: "Takim Bulma",
    desc: "Proje arkadasi, calisma grubu veya startup ekibi kur.",
    color: "from-pink-500 to-rose-500",
    span: "col-span-1",
    large: false,
  },
  {
    icon: GitBranch,
    title: "Acik Kaynak",
    desc: "Topluluk projelerine katki sagla, portfoyunu gelistir. Birlikte acik kaynak projeler gelistir, topluluga deger kat.",
    color: "from-blue-500 to-indigo-600",
    span: "col-span-1 md:col-span-2",
    large: true,
  },
  {
    icon: Sparkles,
    title: "Kariyer Firsatlari",
    desc: "Is ilanlari ve network firsatlari.",
    color: "from-amber-500 to-yellow-500",
    span: "col-span-1",
    large: false,
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ozellikler" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Neler Sunuyoruz
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Gelistan <span className="text-gradient">ekosistemi.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Her seviyeden yazilimci icin tasarlanmis, bilgi paylasimini ve
            isbirligini on planda tutan ozellikler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-500 cursor-default overflow-hidden ${feature.span}`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`}
              />
              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p
                  className={`text-muted leading-relaxed ${
                    feature.large ? "text-base" : "text-sm"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
