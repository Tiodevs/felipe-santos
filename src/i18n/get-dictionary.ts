import type { Locale } from "./config";

export type NavLink = { label: string; href: string };

export type ServiceCopy = {
  id: string;
  index: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  width?: number;
  height?: number;
};

export type ProjectCaseStudy = {
  role: string;
  context: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: { title: string; body: string }[];
  gallery: ProjectShot[];
};

export type ProjectCopy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  stack: string[];
  image?: string;
  href?: string;
  metric: { value: string; label: string };
  framed?: boolean;
  caseStudy?: ProjectCaseStudy;
};

export type ProcessStep = {
  index: string;
  title: string;
  period: string;
  role: string;
  description: string;
};

export type CourseCopy = {
  title: string;
  place: string;
  year: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  nav: {
    links: NavLink[];
    startProject: string;
    menu: string;
    close: string;
    openMenu: string;
    closeMenu: string;
    home: string;
    contactLabel: string;
    networksLabel: string;
    baseLabel: string;
    remote: string;
    switchTo: string;
    langCode: string;
  };
  hero: {
    eyebrow: string;
    location: string;
    lines: [string, string, string];
    bodyBefore: string;
    bodyStrong: string;
    bodyAfter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollNext: string;
  };
  marquee: string[];
  studio: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    photoAlt: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: ServiceCopy[];
  };
  work: {
    eyebrow: string;
    title: string;
    openProject: string;
    imageAlt: string;
  };
  projectPage: {
    back: string;
    visitLive: string;
    role: string;
    context: string;
    year: string;
    stack: string;
    challenge: string;
    solution: string;
    highlights: string;
    gallery: string;
    openImage: string;
    close: string;
    previous: string;
    next: string;
    nextProject: string;
  };
  projects: ProjectCopy[];
  cv: {
    href: string;
    fileName: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ProcessStep[];
  };
  studies: {
    eyebrow: string;
    title: string;
    degreeLabel: string;
    degree: string;
    school: string;
    period: string;
    coursesLabel: string;
    courses: CourseCopy[];
  };
  contact: {
    eyebrow: string;
    headline: [string, string];
    follow: string;
    intro: string;
    download: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
  menu: {
    baseCity: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("./dictionaries/pt").then((m) => m.default),
  en: () => import("./dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
