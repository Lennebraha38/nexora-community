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
  const v = useInView(ref, { once: true, margin: "-30px" });
  const items = [
    { t: 2500, s: "+", l: "Uye" },
    { t: 150, s: "+", l: "Proje" },
    { t: 50, s: "+", l: "Etkinlik" },
    { t: 30, s: "+", l: "Sehir" },
  ];
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-4">
      <motion.div ref={ref} initial={{ opacity: 0, y: 14 }} animate={v ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="rounded-3xl border border-white/[0.06] bg-[#0a0a0a] px-6 py-10 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((x, i) => (
            <div key={x.l} className="text-center">
              <div className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight text-white">
                <Num t={x.t} s={x.s} v={v} d={i * 90} />
              </div>
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-[0.25em] mt-2">{x.l}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
