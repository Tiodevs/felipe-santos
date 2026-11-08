"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import type { ProjectReelCopy } from "@/i18n/get-dictionary";

/** Seconds each desktop screen stays on before the next one crossfades in. */
const SCREEN_TIME = 3.4;

/**
 * How far the phone screenshot scrolls, in % of its own height: from the
 * calendar at the top to the time slots below. The screenshot is 780×1688 and
 * the phone screen is 9:16, so 17.9% is exactly the hidden part.
 */
const PHONE_SCROLL = -17.9;

const TOAST_POSITIONS = [
  // Pops out of the phone right after the tap on the time slot.
  "right-[25%] top-[50%]",
  // Under the phone, clear of the screen label in the browser's corner.
  "right-[4%] bottom-[5%]",
  "left-[3%] top-[17%] @max-md:hidden",
];

function LeemiaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" className={className}>
      <g transform="translate(4 14)" stroke="#34C3DD" strokeWidth="7" strokeLinecap="round">
        <rect x="4" y="4" width="112" height="92" rx="4" fill="#05070A" />
        <path d="M 4 38 C 22 25, 41 29, 58 44 C 75 59, 98 55, 116 38" />
        <path d="M 4 66 C 23 53, 44 57, 62 71 C 78 83, 99 81, 116 64" />
        <path d="M 40 4 C 52 22, 54 40, 44 56 C 34 72, 34 84, 42 96" />
        <path d="M 78 4 C 90 22, 88 40, 76 55 C 64 70, 67 84, 76 96" />
      </g>
    </svg>
  );
}

function ToastIcon({ index }: { index: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-[55%]"
    >
      {index === 0 ? <path d="M20 6 9 17l-5-5" /> : null}
      {index === 1 ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      ) : null}
      {index === 2 ? (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </>
      ) : null}
    </svg>
  );
}

type ProjectReelProps = {
  reel: ProjectReelCopy;
  /** Sizes hint for the desktop screens; the browser frame is ~76% of the reel. */
  sizes?: string;
  /** Preload the first screen when the reel is the page's main image. */
  preload?: boolean;
};

/**
 * A motion graphic made of the product's real screens: a browser cycling
 * through the desktop views, a phone scrolling the booking and tapping a time
 * slot, and the notifications that follow. Plays only while on screen.
 */
export function ProjectReel({
  reel,
  sizes = "(min-width: 768px) 72vw, 90vw",
  preload = false,
}: ProjectReelProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const q = gsap.utils.selector(el);
      const screens = q("[data-reel-screen]");
      const zooms = q("[data-reel-zoom]");
      const labels = q("[data-reel-label]");
      const toasts = q("[data-reel-toast]");
      const scroll = q("[data-reel-scroll]");
      const tap = q("[data-reel-tap]");
      if (!screens.length) return;

      if (prefersReducedMotion()) {
        // A still frame that tells the same story: booked, and confirmed.
        gsap.set(scroll, { yPercent: PHONE_SCROLL });
        gsap.set(toasts[0], { autoAlpha: 1 });
        return;
      }

      const last = screens.length - 1;
      const total = screens.length * SCREEN_TIME;
      const tl = gsap.timeline({ repeat: -1, paused: true });

      // Every loop starts here: first screen up, everything else parked.
      tl.set(screens, { autoAlpha: 0 }, 0)
        .set(screens[0], { autoAlpha: 1 }, 0)
        .set(labels, { autoAlpha: 0, y: 6 }, 0)
        .set(labels[0], { autoAlpha: 1, y: 0 }, 0)
        .set(zooms, { scale: 1, yPercent: 0 }, 0)
        .set(toasts, { autoAlpha: 0, y: 14, scale: 0.96 }, 0)
        .set(tap, { autoAlpha: 0, scale: 0.4 }, 0)
        .set(scroll, { yPercent: 0 }, 0);

      // Desktop: a slow push-in on each screen, then a crossfade.
      screens.forEach((screen, i) => {
        const at = i * SCREEN_TIME;
        tl.to(
          zooms[i],
          {
            scale: 1.07,
            yPercent: -2.5,
            duration: i === last ? SCREEN_TIME : SCREEN_TIME + 0.7,
            ease: "none",
          },
          at,
        );
        if (i === 0) return;
        tl.to(screen, { autoAlpha: 1, duration: 0.7, ease: "power2.inOut" }, at - 0.35)
          .to(screens[i - 1], { autoAlpha: 0, duration: 0.7, ease: "power2.inOut" }, at - 0.35)
          .to(labels[i - 1], { autoAlpha: 0, y: -6, duration: 0.3, ease: "power2.in" }, at - 0.35)
          .to(labels[i], { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, at - 0.05);
      });

      // Hand back to the first screen so the loop has no cut.
      tl.set(zooms[0], { scale: 1, yPercent: 0 }, total - 0.75)
        .to(screens[0], { autoAlpha: 1, duration: 0.7, ease: "power2.inOut" }, total - 0.7)
        .to(screens[last], { autoAlpha: 0, duration: 0.7, ease: "power2.inOut" }, total - 0.7)
        .to(labels[last], { autoAlpha: 0, y: -6, duration: 0.3, ease: "power2.in" }, total - 0.7)
        .to(labels[0], { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }, total - 0.42);

      // Phone: scroll from the calendar to the slots, tap 10:00, scroll back.
      tl.to(scroll, { yPercent: PHONE_SCROLL, duration: 2.2, ease: "power2.inOut" }, 0.8)
        .to(tap, { autoAlpha: 1, scale: 1, duration: 0.22, ease: "power2.out" }, 3.1)
        .to(tap, { autoAlpha: 0, scale: 1.7, duration: 0.55, ease: "power2.out" }, 3.32)
        .to(scroll, { yPercent: 0, duration: 1.2, ease: "power2.inOut" }, total - 1.5);

      // Notifications that follow the booking.
      const pop = (toast: Element | undefined, at: number, hold: number) => {
        if (!toast) return;
        tl.to(toast, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, at).to(
          toast,
          { autoAlpha: 0, y: -10, duration: 0.4, ease: "power2.in" },
          at + hold,
        );
      };
      pop(toasts[0], 3.35, 2.8);
      pop(toasts[1], 4.6, 3);
      pop(toasts[2], 7.6, 3.2);

      tl.set({}, {}, total);

      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tl.play();
          else tl.pause();
        },
        { threshold: 0.15 },
      );
      io.observe(el);
      return () => io.disconnect();
    },
    { scope: root, dependencies: [reel.screens.length] },
  );

  return (
    <div
      ref={root}
      role="img"
      aria-label={reel.ariaLabel}
      className="@container relative h-full w-full overflow-hidden bg-[#05070a] select-none"
    >
      {/* Stage: a teal glow and a faint grid, as on the product's own landing page. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(60%_70%_at_72%_18%,rgba(52,195,221,0.28),transparent_70%),radial-gradient(50%_60%_at_10%_100%,rgba(52,195,221,0.12),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:4cqw_4cqw]"
      />

      {/* Browser */}
      <div className="absolute top-[7%] left-[4.5%] w-[76%] overflow-hidden rounded-[0.9cqw] border border-white/10 bg-[#0b1014] shadow-[0_2.5cqw_6cqw_rgba(0,0,0,0.55)]">
        <div className="flex h-[2.7cqw] items-center gap-[0.55cqw] border-b border-white/10 px-[1.2cqw]">
          <span className="size-[0.7cqw] rounded-full bg-white/20" />
          <span className="size-[0.7cqw] rounded-full bg-white/20" />
          <span className="size-[0.7cqw] rounded-full bg-white/20" />
          <span className="mx-auto flex items-center gap-[0.5cqw] rounded-full bg-white/[0.06] px-[1.2cqw] py-[0.25cqw] text-[clamp(6px,1cqw,13px)] tracking-wide text-white/60">
            <LeemiaMark className="size-[1.3cqw]" />
            {reel.url}
          </span>
          <span className="w-[2.6cqw]" />
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f12]">
          {reel.screens.map((screen, i) => (
            <div
              key={screen.src}
              data-reel-screen
              className={`absolute inset-0 ${i === 0 ? "" : "opacity-0"}`}
            >
              <div data-reel-zoom className="absolute inset-0 origin-[50%_20%]">
                <Image
                  src={screen.src}
                  alt=""
                  fill
                  sizes={sizes}
                  preload={preload && i === 0}
                  className="object-cover object-top"
                  draggable={false}
                />
              </div>
            </div>
          ))}

          {reel.screens.map((screen, i) => (
            <span
              key={screen.label}
              data-reel-label
              className={`absolute bottom-[4%] left-[2.5%] rounded-full bg-black/70 px-[1.1cqw] py-[0.45cqw] font-mono text-[clamp(6px,0.95cqw,12px)] tracking-[0.16em] text-white uppercase @max-md:hidden ${i === 0 ? "" : "opacity-0"}`}
            >
              {screen.label}
            </span>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className="absolute top-[20%] right-[5%] w-[19%] rounded-[2.1cqw] border border-white/15 bg-[#0b1014] p-[0.5cqw] shadow-[0_2.5cqw_6cqw_rgba(0,0,0,0.6)]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6cqw] bg-[#0a0f12]">
          <div className="absolute inset-x-0 top-0" data-reel-scroll>
            <Image
              src={reel.phone}
              alt=""
              width={780}
              height={1688}
              sizes="(min-width: 768px) 20vw, 30vw"
              className="h-auto w-full"
              draggable={false}
            />
          </div>
          <span className="absolute top-[1.4%] left-1/2 z-10 h-[2.2%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
          <span
            data-reel-tap
            className="absolute top-[76%] left-[77%] size-[3.4cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#34c3dd] bg-[#34c3dd]/25 opacity-0"
          />
        </div>
      </div>

      {/* Notifications */}
      {reel.toasts.slice(0, 3).map((toast, i) => (
        <div
          key={toast.title}
          data-reel-toast
          className={`absolute flex w-[25cqw] items-start gap-[0.8cqw] rounded-[1cqw] border border-white/10 bg-[#0e1418]/95 p-[1cqw] opacity-0 shadow-[0_1.5cqw_4cqw_rgba(0,0,0,0.55)] backdrop-blur @max-md:w-[34cqw] ${TOAST_POSITIONS[i]}`}
        >
          <span className="flex size-[2.3cqw] shrink-0 items-center justify-center rounded-full bg-[#34c3dd]/15 text-[#34c3dd] @max-md:size-[3.4cqw]">
            <ToastIcon index={i} />
          </span>
          <span className="min-w-0">
            <span className="block text-[clamp(7px,1.25cqw,16px)] leading-tight font-medium text-white">
              {toast.title}
            </span>
            <span className="mt-[0.3cqw] block text-[clamp(6px,1.05cqw,13px)] leading-snug text-white/60">
              {toast.body}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
