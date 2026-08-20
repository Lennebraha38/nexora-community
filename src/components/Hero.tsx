"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function Dots() {
  const c = useRef<HTMLCanvasElement>(null);
  const draw = useCallback(() => {
    const el = c.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    let id: number;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      el.width = innerWidth * dpr;
      el.height = innerHeight * dpr;
      el.style.width = innerWidth + "px";
      el.style.height = innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    addEventListener("resize", resize);
    const p: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < Math.min(40, innerWidth / 35); i++)
      p.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const d of p) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > innerWidth) d.vx *= -1;
        if (d.y < 0 || d.y > innerHeight) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,140,255,0.15)"; ctx.fill();
      }
      for (let i = 0; i < p.length; i++)
        for (let j = i + 1; j < p.length; j++) {
          const dx = p[i].x - p[j].x, dy = p[i].y - p[j].y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p[i].x, p[i].y); ctx.lineTo(p[j].x, p[j].y);
            ctx.strokeStyle = `rgba(0,140,255,${0.03 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); };
  }, []);
  useEffect(() => { const c = draw(); return c; }, [draw]);
  return <canvas ref={c} className="absolute inset-0" aria-hidden="true" />;
}

const f = (i: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section id="top" data-nav className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Dots />
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-[#008cff]/[0.03] rounded-full blur-[160px]" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-[#0066cc]/[0.02] rounded-full blur-[140px]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div {...f(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/8 text-white/40 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Topluluk aktif
          </span>
        </motion.div>

        <motion.h1
          {...f(1)}
          className="font-display font-bold text-[clamp(3.5rem,10vw,8rem)] leading-[0.88] tracking-[-0.05em] mb-8"
        >
          Koddan
          <br />
          <span className="text-[#008cff]">Ekosisteme.</span>
        </motion.h1>

        <motion.p
          {...f(2)}
          className="text-white/40 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Takildigin an destek buldugun, fikirlerini projelere donusturdugun kolektif ekosistem.
        </motion.p>

        <motion.div {...f(3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#iletisim" className="group inline-flex items-center gap-2 px-8 py-4 bg-[#008cff] text-white font-semibold rounded-full hover:bg-[#0077dd] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,140,255,0.3)]">
            Topluluga Katil
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#ozellikler" className="inline-flex items-center px-8 py-4 text-white/30 text-[15px] font-medium rounded-full border border-white/8 hover:bg-white/[0.03] hover:text-white/60 transition-all duration-300">
            Neler Sunuyoruz?
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#misyon" className="flex flex-col items-center gap-2 text-white/15 hover:text-[#008cff]/60 transition-colors">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Asagi</span>
          <motion.svg animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}
