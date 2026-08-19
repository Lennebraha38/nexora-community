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
    const pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const n = Math.min(50, Math.floor(innerWidth / 30));
    for (let i = 0; i < n; i++)
      pts.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    const loop = () => {
      const w = innerWidth, h = innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(124,92,252,0.2)";
        ctx.fill();
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(124,92,252,${0.04 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
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

const v = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#07070a]"
    >
      <Particles />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan/[0.02] rounded-full blur-[130px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div variants={v} initial="hidden" animate="show" custom={0} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#9d9daa] text-[11px] font-mono tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Topluluk aktif
          </span>
        </motion.div>

        <motion.h1
          variants={v} initial="hidden" animate="show" custom={1}
          className="font-display font-bold text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] mb-6"
          style={{ textWrap: "balance" }}
        >
          Koddan
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-2 to-cyan bg-clip-text text-transparent">
            Ekosisteme.
          </span>
        </motion.h1>

        <motion.p
          variants={v} initial="hidden" animate="show" custom={2}
          className="text-[#9d9daa] text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Takildigin an destek buldugun, fikirlerini projelere donusturdugun kolektif ekosistem.
        </motion.p>

        <motion.div variants={v} initial="hidden" animate="show" custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold text-[15px] rounded-xl hover:bg-accent-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,92,252,0.3)]"
          >
            Topluluga Katil
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#ozellikler"
            className="inline-flex items-center px-8 py-3.5 text-[#9d9daa] text-[15px] font-medium rounded-xl border border-white/[0.06] hover:bg-white/[0.03] hover:text-white transition-all duration-300"
          >
            Neler Sunuyoruz?
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.a
          href="#misyon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2 text-[#5c5c6b] hover:text-accent-2 transition-colors"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Kesfet</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.a>
      </div>

      {/* BOTTOM EDGE - buyuk ayirici */}
      <div className="absolute bottom-0 inset-x-0">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="h-24 bg-gradient-to-t from-bg-1 to-transparent" />
      </div>
    </section>
  );
}
