"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNum({
  target,
  suffix = "",
  inView,
  delay,
}: {
  target: number;
  suffix?: string;
  inView: boolean;
  delay: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      let start = 0;
      const dur = 1800;
      const inc = target / (dur / 16);
      const iv = setInterval(() => {
        start += inc;
        if (start >= target) {
          setVal(target);
          clearInterval(iv);
        } else {
          setVal(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [inView, target, delay]);

  return (
    <span>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = [
    { target: 2500, suffix: "+", label: "Uye" },
    { target: 150, suffix: "+", label: "Proje" },
    { target: 50, suffix: "+", label: "Etkinlik" },
    { target: 30, suffix: "+", label: "Sehir" },
  ];

  return (
    <section className="relative py-24 md:py-32">
      {/* Separator above */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-[1100px] px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl border border-border/60 bg-bg-raised/60"
        >
          {items.map((item, i) => (
            <div key={item.label} className="text-center">
              <div className="font-display font-bold text-[clamp(2rem,4vw,3rem)] tracking-tight bg-gradient-to-b from-text to-text-muted bg-clip-text text-transparent">
                <AnimatedNum
                  target={item.target}
                  suffix={item.suffix}
                  inView={inView}
                  delay={i * 120}
                />
              </div>
              <p className="text-text-dim text-[11px] font-mono uppercase tracking-[0.15em] mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Separator below */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
