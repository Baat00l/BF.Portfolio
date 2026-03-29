import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Scroll to top arrow */}
        <div className="flex justify-center mb-10">
          <a
            href="#home"
            className="w-14 h-14 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#home" className="font-heading text-2xl font-bold text-foreground tracking-tight">
              BF<span className="text-primary">.</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Batool Fahmi. {t.footer.rights}
          </p>

          <div className="flex items-center gap-4">
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
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
