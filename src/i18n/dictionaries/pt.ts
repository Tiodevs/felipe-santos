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
      { label: "Carreira profissional", href: "#experiencia" },
      { label: "Serviço", href: "#servicos" },
      { label: "Projetos", href: "#projetos" },
      { label: "Estudos", href: "#estudos" },
      { label: "Competências", href: "#competencias" },
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
    stepsLabel: "Etapas do processo",
    steps: [
      {
        id: "diagnose",
        title: "Diagnóstico",
        body: "Começa com uma conversa sobre o negócio e as metas. Depois mapeio processos, sistemas e dados para encontrar onde se perde tempo e dinheiro, e escolhemos juntos as oportunidades em que a IA traz mais retorno.",
      },
      {
        id: "build",
        title: "Implementação",
        body: "Construo a automação, os agentes ou o sistema sob medida, integrados às ferramentas que a empresa já usa, e preparo a equipe para usar a solução com autonomia.",
      },
      {
        id: "maintain",
        title: "Manutenção",
        body: "Depois da entrega, acompanho uso, custo e resultados, corrijo o que aparecer e evoluo a solução conforme o negócio muda.",
      },
    ],
  },
  work: {
    eyebrow: "Projetos",
    title: "Do problema ao sistema no ar.",
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
    howItWorks: "Como funciona",
    highlights: "Por que dá para confiar",
    underTheHood: "Por dentro",
    techTitle: "A parte técnica",
    techIntro:
      "Para quem quer ver o motor: como as peças conversam, as decisões de engenharia e a stack completa.",
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
      slug: "sistema-de-agendamentos",
      title: "Sistema de agendamentos",
      category: "Produto próprio",
      year: "2026",
      summary:
        "Agenda online para barbearias e salões, que nasceu na Sentier e passou de 7 mil usuários. O cliente marca em três toques, o salão cuida de tudo num painel e o mesmo horário nunca é vendido duas vezes.",
      stack: ["Next.js", "React", "Express", "PostgreSQL", "Prisma"],
      href: "https://agendamento.mefelipe.com.br",
      metric: { value: "7 mil+", label: "usuários cadastrados" },
      // Two clients want the same slot at once, and the lock lets one
      // through. The screen texts, the 409 message and the e-mail subject
      // come from the product's code; service, price and Marina from its seed.
      booking: {
        ariaLabel:
          "Animação do sistema de agendamentos: dois clientes tentam marcar as 10:00 com a Marina ao mesmo tempo. A agenda trava, o primeiro leva o horário, o segundo recebe o aviso de horário ocupado, marca as 10:45, e os dois recebem o e-mail de confirmação.",
        mark: "/projetos/sistema-de-agendamentos/marca.svg",
        clients: ["Cliente 1", "Cliente 2"],
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
        logTitle: "API · transação",
        log: [
          "Cliente 1 trava a agenda da Marina",
          "Cliente 2 espera a trava",
          "Cliente 1 · 10:00 livre · reserva criada",
          "Cliente 2 · 10:00 ocupado · 409",
          "Cliente 2 · 10:45 livre · reserva criada",
          "E-mail para o cliente e a profissional",
        ],
      },
      caseStudy: {
        role: "Fundador e Full-Stack",
        context: "Sentier · produto próprio, no ar",
        overview:
          "O sistema de agendamentos tira a agenda da barbearia e do salão do caderno. Nasceu na Sentier e passou de 7 mil usuários. Hoje o cliente reserva sozinho, a qualquer hora, em três toques, o estúdio cuida de agenda, equipe e horários num painel, e cada profissional acompanha o próprio dia.",
        challenge:
          "Em muito estúdio, marcar um corte ainda depende de ligação, mensagem e um caderno na recepção. É assim que o mesmo horário acaba vendido duas vezes, o recado se perde e o profissional só descobre a agenda do dia quando chega.",
        solution:
          "Criei, do zero, uma agenda online que só mostra horário que existe de verdade. A grade sai do expediente do estúdio e de cada profissional, de 15 em 15 minutos. Cada pessoa vê o que precisa: o cliente marca e cancela os próprios horários, o estúdio administra tudo e o profissional entra por convite.",
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
              src: "/projetos/sistema-de-agendamentos/reserva.webp",
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
              src: "/projetos/sistema-de-agendamentos/admin-visao-geral.webp",
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
              src: "/projetos/sistema-de-agendamentos/profissional-painel.webp",
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
            src: "/projetos/sistema-de-agendamentos/landing.webp",
            alt: "Página inicial do sistema com o título “Marque seu horário em três toques”.",
            caption: "A página inicial apresenta a reserva, que leva menos de um minuto.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/reserva.webp",
            alt: "Terceiro passo da reserva: calendário, grade de horários livres e resumo com o total.",
            caption: "Reserva em três passos: serviço, profissional e horário. A grade mostra só o que está livre.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-visao-geral.webp",
            alt: "Visão geral do estúdio com agendamentos, receita, ticket médio, ocupação e últimos agendamentos.",
            caption: "Visão geral do estúdio: receita realizada e prevista, ticket médio e ocupação, por período, profissional e serviço.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-expediente.webp",
            alt: "Horários de funcionamento por dia da semana, com o domingo fechado.",
            caption: "Horários e feriados: expediente da semana, dias especiais e agenda de cada profissional.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/profissional-painel.webp",
            alt: "Painel da profissional Marina Costa com receita, ocupação e próximos atendimentos.",
            caption: "Painel do profissional: receita, ocupação e próximos atendimentos de quem está logado.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-servicos.webp",
            alt: "Catálogo de serviços com duração e preço.",
            caption: "Catálogo: preço e duração de cada serviço. Serviço com histórico é desativado, nunca apagado.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/sistema-de-agendamentos/admin-equipe.webp",
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
    {
      slug: "ia-chat",
      title: "IA-chat",
      category: "Projeto open source",
      year: "2026",
      summary:
        "Chat com IA que atende visitantes de hospital. Responde só com o que foi publicado, mostra a fonte de cada resposta, recusa orientação médica e protege os dados de quem conversa.",
      stack: ["Python", "FastAPI", "LangGraph", "Gemini", "pgvector", "React"],
      href: "https://atrium-gold.vercel.app",
      metric: { value: "500+", label: "testes automatizados" },
      // A live chat with the question's trace beside it. The chat lines come
      // from the product's real screens.
      chat: {
        ariaLabel:
          "Animação do IA-chat em ação: o visitante pergunta onde estacionar e recebe a resposta com a fonte, enquanto o rastro acende cada etapa. Depois, uma pergunta sobre remédio é recusada antes do gerador, e a mensagem não é guardada.",
        brand: "Atrium",
        mark: "/projetos/ia-chat/marca.svg",
        title: "Conversa",
        greeting: "Como podemos ajudar no Harborlight?",
        placeholder: "Pergunte sobre visita, caminhos ou horários",
        send: "Enviar",
        disclaimer: "Não envie sintomas nem nomes de medicamentos. O Atrium não dá orientação médica.",
        traceTitle: "Rastro da pergunta",
        skipped: "pulado",
        steps: [
          { label: "Reescrever e classificar", answered: "informação pública", refused: "orientação médica" },
          { label: "Portão", answered: "segue", refused: "recusa fixa" },
          { label: "Busca híbrida", answered: "vetor + texto completo" },
          { label: "Piso de similaridade", answered: "≥ 0,50" },
          { label: "Geração em fluxo", answered: "SSE, token a token" },
          { label: "Conferência", answered: "citações conferem" },
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
          outcome: { code: "answered", label: "resposta com fonte" },
        },
        refused: {
          question: "Estou com febre, que remédio tomo?",
          storedAs: "Para proteger sua privacidade, não guardamos esta mensagem.",
          title: "Orientação médica recusada",
          body: "Não posso ajudar com sintomas, diagnóstico ou medicamento. Se for uma emergência, ligue para o número local de emergência.",
          extra: "A entrada de emergência do Harborlight fica no lado oeste e funciona 24 horas.",
          outcome: { code: "refused", label: "recusa fixa, antes do gerador" },
          notes: ["Mensagem não guardada", "Fora do LangSmith"],
        },
      },
      caseStudy: {
        role: "Autor e AI Engineer",
        context: "Projeto pessoal · open source, no ar",
        overview:
          "Um chat com IA que responde visitantes de hospital: horário de visita, onde estacionar, por qual entrada chegar. Atende em português, a qualquer hora, só com o que o hospital publicou e mostrando de onde veio cada resposta. O hospital é fictício; a engenharia ao redor dele é de produção, no ar e com código aberto.",
        challenge:
          "Em saúde, uma IA que inventa resposta é um risco. O desafio era pôr a IA na porta de entrada do atendimento sem que ela inventasse informação, desse orientação médica ou guardasse o que não devia.",
        solution:
          "Construí, da especificação à produção, um assistente em que a IA nunca trabalha solta. Cada pergunta passa por um portão antes do modelo, a busca acontece só nos documentos publicados e cada resposta é conferida antes de chegar à pessoa. Em volta, cadastro por conversa, painel para a equipe e LGPD desde o desenho.",
        audiences: [
          {
            eyebrow: "Para o visitante",
            title: "Pergunta e recebe na hora",
            body: "Horário de visita, estacionamento, por qual entrada chegar: o assistente responde em tempo real e mostra de onde tirou cada resposta. Se não sabe, diz que não encontrou e indica o telefone da central.",
            points: [
              "Fonte em cada resposta",
              "Aviso permanente de que é uma IA",
              "Feito também para o celular",
            ],
            shot: {
              src: "/projetos/ia-chat/conversa.webp",
              alt: "Conversa em que o visitante pergunta onde estacionar e recebe a resposta com a fonte citada.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "Para quem se cadastra",
            title: "Conta criada numa conversa",
            body: "Uma conversa guiada coleta os dados, e a pessoa vê e corrige tudo antes de confirmar. Quem prefere usa o formulário, com os mesmos dados e consentimentos.",
            points: [
              "Consentimento por finalidade",
              "Senha nunca passa pela IA",
              "Exporta ou apaga os próprios dados",
            ],
            shot: {
              src: "/projetos/ia-chat/cadastro-ia.webp",
              alt: "Cadastro por conversa: o assistente pede o nome e o e-mail, um passo por vez.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
          {
            eyebrow: "Para a equipe do hospital",
            title: "Acompanha tudo num painel",
            body: "Quantas perguntas foram respondidas, recusadas ou ficaram sem resposta, o feedback dos visitantes e o funil de cadastro. Para melhorar a qualidade, a equipe revisa conversas pseudonimizadas, só de quem consentiu.",
            points: [
              "Gestão dos documentos publicados",
              "Inspetor de qualidade",
              "Pedidos de privacidade dos titulares",
            ],
            shot: {
              src: "/projetos/ia-chat/admin-visao-geral.webp",
              alt: "Painel com perguntas, taxa de respostas, abstenções, feedback e funil de cadastro.",
              caption: "",
              width: 2160,
              height: 1350,
            },
          },
        ],
        highlights: [
          {
            title: "Responde só com o que foi publicado",
            body: "Cada resposta mostra a fonte. Se a informação não existe, o assistente diz que não encontrou e indica o telefone da central, em vez de inventar.",
          },
          {
            title: "Não dá orientação médica",
            body: "Perguntas sobre sintoma, diagnóstico ou remédio recebem uma recusa clara, com o caminho para a emergência, e a mensagem não é guardada.",
          },
          {
            title: "Sempre deixa claro que é uma IA",
            body: "O aviso fica na tela o tempo todo, e nenhuma decisão importante fica nas mãos do modelo.",
          },
          {
            title: "Privacidade desde o desenho",
            body: "LGPD no código: coleta mínima, consentimento por finalidade, retenção com prazo e exportação ou exclusão dos dados pela própria pessoa.",
          },
        ],
        gallery: [
          {
            src: "/projetos/ia-chat/conversa.webp",
            alt: "Conversa no IA-chat: o visitante pergunta onde estacionar e recebe a resposta com a fonte citada.",
            caption: "A resposta chega em tempo real, com o número da fonte ao lado de cada trecho e o documento a um clique.",
            wide: true,
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/home.webp",
            alt: "Página inicial com o campo de pergunta e atalhos para as dúvidas mais comuns.",
            caption: "Início: atalhos para as dúvidas mais comuns e o aviso permanente de que quem responde é uma IA.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/guardrail.webp",
            alt: "Pergunta sobre sintoma recusada, com o caminho para a emergência.",
            caption: "Limite ético: pergunta sobre sintoma recebe recusa, a mensagem não é guardada e a pessoa recebe o caminho da emergência.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/cadastro-ia.webp",
            alt: "Cadastro por conversa com a IA.",
            caption: "Cadastro com IA: uma conversa guiada coleta os dados, e a pessoa confere tudo antes de confirmar.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/cadastro-formulario.webp",
            alt: "Cadastro por formulário com tipo de visitante, motivo da visita e senha.",
            caption: "Formulário sempre disponível: os mesmos dados e consentimentos, para quem prefere não conversar.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/admin-visao-geral.webp",
            alt: "Visão geral do admin com perguntas, taxa de respostas, abstenções e feedback.",
            caption: "Visão geral: volume de perguntas, taxa de respostas, abstenções, feedback e funil de cadastro.",
            width: 2160,
            height: 1350,
          },
          {
            src: "/projetos/ia-chat/admin-qualidade.webp",
            alt: "Inspetor de qualidade com conversas pseudonimizadas e o desfecho de cada uma.",
            caption: "Qualidade: conversas pseudonimizadas, filtradas por desfecho e feedback, só de quem consentiu.",
            width: 2160,
            height: 1350,
          },
        ],
        architecture: {
          flow: [
            { name: "Navegador", detail: "Visitante e equipe" },
            { name: "App em React", detail: "Vercel · encaminha /backend" },
            { name: "API em FastAPI", detail: "Railway · LangChain e LangGraph" },
            { name: "PostgreSQL + pgvector", detail: "Railway · busca híbrida" },
          ],
          services: [
            { name: "Google Gemini", detail: "Respostas e embeddings" },
            { name: "LangSmith", detail: "Rastros de IA mascarados" },
            { name: "Prometheus e Grafana", detail: "Métricas, painéis e alertas" },
          ],
          note: "O navegador fala só com a Vercel, que encaminha /backend para a API: o cookie de sessão fica primário e não precisa de CORS. A API recusa chamadas sem o segredo da borda, e as chaves do Gemini e do LangSmith só existem nela. Por dentro, MVC com as camadas que um sistema de IA precisa: controllers, services, workflows, portas e adaptadores, e um domínio em Python puro.",
        },
        engineering: [
          {
            title: "Um portão antes do modelo",
            body: "Cada pergunta é reescrita e classificada antes de tudo, e o contexto entra rotulado como não confiável, contra instruções escondidas. Orientação médica recebe recusa fixa, tema fora do escopo recebe resposta de escopo, e só informação pública segue para a busca.",
          },
          {
            title: "Busca híbrida e resposta conferida",
            body: "A busca junta vetores e texto completo no PostgreSQL, com piso de similaridade de 0,50. A resposta sai em tempo real por SSE, e citações e telefones são conferidos contra os documentos; se não conferem, sai uma resposta segura.",
          },
          {
            title: "Cadastro com LangGraph, decisão no código",
            body: "O modelo conduz a conversa, mas uma máquina de estados em Python puro decide cada passo. A senha vai para um endpoint próprio, guardada com argon2id, e nunca passa pela IA.",
          },
          {
            title: "Custo e disponibilidade sob controle",
            body: "Teto diário de tokens, circuit breaker que abre por 60 s depois de 5 falhas seguidas e histórico limitado às últimas 6 trocas. Se algo estoura, a resposta sai degradada, com o telefone da central.",
          },
          {
            title: "Observabilidade de ponta a ponta",
            body: "Logs em JSON, rastros OpenTelemetry, métricas no Prometheus com 4 painéis e 8 alertas no Grafana, e rastros de IA no LangSmith com política por passo. Um request_id liga os quatro.",
          },
          {
            title: "Testes, avaliações e entrega",
            body: "372 testes na API e 129 no frontend, sem chamar o modelo de verdade. CI com quatro jobs, avaliação do LLM em toda pull request que muda prompts e produção só depois de aprovação humana e teste de fumaça.",
          },
        ],
        stackTable: [
          {
            layer: "Frontend",
            tech: "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui, TanStack Query e GSAP",
          },
          {
            layer: "API",
            tech: "Python 3.12, FastAPI, Pydantic, SQLAlchemy 2 assíncrono e Alembic",
          },
          {
            layer: "IA",
            tech: "LangChain nas perguntas, LangGraph no cadastro e Gemini 2.5 Flash atrás de portas próprias",
          },
          {
            layer: "Dados",
            tech: "PostgreSQL 18 com pgvector e busca híbrida vetorial e por texto completo",
          },
          {
            layer: "Testes",
            tech: "Pytest, Vitest, Testing Library, Playwright, axe e Storybook",
          },
          {
            layer: "Observabilidade",
            tech: "structlog, OpenTelemetry, Prometheus, Grafana e LangSmith",
          },
          {
            layer: "Entrega",
            tech: "GitHub Actions, Vercel e Railway, com aprovação humana para produção",
          },
        ],
        codeHref: "https://github.com/Tiodevs/AI-Chat",
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
        logo: "/logos/unimed.png",
      },
      {
        index: "02",
        title: "Grupo Boticário",
        period: "Jan 2026 — Nov 2026",
        role: "AI / GenAI e Software Engineer",
        description:
          "RAG sobre materiais de suporte e orientação operacional, agentes com tools e o App Super, PWA para mais de 10 mil pessoas. A sistematização substituiu dezenas de planilhas: cerca de 20% a mais de produtividade dos coordenadores e 10% a menos no tempo de alocação.",
        logo: "/logos/grupo-boticario.png",
      },
      {
        index: "03",
        title: "ASSUMTEK",
        period: "Jan 2025 — Jan 2026",
        role: "Full-Stack e Tech Lead",
        description:
          "Sistema interno de ponto e folha para PJ, do zero, com regras de horas, aprovações e remuneração. Tech lead de arquitetura, demandas e 1:1. O fechamento da folha caiu cerca de 70% no tempo operacional. No entorno, integrações MarTech e pipelines para Power BI.",
        logo: "/logos/assumtek.svg",
      },
      {
        index: "04",
        title: "Sentier",
        period: "Jan 2021 — Jan 2025",
        role: "Fundador e Full-Stack",
        description:
          "Mais de 40 projetos B2B, do Figma à produção, e o sistema de agendamentos para barbearias e salões, multi-tenant: agenda, folha, assinaturas e lembretes. Passou de 7 mil usuários. Clientes economizaram cerca de 17% a 20% do tempo operacional diário.",
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
  skills: {
    eyebrow: "Competências",
    title: "Com o que eu construo.",
    groups: {
      languages: "Linguagens",
      ai: "IA e LLMs",
      observability: "Observabilidade",
      frontend: "Frontend e mobile",
      backend: "Backend",
      data: "Dados e BI",
      cloud: "Cloud e entrega",
      automation: "Automação e integrações",
      testing: "Testes",
      tools: "Ferramentas",
    },
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
