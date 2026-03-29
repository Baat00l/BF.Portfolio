import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, Github, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex flex-col justify-end pb-20 pt-32" style={{ background: "var(--hero-gradient)" }}>
      {/* Large decorative typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="font-heading text-[20vw] font-bold text-foreground whitespace-nowrap"
        >
          BATOOL
        </motion.span>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-[0.15em] uppercase border border-primary/20">
                {t.hero.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] mb-8"
            >
              Batool
              <br />
              <span className="text-gradient">Fahmi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://batoolsportfolio.vercel.app/CV26.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                {t.hero.cv}
              </a>
              <a
                href="https://www.linkedin.com/in/batoolfahmi/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/15 rounded-full font-medium text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                {t.hero.linkedin}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="md:col-span-4 flex md:flex-col items-center md:items-end gap-6"
          >
            <div className="flex md:flex-col gap-4">
              {[
                { icon: Github, href: "https://github.com/Baat00l" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/batoolfahmi/" },
                { icon: Instagram, href: "https://www.instagram.com/b4h.mi/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="animate-float block">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
