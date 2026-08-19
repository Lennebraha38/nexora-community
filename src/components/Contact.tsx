"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Twitter } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nexoratoplulugu@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Isim: ${formData.name}\nE-posta: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="iletisim" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Iletisim
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Bizimle <span className="text-gradient">iletisime gec.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Sorularin mi var? Katilmak mi istiyorsun? Hadi konusalim.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl glass">
              <h3 className="text-lg font-semibold mb-4">Iletisim Bilgileri</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nexoratoplulugu@gmail.com"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">E-posta</p>
                    <p className="text-sm">nexoratoplulugu@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+905001234567"
                  className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <Phone className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Telefon</p>
                    <p className="text-sm">+90 500 123 45 67</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-muted">Konum</p>
                    <p className="text-sm">Turkiye / Uzaktan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl glass">
              <h3 className="text-lg font-semibold mb-4">Bizi Takip Et</h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/nexora-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/nexoratopluluk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-neon/20 hover:text-neon transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl glass space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted">
                    Adin
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm placeholder:text-muted/50"
                    placeholder="Adin Soyadin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted">
                    E-posta
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm placeholder:text-muted/50"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted">
                  Konu
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm placeholder:text-muted/50"
                  placeholder="Mesajinin konusu"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted">
                  Mesajin
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm resize-none placeholder:text-muted/50"
                  placeholder="Mesajini buraya yaz..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white rounded-xl font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {submitted ? (
                  "Mesajin gonderildi!"
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Gonder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
