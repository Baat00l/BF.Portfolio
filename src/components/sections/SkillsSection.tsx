import { motion } from "framer-motion";
import { Code, Wrench, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const SkillsSection = () => {
  const { t } = useI18n();

  const categories = [
    { icon: Code, title: t.skills.technical, items: t.skills.technicalList },
    { icon: Wrench, title: t.skills.methods, items: t.skills.methodsList },
    { icon: Heart, title: t.skills.personal, items: t.skills.personalList },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary">{t.skills.label}</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
              {t.skills.title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* Right skills */}
          <div className="lg:col-span-7 space-y-10">
            {categories.map((cat, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.12 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.08 + i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 text-sm rounded-xl bg-card border border-border text-foreground font-medium cursor-default shadow-sm hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
