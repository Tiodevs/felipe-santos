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
      { label: "Serviço", href: "#servicos" },
      { label: "Projetos", href: "#projetos" },
      { label: "Carreira profissional", href: "#experiencia" },
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
    ctaSecondary: "Ver projetos",
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
    eyebrow: "Serviço",
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
    eyebrow: "Projetos",
    title: "Casos para abrir numa conversa.",
    openProject: "Ver projeto",
    imageAlt: "Capa do projeto {title}",
  },
  projectPage: {
    back: "Todos os projetos",
    visitLive: "Ver ao vivo",
    viewCode: "Ver o código",
    role: "Papel",
    context: "Contexto",
    year: "Ano",
    stack: "Stack",
    challenge: "O problema",
    solution: "O que eu fiz",
    numbers: "Em números",
    howItWorks: "Como funciona",
    highlights: "Por que dá para confiar",
    underTheHood: "Por dentro",
    techTitle: "A parte técnica",
    techIntro:
      "Para quem quer ver o motor: como as peças conversam, as decisões que protegem a agenda e a stack completa.",
    architecture: "Arquitetura",
    alsoTalksTo: "A API também fala com",
    engineering: "Decisões de engenharia",
    gallery: "Telas",
    openImage: "Ampliar imagem",
    close: "Fechar",
    previous: "Imagem anterior",
    next: "Próxima imagem",
    nextProject: "Próximo projeto",
  },
  projects: [
    {
      slug: "leemia",
      title: "Leemia",
      category: "Produto próprio",
      year: "2026",
      summary:
        "Agenda online para estúdios e salões. O cliente marca em três toques, o estúdio cuida de tudo num painel e o mesmo horário nunca é vendido duas vezes.",
      stack: ["Next.js", "React", "Express", "PostgreSQL", "Prisma"],
      href: "https://agendamento.mefelipe.com.br",
      metric: { value: "3 toques", label: "para o cliente marcar um horário" },
      reel: {
        url: "agendamento.mefelipe.com.br",
        ariaLabel:
          "Animação com telas reais da Leemia: a reserva no celular, o painel do estúdio, o painel do profissional e os horários de funcionamento.",
        screens: [
          { src: "/projetos/leemia/reserva.webp", label: "Reserva em três passos" },
          { src: "/projetos/leemia/admin-visao-geral.webp", label: "Painel do estúdio" },
          { src: "/projetos/leemia/profissional-painel.webp", label: "Painel do profissional" },
          { src: "/projetos/leemia/admin-expediente.webp", label: "Horários e feriados" },
        ],
        phone: "/projetos/leemia/mobile-reserva.webp",
        toasts: [
          { title: "Horário reservado", body: "Corte masculino · ter, 10/11 · 10:00" },
          { title: "Confirmação enviada", body: "E-mail para o cliente e para a profissional" },
          { title: "Agenda atualizada", body: "Marina Costa · próximo atendimento às 10:00" },
        ],
      },
      caseStudy: {
        role: "Produto, design e engenharia",
        context: "Produto próprio, no ar",
        overview:
          "A Leemia tira a agenda do estúdio do caderno. O cliente reserva sozinho, a qualquer hora, em três toques. O estúdio cuida de agenda, equipe e horários num painel, e cada profissional acompanha o próprio dia.",
        challenge:
          "Em muito estúdio, marcar um corte ainda depende de ligação, mensagem e um caderno na recepção. É assim que o mesmo horário acaba vendido duas vezes, o recado se perde e o profissional só descobre a agenda do dia quando chega.",
        solution:
          "Criei, do zero, uma agenda online que só mostra horário que existe de verdade. A grade sai do expediente do estúdio e de cada profissional, de 15 em 15 minutos. Cada pessoa vê o que precisa: o cliente marca e cancela os próprios horários, o estúdio administra tudo e o profissional entra por convite.",
        numbers: [
          { value: "3", label: "toques para marcar: serviço, profissional e horário" },
          { value: "15 min", label: "de precisão na grade de horários" },
          { value: "2", label: "travas contra horário duplicado: no código e no banco" },
          { value: "10 min", label: "para desfazer uma mudança na agenda" },
        ],
        audiences: [
          {
            eyebrow: "Para o cliente",
            title: "Marca em três toques",
            body: "Escolhe o serviço, o profissional e um horário livre. A confirmação chega por e-mail, e dá para cancelar sozinho até 2 horas antes.",
            points: [
              "Só aparece horário que existe",
              "Feito primeiro para o celular",
              "Até 60 dias de antecedência",
            ],
            shot: {
              src: "/projetos/leemia/reserva.webp",
              alt: "Tela de reserva com calendário, horários livres e o resumo do agendamento.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "Para o estúdio",
            title: "Cuida de tudo num painel",
            body: "Agenda geral, catálogo de serviços, equipe e horários de funcionamento, com receita, ocupação e ticket médio do período.",
            points: [
              "Agenda em nome do cliente",
              "Equipe entra por convite",
              "Feriados e dias especiais",
            ],
            shot: {
              src: "/projetos/leemia/admin-visao-geral.webp",
              alt: "Visão geral do estúdio com agendamentos, receita, ticket médio e ocupação.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "Para o profissional",
            title: "Vê o próprio dia",
            body: "Um painel com os próprios números e a agenda, onde confirma, inicia, conclui ou registra falta em cada atendimento.",
            points: [
              "Métricas só dele",
              "Agenda por período e status",
              "E-mail a cada novo horário",
            ],
            shot: {
              src: "/projetos/leemia/profissional-painel.webp",
              alt: "Painel da profissional com receita, ocupação e próximos atendimentos.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
        ],
        highlights: [
          {
            title: "Agenda confiável",
            body: "A grade sai do expediente real. Na hora da reserva, o sistema trava a agenda do profissional, e o próprio banco de dados recusa dois clientes no mesmo horário.",
          },
          {
            title: "Regras claras",
            body: "Uma única regra decide o que cliente, profissional e estúdio podem fazer com cada agendamento: prazo para cancelar, histórico de cada mudança e “Desfazer” por 10 minutos.",
          },
          {
            title: "Conta protegida",
            body: "Senha guardada com segurança, login bloqueado após 5 erros, e-mail confirmado antes de reservar e acesso de profissional só por convite.",
          },
          {
            title: "Ninguém pego de surpresa",
            body: "Cliente e profissional recebem e-mail quando um horário é marcado ou cancelado. Se o estúdio muda o expediente, quem perde o horário recebe o motivo.",
          },
        ],
        gallery: [
          {
            src: "/projetos/leemia/landing.webp",
            alt: "Página inicial da Leemia com o título “Marque seu horário em três toques”.",
            caption: "A página inicial apresenta a reserva, que leva menos de um minuto.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/reserva.webp",
            alt: "Terceiro passo da reserva: calendário, grade de horários livres e resumo com o total.",
            caption: "Reserva em três passos: serviço, profissional e horário. A grade mostra só o que está livre.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-visao-geral.webp",
            alt: "Visão geral do estúdio com agendamentos, receita, ticket médio, ocupação e últimos agendamentos.",
            caption: "Visão geral do estúdio: receita realizada e prevista, ticket médio e ocupação, por período, profissional e serviço.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-expediente.webp",
            alt: "Horários de funcionamento por dia da semana, com o domingo fechado.",
            caption: "Horários e feriados: expediente da semana, dias especiais e agenda de cada profissional.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/profissional-painel.webp",
            alt: "Painel da profissional Marina Costa com receita, ocupação e próximos atendimentos.",
            caption: "Painel do profissional: receita, ocupação e próximos atendimentos de quem está logado.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-servicos.webp",
            alt: "Catálogo de serviços com duração e preço.",
            caption: "Catálogo: preço e duração de cada serviço. Serviço com histórico é desativado, nunca apagado.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/leemia/admin-equipe.webp",
            alt: "Equipe com os serviços de cada profissional e o estado do acesso ao painel.",
            caption: "Equipe: os serviços de cada profissional e o acesso ao painel, liberado quando o convite é aceito.",
            width: 2160,
            height: 1350,
          },
        ],
        architecture: {
          flow: [
            { name: "Navegador", detail: "Cliente, estúdio e profissional" },
            { name: "Web em Next.js", detail: "Vercel" },
            { name: "API em Express", detail: "Railway · regras de negócio" },
            { name: "PostgreSQL", detail: "Railway · rede privada" },
          ],
          services: [
            { name: "Resend", detail: "E-mails transacionais" },
            { name: "Bucket S3", detail: "Fotos de perfil" },
            { name: "GitHub Actions", detail: "CI em toda pull request" },
          ],
          note: "O navegador carrega o app da Vercel e chama a API direto, com o token no cabeçalho, e o CORS só aceita a origem do front. Só a API fala com o banco e concentra as regras, em camadas: rotas, controllers com validação em Zod, services e Prisma.",
        },
        engineering: [
          {
            title: "Dupla trava contra horário duplicado",
            body: "Na reserva, o service trava a linha do profissional com FOR UPDATE dentro da transação. Se o código falhar, uma constraint EXCLUDE no PostgreSQL recusa a sobreposição.",
          },
          {
            title: "Máquina de estados única",
            body: "Um só módulo decide quem pode mudar o status de um agendamento, e quando: prazos por papel, histórico de cada transição e “Desfazer” por 10 minutos.",
          },
          {
            title: "Impacto calculado antes de mudar o expediente",
            body: "Fechar um dia ou mudar um horário lista os clientes afetados antes de salvar e pede uma decisão: manter os horários ou cancelar e avisar cada um por e-mail, com o motivo.",
          },
          {
            title: "Sessão e acesso",
            body: "JWT com versão de sessão (“Sair” derruba todas), bcrypt, bloqueio de login por e-mail e IP, limites por rota, Helmet e CORS restrito.",
          },
          {
            title: "Entrega com rede de segurança",
            body: "CI com quatro jobs paralelos em toda pull request (API, web, contrato do banco e E2E com Playwright) e health check que mostra o commit no ar. Seed e E2E se recusam a rodar no banco de produção.",
          },
        ],
        stackTable: [
          {
            layer: "Frontend",
            tech: "Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Radix UI e GSAP",
          },
          {
            layer: "API",
            tech: "Node.js 20, Express 4, TypeScript, Zod, Helmet e Swagger",
          },
          {
            layer: "Dados",
            tech: "PostgreSQL com Prisma 7, migrations versionadas e constraint de exclusão",
          },
          {
            layer: "Autenticação",
            tech: "JWT com versão de sessão e senhas com bcrypt",
          },
          {
            layer: "Integrações",
            tech: "Resend para e-mail e bucket S3 para fotos de perfil",
          },
          {
            layer: "Testes",
            tech: "node:test nos unitários e Playwright no E2E de API e de interface",
          },
          {
            layer: "Entrega",
            tech: "GitHub Actions, Vercel, Railway e Docker Compose no ambiente local",
          },
        ],
        codeHref: "https://github.com/Tiodevs/sistema-de-agendamentos",
      },
    },
  ],
  cv: {
    href: "/cv-pt.pdf",
    fileName: "Felipe P. dos Santos - CV.pdf",
  },
  process: {
    eyebrow: "Carreira profissional",
    title: "Onde eu já coloquei software em operação.",
    steps: [
      {
        index: "01",
        title: "Unimed",
        period: "Nov 2026 — atual",
        role: "AI Engineer Sênior",
        description:
          "Responsável pela plataforma de LLM própria da operadora, base dos projetos de IA: vLLM em GPU na AWS, gateway, observabilidade e fallback entre modelos. Também apoio os times na integração da IA aos sistemas.",
      },
      {
        index: "02",
        title: "Grupo Boticário",
        period: "Jan 2026 — Nov 2026",
        role: "AI / GenAI e Software Engineer",
        description:
          "RAG sobre materiais de suporte e orientação operacional, agentes com tools e o App Super, PWA para mais de 10 mil pessoas. A sistematização substituiu dezenas de planilhas: cerca de 20% a mais de produtividade dos coordenadores e 10% a menos no tempo de alocação.",
      },
      {
        index: "03",
        title: "ASSUMTEK",
        period: "Jan 2025 — Jan 2026",
        role: "Full-Stack e Tech Lead",
        description:
          "Sistema interno de ponto e folha para PJ, do zero, com regras de horas, aprovações e remuneração. Tech lead de arquitetura, demandas e 1:1. O fechamento da folha caiu cerca de 70% no tempo operacional. No entorno, integrações MarTech e pipelines para Power BI.",
      },
      {
        index: "04",
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
        logo: "/logos/grupo-boticario.png",
      },
      {
        title: "Business Fundamentals",
        place: "Harvard Business Education",
        year: "2025",
        logo: "/logos/harvard.png",
      },
      {
        title: "Análise de Dados e BI",
        place: "Google",
        year: "2025",
        logo: "/logos/google.svg",
      },
      {
        title: "CS50x",
        place: "Harvard University · Ciência da Computação",
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
