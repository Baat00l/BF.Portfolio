import { motion } from "framer-motion";
import { MapPin, Globe2, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Side accent bar */}
      <div className="absolute left-0 top-20 bottom-20 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left: big label */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary">{t.about.label}</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              {t.about.title}
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </motion.div>

          {/* Right: content cards stacked */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">{t.about.profileTitle}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{t.about.bio}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">{t.about.profileText}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
              >
                <MapPin className="w-5 h-5 text-primary mb-4" />
                <h4 className="font-heading font-semibold text-foreground mb-3">
                  {t.about.label === "Om mig" ? "Bakgrund" : "Background"}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t.about.birthplace}</li>
                  <li>{t.about.location}</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <Globe2 className="w-5 h-5 text-primary mb-4" />
                <h4 className="font-heading font-semibold text-foreground mb-3">
                  {t.about.label === "Om mig" ? "Språk" : "Languages"}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />{t.about.langArabic}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />{t.about.langSwedish}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />{t.about.langEnglish}
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
