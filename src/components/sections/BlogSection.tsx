import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const BlogSection = () => {
  const { t } = useI18n();

  return (
    <section id="blog" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-primary"
          >
            {t.blog.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4"
          >
            {t.blog.title}
          </motion.h2>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />

          <div className="grid md:grid-cols-3 gap-8">
            {t.blog.items.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center mb-8">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background relative z-10" />
                </div>

                <div className="glass-card p-8 hover:-translate-y-1 transition-transform">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-4">
                    {item.year}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
