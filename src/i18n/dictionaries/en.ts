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
    imageAlt: "Felipe Santos, Senior AI Engineer, smiling with his arms crossed.",
  },
  nav: {
    links: [
      { label: "Career", href: "#experiencia" },
      { label: "Service", href: "#servicos" },
      { label: "Projects", href: "#projetos" },
      { label: "Studies", href: "#estudos" },
      { label: "Skills", href: "#competencias" },
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
    stepsLabel: "How it works",
    steps: [
      {
        id: "diagnose",
        title: "Diagnosis",
        body: "It starts with a conversation about the business and its goals. Then I map processes, systems and data to find where time and money are lost, and together we pick the opportunities where AI pays off most.",
      },
      {
        id: "build",
        title: "Implementation",
        body: "I build the automation, agents or custom system, integrated with the tools you already use, and prepare the team to run it on their own.",
      },
      {
        id: "maintain",
        title: "Maintenance",
        body: "After launch, I track usage, cost and results, fix what comes up and evolve the solution as the business changes.",
      },
    ],
  },
  work: {
    eyebrow: "Projects",
    title: "From problem to live system.",
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
    howItWorks: "How it works",
    highlights: "Why you can trust it",
    underTheHood: "Under the hood",
    techTitle: "The technical side",
    techIntro:
      "For those who want to see the engine: how the pieces talk, the engineering decisions, and the full stack.",
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
      slug: "sistema-de-agendamentos",
      title: "Scheduling system",
      category: "My own product",
      year: "2026",
      summary:
        "Online booking for barbershops and salons, born at Sentier and past 7,000 users. Clients book in three taps, the salon runs everything from one dashboard, and the same slot is never sold twice.",
      stack: ["Next.js", "React", "Express", "PostgreSQL", "Prisma"],
      href: "https://agendamento.mefelipe.com.br",
      metric: { value: "7k+", label: "registered users" },
      // Two clients want the same slot at once, and the lock lets one
      // through. The product is in Portuguese, so the phones and the agenda
      // keep its real texts (from its code and seed); the log is in English.
      booking: {
        ariaLabel:
          "Animation of the scheduling system: two clients try to book Marina at 10:00 at the same time. The schedule locks, the first one gets the slot, the second is told it is taken, books 10:45 instead, and both get the confirmation email.",
        mark: "/projetos/sistema-de-agendamentos/marca.svg",
        clients: ["Client 1", "Client 2"],
        phone: {
          title: "Data e horário",
          steps: ["Serviço", "Profissional", "Horário"],
          choice: "Corte masculino · Marina Costa",
          days: ["seg 9", "ter 10", "qua 11"],
          slots: ["09:45", "10:00", "10:15", "10:30", "10:45", "11:00"],
          summaryTitle: "Resumo",
          summary: [
            { label: "Serviço", value: "Corte masculino" },
            { label: "Profissional", value: "Marina Costa" },
            { label: "Data", value: "ter, 10/11" },
            { label: "Horário", value: "{time}" },
            { label: "Duração", value: "45 min" },
            { label: "Total", value: "R$ 80,00" },
          ],
          confirm: "Confirmar agendamento",
          success: "Agendamento realizado com sucesso",
          conflict: "O funcionário já possui um agendamento neste horário",
          email: "Horário reservado: Corte masculino · {time}",
        },
        wanted: "10:00",
        fallback: "10:45",
        taken: ["09:45", "10:00", "10:15", "10:30"],
        agenda: {
          title: "Agenda · Marina Costa",
          day: "ter, 10/11",
          rows: ["09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15"],
          busy: "Agendado",
          service: "Corte masculino",
        },
        lock: "FOR UPDATE",
        logTitle: "API · transaction",
        log: [
          "Client 1 locks Marina's schedule",
          "Client 2 waits for the lock",
          "Client 1 · 10:00 free · booking created",
          "Client 2 · 10:00 taken · 409",
          "Client 2 · 10:45 free · booking created",
          "Email to the client and the professional",
        ],
      },
      caseStudy: {
        role: "Founder and Full-Stack",
        context: "Sentier · my own product, live",
        overview:
          "The scheduling system takes the barbershop's and salon's schedule off the paper notebook. It was born at Sentier and passed 7,000 users. Today clients book on their own, at any time, in three taps, the studio manages bookings, staff, and hours from one dashboard, and each professional follows their own day.",
        challenge:
          "In many studios, booking a haircut still means a phone call, a text, and a notebook at the front desk. That is how the same slot gets sold twice, messages get lost, and professionals only learn their day when they walk in.",
        solution:
          "I built, from scratch, an online schedule that only shows slots that really exist. The grid comes from the studio's and each professional's hours, in 15-minute steps. Everyone sees what they need: clients book and cancel their own slots, the studio manages everything, and professionals join by invitation.",
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
              src: "/projetos/sistema-de-agendamentos/reserva.webp",
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
              src: "/projetos/sistema-de-agendamentos/admin-visao-geral.webp",
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
              src: "/projetos/sistema-de-agendamentos/profissional-painel.webp",
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
            src: "/projetos/sistema-de-agendamentos/landing.webp",
            alt: "The system's home page with the headline “Book your slot in three taps”.",
            caption: "The home page introduces the booking, which takes less than a minute.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/reserva.webp",
            alt: "Third booking step: calendar, grid of free slots, and a summary with the total.",
            caption: "Three-step booking: service, professional, and time. The grid only shows what is free.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-visao-geral.webp",
            alt: "Studio overview with bookings, revenue, average ticket, occupancy, and latest bookings.",
            caption: "Studio overview: realized and expected revenue, average ticket, and occupancy, by period, professional, and service.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-expediente.webp",
            alt: "Opening hours for each day of the week, with Sunday closed.",
            caption: "Hours and holidays: the weekly schedule, special days, and each professional's own hours.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/profissional-painel.webp",
            alt: "Dashboard of the professional Marina Costa with revenue, occupancy, and upcoming appointments.",
            caption: "Professional dashboard: revenue, occupancy, and upcoming appointments for whoever is signed in.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-servicos.webp",
            alt: "Service catalog with duration and price.",
            caption: "Catalog: price and duration of each service. A service with history is deactivated, never deleted.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-equipe.webp",
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
    {
      slug: "ia-chat",
      title: "AI-chat",
      category: "Open-source project",
      year: "2026",
      summary:
        "An AI chat that serves hospital visitors. It answers only from what was published, shows the source of every answer, refuses medical advice and protects the data of whoever is chatting.",
      stack: ["Python", "FastAPI", "LangGraph", "Gemini", "pgvector", "React"],
      href: "https://atrium-gold.vercel.app",
      metric: { value: "500+", label: "automated tests" },
      // A live chat with the question's trace beside it. The product speaks
      // Portuguese, so the chat lines (from its real screens) stay in Portuguese
      // and the trace is in English.
      chat: {
        ariaLabel:
          "The AI-chat at work: a visitor asks where to park and gets an answer with its source while the trace lights up each step. Then a question about medicine is refused before the generator, and the message is not stored.",
        brand: "Atrium",
        mark: "/projetos/ia-chat/marca.svg",
        title: "Conversa",
        greeting: "Como podemos ajudar no Harborlight?",
        placeholder: "Pergunte sobre visita, caminhos ou horários",
        send: "Enviar",
        disclaimer: "Não envie sintomas nem nomes de medicamentos. O Atrium não dá orientação médica.",
        traceTitle: "Question trace",
        skipped: "skipped",
        steps: [
          { label: "Rewrite and classify", answered: "public info", refused: "medical advice" },
          { label: "Gate", answered: "pass", refused: "fixed refusal" },
          { label: "Hybrid search", answered: "vector + full text" },
          { label: "Similarity floor", answered: "≥ 0.50" },
          { label: "Streamed generation", answered: "SSE, token by token" },
          { label: "Check", answered: "citations match" },
        ],
        answered: {
          question: "Onde posso estacionar?",
          answer: [
            { text: "Você pode estacionar na Garagem da Harbor Street.", cite: "2" },
            {
              text: "Há também serviço de manobrista na entrada principal, disponível das 06:00 às 20:00.",
              cite: "2",
            },
          ],
          source: "Fonte 2 · Estacionamento",
          outcome: { code: "answered", label: "answer with sources" },
        },
        refused: {
          question: "Estou com febre, que remédio tomo?",
          storedAs: "Para proteger sua privacidade, não guardamos esta mensagem.",
          title: "Orientação médica recusada",
          body: "Não posso ajudar com sintomas, diagnóstico ou medicamento. Se for uma emergência, ligue para o número local de emergência.",
          extra: "A entrada de emergência do Harborlight fica no lado oeste e funciona 24 horas.",
          outcome: { code: "refused", label: "fixed refusal, before the generator" },
          notes: ["Message not stored", "Kept out of LangSmith"],
        },
      },
      caseStudy: {
        role: "Author and AI Engineer",
        context: "Personal project · open source, live",
        overview:
          "An AI chat that answers hospital visitors: visiting hours, where to park, which entrance to use. It replies in Portuguese, at any hour, only from what the hospital has published, and shows where each answer came from. The hospital is fictional; the engineering around it is production-grade, live and open source.",
        challenge:
          "In healthcare, an AI that makes up answers is a risk. The challenge was to put AI at the front door of the service without it inventing information, giving medical advice or keeping what it shouldn't.",
        solution:
          "I built, from spec to production, an assistant where the AI never works unsupervised. Every question goes through a gate before the model, retrieval only searches published documents, and every answer is checked before it reaches the person. Around it: sign-up by chat, a dashboard for the team and privacy by design.",
        audiences: [
          {
            eyebrow: "For the visitor",
            title: "Asks and gets an answer right away",
            body: "Visiting hours, parking, which entrance to use: the assistant replies in real time and shows where each answer came from. When it doesn't know, it says so and gives the switchboard number.",
            points: [
              "Sources on every answer",
              "Always-on notice that it's an AI",
              "Built for phones too",
            ],
            shot: {
              src: "/projetos/ia-chat/conversa.webp",
              alt: "Chat where a visitor asks where to park and gets an answer with the source cited.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "For whoever signs up",
            title: "An account created in a chat",
            body: "A guided chat collects the details, and the person sees and corrects everything before confirming. Anyone who prefers can use the form, with the same data and consents.",
            points: [
              "Consent per purpose",
              "The password never goes through the AI",
              "Export or delete your own data",
            ],
            shot: {
              src: "/projetos/ia-chat/cadastro-ia.webp",
              alt: "Sign-up by chat: the assistant asks for the name and email, one step at a time.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "For the hospital team",
            title: "Follows everything from one dashboard",
            body: "How many questions were answered, refused or left without an answer, visitor feedback and the sign-up funnel. To improve quality, the team reviews pseudonymized chats, only from people who consented.",
            points: [
              "Management of published documents",
              "Quality inspector",
              "Privacy requests from data subjects",
            ],
            shot: {
              src: "/projetos/ia-chat/admin-visao-geral.webp",
              alt: "Dashboard with questions, answer rate, abstentions, feedback and sign-up funnel.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
        ],
        highlights: [
          {
            title: "Answers only from what was published",
            body: "Every answer shows its source. If the information doesn't exist, the assistant says it didn't find it and gives the switchboard number instead of making something up.",
          },
          {
            title: "No medical advice",
            body: "Questions about symptoms, diagnosis or medication get a clear refusal with the way to the emergency room, and the message is not stored.",
          },
          {
            title: "Always clear that it's an AI",
            body: "The notice stays on screen the whole time, and no important decision is left to the model.",
          },
          {
            title: "Privacy by design",
            body: "Brazil's data protection law (LGPD) in the code: minimal collection, consent per purpose, retention with deadlines, and export or deletion of data by the person themselves.",
          },
        ],
        gallery: [
          {
            src: "/projetos/ia-chat/conversa.webp",
            alt: "Chat in the AI-chat: a visitor asks where to park and gets an answer with the source cited.",
            caption: "The answer streams in real time, with the source number next to each passage and the document one click away.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/home.webp",
            alt: "Home page with the question box and shortcuts to the most common questions.",
            caption: "Home: shortcuts to the most common questions and the always-on notice that an AI is answering.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/guardrail.webp",
            alt: "A question about a symptom is refused, with the way to the emergency room.",
            caption: "Ethical limit: a question about a symptom is refused, the message is not stored and the person gets the way to the emergency room.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/cadastro-ia.webp",
            alt: "Sign-up by chat with the AI.",
            caption: "Sign-up with AI: a guided chat collects the details, and the person checks everything before confirming.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/cadastro-formulario.webp",
            alt: "Sign-up form with visitor type, reason for the visit and password.",
            caption: "A form is always available: the same data and consents, for those who would rather not chat.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/admin-visao-geral.webp",
            alt: "Admin overview with questions, answer rate, abstentions and feedback.",
            caption: "Overview: question volume, answer rate, abstentions, feedback and the sign-up funnel.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/admin-qualidade.webp",
            alt: "Quality inspector with pseudonymized chats and the outcome of each one.",
            caption: "Quality: pseudonymized chats, filtered by outcome and feedback, only from people who consented.",
            width: 2160,
            height: 1350,
          },
        ],
        architecture: {
          flow: [
            { name: "Browser", detail: "Visitor and team" },
            { name: "React app", detail: "Vercel · forwards /backend" },
            { name: "FastAPI API", detail: "Railway · LangChain and LangGraph" },
            { name: "PostgreSQL + pgvector", detail: "Railway · hybrid search" },
          ],
          services: [
            { name: "Google Gemini", detail: "Answers and embeddings" },
            { name: "LangSmith", detail: "Masked AI traces" },
            { name: "Prometheus and Grafana", detail: "Metrics, dashboards and alerts" },
          ],
          note: "The browser only talks to Vercel, which forwards /backend to the API: the session cookie stays first-party and there is no CORS. The API rejects calls without the edge secret, and the Gemini and LangSmith keys live only there. Inside, MVC with the layers an AI system needs: controllers, services, workflows, ports and adapters, and a pure-Python domain.",
        },
        engineering: [
          {
            title: "A gate before the model",
            body: "Every question is rewritten and classified first, and the context comes in labeled as untrusted, against hidden instructions. Medical advice gets a fixed refusal, off-topic questions get a scope reply, and only public information moves on to retrieval.",
          },
          {
            title: "Hybrid search and checked answers",
            body: "Retrieval combines vectors and full-text search in PostgreSQL, with a 0.50 similarity floor. The answer streams in real time over SSE, and citations and phone numbers are checked against the documents; if they don't match, a safe answer goes out instead.",
          },
          {
            title: "Sign-up with LangGraph, decisions in code",
            body: "The model leads the conversation, but a pure-Python state machine decides every step. The password goes to its own endpoint, stored with argon2id, and never passes through the AI.",
          },
          {
            title: "Cost and availability under control",
            body: "A daily token cap, a circuit breaker that opens for 60 s after 5 failures in a row, and history limited to the last 6 exchanges. If anything trips, the answer goes out degraded, with the switchboard number.",
          },
          {
            title: "End-to-end observability",
            body: "JSON logs, OpenTelemetry traces, Prometheus metrics with 4 dashboards and 8 alerts in Grafana, and AI traces in LangSmith with a per-step policy. One request_id ties all four together.",
          },
          {
            title: "Tests, evals and delivery",
            body: "372 tests on the API and 129 on the frontend, none calling the real model. CI with four jobs, LLM evals on every pull request that changes prompts, and production only after human approval and a smoke test.",
          },
        ],
        stackTable: [
          {
            layer: "Frontend",
            tech: "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, TanStack Query and GSAP",
          },
          {
            layer: "API",
            tech: "Python 3.12, FastAPI, Pydantic, async SQLAlchemy 2 and Alembic",
          },
          {
            layer: "AI",
            tech: "LangChain for questions, LangGraph for sign-up and Gemini 2.5 Flash behind its own ports",
          },
          {
            layer: "Data",
            tech: "PostgreSQL 18 with pgvector and hybrid vector and full-text search",
          },
          {
            layer: "Tests",
            tech: "Pytest, Vitest, Testing Library, Playwright, axe and Storybook",
          },
          {
            layer: "Observability",
            tech: "structlog, OpenTelemetry, Prometheus, Grafana and LangSmith",
          },
          {
            layer: "Delivery",
            tech: "GitHub Actions, Vercel and Railway, with human approval for production",
          },
        ],
        codeHref: "https://github.com/Tiodevs/AI-Chat",
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
        logo: "/logos/unimed.png",
      },
      {
        index: "02",
        title: "Grupo Boticário",
        period: "Jan 2026 — Nov 2026",
        role: "AI / GenAI and Software Engineer",
        description:
          "RAG over support materials and operational guidance, tool-using agents, and App Super, a PWA for 10,000+ people. Systematizing the work replaced dozens of spreadsheets: about 20% more output for plant coordinators and 10% less time spent allocating teams.",
        logo: "/logos/grupo-boticario.png",
      },
      {
        index: "03",
        title: "ASSUMTEK",
        period: "Jan 2025 — Jan 2026",
        role: "Full-Stack and Tech Lead",
        description:
          "An internal time-tracking and payroll system for contractors, built from scratch, with hour caps, approvals, and dynamic compensation. Tech lead for architecture, demand, and 1:1s. Payroll close dropped by about 70%. Around it, MarTech integrations and pipelines for Power BI.",
        logo: "/logos/assumtek.svg",
      },
      {
        index: "04",
        title: "Sentier",
        period: "Jan 2021 — Jan 2025",
        role: "Founder and Full-Stack",
        description:
          "40+ B2B projects, from Figma through production, and the multi-tenant scheduling system for barbershops and salons: scheduling, payroll, subscriptions, and reminders. It passed 7,000 users. Clients saved about 17–20% of daily operational time.",
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
  skills: {
    eyebrow: "Skills",
    title: "What I build with.",
    groups: {
      languages: "Languages",
      ai: "AI & LLMs",
      observability: "Observability",
      frontend: "Frontend & mobile",
      backend: "Backend",
      data: "Data & BI",
      cloud: "Cloud & delivery",
      automation: "Automation & integrations",
      testing: "Testing",
      tools: "Tools",
    },
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
