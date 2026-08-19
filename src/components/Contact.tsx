"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `mailto:nexoratoplulugu@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Isim: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = url;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="iletisim" className="py-28 md:py-40 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-soft mb-5">
            04 &mdash; Iletisim
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-balance">
            Hadi{" "}
            <span className="bg-gradient-to-r from-accent to-cyan bg-clip-text text-transparent">
              konusalim.
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "E-posta",
                value: "nexoratoplulugu@gmail.com",
                href: "mailto:nexoratoplulugu@gmail.com",
              },
              {
                icon: Phone,
                label: "Telefon",
                value: "+90 500 123 45 67",
                href: "tel:+905001234567",
              },
              {
                icon: MapPin,
                label: "Konum",
                value: "Turkiye / Uzaktan",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-5 rounded-2xl border border-border hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center shrink-0">
                    <item.icon className="w-[18px] h-[18px] text-accent-soft" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[15px] text-text hover:text-accent-soft transition-colors inline-flex items-center gap-1"
                      >
                        {item.value}
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <p className="text-[15px] text-text">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-6 md:p-8 rounded-3xl border border-border bg-bg-raised"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim mb-2">
                  Adin
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-[14px] text-text placeholder:text-text-dim/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="Adin Soyadin"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim mb-2">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-[14px] text-text placeholder:text-text-dim/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim mb-2">
                Konu
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-[14px] text-text placeholder:text-text-dim/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all"
                placeholder="Mesajinin konusu"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-[0.2em] text-text-dim mb-2">
                Mesajin
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-border text-[14px] text-text placeholder:text-text-dim/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                placeholder="Mesajini buraya yaz..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-accent text-white text-[15px] font-semibold rounded-xl hover:bg-accent-soft transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
            >
              {sent ? "Gonderildi!" : "Gonder"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
