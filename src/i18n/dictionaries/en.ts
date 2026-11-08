import type { Dictionary } from "../get-dictionary";

const en: Dictionary = {
  meta: {
    title: "Felipe P. dos Santos — AI / LLM Engineer",
    description:
      "Senior AI Engineer: RAG, tool-using agents, and LLM platforms, backed by 6 years of full-stack development. Open to new projects, based in Curitiba, Brazil.",
    keywords: [
      "AI Engineer",
      "Senior AI Engineer",
      "LLM",
      "vLLM",
      "RAG",
      "agents",
      "GenAI",
      "Brazil",
      "Felipe P. dos Santos",
    ],
  },
  nav: {
    links: [
      { label: "Service", href: "#servicos" },
      { label: "Projects", href: "#projetos" },
      { label: "Career", href: "#experiencia" },
      { label: "Studies", href: "#estudos" },
    ],
    startProject: "Download CV",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Felipe — home",
    contactLabel: "Contact",
    networksLabel: "Social",
    baseLabel: "Base",
    remote: "Curitiba · remote",
    switchTo: "Português",
    langCode: "PT",
  },
  hero: {
    status: "Open to new projects",
    name: "Felipe Santos",
    role: ["AI Engineer", "Senior"],
    pitchLead: "I build AI-native solutions that run in production.",
    pitch:
      "Python and JavaScript systems on AWS with multi-agent pipelines, RAG, observability, and cost control that survive real users.",
    ctaPrimary: "Download CV",
    ctaSecondary: "See projects",
    photoAlt:
      "Felipe Santos in glasses and a sweater, smiling with arms crossed.",
  },
  marquee: [
    "vLLM",
    "RAG",
    "Agents",
    "LangChain",
    "Python",
    "Next.js",
    "Node.js",
    "AWS",
    "TypeScript",
  ],
  services: {
    eyebrow: "Service",
    title: "AI-native systems",
    summary:
      "I build custom solutions for companies, from process automation to complete systems. The work starts with a diagnosis of the company and runs until the system is built and live.",
    includesLabel: "What's included",
    deliverables: [
      "Company and process diagnosis",
      "AI process automation",
      "Custom-built systems",
      "Multi-agent pipelines and integrations",
    ],
  },
  work: {
    eyebrow: "Projects",
    title: "Cases worth opening in a call.",
    openProject: "View project",
    imageAlt: "Cover for {title}",
  },
  projectPage: {
    back: "All projects",
    visitLive: "See it live",
    viewCode: "View the code",
    role: "Role",
    context: "Context",
    year: "Year",
    stack: "Stack",
    challenge: "The problem",
    solution: "What I built",
    numbers: "By the numbers",
    howItWorks: "How it works",
    highlights: "Why you can trust it",
    underTheHood: "Under the hood",
    techTitle: "The technical side",
    techIntro:
      "For those who want to see the engine: how the pieces talk, the decisions that protect the schedule, and the full stack.",
    architecture: "Architecture",
    alsoTalksTo: "The API also talks to",
    engineering: "Engineering decisions",
    gallery: "Screens",
    openImage: "Enlarge image",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    nextProject: "Next project",
  },
  projects: [
    {
      slug: "leemia",
      title: "Leemia",
      category: "My own product",
      year: "2026",
      summary:
        "Online booking for studios and salons. Clients book in three taps, the studio runs everything from one dashboard, and the same slot is never sold twice.",
      stack: ["Next.js", "React", "Express", "PostgreSQL", "Prisma"],
      href: "https://agendamento.mefelipe.com.br",
      metric: { value: "3 taps", label: "for a client to book a slot" },
      reel: {
        url: "agendamento.mefelipe.com.br",
        ariaLabel:
          "Animation with real Leemia screens: booking on a phone, the studio dashboard, the professional's dashboard, and opening hours.",
        screens: [
          { src: "/projetos/leemia/reserva.webp", label: "Three-step booking" },
          { src: "/projetos/leemia/admin-visao-geral.webp", label: "Studio dashboard" },
          { src: "/projetos/leemia/profissional-painel.webp", label: "Professional dashboard" },
          { src: "/projetos/leemia/admin-expediente.webp", label: "Hours and holidays" },
        ],
        phone: "/projetos/leemia/mobile-reserva.webp",
        toasts: [
          { title: "Slot booked", body: "Men's haircut · Tue, Nov 10 · 10:00" },
          { title: "Confirmation sent", body: "Email to the client and the professional" },
          { title: "Schedule updated", body: "Marina Costa · next appointment at 10:00" },
        ],
      },
      caseStudy: {
        role: "Product, design, and engineering",
        context: "My own product, live",
        overview:
          "Leemia takes the studio's schedule off the paper notebook. Clients book on their own, at any time, in three taps. The studio manages bookings, staff, and hours from one dashboard, and each professional follows their own day.",
        challenge:
          "In many studios, booking a haircut still means a phone call, a text, and a notebook at the front desk. That is how the same slot gets sold twice, messages get lost, and professionals only learn their day when they walk in.",
        solution:
          "I built, from scratch, an online schedule that only shows slots that really exist. The grid comes from the studio's and each professional's hours, in 15-minute steps. Everyone sees what they need: clients book and cancel their own slots, the studio manages everything, and professionals join by invitation.",
        numbers: [
          { value: "3", label: "taps to book: service, professional, and time" },
          { value: "15 min", label: "precision on the time grid" },
          { value: "2", label: "safeguards against double booking: in the code and in the database" },
          { value: "10 min", label: "to undo a change to the schedule" },
        ],
        audiences: [
          {
            eyebrow: "For the client",
            title: "Books in three taps",
            body: "Pick the service, the professional, and a free slot. The confirmation arrives by email, and clients can cancel on their own up to 2 hours before.",
            points: [
              "Only real, free slots show up",
              "Designed for the phone first",
              "Up to 60 days ahead",
            ],
            shot: {
              src: "/projetos/leemia/reserva.webp",
              alt: "Booking screen with a calendar, free time slots, and the booking summary.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "For the studio",
            title: "Runs everything from one dashboard",
            body: "The full schedule, service catalog, staff, and opening hours, with revenue, occupancy, and average ticket for the period.",
            points: [
              "Book on a client's behalf",
              "Staff join by invitation",
              "Holidays and special days",
            ],
            shot: {
              src: "/projetos/leemia/admin-visao-geral.webp",
              alt: "Studio overview with bookings, revenue, average ticket, and occupancy.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "For the professional",
            title: "Sees their own day",
            body: "A dashboard with their own numbers and schedule, where they confirm, start, complete, or mark a no-show for each appointment.",
            points: [
              "Their own metrics",
              "Schedule by period and status",
              "An email for every new booking",
            ],
            shot: {
              src: "/projetos/leemia/profissional-painel.webp",
              alt: "Professional's dashboard with revenue, occupancy, and upcoming appointments.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
        ],
        highlights: [
          {
            title: "A schedule you can trust",
            body: "The grid comes from real working hours. At booking time, the system locks the professional's schedule, and the database itself refuses two clients in the same slot.",
          },
          {
            title: "Clear rules",
            body: "A single rule set decides what clients, professionals, and the studio can do with each booking: a cancellation window, a history of every change, and a 10-minute “Undo”.",
          },
          {
            title: "Protected accounts",
            body: "Passwords stored safely, login locked after 5 failed attempts, email confirmed before booking, and professional access by invitation only.",
          },
          {
            title: "No one caught off guard",
            body: "Clients and professionals get an email when a slot is booked or canceled. If the studio changes its hours, anyone who loses a slot is told why.",
          },
        ],
        gallery: [
          {
            src: "/projetos/leemia/landing.webp",
            alt: "Leemia's home page with the headline “Book your slot in three taps”.",
            caption: "The home page introduces the booking, which takes less than a minute.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/reserva.webp",
            alt: "Third booking step: calendar, grid of free slots, and a summary with the total.",
            caption: "Three-step booking: service, professional, and time. The grid only shows what is free.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-visao-geral.webp",
            alt: "Studio overview with bookings, revenue, average ticket, occupancy, and latest bookings.",
            caption: "Studio overview: realized and expected revenue, average ticket, and occupancy, by period, professional, and service.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-expediente.webp",
            alt: "Opening hours for each day of the week, with Sunday closed.",
            caption: "Hours and holidays: the weekly schedule, special days, and each professional's own hours.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/profissional-painel.webp",
            alt: "Dashboard of the professional Marina Costa with revenue, occupancy, and upcoming appointments.",
            caption: "Professional dashboard: revenue, occupancy, and upcoming appointments for whoever is signed in.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-servicos.webp",
            alt: "Service catalog with duration and price.",
            caption: "Catalog: price and duration of each service. A service with history is deactivated, never deleted.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-equipe.webp",
            alt: "Staff with each professional's services and the state of their dashboard access.",
            caption: "Staff: each professional's services and dashboard access, granted once the invitation is accepted.",
            width: 2160,
            height: 1350,
          },
        ],
        architecture: {
          flow: [
            { name: "Browser", detail: "Clients, studio, and professionals" },
            { name: "Next.js web app", detail: "Vercel" },
            { name: "Express API", detail: "Railway · business rules" },
            { name: "PostgreSQL", detail: "Railway · private network" },
          ],
          services: [
            { name: "Resend", detail: "Transactional email" },
            { name: "S3 bucket", detail: "Profile photos" },
            { name: "GitHub Actions", detail: "CI on every pull request" },
          ],
          note: "The browser loads the app from Vercel and calls the API directly, with the token in the header, and CORS only accepts the front end's origin. Only the API talks to the database, and it holds every rule, in layers: routes, controllers with Zod validation, services, and Prisma.",
        },
        engineering: [
          {
            title: "Two locks against double booking",
            body: "When booking, the service locks the professional's row with FOR UPDATE inside the transaction. If the code ever fails, an EXCLUDE constraint in PostgreSQL rejects the overlap.",
          },
          {
            title: "One state machine",
            body: "A single module decides who can change a booking's status, and when: deadlines per role, a history of every transition, and a 10-minute “Undo”.",
          },
          {
            title: "Impact checked before hours change",
            body: "Closing a day or changing hours lists the affected clients before saving and asks for a decision: keep the bookings, or cancel and email each client the reason.",
          },
          {
            title: "Sessions and access",
            body: "JWT with a session version (“Sign out” ends every session), bcrypt, login lockout by email and IP, per-route rate limits, Helmet, and strict CORS.",
          },
          {
            title: "Delivery with a safety net",
            body: "CI with four parallel jobs on every pull request (API, web, database contract, and Playwright E2E) and a health check that reports the live commit. Seed and E2E refuse to run against the production database.",
          },
        ],
        stackTable: [
          {
            layer: "Front end",
            tech: "Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Radix UI, and GSAP",
          },
          {
            layer: "API",
            tech: "Node.js 20, Express 4, TypeScript, Zod, Helmet, and Swagger",
          },
          {
            layer: "Data",
            tech: "PostgreSQL with Prisma 7, versioned migrations, and an exclusion constraint",
          },
          {
            layer: "Auth",
            tech: "JWT with a session version and bcrypt-hashed passwords",
          },
          {
            layer: "Integrations",
            tech: "Resend for email and an S3 bucket for profile photos",
          },
          {
            layer: "Tests",
            tech: "node:test for unit tests and Playwright for API and UI end-to-end tests",
          },
          {
            layer: "Delivery",
            tech: "GitHub Actions, Vercel, Railway, and Docker Compose for local development",
          },
        ],
        codeHref: "https://github.com/Tiodevs/sistema-de-agendamentos",
      },
    },
  ],
  cv: {
    href: "/cv-en.pdf",
    fileName: "Felipe P. dos Santos - Resume.pdf",
  },
  process: {
    eyebrow: "Career",
    title: "Where I have put software into an operation.",
    steps: [
      {
        index: "01",
        title: "Unimed",
        period: "Nov 2026 — present",
        role: "Senior AI Engineer",
        description:
          "I own the in-house LLM platform behind the AI projects of this Brazilian health insurer: vLLM on GPUs in AWS, a gateway, observability, and fallback between models. I also help teams integrate AI into their systems.",
      },
      {
        index: "02",
        title: "Grupo Boticário",
        period: "Jan 2026 — Nov 2026",
        role: "AI / GenAI and Software Engineer",
        description:
          "RAG over support materials and operational guidance, tool-using agents, and App Super, a PWA for 10,000+ people. Systematizing the work replaced dozens of spreadsheets: about 20% more output for plant coordinators and 10% less time spent allocating teams.",
      },
      {
        index: "03",
        title: "ASSUMTEK",
        period: "Jan 2025 — Jan 2026",
        role: "Full-Stack and Tech Lead",
        description:
          "An internal time-tracking and payroll system for contractors, built from scratch, with hour caps, approvals, and dynamic compensation. Tech lead for architecture, demand, and 1:1s. Payroll close dropped by about 70%. Around it, MarTech integrations and pipelines for Power BI.",
      },
      {
        index: "04",
        title: "Sentier",
        period: "Jan 2021 — Jan 2025",
        role: "Founder and Full-Stack",
        description:
          "40+ B2B projects, from Figma through production, and a multi-tenant barbershop SaaS: scheduling, payroll, subscriptions, and reminders. It passed 7,000 users. Clients saved about 17–20% of daily operational time.",
      },
    ],
  },
  studies: {
    eyebrow: "Studies",
    title: "The degree, and what I studied around it.",
    degreeLabel: "Degree",
    degree: "Analysis and Systems Development",
    school: "FAEL",
    period: "Jan 2021 — Dec 2025",
    coursesLabel: "Courses",
    courses: [
      {
        title: "Desenvolve Program",
        place: "Grupo Boticário · Full Stack, Node, React, Next, and AI",
        year: "2025",
        logo: "/logos/grupo-boticario.png",
      },
      {
        title: "Business Fundamentals",
        place: "Harvard Business Education",
        year: "2025",
        logo: "/logos/harvard.png",
      },
      {
        title: "Data Analysis and BI",
        place: "Google",
        year: "2025",
        logo: "/logos/google.svg",
      },
      {
        title: "CS50x",
        place: "Harvard University · Computer Science",
        year: "2021",
        logo: "/logos/harvard.png",
      },
      {
        title: "AWS Academy Cloud Foundations",
        place: "AWS",
        year: "2021",
        logo: "/logos/aws.svg",
      },
    ],
  },
  contact: {
    eyebrow: "Résumé",
    headline: ["Download", "the CV."],
    follow: "Social",
    intro:
      "The English PDF has the trajectory, the stack, and the education. The Portuguese version of this page serves the file in Portuguese.",
    download: "Download CV",
  },
  footer: {
    rights: "All rights reserved",
    backToTop: "Back to top ↑",
  },
  menu: {
    baseCity: "Curitiba, Brazil",
  },
};

export default en;
