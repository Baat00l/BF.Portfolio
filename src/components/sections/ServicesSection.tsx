import { motion } from "framer-motion";
import { Monitor, Palette, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Monitor, Palette, Zap];
const accents = ["primary", "accent", "primary"] as const;

const ServicesSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-background/50"
          >
            {t.services.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-background mt-4"
          >
            {t.services.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0 md:gap-px bg-background/10 rounded-2xl overflow-hidden">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-foreground p-10 md:p-12 group hover:bg-background/5 transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-8" />
                <h3 className="font-heading text-2xl font-bold text-background mb-4">{item.title}</h3>
                <p className="text-background/60 leading-relaxed">{item.desc}</p>
                <div className="w-8 h-0.5 bg-primary mt-8 group-hover:w-16 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
