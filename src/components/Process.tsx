"use client";

import { useRef } from "react";
import Image from "next/image";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

export function Process() {
  const root = useRef<HTMLElement>(null);
  const { dictionary } = useSite();
  const t = dictionary.process;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // The spine fills in as the reader moves through the steps.
      gsap.fromTo(
        "[data-spine]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-steps]",
            start: "top 70%",
            end: "bottom 75%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
        gsap.from(step.children, {
          y: 32,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.06,
          ease: EASE.expo,
          scrollTrigger: { trigger: step, start: "top 84%" },
        });

        gsap.from(step.querySelector("[data-step-dot]"), {
          scale: 0,
          duration: 0.7,
          ease: "back.out(2.4)",
          scrollTrigger: { trigger: step, start: "top 84%" },
        });
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="experiencia"
      className="relative scroll-mt-24 bg-ink-soft py-24 md:py-36"
    >
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <p className="eyebrow md:col-span-4">{t.eyebrow}</p>
          <RevealText
            as="h2"
            className="display display-lines text-[clamp(2rem,5.4vw,4.5rem)] md:col-span-8"
          >
            {t.title}
          </RevealText>
        </div>

        <div data-steps className="relative mt-16 md:mt-24">
          <div
            className="pointer-events-none absolute top-5 bottom-0 left-[3px] w-px bg-ink-line md:top-6 md:left-[calc(33.333%+3px)]"
            aria-hidden="true"
          >
            <div data-spine className="h-full w-full origin-top bg-cyan" />
          </div>

          <ol>
            {t.steps.map((step) => (
              <li
                key={step.index}
                data-step
                className="relative grid gap-3 pb-14 pl-8 last:pb-0 md:grid-cols-12 md:gap-8 md:pb-20 md:pl-0"
              >
                <span
                  data-step-dot
                  className="absolute top-5 left-0 h-[7px] w-[7px] rounded-full bg-cyan md:top-6 md:left-[calc(33.333%)]"
                  aria-hidden="true"
                />

                <div className="md:col-span-4 md:pr-12">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper p-2 ring-1 ring-ink-line md:h-14 md:w-14">
                    {/* The company is named right below, so the logo is decorative. */}
                    {step.logo ? (
                      <Image
                        src={step.logo}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span
                        className="display text-2xl text-ink-deep md:text-3xl"
                        aria-hidden="true"
                      >
                        {step.title.charAt(0)}
                      </span>
                    )}
                  </span>
                  <h3 className="display mt-5 text-[clamp(1.5rem,3.2vw,2.5rem)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-mono text-[0.65rem] tracking-[0.16em] text-bone-dim uppercase">
                    {step.period}
                  </p>
                  <p className="mt-2 text-sm text-bone">{step.role}</p>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  <p className="max-w-prose text-base leading-relaxed text-bone-dim">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
