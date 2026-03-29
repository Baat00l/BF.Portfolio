import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "sv" | "en";

const translations = {
  sv: {
    nav: { home: "Hem", about: "Om mig", projects: "Projekt", blog: "Reflektioner", contact: "Kontakt", skills: "Kompetenser" },
    hero: {
      role: "Webbutvecklare • Örebro",
      name: "Batool Fahmi",
      intro: "Responsiva och visuellt skarpa webblösningar byggda med fokus på design, struktur och en upplevelse som känns modern i varje detalj.",
      sub: "Just nu studerar jag Webbutveckling på TUC Yrkeshögskola och utvecklar projekt inom frontend, backend och databaser.",
      cv: "Ladda ner CV",
      linkedin: "LinkedIn",
    },
    about: {
      label: "Om mig",
      title: "Från passion till profession",
      bio: "Född i Damaskus och uppvuxen i Örebro, med erfarenhet från vård, service och butik som har format en trygg känsla för ansvar, lyhördhet och att alltid sätta människan i fokus.",
      profileTitle: "Personlig profil",
      profileText: "En nyfiken och målmedveten person som älskar att utvecklas, lösa problem och skapa något som känns meningsfullt. Kommunikation och kreativt tänkande kommer naturligt för mig.",
      birthplace: "Födelseort: Damaskus",
      location: "Plats: Örebro, Sverige",
      langArabic: "Arabiska – modersmål",
      langSwedish: "Svenska – flytande",
      langEnglish: "Engelska – grundläggande",
    },
    education: {
      label: "Utbildning",
      title: "Studier och kvalifikationer",
      items: [
        { year: "2024 – 2026", school: "TUC Yrkeshögskola", program: "Webbutveckling", desc: "En kombination av frontend, backend, UX‑design, projektledning och agila arbetssätt." },
        { year: "2020 – 2023", school: "Thorén Business School", program: "Naturvetenskap", desc: "Biologi, kemi, fysik, matematik och vetenskapliga arbetssätt." },
        { year: "2016 – 2020", school: "Västra Engelbrektsskolan", program: "Grundskola", desc: "Allmän grundskoleutbildning från årskurs 6–9." },
      ],
    },
    skills: {
      label: "Kompetenser",
      title: "Färdigheter & expertis",
      technical: "Tekniska kompetenser",
      technicalList: ["HTML", "CSS / SASS", "JavaScript", "React", "Next.js", "C#", "WordPress", "Design & UX", "GitHub", "Responsiv design"],
      methods: "Arbetssätt & verktyg",
      methodsList: ["Agila metoder", "Publiceringsverktyg", "Planeringsförmåga", "Kommunikation", "Strukturerat arbetssätt"],
      personal: "Personliga styrkor",
      personalList: ["Empatisk", "Ambitiös", "Ansvarsfull", "Samarbetsinriktad", "Anpassningsbar", "Tålmodig", "Organiserad", "Driven"],
    },
    services: {
      label: "Tjänster",
      title: "Från idé till färdig digital upplevelse",
      items: [
        { title: "Responsiva hemsidor", desc: "Webbplatser som fungerar perfekt på alla enheter." },
        { title: "Modern frontend", desc: "Premium UI/UX med animationer och visuellt djup." },
        { title: "Webboptimering", desc: "Snabba laddtider, SEO och teknisk förbättring." },
      ],
    },
    projects: {
      label: "Projekt",
      title: "Webbprojekt under studierna",
      items: [
        { title: "TDD TicketBooking – C#", desc: "Backend, logik och testdriven utveckling.", url: "https://github.com/Baat00l/TDD-TicketBooking" },
        { title: "Movie Seat Booking – JS", desc: "Interaktivt UI och visuellt projekt.", url: "https://github.com/Baat00l/Movie-seat-booking-Javascript" },
        { title: "Databas", desc: "Databasstruktur och backend‑logik.", url: "https://github.com/Baat00l/Laboration-4-Databas" },
      ],
    },
    blog: {
      label: "Reflektioner",
      title: "Människan bakom designen & koden",
      items: [
        { year: "2024", title: "Min utveckling", text: "Jag har förfinat min förmåga att skriva strukturerad och hållbar kod samt att organisera projekt på ett professionellt och skalbart sätt." },
        { year: "2025", title: "Utmaningar", text: "Animationer, responsivitet och SCSS‑struktur har varit utmanande men samtidigt utvecklande moment som har bidragit till en mer genomtänkt och professionell arbetsprocess." },
        { year: "2026", title: "Framtida mål", text: "Fokus ligger nu på att bredda perspektivet och ta sig an projekt som kräver mer helhetstänk, struktur och kreativ problemlösning." },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Skicka ett meddelande",
      name: "Namn",
      email: "E‑post",
      message: "Meddelande",
      send: "Skicka meddelande",
      success: "Tack för ditt meddelande! Jag återkommer snart.",
      infoTitle: "Kontaktuppgifter",
      infoSub: "Du kan också nå mig direkt via telefon eller e‑post.",
    },
    footer: {
      rights: "Alla rättigheter förbehållna.",
    },
  },
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", blog: "Reflections", contact: "Contact", skills: "Skills" },
    hero: {
      role: "Web Developer • Örebro",
      name: "Batool Fahmi",
      intro: "Responsive and visually sharp web solutions built with a focus on design, structure, and a modern experience in every detail.",
      sub: "Currently studying Web Development at TUC Yrkeshögskola, building projects in frontend, backend, and databases.",
      cv: "Download CV",
      linkedin: "LinkedIn",
    },
    about: {
      label: "About",
      title: "From passion to profession",
      bio: "Born in Damascus and raised in Örebro, with experience from healthcare, service, and retail that has shaped a strong sense of responsibility, empathy, and always putting people first.",
      profileTitle: "Personal Profile",
      profileText: "A curious and determined person who loves to grow, solve problems, and create something meaningful. Communication and creative thinking come naturally to me.",
      birthplace: "Birthplace: Damascus",
      location: "Location: Örebro, Sweden",
      langArabic: "Arabic – native",
      langSwedish: "Swedish – fluent",
      langEnglish: "English – basic",
    },
    education: {
      label: "Education",
      title: "Studies and qualifications",
      items: [
        { year: "2024 – 2026", school: "TUC Yrkeshögskola", program: "Web Development", desc: "A combination of frontend, backend, UX design, project management, and agile methodologies." },
        { year: "2020 – 2023", school: "Thorén Business School", program: "Natural Sciences", desc: "Biology, chemistry, physics, mathematics, and scientific methods." },
        { year: "2016 – 2020", school: "Västra Engelbrektsskolan", program: "Primary School", desc: "General education grades 6–9." },
      ],
    },
    skills: {
      label: "Skills",
      title: "Skills & expertise",
      technical: "Technical Skills",
      technicalList: ["HTML", "CSS / SASS", "JavaScript", "React", "Next.js", "C#", "WordPress", "Design & UX", "GitHub", "Responsive Design"],
      methods: "Methods & Tools",
      methodsList: ["Agile methods", "Publishing tools", "Planning", "Communication", "Structured workflow"],
      personal: "Personal Strengths",
      personalList: ["Empathetic", "Ambitious", "Responsible", "Team-oriented", "Adaptable", "Patient", "Organized", "Driven"],
    },
    services: {
      label: "Services",
      title: "From idea to finished digital experience",
      items: [
        { title: "Responsive Websites", desc: "Websites that work perfectly on every device." },
        { title: "Modern Frontend", desc: "Premium UI/UX with animations and visual depth." },
        { title: "Web Optimization", desc: "Fast load times, SEO, and technical improvements." },
      ],
    },
    projects: {
      label: "Projects",
      title: "Web projects during my studies",
      items: [
        { title: "TDD TicketBooking – C#", desc: "Backend, logic, and test-driven development.", url: "https://github.com/Baat00l/TDD-TicketBooking" },
        { title: "Movie Seat Booking – JS", desc: "Interactive UI and visual project.", url: "https://github.com/Baat00l/Movie-seat-booking-Javascript" },
        { title: "Database", desc: "Database structure and backend logic.", url: "https://github.com/Baat00l/Laboration-4-Databas" },
      ],
    },
    blog: {
      label: "Reflections",
      title: "The person behind the design & code",
      items: [
        { year: "2024", title: "My Development", text: "I've refined my ability to write structured, sustainable code and organize projects in a professional, scalable way." },
        { year: "2025", title: "Challenges", text: "Animations, responsiveness, and SCSS structure have been challenging but rewarding, contributing to a more thoughtful and professional workflow." },
        { year: "2026", title: "Future Goals", text: "The focus now is on broadening my perspective and taking on projects that require holistic thinking, structure, and creative problem-solving." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Send a message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      success: "Thank you for your message! I'll get back to you soon.",
      infoTitle: "Contact Info",
      infoSub: "You can also reach me directly by phone or email.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
} as const;

type Translations = typeof translations["sv"] | typeof translations["en"];

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: "sv",
  t: translations.sv,
  toggleLang: () => {},
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("sv");
  const toggleLang = useCallback(() => setLang((l) => (l === "sv" ? "en" : "sv")), []);
  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
