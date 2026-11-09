"use client";

import { Fragment, useRef, useState, type CSSProperties } from "react";
import { EASE, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { RevealText } from "@/components/Reveal";
import { ServiceStack } from "@/components/ServiceStack";
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

/** Viewport heights of scrolling each step holds the section on desktop. */
const STEP_SCROLL = 50;
const DESKTOP = "(min-width: 1024px)";

/**
 * The one service on offer, in three stages. On desktop the section holds
 * still while the page scrolls through it and the scroll picks the stage; on
 * smaller screens the stage beside the middle of the screen is the active one.
 */
export function Services() {
  const root = useRef<HTMLElement>(null);
  const bars = useRef<(HTMLSpanElement | null)[]>([]);
  // Stage a click is scrolling to; the stages passed on the way are skipped.
  const target = useRef<number | null>(null);
  const targetTimer = useRef<number | undefined>(undefined);
  const [active, setActive] = useState(0);
  const { dictionary, scrollTo } = useSite();
  const t = dictionary.services;
  const count = t.steps.length;

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const p = self.progress * count;
            const i = Math.min(count - 1, Math.floor(p));
            if (target.current !== null) {
              if (i !== target.current) return;
              target.current = null;
            }
            setActive(i);
            // How far into its stage the scroll is, shown under the button.
            const bar = bars.current[i];
            if (bar) bar.style.transform = `scaleX(${Math.min(1, p - i)})`;
          },
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-service-step]", el).forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step,
            start: "top 70%",
            end: "bottom 70%",
            onToggle: (self) => {
              if (self.isActive) setActive(i);
            },
          });
        });
      });

      if (!prefersReducedMotion()) {
        gsap.from(el.querySelectorAll("[data-service-step]"), {
          x: -28,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: EASE.expo,
          scrollTrigger: { trigger: el.querySelector("[data-service-steps]"), start: "top 85%" },
        });
      }

      return () => mm.revert();
    },
    { scope: root },
  );

  const select = (i: number) => {
    setActive(i);
    // On desktop the scroll drives the stage, so move the scroll there too.
    if (!window.matchMedia(DESKTOP).matches) return;
    target.current = i;
    window.clearTimeout(targetTimer.current);
    targetTimer.current = window.setTimeout(() => {
      target.current = null;
    }, 1600);
    scrollTo(`#servicos-etapa-${i + 1}`);
  };

  return (
    <section
      ref={root}
      id="servicos"
      className="relative scroll-mt-24 lg:h-[calc(100vh+var(--service-scroll))]"
      style={{ "--service-scroll": `${count * STEP_SCROLL}vh` } as CSSProperties}
    >
      {/* Where the scroll lands for each stage when its button is clicked. */}
      {t.steps.map((step, i) => (
        <span
          key={step.id}
          id={`servicos-etapa-${i + 1}`}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 hidden h-px w-px lg:block"
          style={{ top: `${STEP_SCROLL * (i + 0.5)}vh` }}
        />
      ))}

      <div className="shell py-24 md:py-36 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:py-0 lg:pt-[var(--header-h)]">
        <div className="grid w-full lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.eyebrow}</p>
            <RevealText
              as="h2"
              className="display display-lines mt-6 text-[clamp(2.4rem,7vw,6rem)] lg:text-[clamp(2.6rem,4.4vw,4.6rem)]"
            >
              {keepHyphens(t.title)}
            </RevealText>
          </div>

          {/* On phones the stack stays under the header while the steps pass. */}
          <div className="sticky top-[var(--header-h)] z-10 -mx-[var(--gutter)] mt-10 flex h-[min(44vh,22rem)] justify-center bg-ink py-3 after:absolute after:inset-x-0 after:top-full after:h-8 after:bg-linear-to-b after:from-ink after:to-transparent lg:static lg:z-auto lg:col-span-4 lg:mx-0 lg:mt-0 lg:h-[min(36rem,calc(100vh-var(--header-h)-6rem))] lg:bg-transparent lg:py-0 lg:after:hidden">
            <ServiceStack steps={t.steps} active={active} onSelect={select} />
          </div>

          <div className="mt-10 lg:col-span-4 lg:mt-0 lg:pl-6">
            <p className="eyebrow">{t.stepsLabel}</p>
            <ol data-service-steps className="mt-6 grid gap-3">
              {t.steps.map((step, i) => {
                const isActive = i === active;
                return (
                  <li key={step.id} data-service-step>
                    <button
                      type="button"
                      onClick={() => select(i)}
                      aria-current={isActive ? "step" : undefined}
                      className={`relative w-full overflow-hidden rounded-[2px] border px-5 py-3.5 text-left font-mono text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
                        isActive
                          ? "border-cyan bg-cyan text-ink-deep"
                          : "border-ink-line text-bone-dim hover:border-cyan/60 hover:text-bone"
                      }`}
                    >
                      <span className="mr-3 opacity-60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.title}
                      <span
                        ref={(node) => {
                          bars.current[i] = node;
                        }}
                        aria-hidden="true"
                        className={`absolute inset-x-0 bottom-0 hidden h-0.5 origin-left bg-ink-deep/35 lg:block ${
                          isActive ? "" : "opacity-0"
                        }`}
                        style={{ transform: "scaleX(0)" }}
                      />
                    </button>
                    {/* Phones read every stage; desktop opens only the active one. */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[1fr] lg:grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* A fixed height on desktop keeps the buttons from
                            shifting as stages with longer text open. */}
                        <p className="pt-4 pb-5 text-base leading-relaxed text-bone lg:min-h-[10.5rem] lg:max-w-[36ch]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
