// ─────────────────────────────────────────────────────────────────────
// Assets
// ─────────────────────────────────────────────────────────────────────
import adaKitchen from "./assets/adaskitchen.png";
import growWithAlerah from "./assets/grow-with-alerah.png";
import mobileApp from "./assets/mobileApp.png"; // ← uncomment when file is ready

// ─────────────────────────────────────────────────────────────────────
// Profile
// ─────────────────────────────────────────────────────────────────────
export const profile = {
  name: "Emmanuel Lumati",
  role: "Fullstack Developer",
  tagline:
    "I design, build, and ship production apps across React, React Native, and Spring Boot — from MySQL schemas and secure APIs to pixel-tight interfaces.",
  quote: "Ship it, then make it elegant.",

  email: "emmanuellumati22@gmail.com",
  phone: "+2348027723121",
  phoneHref: "tel:+2348027723121",
  address:
    "No. 54 Ogbunabali Road, Port Harcourt, Rivers State, Nigeria, 500101",
  locationShort: "Port Harcourt, Nigeria",

  socials: {
    github: "https://github.com/Emmylums",
    linkedin: "https://www.linkedin.com/in/emmanuel-lumati-759900286",
  },

  whatsapp: "https://wa.me/2348027723121",
};

// ─────────────────────────────────────────────────────────────────────
// Stats strip
// ─────────────────────────────────────────────────────────────────────
export const stats = [
  { value: "3+", label: "Years Building" },
  { value: "100%", label: "Project Ownership" },
  { value: "10+", label: "Technologies" },
  { value: "2", label: "Platforms" },
];

// ─────────────────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────────────────
export const services = [
  {
    title: "Web Development",
    description:
      "Production React apps with TypeScript and Tailwind — fast, accessible, and built to last.",
    icon: "web",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform React Native apps for iOS and Android, shipped to the stores and maintained.",
    icon: "mobile",
  },
  {
    title: "Backend & APIs",
    description:
      "Spring Boot and Node.js services, REST APIs, authentication, and MySQL schemas that scale.",
    icon: "server",
  },
  {
    title: "Full-stack Delivery",
    description:
      "End-to-end ownership — from data model and API to UI and deployment. One developer, whole product.",
    icon: "layers",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────────────
export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Java", "SQL"] },
  {
    group: "Frontend & Mobile",
    items: ["React", "React Native", "Tailwind CSS"],
  },
  {
    group: "Backend & Data",
    items: ["Spring Boot", "Node.js", "MySQL", "Firebase"],
  },
];

// ─────────────────────────────────────────────────────────────────────
// Process
// ─────────────────────────────────────────────────────────────────────
export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the goal, users, and constraints before writing code. Clear problems ship better.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Data model, API surface, screen flows. Architecture on paper beats refactoring in production.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative delivery with weekly demos. Tests where they matter, clean commits, honest updates.",
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Deploy, monitor, hand off. I stick around for iteration — launch day is the start, not the end.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    question: "Do you take freelance work?",
    answer:
      "Yes — I take on a small number of freelance projects alongside full-time roles. Reach out with the scope and timeline and I'll let you know if I have bandwidth.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Absolutely. I start by reading and understanding the codebase before proposing changes — small, safe adjustments first, then bigger ones once I have context.",
  },
  {
    question: "Do you work on both web and mobile?",
    answer:
      "Yes. React and React Native share a lot of mental model, so I move between them comfortably. Many of my projects touch both.",
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "Weekly written updates over Email or WhatsApp, plus a short demo call each week. No black-box sprints — meaning you won't hand off work and hear nothing until the end; you'll always know what's being built, what's blocked, and what's shipping next.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Happy to. Send yours over, or I can share a standard mutual NDA.",
  },
];

// ─────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────
export type ProjectStatus = "live" | "wip" | "archived" | "private";
export type PlaceholderIcon = "web" | "mobile" | "scissors" | "generic";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  role?: string;
  status: ProjectStatus;
  link?: string;
  repo?: string;
  image?: string;
  note?: string;
  /** Icon shown when there's no image. Defaults to "web". */
  placeholderIcon?: PlaceholderIcon;
}

export const projects: Project[] = [
  {
    title: "Ada's Kitchen",
    description:
      "A full restaurant site for a UK-based Nigerian kitchen — menu, ordering, catering, and an editorial 'Our Story' page. React frontend with Firebase powering content and the gallery.",
    tags: ["React", "Firebase", "Tailwind"],
    role: "Fullstack",
    status: "live",
    link: "https://www.adaskitchen.uk",
    image: adaKitchen,
  },
  {
    title: "Grow With Alerah",
    description:
      "A coaching and financial-empowerment site for a Nigerian entrepreneur — services, consultation bookings, and an editorial layout for the founder's story.",
    tags: ["Web Design", "Frontend"],
    role: "Designer & Frontend",
    status: "live",
    link: "https://grow-with-alerah.netlify.app/",
    image: growWithAlerah,
    note: "One of my first public builds — where I learned to turn a brief into a shipped site.",
  },
  {
    title: "Ada's Kitchen App",
    description:
      "The mobile companion to Ada's Kitchen — menu browsing, ordering, and order tracking, built with React Native and Firebase. Currently in development.",
    tags: ["React Native", "Firebase"],
    role: "Fullstack",
    status: "wip",
    image: mobileApp, // ← uncomment when src/assets/mobile-app.png is added
    placeholderIcon: "mobile",
  },

  // ─────────────────────────────────────────────────────────────────
  // Unhosted / private project — uncomment and fill in if applicable
  // ─────────────────────────────────────────────────────────────────
  // {
  //   title: "Project Name",
  //   description:
  //     "One sentence: what it does, who it's for, what you built. No URL available.",
  //   tags: ["React Native", "Node.js"],
  //   role: "Fullstack",
  //   status: "private",
  //   note: "Not publicly hosted — case study available on request.",
  // },

  {
    title: "LC Signatures Cutz",
    description:
      "Booking and marketing site for a UK barber shop. I owned the backend — authentication, bookings, and admin — and contributed to the frontend.",
    tags: ["Node.js", "Backend", "Frontend"],
    role: "Backend Engineer",
    status: "archived",
    placeholderIcon: "scissors",
    note: "Client discontinued hosting — site is no longer live. Happy to walk through the build on a call.",
  },
];