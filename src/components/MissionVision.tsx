"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users, Globe, Rocket, Heart } from "lucide-react";

export default function MissionVision() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: "-100px" });
  const inView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <section id="misyon" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Misyonumuz
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Kodlama devrini
                <br />
                <span className="text-gradient">kolektif gelistirme</span>
                <br />
                devrine tasiyoruz.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Yazilim gelistiricilerini, tasarimcilarini ve teknoloji
                meraklilarini ayni cati altinda bulusturarak bilgi paylasimini
                ve takim ruhunu buyutuyoruz. Yalniz kodlama devrini kapatarak;
                her seviyeden yazilimcinin takildigi an destek bulabildigi,
                dogru calisma arkadaslarini edinebildigi ve fikirlerini calisan
                projelere donusturebildigi kolektif bir gelistirici ekosistemi
                olusturuyoruz.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Bilgi Paylasimi", "Takim Ruhu", "Kolektif Gelistirme"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-lg glass text-sm font-mono text-accent-light"
                    >
                      #{tag.replace(" ", "")}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    title: "Gelistirici Agi",
                    desc: "Her seviyeden yazilimci bir arada",
                  },
                  {
                    icon: Heart,
                    title: "Aktif Destek",
                    desc: "Takildigin an yanindayiz",
                  },
                  {
                    icon: Globe,
                    title: "Kuresel Erisim",
                    desc: "Turkiye ve otesinde etki",
                  },
                  {
                    icon: Rocket,
                    title: "Proje Gelistirme",
                    desc: "Fikirlerini projelere donustur",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="p-5 rounded-2xl glass hover:bg-white/5 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glow-line" />
      </div>

      <section id="vizyon" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative p-8 rounded-3xl glass">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon/20 rounded-full blur-2xl" />
                <div className="relative">
                  <Eye className="w-12 h-12 text-neon mb-6" />
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                    &ldquo;Sadece kod yazilan bir topluluk degil,
                    <span className="text-gradient">
                      {" "}teknoloji dunyasinda gelecegi seklendiren{" "}
                    </span>
                    projelerin ve basarili takimlarin dogdugu bir merkez
                    olmak.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-neon" />
                    <div>
                      <p className="font-semibold text-sm">Nexora Vizyonu</p>
                      <p className="text-xs text-muted">2024 &mdash; Sonsuzluk</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
                <Eye className="w-4 h-4 text-neon" />
                <span className="text-xs font-mono text-muted uppercase tracking-wider">
                  Vizyonumuz
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Turkiye&apos;nin en
                <br />
                <span className="text-gradient-alt">aktif teknoloji</span>
                <br />
                hub&apos;ina donusmek.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Turkiye ve kuresel olcekte yazilimcilarin ilk adresi haline
                gelen en aktif, en ureten ve en ilham verici teknoloji hub&apos;ina
                donusmeyi hedefliyoruz. Sadece bir topluluk degil, gelecegin
                teknoloji liderlerinin yetistigi bir ekosistem olusturuyoruz.
              </p>
              <div className="space-y-4">
                {[
                  "Turkiye'nin en buyuk gelistirici toplulugu olmak",
                  "Kuresel olcekte taninan bir teknoloji merkezi olmak",
                  "Basarili teknoloji projelerinin dogdugu nokta olmak",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-neon shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
