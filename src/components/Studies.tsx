"use client";

import { RevealText } from "@/components/Reveal";
import { useSite } from "@/components/SiteProvider";

export function Studies() {
  const { dictionary } = useSite();
  const t = dictionary.studies;

  return (
    <section id="estudos" className="shell relative scroll-mt-24 py-24 md:py-36">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <p className="eyebrow md:col-span-4">{t.eyebrow}</p>
        <RevealText
          as="h2"
          className="display display-lines text-[clamp(2rem,5.4vw,4.5rem)] md:col-span-8"
        >
          {t.title}
        </RevealText>
      </div>

      <div className="hairline mt-16 grid gap-6 py-10 md:mt-24 md:grid-cols-12 md:gap-8">
        <p className="eyebrow md:col-span-4">{t.degreeLabel}</p>
        <div className="md:col-span-8">
          <h3 className="display display-lines text-[clamp(1.7rem,3.6vw,3rem)]">
            {t.degree}
          </h3>
          <p className="mt-4 font-mono text-[0.65rem] tracking-[0.16em] text-bone-dim uppercase">
            {t.school} · {t.period}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="eyebrow">{t.coursesLabel}</p>
        <ul className="mt-2 grid md:grid-cols-2 md:gap-x-16">
          {t.courses.map((course) => (
            <li key={course.title} className="hairline py-7">
              <p className="text-lg text-bone">{course.title}</p>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-bone-dim">
                {course.place}
              </p>
              <p className="mt-3 font-mono text-[0.65rem] tracking-[0.16em] text-cyan uppercase">
                {course.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
