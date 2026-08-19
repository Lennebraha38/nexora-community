"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:nexoratoplulugu@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Isim: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`)}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="iletisim" className="relative bg-bg-1">
      <div className="relative mx-auto max-w-[1100px] px-6 py-32 md:py-44">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] }}
          className="mb-14 md:mb-18"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-2 mb-6">04 &mdash; Iletisim</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]" style={{ textWrap: "balance" }}>
            Hadi <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">konusalim.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Mail, l: "E-posta", v: "nexoratoplulugu@gmail.com", h: "mailto:nexoratoplulugu@gmail.com" },
              { icon: Phone, l: "Telefon", v: "+90 500 123 45 67", h: "tel:+905001234567" },
              { icon: MapPin, l: "Konum", v: "Turkiye / Uzaktan", h: null },
            ].map((x) => (
              <div key={x.l} className="group p-4 rounded-2xl border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] flex items-center justify-center shrink-0">
                    <x.icon className="w-4 h-4 text-accent-2" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c5c6b] mb-0.5">{x.l}</p>
                    {x.h ? (
                      <a href={x.h} className="text-[14px] text-[#f0f0f2] hover:text-accent-2 transition-colors inline-flex items-center gap-1">
                        {x.v}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-[14px] text-[#f0f0f2]">{x.v}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="lg:col-span-3 p-6 md:p-7 rounded-3xl border border-white/[0.04] bg-bg"
          >
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <div>
                <label htmlFor="c-name" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c5c6b] mb-1.5">Adin</label>
                <input id="c-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] text-[13px] text-[#f0f0f2] placeholder:text-[#5c5c6b]/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Adin Soyadin" />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c5c6b] mb-1.5">E-posta</label>
                <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] text-[13px] text-[#f0f0f2] placeholder:text-[#5c5c6b]/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="ornek@email.com" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="c-subject" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c5c6b] mb-1.5">Konu</label>
              <input id="c-subject" type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] text-[13px] text-[#f0f0f2] placeholder:text-[#5c5c6b]/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="Mesajinin konusu" />
            </div>
            <div className="mb-5">
              <label htmlFor="c-msg" className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#5c5c6b] mb-1.5">Mesajin</label>
              <textarea id="c-msg" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.04] text-[13px] text-[#f0f0f2] placeholder:text-[#5c5c6b]/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                placeholder="Mesajini buraya yaz..." />
            </div>
            <button type="submit" className="w-full py-3 bg-accent text-white text-[14px] font-semibold rounded-xl hover:bg-accent-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,92,252,0.25)]">
              {sent ? "Gonderildi!" : "Gonder"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
