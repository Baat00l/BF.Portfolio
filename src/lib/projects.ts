import projectTdd from "@/assets/project-tdd.jpg";
import projectMovie from "@/assets/project-movie.jpg";
import projectDatabase from "@/assets/project-database.jpg";

export interface Project {
  id: string;
  title: { sv: string; en: string };
  shortDesc: { sv: string; en: string };
  fullDesc: { sv: string; en: string };
  tech: string[];
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "tdd-ticketbooking",
    title: { sv: "TDD TicketBooking – C#", en: "TDD TicketBooking – C#" },
    shortDesc: {
      sv: "Backend, logik och testdriven utveckling.",
      en: "Backend, logic, and test-driven development.",
    },
    fullDesc: {
      sv: "Ett backend-projekt byggt med C# och testdriven utveckling (TDD). Projektet implementerar ett biljettbokningssystem med fokus på ren arkitektur, enhetstester och SOLID-principer. Systemet hanterar bokningar, validering och affärslogik genom välstrukturerade klasser och interfaces.",
      en: "A backend project built with C# and test-driven development (TDD). The project implements a ticket booking system focusing on clean architecture, unit tests, and SOLID principles. The system handles bookings, validation, and business logic through well-structured classes and interfaces.",
    },
    tech: ["C#", ".NET", "xUnit", "TDD", "SOLID"],
    url: "https://github.com/Baat00l/TDD-TicketBooking",
    image: projectTdd,
  },
  {
    id: "movie-seat-booking",
    title: { sv: "Movie Seat Booking – JS", en: "Movie Seat Booking – JS" },
    shortDesc: {
      sv: "Interaktivt UI och visuellt projekt.",
      en: "Interactive UI and visual project.",
    },
    fullDesc: {
      sv: "En interaktiv webbapplikation för bioplatsbokningar byggd med vanilla JavaScript. Användaren kan välja film, välja platser i biosalongen och se totalpriset uppdateras i realtid. Projektet demonstrerar DOM-manipulation, event handling och dynamisk UI-uppdatering med ett visuellt tilltalande gränssnitt.",
      en: "An interactive web application for movie seat bookings built with vanilla JavaScript. Users can select movies, choose seats in the cinema hall, and see the total price update in real-time. The project demonstrates DOM manipulation, event handling, and dynamic UI updates with a visually appealing interface.",
    },
    tech: ["JavaScript", "HTML", "CSS", "DOM API"],
    url: "https://github.com/Baat00l/Movie-seat-booking-Javascript",
    image: projectMovie,
  },
  {
    id: "databas-projekt",
    title: { sv: "Databas", en: "Database" },
    shortDesc: {
      sv: "Databasstruktur och backend-logik.",
      en: "Database structure and backend logic.",
    },
    fullDesc: {
      sv: "Ett databasprojekt med fokus på att designa och implementera relationsdatabaser. Projektet omfattar ER-diagram, normalisering, SQL-frågor och stored procedures. Arbetet visar förståelse för databasdesign, relationer mellan tabeller och effektiv datahantering.",
      en: "A database project focused on designing and implementing relational databases. The project covers ER diagrams, normalization, SQL queries, and stored procedures. The work demonstrates understanding of database design, table relationships, and efficient data management.",
    },
    tech: ["SQL", "ER-diagram", "Normalisering", "Stored Procedures"],
    url: "https://github.com/Baat00l/Laboration-4-Databas",
    image: projectDatabase,
  },
];
