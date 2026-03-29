import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";

const ProjectsSection = () => {
  const { lang } = useI18n();
  const t = lang === "sv"
    ? { label: "Projekt", title: "Webbprojekt under studierna" }
    : { label: "Projects", title: "Web projects during my studies" };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.25em] uppercase text-primary"
            >
              {t.label}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-4"
            >
              {t.title}
            </motion.h2>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group grid md:grid-cols-12 gap-6 items-center p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
              >
                {/* Image */}
                <div className="md:col-span-4 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.shortDesc[lang]}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground text-muted-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
