export const CONTACT = {
  email: "santospefelipe@gmail.com",
  phoneLabel: "+55 (41) 98420-8843",
  whatsappUrl: "https://wa.me/5541984208843",
  location: "Curitiba, Brasil",
} as const;

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Tiodevs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/felipepesantos/" },
  { label: "Instagram", href: "https://www.instagram.com/somente_ofelipe/" },
] as const;

export const SITE = {
  name: "Felipe P. dos Santos",
  tagline: "AI / LLM Engineer",
  description:
    "AI Engineer Sênior: RAG, agentes com tools e plataformas de LLM, com 6 anos de desenvolvimento full stack. Aberto a novos projetos, a partir de Curitiba.",
  // The bare domain redirects here, and crawlers fetching og:image should not
  // depend on following that redirect.
  url: "https://www.mefelipe.com.br",
} as const;
