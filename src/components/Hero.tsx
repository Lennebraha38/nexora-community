"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

function Particles() {
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
    for (let i = 0; i < Math.min(55, innerWidth / 28); i++)
      p.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    const loop = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const d of p) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > innerWidth) d.vx *= -1;
        if (d.y < 0 || d.y > innerHeight) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168,85,247,0.35)"; ctx.fill();
      }
      for (let i = 0; i < p.length; i++)
        for (let j = i + 1; j < p.length; j++) {
          const dx = p[i].x - p[j].x, dy = p[i].y - p[j].y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath(); ctx.moveTo(p[i].x, p[i].y); ctx.lineTo(p[j].x, p[j].y);
            ctx.strokeStyle = `rgba(168,85,247,${0.08 * (1 - dist / 140)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); };
  }, []);
  useEffect(() => { const cl = draw(); return cl; }, [draw]);
  return <canvas ref={c} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}

const fade = (i: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section id="top" data-nav className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <Particles />
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] bg-neon-purple/[0.09] rounded-full blur-[160px] animate-floaty" />
      <div className="absolute bottom-[25%] right-[12%] w-[400px] h-[400px] bg-neon-cyan/[0.08] rounded-full blur-[150px] animate-floaty" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div {...fade(0)} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/60 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Topluluk aktif ve buyuyor
          </span>
        </motion.div>

        <motion.h1
          {...fade(1)}
          className="font-display font-bold text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em] mb-8"
        >
          Koddan
          <br />
          <span className="neon-gradient drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]">Ekosisteme.</span>
        </motion.h1>

        <motion.p
          {...fade(2)}
          className="text-white/45 text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Takildigin an destek buldugun, fikirlerini projelere
          donusturdugun kolektif ekosistem.
        </motion.p>

        <motion.div {...fade(3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#iletisim" className="btn-neon group inline-flex items-center gap-2 px-9 py-4 text-white font-semibold text-[15px] rounded-full">
            Topluluga Katil
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#ozellikler" className="inline-flex items-center px-9 py-4 text-white/40 text-[15px] font-medium rounded-full border border-white/10 hover:border-neon-purple/40 hover:text-white/80 hover:bg-neon-purple/5 transition-all duration-300">
            Neler Sunuyoruz?
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#misyon" className="flex flex-col items-center gap-2 text-white/20 hover:text-neon-cyan transition-colors">
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Kesfet</span>
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}