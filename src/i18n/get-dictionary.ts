import type { Locale } from "./config";

export type NavLink = { label: string; href: string };

export type ProjectShot = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  width?: number;
  height?: number;
};

/** One point of view on the product (client, studio, professional...). */
export type ProjectAudience = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  shot: ProjectShot;
};

/** A box in the architecture diagram. */
export type ArchitectureNode = { name: string; detail: string };

export type ProjectCaseStudy = {
  role: string;
  context: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: { title: string; body: string }[];
  gallery: ProjectShot[];
  /** Big facts for the non-technical reader. */
  numbers?: { value: string; label: string }[];
  audiences?: ProjectAudience[];
  /** Request path, left to right, plus the services the API calls. */
  architecture?: {
    flow: ArchitectureNode[];
    services: ArchitectureNode[];
    note: string;
  };
  engineering?: { title: string; body: string }[];
  stackTable?: { layer: string; tech: string }[];
  codeHref?: string;
};

/** Animated cover built from real screenshots of the product. */
export type ProjectReelCopy = {
  /** Address shown in the browser bar. */
  url: string;
  ariaLabel: string;
  /** Desktop screens (16:10), shown in turn inside the browser frame. */
  screens: { src: string; label: string }[];
  /** Tall phone screenshot, scrolled inside the phone frame. */
  phone: string;
  /** Notifications that pop in while the screens play. Three are used. */
  toasts: { title: string; body: string }[];
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
  reel?: ProjectReelCopy;
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
  /** Logo of the institution, shown next to the course. */
  logo?: string;
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
    status: string;
    name: string;
    role: [string, string];
    pitchLead: string;
    pitch: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  marquee: string[];
  services: {
    eyebrow: string;
    title: string;
    summary: string;
    includesLabel: string;
    deliverables: string[];
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
    viewCode: string;
    role: string;
    context: string;
    year: string;
    stack: string;
    challenge: string;
    solution: string;
    numbers: string;
    howItWorks: string;
    highlights: string;
    underTheHood: string;
    techTitle: string;
    techIntro: string;
    architecture: string;
    alsoTalksTo: string;
    engineering: string;
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
