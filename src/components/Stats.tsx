"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Num({ target, s = "", inView, d }: { target: number; s?: string; inView: boolean; d: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      let st = 0;
      const inc = target / 112;
      const iv = setInterval(() => {
        st += inc;
        if (st >= target) { setV(target); clearInterval(iv); } else setV(Math.floor(st));
      }, 16);
      return () => clearInterval(iv);
    }, d);
    return () => clearTimeout(t);
  }, [inView, target, d]);
  return <span>{v.toLocaleString()}{s}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const items = [
    { t: 2500, s: "+", l: "Uye" },
    { t: 150, s: "+", l: "Proje" },
    { t: 50, s: "+", l: "Etkinlik" },
    { t: 30, s: "+", l: "Sehir" },
  ];
  return (
    <section className="relative bg-bg">
      <div className="relative mx-auto max-w-[1100px] px-6 py-20 md:py-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 p-8 md:p-10 rounded-3xl border border-white/[0.04] bg-bg-1"
        >
          {items.map((x, i) => (
            <div key={x.l} className="text-center">
              <div className="font-display font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] tracking-tight bg-gradient-to-b from-white to-[#9d9daa] bg-clip-text text-transparent">
                <Num target={x.t} s={x.s} inView={inView} d={i * 100} />
              </div>
              <p className="text-[#5c5c6b] text-[10px] font-mono uppercase tracking-[0.2em] mt-2">{x.l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
