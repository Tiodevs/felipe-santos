"use client";

import Image from "next/image";
import { useRef } from "react";
import { RevealGroup, RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

export function Studio() {
  const root = useRef<HTMLElement>(null);
  const { dictionary } = useSite();
  const t = dictionary.studio;

  return (
    <section
      ref={root}
      id="estudio"
      className="shell relative scroll-mt-24 py-24 md:py-36"
    >
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">{t.eyebrow}</p>
          <div className="relative mt-8 aspect-[4/5] max-w-xs overflow-hidden rounded-sm bg-ink-soft">
            <Image
              src="/felipe.jpg"
              alt={t.photoAlt}
              fill
              priority
              sizes="(min-width: 768px) 280px, 80vw"
              className="object-cover object-[center_20%]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink-line" />
          </div>
        </div>

        <div className="md:col-span-8">
          <RevealText
            as="h2"
            className="display display-lines text-[clamp(1.9rem,4.6vw,4rem)] text-balance"
          >
            {t.title}
          </RevealText>

          <div className="mt-10 grid gap-8 text-base leading-relaxed text-bone-dim md:grid-cols-2 md:text-[1.0625rem]">
            <RevealText>{t.p1}</RevealText>
            <RevealText delay={0.1}>{t.p2}</RevealText>
          </div>

          <RevealGroup className="mt-16 grid grid-cols-2 md:grid-cols-4">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-ink-line py-6 pr-4 even:pl-5 max-md:odd:border-r md:even:pl-0 md:pr-8"
              >
                <p className="display text-[clamp(1.65rem,6.4vw,2.75rem)] text-cyan">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[11ch] text-xs leading-snug text-bone-dim">
                  {stat.label}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
