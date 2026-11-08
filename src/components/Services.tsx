"use client";

import { Fragment, useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { RevealLine, RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

/** Keeps hyphenated words such as "IA-native" from breaking at the hyphen. */
function keepHyphens(text: string) {
  return text.split(" ").map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      {i > 0 && " "}
      {word.includes("-") ? (
        <span className="whitespace-nowrap">{word}</span>
      ) : (
        word
      )}
    </Fragment>
  ));
}

/** The one service on offer, from the diagnosis to the system in production. */
export function Services() {
  const root = useRef<HTMLElement>(null);
  const { dictionary } = useSite();
  const t = dictionary.services;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.from("[data-service-item]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: EASE.expo,
        scrollTrigger: { trigger: "[data-service-items]", start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="servicos"
      className="shell relative scroll-mt-24 py-24 md:py-36"
    >
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <p className="eyebrow md:col-span-4">{t.eyebrow}</p>
        <RevealText
          as="h2"
          className="display display-lines text-[clamp(2.4rem,7vw,6rem)] md:col-span-8"
        >
          {keepHyphens(t.title)}
        </RevealText>
      </div>

      <RevealLine className="mt-14 md:mt-20" />

      <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12">
        <RevealText className="text-lg leading-relaxed text-bone md:col-span-7 md:col-start-5 md:text-2xl md:leading-snug">
          {t.summary}
        </RevealText>

        <div className="md:col-span-8 md:col-start-5">
          <p className="eyebrow">{t.includesLabel}</p>
          <ul
            data-service-items
            className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2"
          >
            {t.deliverables.map((item) => (
              <li
                key={item}
                data-service-item
                className="flex items-start gap-3 text-base text-bone"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
