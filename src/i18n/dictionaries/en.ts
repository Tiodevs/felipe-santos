import type { Dictionary } from "../get-dictionary";

const en: Dictionary = {
  meta: {
    title: "Felipe P. dos Santos — AI / LLM Engineer",
    description:
      "Applied GenAI engineer. RAG, multi-tool agents, and production software. Open to CLT employment or a PJ contract, based in Curitiba.",
    keywords: [
      "AI Engineer",
      "LLM",
      "RAG",
      "agents",
      "GenAI",
      "Brazil",
      "Felipe P. dos Santos",
    ],
  },
  nav: {
    links: [
      { label: "About", href: "#estudio" },
      { label: "Work style", href: "#servicos" },
      { label: "Work", href: "#projetos" },
      { label: "Hiring", href: "#processo" },
      { label: "Contact", href: "#contato" },
    ],
    startProject: "Talk about a role",
    menu: "Menu",
    close: "Close",
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
    eyebrow: "AI / LLM Engineer · Mid-level",
    location: "Curitiba, Brazil",
    lines: ["Applied AI", "RAG &", "agents"],
    bodyBefore: "I ship GenAI into real operations.",
    bodyStrong: "RAG, multi-tool agents, and production software",
    bodyAfter:
      "Open to full-time employment (CLT) or a contractor agreement (PJ), based in Curitiba.",
    ctaPrimary: "Talk about a role",
    ctaSecondary: "See work",
    scrollNext: "Scroll to the next section",
  },
  marquee: [
    "RAG",
    "Agents",
    "LangChain",
    "Python",
    "Next.js",
    "Node.js",
    "AWS",
    "TypeScript",
  ],
  studio: {
    eyebrow: "About",
    title: "Product at scale. Now, applied AI inside the operation.",
    p1: "I'm Felipe P. dos Santos, an AI engineer at Grupo Boticário. Before that I led engineering at a startup and founded a B2B SaaS. The thread is the same: take a spreadsheet process and turn it into software a team actually uses.",
    p2: "I'm looking for an AI engineering team, either as a CLT employee or as a PJ contractor. The fit is production GenAI: grounded retrieval, tool-using agents, and operational automation. Degree in Systems Analysis and Development, plus CS50x, AWS Cloud Foundations, and the Desenvolve program.",
    photoAlt:
      "Portrait of Felipe P. dos Santos, wearing glasses and a white t-shirt, smiling outdoors.",
    stats: [
      { value: "6", label: "Years in technology" },
      { value: "7k+", label: "Users on the SaaS" },
      { value: "10k+", label: "People on App Super" },
      { value: "+20%", label: "Plant coordinator output" },
    ],
  },
  services: {
    eyebrow: "Work style",
    title: "What I bring to a team",
    items: [
      {
        id: "rag",
        index: "01",
        title: "RAG",
        summary:
          "Grounded retrieval over technical and operational documentation. The model answers from the company's material, not from loose memory.",
        deliverables: [
          "Vector index",
          "Support, training, and operational guidance",
          "Grounded answers",
          "Adoption with the people who use it",
        ],
      },
      {
        id: "agentes",
        index: "02",
        title: "Agents",
        summary:
          "Agents with several tools inside a harness: database lookup, ticket actions, and Slack messages, orchestrated so the team can run it again.",
        deliverables: [
          "Database, board, and Slack tools",
          "Documented harness",
          "Repeatable flows",
          "A trail of what the agent did",
        ],
      },
      {
        id: "produto",
        index: "03",
        title: "Product",
        summary:
          "From the data model to deploy. I have shipped a PWA for 10,000+ people and a SaaS with 7,000+ users.",
        deliverables: [
          "React, Next.js, and Node.js",
          "Python, PostgreSQL, and MongoDB",
          "AWS, Docker, and CI/CD",
          "Operational metrics",
        ],
      },
      {
        id: "contratacao",
        index: "04",
        title: "CLT or PJ",
        summary:
          "I join as a CLT employee or as a PJ contractor. The scope is applied AI engineering, remote from Curitiba.",
        deliverables: [
          "Full-time CLT employment",
          "PJ contract",
          "Remote, based in Curitiba",
          "It starts with a conversation",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Work",
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
  process: {
    eyebrow: "Hiring",
    title: "CLT or PJ, with a clear start.",
    steps: [
      {
        index: "01",
        title: "Conversation",
        description:
          "One call to understand the team, the AI problem, and whether the role is applied engineering. I leave knowing what has to be in production.",
      },
      {
        index: "02",
        title: "Role",
        description:
          "What I cover: RAG, agents, automation, and the software around them. What sits outside the role gets said too, so it does not show up mid-contract.",
      },
      {
        index: "03",
        title: "Format",
        description:
          "CLT or PJ. Both are an engineer hire, with the same scope. CLT is Brazilian full-time employment. PJ is a contractor agreement through a company. The format follows how the company already hires in Brazil.",
      },
      {
        index: "04",
        title: "Start",
        description:
          "We align the start date, the day-to-day channel, and the first delivery. Remote, from Curitiba.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    headline: ["Let's talk", "about a role."],
    follow: "Social",
    formEyebrow: "Recruiter",
    formIntro:
      "Name, email, and WhatsApp. It works for CLT and for PJ. I reply within 24 hours.",
    name: "Name",
    namePlaceholder: "What should I call you",
    email: "Email",
    emailPlaceholder: "you@company.com",
    phone: "WhatsApp",
    phonePlaceholder: "+55 11 90000-0000",
    preferEmail: "Prefer email?",
    submit: "Send message",
    sending: "Sending...",
    thanks:
      "Thanks, {name}. If your mail app opened, the message is ready to send. If it did not, write directly to the address below.",
    sendAnother: "Send another message",
    fallbackName: "there",
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
