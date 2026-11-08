"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { ProjectReel } from "@/components/ProjectReel";
import { RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

export function Work() {
  const root = useRef<HTMLElement>(null);
  const { dictionary, locale } = useSite();
  const t = dictionary.work;
  const projects = dictionary.projects;
  // A single project gets the whole width instead of half a grid.
  const featured = projects.length === 1;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.utils.toArray<HTMLElement>("[data-work-card]").forEach((card) => {
        const frame = card.querySelector("[data-work-frame]");
        const media = card.querySelector("[data-work-media]");

        if (card.dataset.framed !== "true") {
          gsap.from(frame, {
            clipPath: "inset(0% 0% 100% 0%)",
            duration: 1.2,
            ease: EASE.quart,
            scrollTrigger: { trigger: card, start: "top 82%" },
          });
        }

        gsap.from(card.querySelectorAll("[data-work-meta] > *"), {
          y: 24,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.07,
          ease: EASE.expo,
          scrollTrigger: { trigger: card, start: "top 78%" },
        });

        // Framed art has no overscale, and the reel animates on its own.
        if (card.dataset.framed === "true" || card.dataset.reel === "true") return;

        // Slight counter-scroll on the artwork adds depth to the grid. Stays
        // within the image overscale so no edge is ever exposed.
        gsap.fromTo(
          media,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="projetos"
      className="shell relative scroll-mt-24 py-24 md:py-36"
    >
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <p className="eyebrow md:col-span-4">{t.eyebrow}</p>
        <RevealText
          as="h2"
          className="display display-lines text-[clamp(2rem,5.4vw,4.5rem)] md:col-span-8"
        >
          {t.title}
        </RevealText>
      </div>

      <div
        className={
          featured
            ? "mt-14 md:mt-24"
            : "mt-14 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2 md:gap-y-28"
        }
      >
        {projects.map((project, i) => (
          <article
            key={project.slug}
            data-work-card
            data-framed={project.framed ? "true" : undefined}
            data-reel={project.reel ? "true" : undefined}
            className={`group ${!featured && i % 2 === 1 ? "md:mt-24" : ""}`}
          >
            <Link
              href={`/${locale}/projetos/${project.slug}`}
              data-work-frame
              className={`relative block overflow-hidden rounded-sm bg-ink-soft ${
                featured ? "aspect-[16/10]" : "aspect-4/3"
              }`}
            >
              <div data-work-media className="absolute inset-0">
                {project.reel ? (
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]">
                    <ProjectReel
                      reel={project.reel}
                      sizes={
                        featured
                          ? "(min-width: 1536px) 1150px, (min-width: 768px) 72vw, 90vw"
                          : "(min-width: 768px) 36vw, 70vw"
                      }
                    />
                  </div>
                ) : project.image ? (
                  <Image
                    src={project.image}
                    alt={t.imageAlt.replace("{title}", project.title)}
                    fill
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between bg-ink-soft p-6 md:p-8">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim uppercase">
                      {project.category}
                    </span>
                    <div>
                      <p className="display text-[clamp(2.6rem,5vw,4.75rem)] text-cyan">
                        {project.metric.value}
                      </p>
                      <p className="mt-3 max-w-[18ch] text-sm leading-snug text-bone-dim">
                        {project.metric.label}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-line transition-colors duration-500 group-hover:ring-cyan/50" />
            </Link>

            <div
              data-work-meta
              className={featured ? "mt-8 grid gap-x-8 md:grid-cols-12" : "mt-6"}
            >
              <div className="hairline flex items-baseline justify-between gap-4 pt-4 md:col-span-12">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim">
                  0{i + 1} / {project.category}
                </span>
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-bone-dim">
                  {project.year}
                </span>
              </div>

              <h3
                className={`display mt-4 transition-colors duration-500 group-hover:text-cyan ${
                  featured
                    ? "text-[clamp(2.2rem,5.6vw,4.5rem)] md:col-span-5 md:mt-6"
                    : "text-[clamp(1.5rem,3.2vw,2.5rem)]"
                }`}
              >
                {project.title}
              </h3>

              <div className={featured ? "md:col-span-7 md:mt-6" : undefined}>
                <p
                  className={`mt-3 max-w-prose leading-relaxed text-bone-dim ${
                    featured ? "text-base md:mt-0 md:text-lg" : "text-sm"
                  }`}
                >
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-ink-line px-3 py-1 text-[0.6875rem] tracking-[0.08em] text-bone-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/projetos/${project.slug}`}
                  className="group/btn relative mt-6 inline-flex overflow-hidden rounded-full bg-cyan px-5 py-2.5 text-xs font-medium tracking-[0.14em] text-ink-deep uppercase"
                >
                  <span className="relative z-10">{t.openProject}</span>
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/btn:scale-y-100" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
