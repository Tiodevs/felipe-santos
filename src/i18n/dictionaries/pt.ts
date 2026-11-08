import type { Dictionary } from "../get-dictionary";

const pt: Dictionary = {
  meta: {
    title: "Felipe P. dos Santos — AI / LLM Engineer",
    description:
      "AI Engineer Sênior: RAG, agentes com tools e plataformas de LLM, com 6 anos de desenvolvimento full stack. Aberto a novos projetos, a partir de Curitiba.",
    keywords: [
      "AI Engineer",
      "AI Engineer Sênior",
      "LLM",
      "vLLM",
      "RAG",
      "agentes",
      "GenAI",
      "Felipe P. dos Santos",
    ],
  },
  nav: {
    links: [
      { label: "Atuação", href: "#servicos" },
      { label: "Trabalho", href: "#projetos" },
      { label: "Experiência", href: "#experiencia" },
      { label: "Estudos", href: "#estudos" },
    ],
    startProject: "Baixar CV",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    home: "Felipe — início",
    contactLabel: "Contato",
    networksLabel: "Redes",
    baseLabel: "Base",
    remote: "Curitiba · remoto",
    switchTo: "English",
    langCode: "EN",
  },
  hero: {
    status: "Aberto a novos projetos",
    name: "Felipe Santos",
    role: ["AI Engineer", "Sênior"],
    pitchLead: "Crio soluções IA-native em produção.",
    pitch:
      "Sistemas em Python e JavaScript na AWS, com pipelines multiagente, RAG, observabilidade e controle de custo, que sobrevivem a usuário real.",
    ctaPrimary: "Baixar CV",
    ctaSecondary: "Ver trabalho",
    photoAlt:
      "Felipe Santos de óculos e suéter, sorrindo de braços cruzados.",
  },
  marquee: [
    "vLLM",
    "RAG",
    "Agentes",
    "LangChain",
    "Python",
    "Next.js",
    "Node.js",
    "AWS",
    "TypeScript",
  ],
  services: {
    eyebrow: "Atuação",
    title: "Sistemas IA-native",
    summary:
      "Crio soluções personalizadas para empresas, da automação de processos à criação de sistemas completos. O trabalho começa com um diagnóstico da empresa e vai até o sistema pronto e rodando.",
    includesLabel: "O que inclui",
    deliverables: [
      "Diagnóstico da empresa e dos processos",
      "Automação de processos com IA",
      "Criação de sistemas sob medida",
      "Pipelines multiagente e integrações",
    ],
  },
  work: {
    eyebrow: "Trabalho",
    title: "Casos para abrir numa conversa.",
    openProject: "Abrir caso",
    imageAlt: "Capa do caso {title}",
  },
  projectPage: {
    back: "Todos os casos",
    visitLive: "Ver ao vivo",
    role: "Papel",
    context: "Contexto",
    year: "Ano",
    stack: "Stack",
    challenge: "O problema",
    solution: "O que eu fiz",
    highlights: "O que sustenta o caso",
    gallery: "Telas",
    openImage: "Ampliar imagem",
    close: "Fechar",
    previous: "Imagem anterior",
    next: "Próxima imagem",
    nextProject: "Próximo caso",
  },
  projects: [
    {
      slug: "rag-boticario",
      title: "RAG no Boticário",
      category: "IA aplicada",
      year: "2026",
      summary:
        "Pipeline de RAG sobre materiais de suporte, treinos e orientação operacional, com retrieval em base vetorial. Também multiplico IA em outros times.",
      stack: ["RAG", "LangChain", "Base vetorial", "Agentes"],
      metric: { value: "RAG", label: "Conhecimento operacional com fonte" },
      caseStudy: {
        role: "AI / GenAI Engineer",
        context: "Grupo Boticário",
        overview:
          "No Grupo Boticário eu desenho um pipeline de RAG sobre materiais de suporte, treinamentos e orientação operacional, indexados para retrieval com fonte. Em paralelo, fui escolhido para multiplicar IA na empresa: treino outros times, oriento boas práticas de implementação e destravo a adoção.",
        challenge:
          "O conhecimento operacional estava espalhado em documentos, treinos e orientação do dia a dia. Sem retrieval com fonte, o time ou perde tempo procurando ou recebe uma resposta que não dá para conferir.",
        solution:
          "Desenho o RAG em cima desse material, com indexação em base vetorial. Nos agentes, implemento tools de consulta a banco, ação em ticket e mensagem no Slack, dentro de um harness documentado para a orquestração ser repetível.",
        highlights: [
          {
            title: "Retrieval com fonte",
            body: "O pipeline cobre materiais de suporte, treinamentos e orientação operacional. A resposta sai do que foi indexado, não de um texto solto.",
          },
          {
            title: "Agentes com tools",
            body: "Consulta a banco, ação em board de tickets e mensagem no Slack, dentro de um harness documentado.",
          },
          {
            title: "Multiplicador de IA",
            body: "Treinos para outros times, coaching de implementação e suporte quando a adoção trava no meio da entrega.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "app-super",
      title: "App Super",
      category: "Produto",
      year: "2026",
      summary:
        "PWA de gestão de força de trabalho para mais de 10 mil pessoas. Substituiu dezenas de planilhas de jornada, folga e matriz de habilidades.",
      stack: ["React", "Node.js", "DocumentDB", "AWS"],
      metric: { value: "10 mil+", label: "Pessoas na operação" },
      caseStudy: {
        role: "Engenheiro no PWA",
        context: "Grupo Boticário",
        overview:
          "Engenheiro no App Super, PWA de gestão de força de trabalho para mais de 10 mil pessoas. React, Node.js, MongoDB/DocumentDB e SSO, com DevOps em AWS (EKS, S3), ArgoCD e New Relic.",
        challenge:
          "Horas, folgas e matriz de habilidades viviam em dezenas de planilhas. Coordenadores de planta perdiam tempo alocando time e a gestão tinha pouca visibilidade.",
        solution:
          "Atuo nas decisões técnicas do PWA e na colaboração com DevOps para deploy e monitoramento. A sistematização tirou o controle operacional das planilhas.",
        highlights: [
          {
            title: "Escala",
            body: "Mais de 10 mil pessoas na operação, com SSO e a stack de nuvem já em uso na empresa.",
          },
          {
            title: "Produtividade",
            body: "Cerca de 20% a mais de produtividade dos coordenadores de planta e 10% a menos no tempo de alocação de equipes.",
          },
          {
            title: "Base operacional",
            body: "O recorte sustenta uma base de custo operacional da ordem de R$ 63 milhões ao ano.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "plataforma-rh",
      title: "Plataforma de RH",
      category: "Liderança",
      year: "2025",
      summary:
        "Sistema interno de ponto e folha para PJ, do zero. Tech lead. O fechamento da folha caiu cerca de 70% no tempo operacional.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "n8n"],
      metric: { value: "−70%", label: "Tempo no fechamento da folha" },
      caseStudy: {
        role: "Full-Stack e Tech Lead",
        context: "ASSUMTEK",
        overview:
          "Na ASSUMTEK, de janeiro de 2025 a janeiro de 2026, construí o sistema interno de jornada e folha para contratados PJ e liderei a engenharia: arquitetura, demandas e 1:1.",
        challenge:
          "Jornada de PJ, teto de horas, aprovações e remuneração dinâmica dependiam de processo manual. O fechamento da folha era lento e sujeito a erro.",
        solution:
          "Produto do zero com Node, PostgreSQL, Next.js, Vercel e Railway, com as regras de negócio e os fluxos de aprovação. No entorno, backends de integração com Node, n8n e Make (Meta Ads, CRMs) e pipelines Node/Python para Power BI.",
        highlights: [
          {
            title: "Folha",
            body: "Cerca de 70% a menos de tempo operacional do RH no fechamento da folha.",
          },
          {
            title: "Tech lead",
            body: "Gestão de demanda, arquitetura da solução e 1:1 com o time.",
          },
          {
            title: "Dados",
            body: "Pipelines para Power BI de Produto, Marketing, TI, RH e projetos B2B de cliente.",
          },
        ],
        gallery: [],
      },
    },
    {
      slug: "saas-barbearias",
      title: "SaaS para barbearias",
      category: "Fundação",
      year: "2021",
      summary:
        "Produto próprio multi-tenant: agenda, folha, assinaturas e lembretes. Passou de 7 mil usuários cadastrados.",
      stack: ["Next.js", "Prisma", "AWS S3", "Vercel"],
      metric: { value: "7 mil+", label: "Usuários cadastrados" },
      caseStudy: {
        role: "Fundador e Full-Stack",
        context: "Sentier",
        overview:
          "Na Sentier, de janeiro de 2021 a janeiro de 2025, fui o engenheiro principal de mais de 40 projetos B2B e do SaaS multi-tenant de barbearia.",
        challenge:
          "Agenda, comissão, assinatura e lembrete viviam fragmentados. Faltava um sistema multi-tenant que digitalizasse o dia a dia sem uma operação pesada.",
        solution:
          "Construí agenda, folha da equipe, motor de assinaturas e lembretes automáticos com Next.js, Node.js, Prisma, AWS S3, Resend e Vercel. Nos outros projetos, a entrega ia do Figma à produção.",
        highlights: [
          {
            title: "Escala do produto",
            body: "Mais de 7 mil usuários cadastrados.",
          },
          {
            title: "Tempo na operação",
            body: "Clientes economizaram cerca de 17% a 20% do tempo operacional diário.",
          },
          {
            title: "Entrega B2B",
            body: "Mais de 40 projetos completos: sistemas, landing pages, automações e BI.",
          },
        ],
        gallery: [],
      },
    },
  ],
  cv: {
    href: "/cv-pt.pdf",
    fileName: "Felipe P. dos Santos - CV.pdf",
  },
  process: {
    eyebrow: "Experiência",
    title: "Onde eu já coloquei software em operação.",
    steps: [
      {
        index: "01",
        title: "Grupo Boticário",
        period: "Jan 2026 — atual",
        role: "AI / GenAI e Software Engineer",
        description:
          "RAG sobre materiais de suporte e orientação operacional, agentes com tools e o App Super, PWA para mais de 10 mil pessoas. A sistematização substituiu dezenas de planilhas: cerca de 20% a mais de produtividade dos coordenadores e 10% a menos no tempo de alocação.",
      },
      {
        index: "02",
        title: "ASSUMTEK",
        period: "Jan 2025 — Jan 2026",
        role: "Full-Stack e Tech Lead",
        description:
          "Sistema interno de ponto e folha para PJ, do zero, com regras de horas, aprovações e remuneração. Tech lead de arquitetura, demandas e 1:1. O fechamento da folha caiu cerca de 70% no tempo operacional. No entorno, integrações MarTech e pipelines para Power BI.",
      },
      {
        index: "03",
        title: "Sentier",
        period: "Jan 2021 — Jan 2025",
        role: "Fundador e Full-Stack",
        description:
          "Mais de 40 projetos B2B, do Figma à produção, e o SaaS multi-tenant de barbearias: agenda, folha, assinaturas e lembretes. Passou de 7 mil usuários. Clientes economizaram cerca de 17% a 20% do tempo operacional diário.",
      },
    ],
  },
  studies: {
    eyebrow: "Estudos",
    title: "Faculdade e o que eu estudei em volta dela.",
    degreeLabel: "Faculdade",
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "FAEL",
    period: "Jan 2021 — Dez 2025",
    coursesLabel: "Cursos",
    courses: [
      {
        title: "Programa Desenvolve",
        place: "Grupo Boticário · Full Stack, Node, React, Next e IA",
        year: "2025",
      },
      {
        title: "Business Fundamentals",
        place: "Harvard Business Education",
        year: "2025",
      },
      {
        title: "Análise de Dados e BI",
        place: "Google",
        year: "2025",
      },
      {
        title: "CS50x",
        place: "Harvard University · Ciência da Computação",
        year: "2021",
      },
      {
        title: "AWS Academy Cloud Foundations",
        place: "AWS",
        year: "2021",
      },
    ],
  },
  contact: {
    eyebrow: "Currículo",
    headline: ["Baixe", "o CV."],
    follow: "Redes",
    intro:
      "O PDF em português traz trajetória, stack e formação. Na versão em inglês da página, o arquivo sai em inglês.",
    download: "Baixar CV",
  },
  footer: {
    rights: "Todos os direitos reservados",
    backToTop: "Voltar ao topo ↑",
  },
  menu: {
    baseCity: "Curitiba, Brasil",
  },
};

export default pt;
