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
    openProject: "Open case",
    imageAlt: "Cover for {title}",
  },
  projectPage: {
    back: "All cases",
    visitLive: "See it live",
    role: "Role",
    context: "Context",
    year: "Year",
    stack: "Stack",
    challenge: "The problem",
    solution: "What I did",
    highlights: "What holds the case up",
    gallery: "Screens",
    openImage: "Enlarge image",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
    nextProject: "Next case",
  },
  projects: [
    {
      slug: "rag-boticario",
      title: "RAG at Boticário",
      category: "Applied AI",
      year: "2026",
      summary:
        "A RAG pipeline over support materials, trainings, and operational guidance, indexed for grounded retrieval. I also multiply AI across other teams.",
      stack: ["RAG", "LangChain", "Vector store", "Agents"],
      metric: { value: "RAG", label: "Operational knowledge, with a source" },
      caseStudy: {
        role: "AI / GenAI Engineer",
        context: "Grupo Boticário",
        overview:
          "At Grupo Boticário I design a RAG pipeline over support materials, trainings, and operational guidance, indexed for grounded retrieval. I was also selected to multiply AI across the company: training other teams, coaching implementation, and unblocking adoption.",
        challenge:
          "Operational knowledge lived across documents, trainings, and day-to-day guidance. Without grounded retrieval, people either lose time searching or get an answer they cannot check.",
        solution:
          "I design the RAG on that material, with a vector index. On the agent side, I implement database lookup, ticket actions, and Slack messaging inside a documented harness so orchestration stays repeatable.",
        highlights: [
          {
            title: "Grounded retrieval",
            body: "The pipeline covers support materials, trainings, and operational guidance. The answer comes from what was indexed.",
          },
          {
            title: "Tool-using agents",
            body: "Database lookup, ticket-board actions, and Slack messages, inside a documented harness.",
          },
          {
            title: "AI multiplier",
            body: "Trainings for other teams, implementation coaching, and support when adoption stalls mid-delivery.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "app-super",
      title: "App Super",
      category: "Product",
      year: "2026",
      summary:
        "A workforce-management PWA for 10,000+ people. It replaced dozens of spreadsheets for hours, time off, and skills matrices.",
      stack: ["React", "Node.js", "DocumentDB", "AWS"],
      metric: { value: "10k+", label: "People in the operation" },
      caseStudy: {
        role: "Engineer on the PWA",
        context: "Grupo Boticário",
        overview:
          "Engineer on App Super, a workforce-management PWA for 10,000+ people. React, Node.js, MongoDB/DocumentDB, and SSO, collaborating with DevOps on AWS (EKS, S3), ArgoCD, and New Relic.",
        challenge:
          "Hours, time off, and skills matrices lived in dozens of spreadsheets. Plant coordinators lost time allocating teams, and leadership had little visibility.",
        solution:
          "I work on the technical decisions of the PWA and with DevOps on deploy and monitoring. Systematizing the work took operational control off the spreadsheets.",
        highlights: [
          {
            title: "Scale",
            body: "10,000+ people in the operation, with SSO and the cloud stack the company already runs.",
          },
          {
            title: "Output",
            body: "About 20% more productivity for plant coordinators and 10% less time spent allocating teams.",
          },
          {
            title: "Operational base",
            body: "The slice supports an operational cost base of roughly R$63 million a year.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "plataforma-rh",
      title: "HR platform",
      category: "Leadership",
      year: "2025",
      summary:
        "An internal time-tracking and payroll system for contractors, built from scratch. Tech lead. Payroll close dropped by about 70%.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "n8n"],
      metric: { value: "−70%", label: "Time to close payroll" },
      caseStudy: {
        role: "Full-Stack and Tech Lead",
        context: "ASSUMTEK",
        overview:
          "At ASSUMTEK, from January 2025 to January 2026, I built the internal time-tracking and payroll system for PJ contractors and led engineering: architecture, demand, and 1:1s.",
        challenge:
          "Contractor hours, caps, approvals, and dynamic compensation depended on a manual process. Payroll close was slow and easy to get wrong.",
        solution:
          "A product from scratch with Node, PostgreSQL, Next.js, Vercel, and Railway, including the business rules and approval flows. Around it, integration backends with Node, n8n, and Make (Meta Ads, CRMs) and Node/Python pipelines for Power BI.",
        highlights: [
          {
            title: "Payroll",
            body: "About 70% less HR operational time to close payroll.",
          },
          {
            title: "Tech lead",
            body: "Demand management, solution architecture, and 1:1s.",
          },
          {
            title: "Data",
            body: "Pipelines for Power BI across Product, Marketing, IT, HR, and client-facing B2B projects.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "saas-barbearias",
      title: "Barbershop SaaS",
      category: "Founder",
      year: "2021",
      summary:
        "A multi-tenant product I founded: scheduling, payroll, subscriptions, and reminders. It passed 7,000 registered users.",
      stack: ["Next.js", "Prisma", "AWS S3", "Vercel"],
      metric: { value: "7k+", label: "Registered users" },
      caseStudy: {
        role: "Founder and Full-Stack",
        context: "Sentier",
        overview:
          "At Sentier, from January 2021 to January 2025, I was the primary engineer on 40+ B2B projects and on a multi-tenant barbershop SaaS.",
        challenge:
          "Scheduling, commission, subscriptions, and reminders were fragmented. The shops needed a multi-tenant system that digitized the day without a heavy operation.",
        solution:
          "I built scheduling, staff payroll, a subscription engine, and automated reminders with Next.js, Node.js, Prisma, AWS S3, Resend, and Vercel. The other projects ran from Figma through production.",
        highlights: [
          {
            title: "Product scale",
            body: "7,000+ registered users.",
          },
          {
            title: "Time in the operation",
            body: "Clients saved about 17–20% of daily operational time.",
          },
          {
            title: "B2B delivery",
            body: "40+ complete projects: systems, landing pages, automations, and BI.",
          },
        ],
        gallery: [],
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
