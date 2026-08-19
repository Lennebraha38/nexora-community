"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({
  target,
  suffix = "",
  label,
  delay,
  inView,
}: {
  target: number;
  suffix?: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted font-mono">{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl glass relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/10 blur-[100px]" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter
              target={2500}
              suffix="+"
              label="Uye"
              delay={0}
              inView={isInView}
            />
            <Counter
              target={150}
              suffix="+"
              label="Proje"
              delay={200}
              inView={isInView}
            />
            <Counter
              target={50}
              suffix="+"
              label="Etkinlik"
              delay={400}
              inView={isInView}
            />
            <Counter
              target={30}
              suffix="+"
              label="Sehir"
              delay={600}
              inView={isInView}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
