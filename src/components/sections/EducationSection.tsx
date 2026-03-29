import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const EducationSection = () => {
  const { t } = useI18n();

  return (
    <section className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-primary"
          >
            {t.education.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4"
          >
            {t.education.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.education.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              {/* Number */}
              <span className="absolute -top-12 -left-2 font-heading text-7xl font-black text-primary/30 select-none leading-none">
                0{i + 1}
              </span>
              <div className="glass-card p-8 pt-10 h-full relative z-10 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span className="text-xs font-medium text-primary tracking-wider">{item.year}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{item.school}</h3>
                <p className="text-sm font-medium text-primary mb-4">{item.program}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
