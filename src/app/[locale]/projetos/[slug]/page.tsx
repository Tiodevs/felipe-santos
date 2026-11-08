import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ProjectReel } from "@/components/ProjectReel";
import { RevealText } from "@/components/Reveal";
import { SITE } from "@/data/site";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary, type ProjectShot } from "@/i18n/get-dictionary";
import pt from "@/i18n/dictionaries/pt";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pt.projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw as Locale;
  const dictionary = await getDictionary(locale);
  const project = dictionary.projects.find((item) => item.slug === slug);
  if (!project) return {};

  const url = `${SITE.url}/${locale}/projetos/${slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": `${SITE.url}/pt/projetos/${slug}`,
        en: `${SITE.url}/en/projetos/${slug}`,
        "x-default": `${SITE.url}/pt/projetos/${slug}`,
      },
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url,
      images: [
        project.caseStudy?.gallery[0]?.src ?? project.image ?? "/felipe.jpg",
      ],
    },
  };
}

const PILL =
  "group relative inline-flex overflow-hidden rounded-full px-5 py-2.5 text-xs font-medium tracking-[0.14em] uppercase";
const PILL_FILL =
  "absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100";
const PILL_OUTLINE = `${PILL} border border-ink-line text-bone transition-colors hover:border-cyan hover:text-cyan`;

function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="eyebrow">{children}</h2>;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dictionary = await getDictionary(locale);
  const index = dictionary.projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();

  const project = dictionary.projects[index];
  const hasNext = dictionary.projects.length > 1;
  const next = dictionary.projects[(index + 1) % dictionary.projects.length];
  const t = dictionary.projectPage;
  const study = project.caseStudy;
  const home = `/${locale}`;

  const shots: ProjectShot[] = study?.gallery?.length
    ? study.gallery
    : project.image
      ? [
          {
            src: project.image,
            alt: dictionary.work.imageAlt.replace("{title}", project.title),
            caption: project.summary,
            wide: true,
          },
        ]
      : [];

  const links = (
    <div className="flex flex-wrap items-center gap-3">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className={`${PILL} bg-cyan text-ink-deep`}
        >
          <span className="relative z-10">{t.visitLive} ↗</span>
          <span className={PILL_FILL} />
        </a>
      ) : null}
      {study?.codeHref ? (
        <a
          href={study.codeHref}
          target="_blank"
          rel="noreferrer"
          className={PILL_OUTLINE}
        >
          {t.viewCode} ↗
        </a>
      ) : null}
      <a
        href={dictionary.cv.href}
        download={dictionary.cv.fileName}
        className={PILL_OUTLINE}
      >
        {dictionary.nav.startProject}
      </a>
    </div>
  );

  const hasTech = Boolean(
    study?.architecture || study?.engineering?.length || study?.stackTable?.length,
  );

  return (
    <article className="pt-[calc(var(--header-h)+2.5rem)]">
      <header className="shell">
        <Link
          href={`${home}#projetos`}
          className="eyebrow transition-colors hover:text-cyan"
        >
          ← {t.back}
        </Link>

        <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-4">
            {project.category} · {project.year}
          </p>
          <RevealText
            as="h1"
            className="display display-lines text-[clamp(2.6rem,8vw,7rem)] md:col-span-8"
          >
            {project.title}
          </RevealText>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-bone md:text-2xl md:leading-snug">
          {study?.overview ?? project.summary}
        </p>

        <div className="mt-8">{links}</div>
      </header>

      {project.reel ? (
        <div className="shell mt-12 md:mt-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-ink-line">
            <ProjectReel
              reel={project.reel}
              preload
              sizes="(min-width: 1536px) 1170px, 76vw"
            />
          </div>
        </div>
      ) : null}

      <div className="shell">
        <dl className="mt-10 grid gap-6 border-y border-ink-line py-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="eyebrow">{t.role}</dt>
            <dd className="mt-2 text-sm text-bone">
              {study?.role ?? project.category}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">{t.context}</dt>
            <dd className="mt-2 text-sm text-bone">
              {study?.context ?? project.year}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">{t.year}</dt>
            <dd className="mt-2 text-sm text-bone">{project.year}</dd>
          </div>
          <div>
            <dt className="eyebrow">{t.stack}</dt>
            <dd className="mt-2 text-sm text-bone">{project.stack.join(" · ")}</dd>
          </div>
        </dl>

        {study ? (
          <>
            <section className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <SectionLabel>{t.challenge}</SectionLabel>
              </div>
              <RevealText className="text-xl leading-snug text-bone md:col-span-8 md:text-[2rem] md:leading-tight">
                {study.challenge}
              </RevealText>
            </section>

            <section className="mt-16 grid gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <SectionLabel>{t.solution}</SectionLabel>
              </div>
              <p className="max-w-prose text-base leading-relaxed text-bone-dim md:col-span-7 md:text-lg">
                {study.solution}
              </p>
            </section>

            {study.numbers?.length ? (
              <section className="mt-20 md:mt-28">
                <SectionLabel>{t.numbers}</SectionLabel>
                <dl className="mt-8 grid grid-cols-2 md:grid-cols-4">
                  {study.numbers.map((item) => (
                    <div
                      key={item.label}
                      className="border-t border-ink-line py-6 pr-4 even:pl-5 max-md:odd:border-r md:pr-8 md:even:pl-0"
                    >
                      <dt className="display text-[clamp(2.2rem,6vw,4rem)] text-cyan">
                        {item.value}
                      </dt>
                      <dd className="mt-3 max-w-[22ch] text-sm leading-snug text-bone-dim">
                        {item.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            {study.audiences?.length ? (
              <section className="mt-20 md:mt-28">
                <SectionLabel>{t.howItWorks}</SectionLabel>
                <ul className="mt-8 grid gap-14 md:grid-cols-3 md:gap-8">
                  {study.audiences.map((audience) => (
                    <li key={audience.title}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-ink-soft ring-1 ring-ink-line">
                        <Image
                          src={audience.shot.src}
                          alt={audience.shot.alt}
                          fill
                          sizes="(min-width: 768px) 30vw, 92vw"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="eyebrow mt-6 text-cyan">{audience.eyebrow}</p>
                      <h3 className="display mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)]">
                        {audience.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-bone-dim md:text-base">
                        {audience.body}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {audience.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm text-bone"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {study.highlights.length ? (
              <section className="mt-20 md:mt-28">
                <SectionLabel>{t.highlights}</SectionLabel>
                <ol className="mt-8">
                  {study.highlights.map((item, itemIndex) => (
                    <li
                      key={item.title}
                      className="hairline grid gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                    >
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim md:col-span-2">
                        0{itemIndex + 1}
                      </span>
                      <h3 className="display text-[clamp(1.35rem,2.4vw,2rem)] md:col-span-4">
                        {item.title}
                      </h3>
                      <p className="max-w-prose text-sm leading-relaxed text-bone-dim md:col-span-6 md:text-base">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
          </>
        ) : null}

        {shots.length ? (
          <section className="mt-20 md:mt-28">
            <SectionLabel>{t.gallery}</SectionLabel>
            <div className="mt-8">
              <ProjectGallery items={shots} labels={t} />
            </div>
          </section>
        ) : null}
      </div>

      {study && hasTech ? (
        <section className="mt-24 bg-ink-soft py-20 md:mt-32 md:py-28">
          <div className="shell">
            <div className="grid gap-6 md:grid-cols-12 md:items-end">
              <p className="eyebrow md:col-span-4">{t.underTheHood}</p>
              <div className="md:col-span-8">
                <RevealText
                  as="h2"
                  className="display display-lines text-[clamp(2rem,5vw,4rem)]"
                >
                  {t.techTitle}
                </RevealText>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-bone-dim">
                  {t.techIntro}
                </p>
              </div>
            </div>

            {study.architecture ? (
              <div className="mt-16 md:mt-20">
                <h3 className="eyebrow">{t.architecture}</h3>
                <ol className="mt-6 flex flex-col md:flex-row md:items-stretch">
                  {study.architecture.flow.map((node, nodeIndex, all) => (
                    <li
                      key={node.name}
                      className="flex flex-col md:flex-1 md:flex-row md:items-center"
                    >
                      <div className="flex-1 rounded-sm border border-ink-line bg-ink p-5 md:h-full">
                        <p className="font-mono text-[0.6rem] tracking-[0.2em] text-bone-dim">
                          0{nodeIndex + 1}
                        </p>
                        <p className="mt-3 text-base text-bone">{node.name}</p>
                        <p className="mt-1 text-sm leading-snug text-bone-dim">
                          {node.detail}
                        </p>
                      </div>
                      {nodeIndex < all.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="py-2 text-center font-mono text-cyan md:px-3 md:py-0"
                        >
                          <span className="md:hidden">↓</span>
                          <span className="hidden md:inline">→</span>
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>

                <div className="mt-4 rounded-sm border border-dashed border-ink-line p-5">
                  <p className="eyebrow">{t.alsoTalksTo}</p>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                    {study.architecture.services.map((service) => (
                      <li key={service.name}>
                        <p className="text-base text-bone">{service.name}</p>
                        <p className="mt-1 text-sm text-bone-dim">{service.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-bone-dim md:text-base">
                  {study.architecture.note}
                </p>
              </div>
            ) : null}

            {study.engineering?.length ? (
              <div className="mt-16 md:mt-24">
                <h3 className="eyebrow">{t.engineering}</h3>
                <ol className="mt-6">
                  {study.engineering.map((item, itemIndex) => (
                    <li
                      key={item.title}
                      className="hairline grid gap-3 py-7 md:grid-cols-12 md:gap-8 md:py-9"
                    >
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim md:col-span-2">
                        0{itemIndex + 1}
                      </span>
                      <p className="text-lg text-bone md:col-span-4">{item.title}</p>
                      <p className="max-w-prose text-sm leading-relaxed text-bone-dim md:col-span-6 md:text-base">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}

            {study.stackTable?.length ? (
              <div className="mt-16 md:mt-24">
                <h3 className="eyebrow">{t.stack}</h3>
                <dl className="mt-6">
                  {study.stackTable.map((row) => (
                    <div
                      key={row.layer}
                      className="hairline grid gap-2 py-5 md:grid-cols-12 md:gap-8"
                    >
                      <dt className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim uppercase md:col-span-3">
                        {row.layer}
                      </dt>
                      <dd className="text-sm leading-relaxed text-bone md:col-span-9 md:text-base">
                        {row.tech}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            <div className="mt-16 md:mt-20">{links}</div>
          </div>
        </section>
      ) : null}

      {hasNext ? (
        <div className="shell mt-8 pb-8 md:mt-12">
          <Link
            href={`${home}/projetos/${next.slug}`}
            className="group hairline flex items-end justify-between gap-6 py-10"
          >
            <span>
              <span className="eyebrow">{t.nextProject}</span>
              <span className="display mt-4 block text-[clamp(1.6rem,3.4vw,2.75rem)] transition-colors duration-500 group-hover:text-cyan">
                {next.title}
              </span>
            </span>
            <span
              aria-hidden
              className="font-mono text-sm tracking-[0.16em] text-bone-dim"
            >
              →
            </span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}
