"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const v = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nexoratoplulugu@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Isim: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="iletisim" data-nav className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/25 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={v ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-12 md:mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-5">
            <Send className="w-3.5 h-3.5 text-neon-cyan" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">04 &mdash; Iletisim</span>
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            Hadi <span className="neon-gradient">konusalim.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={v ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }} className="lg:col-span-2 space-y-3">
            {[
              { icon: Mail, l: "E-posta", v: "nexoratoplulugu@gmail.com", h: "mailto:nexoratoplulugu@gmail.com" },
              { icon: Phone, l: "Telefon", v: "+90 500 123 45 67", h: "tel:+905001234567" },
              { icon: MapPin, l: "Konum", v: "Turkiye / Uzaktan", h: null },
            ].map((x) => (
              <div key={x.l} className="group p-5 rounded-2xl glass hover:border-neon-purple/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center shrink-0">
                    <x.icon className="w-4.5 h-4.5 text-neon-purple" style={{ width: 18, height: 18 }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/25 mb-1">{x.l}</p>
                    {x.h ? (
                      <a href={x.h} className="text-[13px] text-white/80 hover:text-neon-cyan transition-colors inline-flex items-center gap-1.5">
                        {x.v}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-[13px] text-white/80">{x.v}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form onSubmit={submit} initial={{ opacity: 0, y: 16 }} animate={v ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }} className="lg:col-span-3 relative rounded-3xl glass p-6 md:p-8 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-neon-cyan/10 blur-[90px] animate-glow" />
            <div className="relative grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="n" className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-1.5">Adin</label>
                <input id="n" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[13px] text-white placeholder:text-white/15 focus:border-neon-purple/60 focus:outline-none focus:ring-1 focus:ring-neon-purple/20 transition-all"
                  placeholder="Adin Soyadin" />
              </div>
              <div>
                <label htmlFor="e" className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-1.5">E-posta</label>
                <input id="e" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[13px] text-white placeholder:text-white/15 focus:border-neon-cyan/60 focus:outline-none focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                  placeholder="ornek@email.com" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="s" className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-1.5">Konu</label>
              <input id="s" type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[13px] text-white placeholder:text-white/15 focus:border-neon-purple/60 focus:outline-none focus:ring-1 focus:ring-neon-purple/20 transition-all"
                placeholder="Mesajinin konusu" />
            </div>
            <div className="mb-5">
              <label htmlFor="m" className="block text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-1.5">Mesajin</label>
              <textarea id="m" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[13px] text-white placeholder:text-white/15 focus:border-neon-cyan/60 focus:outline-none focus:ring-1 focus:ring-neon-cyan/20 transition-all resize-none"
                placeholder="Mesajini buraya yaz..." />
            </div>
            <button type="submit" className="btn-neon w-full py-3 text-white text-[14px] font-semibold rounded-xl">
              {sent ? "Gonderildi!" : "Gonder"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}