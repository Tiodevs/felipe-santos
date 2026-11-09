import type { SkillGroupKey } from "@/data/skills";
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

/**
 * Animated cover for the booking product: two clients want the same slot at
 * the same time, and the lock on the professional's schedule lets only one
 * through. Phones on the sides, the studio's agenda and the API's log between.
 */
export type BookingReelCopy = {
  ariaLabel: string;
  /** Product mark (an SVG in public/). */
  mark: string;
  /** Who books, shown above each phone and on the agenda. */
  clients: [string, string];
  /** The booking screen, as the product shows it. */
  phone: {
    title: string;
    /** Booking steps; the last one is the current. */
    steps: string[];
    choice: string;
    /** Three days; the middle one is selected. */
    days: string[];
    /** Six start times, three per row. */
    slots: string[];
    summaryTitle: string;
    /** Summary rows; {time} becomes the slot booked. */
    summary: { label: string; value: string }[];
    confirm: string;
    success: string;
    conflict: string;
    /** Subject of the confirmation e-mail; {time} becomes the slot booked. */
    email: string;
  };
  /** The slot both clients want; the second one ends up on the fallback. */
  wanted: string;
  fallback: string;
  /** Start times the first booking rules out (the service takes 45 minutes). */
  taken: string[];
  agenda: {
    title: string;
    day: string;
    /** Times down the side, every 15 minutes. */
    rows: string[];
    /** Label of the appointment already on the first row. */
    busy: string;
    service: string;
  };
  /** Badge shown while the schedule is locked. */
  lock: string;
  logTitle: string;
  /** What the API does, line by line, in the order the animation shows it. */
  log: string[];
};

/** One stage of an AI pipeline, with the result each scene of the chat cover shows. */
export type ChatReelStep = {
  label: string;
  /** Result when the question is answered. */
  answered: string;
  /** Result when the question is refused. Steps without one are skipped. */
  refused?: string;
};

/**
 * Animated cover for an AI product: a chat on the left and the question's
 * trace on the right. Two scenes play in turn: an answer with its source,
 * then a refused question.
 */
export type ChatReelCopy = {
  ariaLabel: string;
  /** Product name and mark in the chat header (the mark is an SVG in public/). */
  brand: string;
  mark: string;
  /** Page name on the right of the chat header. */
  title: string;
  /** Heading at the top of the chat, hidden on small covers. */
  greeting: string;
  placeholder: string;
  send: string;
  /** Line under the question box. */
  disclaimer: string;
  traceTitle: string;
  /** Result shown on the steps a refusal skips. */
  skipped: string;
  steps: ChatReelStep[];
  answered: {
    question: string;
    /** Sentences streamed word by word, each followed by its source number. */
    answer: { text: string; cite: string }[];
    source: string;
    outcome: { code: string; label: string };
  };
  refused: {
    question: string;
    /** What the chat keeps in place of the question. */
    storedAs: string;
    title: string;
    body: string;
    /** Extra sentence, shown only when the cover is wide enough. */
    extra: string;
    outcome: { code: string; label: string };
    notes: string[];
  };
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
  /** Animated cover on the home card, one per kind of product. */
  booking?: BookingReelCopy;
  chat?: ChatReelCopy;
  caseStudy?: ProjectCaseStudy;
};

/** Layer of the service stack drawn for each stage. */
export type ServiceStepId = "diagnose" | "build" | "maintain";

export type ServiceStep = {
  id: ServiceStepId;
  title: string;
  body: string;
};

export type ProcessStep = {
  index: string;
  title: string;
  period: string;
  role: string;
  description: string;
  /** Logo of the company, shown above its name. Without one, its initial is shown. */
  logo?: string;
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
    stepsLabel: string;
    /** Stages of the work, in order. */
    steps: ServiceStep[];
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
  skills: {
    eyebrow: string;
    title: string;
    /** Name of each group of tools; the tools themselves are in data/skills. */
    groups: Record<SkillGroupKey, string>;
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
