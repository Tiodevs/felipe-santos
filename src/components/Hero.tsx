"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { EASE, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { useSite } from "@/components/SiteProvider";

/** Copies of the name inside each half of the band; one copy already spans the viewport. */
const NAME_COPIES = 2;

/** How far the portrait drifts against the cursor, in px. */
const DRIFT = { x: 22, y: 14, scale: 1.04 };

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { scrollTo, dictionary } = useSite();
  const t = dictionary.hero;

  // Copy entrance. The portrait and the name band animate in CSS so they
  // don't wait for hydration.
  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>('[data-anim="hidden"]');
      gsap.set(targets, { visibility: "visible" });

      if (prefersReducedMotion()) return;

      gsap
        .timeline({ defaults: { ease: EASE.expo } })
        .from(
          "[data-hero-top] > *",
          { yPercent: 100, autoAlpha: 0, duration: 0.8, stagger: 0.08 },
          0.2,
        )
        .from(
          "[data-hero-role] > span > span",
          { yPercent: 115, duration: 1.15, stagger: 0.09 },
          0.35,
        )
        .from("[data-hero-pitch]", { y: 24, autoAlpha: 0, duration: 0.9 }, 0.5)
        .from(
          "[data-hero-cta] > *",
          { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.1 },
          0.6,
        );
    },
    { scope: root, dependencies: [t.pitch] },
  );

  // The portrait drifts against the cursor and leans in a touch, then settles
  // when the cursor leaves the hero. Scrolling sinks it slower than the page.
  useGSAP(
    (_, contextSafe) => {
      const section = root.current;
      const portrait = section?.querySelector<HTMLElement>("[data-hero-portrait]");
      if (!section || !portrait || !contextSafe || prefersReducedMotion()) return;

      gsap.to(portrait, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

      const ease = { duration: 0.9, ease: "power3.out" };
      const toX = gsap.quickTo(portrait, "x", ease);
      const toY = gsap.quickTo(portrait, "y", ease);
      const lean = (scale: number) =>
        gsap.to(portrait, { scale, ...ease, overwrite: "auto" });
      let leaning = false;

      // Tracks the whole window so the header doesn't count as leaving.
      const onMove = contextSafe((e: PointerEvent) => {
        if (section.hasAttribute("data-offscreen")) return;
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        toX(-nx * DRIFT.x);
        toY(-ny * DRIFT.y);
        if (!leaning) {
          leaning = true;
          lean(DRIFT.scale);
        }
      });
      const onLeave = contextSafe(() => {
        leaning = false;
        toX(0);
        toY(0);
        lean(1);
      });

      const doc = document.documentElement;
      window.addEventListener("pointermove", onMove);
      doc.addEventListener("pointerleave", onLeave);
      return () => {
        window.removeEventListener("pointermove", onMove);
        doc.removeEventListener("pointerleave", onLeave);
      };
    },
    { scope: root },
  );

  // Park the name band while the hero is off screen.
  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const io = new IntersectionObserver(([entry]) => {
      section.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="hero relative isolate flex min-h-svh flex-col overflow-hidden bg-ink lg:h-svh lg:min-h-[38rem]"
    >
      {/* Stage: portrait + name band. Full-bleed behind the copy on desktop,
          below the copy on smaller screens. */}
      <div className="relative order-last min-h-[17rem] flex-1 lg:absolute lg:inset-0">
        <div className="absolute -bottom-8 left-1/2 h-[calc(100%+2rem)] -translate-x-1/2 lg:h-[min(86svh,64rem)]">
          <div data-hero-portrait className="h-full origin-bottom will-change-transform">
            <div className="hero-rise h-full">
              <Image
                src="/felipe-hero-bw.webp"
                alt={t.photoAlt}
                width={795}
                height={958}
                preload
                quality={90}
                sizes="(min-width: 1024px) 860px, 92vw"
                className="h-full w-auto max-w-none select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[50%] -translate-y-1/2 text-white mix-blend-difference lg:top-[63%]"
        >
          <div className="hero-name-in">
            <div className="hero-name-track flex w-max">
              {[0, 1].map((half) => (
                <div key={half} className="flex shrink-0">
                  {Array.from({ length: NAME_COPIES }, (_, i) => (
                    <span
                      key={i}
                      className="pr-[0.28em] text-[clamp(5rem,30vw,10rem)] leading-[0.9] font-medium tracking-[-0.045em] whitespace-nowrap lg:text-[min(19vw,30svh,20rem)]"
                    >
                      {t.name} —
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copy. In flow on small screens; pinned to the corners on desktop. */}
      <div className="shell relative pt-[calc(var(--header-h)+1.25rem)] pb-6 lg:absolute lg:inset-0 lg:pb-0">
        <div data-hero-top className="overflow-hidden">
          <p data-anim="hidden" className="eyebrow flex items-center gap-2.5 text-bone">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            {t.status}
          </p>
        </div>

        <h1
          data-hero-role
          className="display display-lines mt-8 text-[clamp(2.1rem,9.5vw,3.5rem)] text-bone lg:absolute lg:right-[var(--gutter)] lg:bottom-9 lg:mt-0 lg:text-right lg:text-[clamp(2.25rem,3.6vw,4.25rem)] lg:text-white lg:mix-blend-difference"
        >
          <span className="sr-only normal-case">{t.name}, </span>
          {t.role.map((line) => (
            <span key={line} data-anim="hidden" className="line-mask">
              <span className="inline-block">{line}</span>
            </span>
          ))}
        </h1>

        <p
          data-hero-pitch
          data-anim="hidden"
          className="mt-5 max-w-xl text-base leading-relaxed text-bone-dim lg:absolute lg:top-[calc(var(--header-h)+4.25rem)] lg:left-[var(--gutter)] lg:mt-0 lg:max-w-[21rem] lg:text-[1.0625rem]"
        >
          <span className="text-bone">{t.pitchLead}</span> {t.pitch}
        </p>

        <div
          data-hero-cta
          className="mt-7 flex flex-wrap items-center gap-3 lg:absolute lg:bottom-10 lg:left-[var(--gutter)] lg:mt-0"
        >
          <a
            data-anim="hidden"
            href={dictionary.cv.href}
            download={dictionary.cv.fileName}
            className="group relative overflow-hidden rounded-full bg-cyan px-6 py-3 text-xs font-medium tracking-[0.14em] text-ink-deep uppercase"
          >
            <span className="relative z-10">{t.ctaPrimary}</span>
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-paper transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />
          </a>
          <a
            data-anim="hidden"
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#projetos");
            }}
            className="rounded-full border border-ink-line bg-ink px-6 py-3 text-xs font-medium tracking-[0.14em] text-bone uppercase transition-colors hover:border-cyan hover:text-cyan"
          >
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
