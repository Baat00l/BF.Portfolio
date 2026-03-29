import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const ContactSection = () => {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-card/40 hidden lg:block rounded-l-[4rem]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary">{t.contact.label}</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
              {t.contact.title}
            </h2>

            <p className="text-muted-foreground mb-10 text-lg">{t.contact.infoSub}</p>

            <div className="space-y-6 mb-10">
              {[
                { icon: User, text: "Batool Fahmi" },
                { icon: MapPin, text: "Örebro, Sverige" },
                { icon: Phone, text: "(+46) 739 098 804", href: "tel:+46739098804" },
                { icon: Mail, text: "batoolfahmi4@gmail.com", href: "mailto:batoolfahmi4@gmail.com" },
              ].map(({ icon: Icon, text, href }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {href ? (
                    <a href={href} className="text-foreground hover:text-primary transition-colors font-medium">{text}</a>
                  ) : (
                    <span className="text-foreground font-medium">{text}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/batoolfahmi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="mailto:batoolfahmi4@gmail.com?subject=Boka%20möte"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t.about.label === "Om mig" ? "Boka möte" : "Book a meeting"} <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.name}</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.email}</label>
              <input
                type="email"
                required
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">{t.contact.message}</label>
              <textarea
                rows={5}
                required
                className="w-full px-5 py-3.5 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              {t.contact.send}
            </button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-accent font-medium"
              >
                {t.contact.success}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
