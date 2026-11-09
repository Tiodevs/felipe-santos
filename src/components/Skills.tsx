"use client";

import Image from "next/image";
import { useRef } from "react";
import { SKILL_GROUPS } from "@/data/skills";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

/** Languages, platforms and tools, each with its logo, grouped by area. */
export function Skills() {
  const root = useRef<HTMLElement>(null);
  const groups = useRef<HTMLDivElement>(null);
  const { dictionary } = useSite();
  const t = dictionary.skills;

  useGSAP(
    () => {
      const el = groups.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { visibility: "visible" });
        return;
      }

      // Each group comes in as it reaches the viewport: its name first, then
      // the tools one by one, with the logos popping into their tiles.
      gsap.utils.toArray<HTMLElement>("[data-skill-group]", el).forEach((group) => {
        gsap
          .timeline({ scrollTrigger: { trigger: group, start: "top 85%" } })
          .from(group.querySelector("[data-skill-label]"), {
            y: 16,
            autoAlpha: 0,
            duration: 0.8,
            ease: EASE.expo,
          })
          .from(
            group.querySelectorAll("[data-skill]"),
            { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.05, ease: EASE.expo },
            0.05,
          )
          .from(
            group.querySelectorAll("[data-skill-logo]"),
            { scale: 0.4, duration: 0.7, stagger: 0.05, ease: "back.out(2.2)" },
            0.1,
          );
      });

      gsap.set(el, { visibility: "visible" });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="competencias"
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

      <div ref={groups} data-anim="hidden" className="mt-16 md:mt-24">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.key}
            data-skill-group
            className="hairline grid gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <h3 data-skill-label className="eyebrow md:col-span-4 md:pt-4">
              {t.groups[group.key]}
            </h3>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 md:col-span-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.items.map((skill) => (
                <li
                  key={skill.name}
                  data-skill
                  className="group flex items-center gap-3"
                >
                  {/* The lift sits on the tile, the entry pop on the logo:
                      GSAP writes `translate: none` on what it scales. */}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper p-2 ring-1 ring-ink-line transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:ring-cyan/50 md:h-12 md:w-12">
                    {/* The tool is named right next to it, so the logo is decorative. */}
                    <Image
                      data-skill-logo
                      src={skill.logo}
                      alt=""
                      width={32}
                      height={32}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <span className="text-sm leading-snug text-bone md:text-[0.9375rem]">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
