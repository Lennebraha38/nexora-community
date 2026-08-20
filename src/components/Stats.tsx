"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Num({ t, s = "", v, d }: { t: number; s?: string; v: boolean; d: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!v) return;
    const to = setTimeout(() => {
      let st = 0;
      const iv = setInterval(() => {
        st += t / 110;
        if (st >= t) { setN(t); clearInterval(iv); } else setN(Math.floor(st));
      }, 16);
      return () => clearInterval(iv);
    }, d);
    return () => clearTimeout(to);
  }, [v, t, d]);
  return <span>{n.toLocaleString()}{s}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-40px" });
  const items = [
    { t: 2500, s: "+", l: "Uye" },
    { t: 150, s: "+", l: "Proje" },
    { t: 50, s: "+", l: "Etkinlik" },
    { t: 30, s: "+", l: "Sehir" },
  ];
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative rounded-3xl glass p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-40 bg-neon-purple/15 blur-[100px] animate-glow" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {items.map((x, i) => (
              <div key={x.l} className="text-center">
                <div className="font-display font-bold text-[clamp(2rem,4.5vw,3.4rem)] tracking-tight neon-gradient">
                  <Num t={x.t} s={x.s} v={v} d={i * 100} />
                </div>
                <p className="text-white/25 text-[10px] font-mono uppercase tracking-[0.25em] mt-2">{x.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}