"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { fs, u } from "@/lib/reel-units";
import type { BookingReelCopy } from "@/i18n/get-dictionary";

/** The product's accent, and the page behind it. */
const TEAL = "#34c3dd";
const INK = "#05070a";
const GREEN = "#4ade80";
const RED = "#f87171";

/** Corte masculino takes 45 minutes: three rows of 15 on the agenda. */
const SERVICE_ROWS = 3;

const SLOT_IDLE = {
  backgroundColor: "rgba(255,255,255,0.04)",
  borderColor: "rgba(255,255,255,0.12)",
  color: "rgba(255,255,255,0.8)",
};
const SLOT_PICKED = { backgroundColor: TEAL, borderColor: TEAL, color: INK };
const REQ_IDLE = { backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.18)" };
const REQ_OK = { backgroundColor: "rgba(52,195,221,0.16)", borderColor: TEAL };
const REQ_ERR = { backgroundColor: "rgba(248,113,113,0.14)", borderColor: RED };

function Icon({ children, className = "size-[1.1em]" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  );
}

const CHECK = <path d="M20 6 9 17l-5-5" />;
const CROSS = <path d="M18 6 6 18M6 6l12 12" />;
const LOCK = (
  <>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </>
);
const MAIL = (
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>
);
const CLOCK = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>
);

/** One icon per log line, in the order the animation writes them. */
const LOG_ICONS = [
  { glyph: LOCK, color: TEAL },
  { glyph: CLOCK, color: "rgba(255,255,255,0.5)" },
  { glyph: CHECK, color: GREEN },
  { glyph: CROSS, color: RED },
  { glyph: CHECK, color: GREEN },
  { glyph: MAIL, color: TEAL },
];

/** A booking request arriving at the agenda, with its three possible states. */
function Request({ side, label }: { side: "left" | "right"; label: string }) {
  return (
    <span
      data-req
      className={`absolute top-1/2 flex -translate-y-1/2 items-center border font-mono whitespace-nowrap text-white opacity-0 ${side === "left" ? "left-[3%]" : "right-[3%]"}`}
      style={{ gap: u(0.4), borderRadius: u(0.6), padding: `${u(0.3)} ${u(0.6)}`, fontSize: fs(0.75, 5), ...REQ_IDLE }}
    >
      {label}
      <span className="grid">
        <span data-req-state="wait" className="[grid-area:1/1] animate-pulse text-white/60 opacity-0">
          <Icon>{CLOCK}</Icon>
        </span>
        <span data-req-state="ok" className="[grid-area:1/1] opacity-0" style={{ color: TEAL }}>
          <Icon>{CHECK}</Icon>
        </span>
        <span data-req-state="err" className="[grid-area:1/1] opacity-0" style={{ color: RED }}>
          409
        </span>
      </span>
    </span>
  );
}

/** An appointment on the agenda, `rows` rows of 15 minutes tall. */
function Block({
  row,
  rows,
  total,
  label,
  muted = false,
}: {
  row: number;
  rows: number;
  total: number;
  label: string;
  muted?: boolean;
}) {
  return (
    <div
      data-block={muted ? undefined : ""}
      className={`absolute right-0 origin-top overflow-hidden border-l-2 ${muted ? "border-white/25 bg-white/[0.06] text-white/45" : "opacity-0"}`}
      style={{
        left: u(3.9),
        top: `calc(${(row / total) * 100}% + 1px)`,
        height: `calc(${(rows / total) * 100}% - 2px)`,
        borderRadius: u(0.4),
        padding: `${u(0.3)} ${u(0.6)}`,
        fontSize: fs(0.75, 5),
        ...(muted ? {} : { backgroundColor: "rgba(52,195,221,0.16)", borderColor: TEAL, color: "#d7f4fa" }),
      }}
    >
      <span className="block truncate">{label}</span>
    </div>
  );
}

/** A client's phone on the booking screen, from the time grid to the confirmation. */
function Phone({ side, booking }: { side: "a" | "b"; booking: BookingReelCopy }) {
  const p = booking.phone;
  const client = booking.clients[side === "a" ? 0 : 1];
  const booked = side === "a" ? booking.wanted : booking.fallback;
  const value = (text: string) => {
    if (text !== "{time}") return text;
    if (side === "a") return booking.wanted;
    return (
      <>
        <span data-time="wanted">{booking.wanted}</span>
        <span data-time="fallback" className="hidden">
          {booking.fallback}
        </span>
      </>
    );
  };

  return (
    <div
      data-phone={side}
      className={`absolute top-[11%] bottom-[7%] w-[23%] ${side === "a" ? "left-[4%] @max-md:hidden" : "right-[4%] @max-md:w-[36%]"}`}
    >
      <p
        className="absolute bottom-full left-0 flex items-center font-mono tracking-[0.16em] text-white/55 uppercase"
        style={{ marginBottom: u(0.8), gap: u(0.5), fontSize: fs(0.75, 5) }}
      >
        <span className="rounded-full" style={{ width: u(0.5), height: u(0.5), backgroundColor: TEAL }} />
        {client}
      </p>

      <div
        className="h-full border border-white/15 bg-[#0b1014] shadow-[0_2.5cqw_6cqw_rgba(0,0,0,0.55)]"
        style={{ borderRadius: u(2), padding: u(0.5) }}
      >
        <div
          className="relative flex h-full flex-col overflow-hidden bg-[#0a0f12]"
          style={{ borderRadius: u(1.6), padding: `${u(2.4)} ${u(1.2)} ${u(1.2)}`, gap: u(0.9) }}
        >
          <span
            className="absolute left-1/2 w-[30%] -translate-x-1/2 rounded-full bg-black"
            style={{ top: u(0.6), height: u(0.9) }}
          />

          <div
            data-mail
            className="absolute inset-x-0 z-20 flex items-start border border-white/10 bg-[#121a1f]/95 opacity-0 backdrop-blur"
            style={{ top: u(0.5), margin: `0 ${u(0.6)}`, borderRadius: u(0.9), padding: u(0.7), gap: u(0.5), fontSize: fs(0.8, 5) }}
          >
            <span style={{ color: TEAL }}>
              <Icon>{MAIL}</Icon>
            </span>
            <span className="min-w-0 leading-snug text-white/85">{p.email.replace("{time}", booked)}</span>
          </div>

          <div className="flex items-center" style={{ gap: u(0.6) }}>
            <Image src={booking.mark} alt="" width={16} height={16} draggable={false} style={{ width: u(1.5), height: u(1.5) }} />
            <span className="font-medium text-white" style={{ fontSize: fs(1.1) }}>
              {p.title}
            </span>
          </div>

          <div className="flex @max-md:hidden" style={{ gap: u(0.4) }}>
            {p.steps.map((step, i) => (
              <span key={step} className="flex-1">
                <span
                  className="block rounded-full"
                  style={{ height: u(0.25), backgroundColor: i < p.steps.length - 1 ? TEAL : "rgba(255,255,255,0.5)" }}
                />
                <span className="block truncate text-white/50" style={{ marginTop: u(0.35), fontSize: fs(0.65, 5) }}>
                  {step}
                </span>
              </span>
            ))}
          </div>

          <p className="truncate text-white/55" style={{ fontSize: fs(0.8, 5) }}>
            {p.choice}
          </p>

          <div className="grid grid-cols-3" style={{ gap: u(0.4) }}>
            {p.days.map((day, i) => (
              <span
                key={day}
                className={`border text-center ${i === 1 ? "text-white" : "border-white/10 text-white/45"}`}
                style={{
                  padding: `${u(0.35)} 0`,
                  borderRadius: u(0.5),
                  fontSize: fs(0.75, 5),
                  ...(i === 1 ? { borderColor: TEAL } : {}),
                }}
              >
                {day}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3" style={{ gap: u(0.4) }}>
            {p.slots.map((slot) => (
              <span
                key={slot}
                data-slot={slot}
                className="border text-center font-mono"
                style={{ padding: `${u(0.4)} 0`, borderRadius: u(0.5), fontSize: fs(0.8, 5), ...SLOT_IDLE }}
              >
                {slot}
              </span>
            ))}
          </div>

          <div
            className="border border-white/10 bg-white/[0.03] @max-md:hidden"
            style={{ borderRadius: u(0.8), padding: `${u(0.7)} ${u(0.9)}` }}
          >
            <p className="font-medium text-white/80" style={{ fontSize: fs(0.8, 5) }}>
              {p.summaryTitle}
            </p>
            <dl style={{ marginTop: u(0.3) }}>
              {p.summary.map((row) => (
                <div key={row.label} className="flex justify-between" style={{ paddingTop: u(0.25), fontSize: fs(0.7, 5) }}>
                  <dt className="text-white/45">{row.label}</dt>
                  <dd className="text-white/85">{value(row.value)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <span
            data-confirm
            className="mt-auto block text-center font-medium"
            style={{ backgroundColor: TEAL, color: INK, borderRadius: u(0.7), padding: `${u(0.65)} 0`, fontSize: fs(0.85, 5) }}
          >
            {p.confirm}
          </span>

          <div
            data-toast="ok"
            className="absolute inset-x-0 z-10 flex items-center border border-white/10 bg-[#121a1f] opacity-0 shadow-lg"
            style={{ bottom: u(4.4), margin: `0 ${u(0.8)}`, borderRadius: u(0.8), padding: u(0.7), gap: u(0.5), fontSize: fs(0.8, 5) }}
          >
            <span style={{ color: GREEN }}>
              <Icon>{CHECK}</Icon>
            </span>
            <span className="leading-snug text-white/90">{p.success}</span>
          </div>
          {side === "b" ? (
            <div
              data-toast="err"
              className="absolute inset-x-0 z-10 flex items-start border bg-[#1f1214] opacity-0 shadow-lg"
              style={{ bottom: u(4.4), margin: `0 ${u(0.8)}`, borderRadius: u(0.8), padding: u(0.7), gap: u(0.5), fontSize: fs(0.8, 5), borderColor: "rgba(248,113,113,0.45)" }}
            >
              <span style={{ color: RED }}>
                <Icon>{CROSS}</Icon>
              </span>
              <span className="leading-snug text-white/90">{p.conflict}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * A motion graphic of the booking race, coded instead of recorded. Two
 * clients pick the same slot and confirm at once. Both requests reach the
 * studio's agenda; the first locks the professional's schedule (FOR UPDATE),
 * books 10:00 and lets go; the second, waiting on the lock, finds the slot
 * taken and gets the product's real 409 message. Its grid then shows only
 * what is really free, it books 10:45, and both get the confirmation e-mail.
 * The log under the agenda says what the API did. Small covers keep the
 * second phone and the agenda.
 */
export function BookingReel({ booking }: { booking: BookingReelCopy }) {
  const root = useRef<HTMLDivElement>(null);
  const { agenda, clients } = booking;
  const total = agenda.rows.length;

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const q = gsap.utils.selector(el);
      const [phoneA, phoneB] = q("[data-phone]");
      if (!phoneA || !phoneB) return;
      const inA = gsap.utils.selector(phoneA);
      const inB = gsap.utils.selector(phoneB);
      const [req1, req2, req3] = q("[data-req]");
      const [block1, block2] = q("[data-block]");
      const lock = q("[data-lock]");
      const logs = q("[data-log]");
      const mails = q("[data-mail]");
      const slots = q("[data-slot]");
      const state = (req: Element, name: "wait" | "ok" | "err") =>
        req.querySelector(`[data-req-state='${name}']`);
      const toast = (phone: (s: string) => Element[], kind: "ok" | "err") => phone(`[data-toast='${kind}']`);
      const confirm = (phone: (s: string) => Element[]) => phone("[data-confirm]");
      const slotIn = (phone: (s: string) => Element[], time: string) => phone(`[data-slot='${time}']`);

      const tl = gsap.timeline({ repeat: -1, paused: true });

      // Every loop starts on two open grids and a free agenda.
      tl.set(slots, { ...SLOT_IDLE, opacity: 1, scale: 1, textDecorationLine: "none" }, 0)
        .set(q("[data-toast]"), { autoAlpha: 0, y: 8 }, 0)
        .set(mails, { autoAlpha: 0, yPercent: -120 }, 0)
        .set([req1, req2, req3], { autoAlpha: 0, x: 0, ...REQ_IDLE }, 0)
        .set(req1, { xPercent: -130 }, 0)
        .set([req2, req3], { xPercent: 130 }, 0)
        .set(q("[data-req-state]"), { autoAlpha: 0 }, 0)
        .set(lock, { autoAlpha: 0 }, 0)
        .set([block1, block2], { autoAlpha: 0, scaleY: 0 }, 0)
        .set(logs, { autoAlpha: 0, x: -6 }, 0)
        .set(inB("[data-time='wanted']"), { display: "inline" }, 0)
        .set(inB("[data-time='fallback']"), { display: "none" }, 0);

      const pick = (phone: (s: string) => Element[], time: string, at: number) => {
        const slot = slotIn(phone, time);
        tl.to(slot, { ...SLOT_PICKED, duration: 0.2 }, at).to(
          slot,
          { scale: 1.12, duration: 0.12, yoyo: true, repeat: 1, ease: "power1.inOut" },
          at,
        );
      };
      const press = (phone: (s: string) => Element[], at: number) => {
        tl.to(confirm(phone), { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, at);
      };
      const arrive = (req: Element, at: number) => {
        tl.to(req, { autoAlpha: 1, xPercent: 0, duration: 0.5, ease: "power3.out" }, at);
      };
      const book = (req: Element, block: Element, line: Element, at: number) => {
        tl.to(state(req, "wait"), { autoAlpha: 0, duration: 0.15 }, at)
          .to(state(req, "ok"), { autoAlpha: 1, duration: 0.2 }, at)
          .to(req, { ...REQ_OK, duration: 0.2 }, at)
          .to(block, { autoAlpha: 1, scaleY: 1, duration: 0.45, ease: "power3.out" }, at)
          .to(line, { autoAlpha: 1, x: 0, duration: 0.3 }, at)
          .to(lock, { autoAlpha: 0, duration: 0.25 }, at + 0.35)
          .to(req, { autoAlpha: 0, duration: 0.3 }, at + 0.9);
      };
      const show = (target: Element | Element[], at: number) => {
        tl.to(target, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" }, at);
      };
      const hide = (target: Element | Element[], at: number) => {
        tl.to(target, { autoAlpha: 0, duration: 0.3 }, at);
      };

      // Both pick 10:00 and confirm almost together.
      pick(inA, booking.wanted, 0.5);
      pick(inB, booking.wanted, 0.8);
      press(inA, 1.5);
      press(inB, 1.65);
      arrive(req1, 1.6);
      arrive(req2, 1.75);

      // The first in locks Marina's schedule; the second waits on the lock.
      tl.to(lock, { autoAlpha: 1, duration: 0.3 }, 2.1).to(
        logs[0],
        { autoAlpha: 1, x: 0, duration: 0.3 },
        2.1,
      );
      tl.to(state(req2, "wait"), { autoAlpha: 1, duration: 0.2 }, 2.4).to(
        logs[1],
        { autoAlpha: 1, x: 0, duration: 0.3 },
        2.4,
      );

      // 10:00 is free: booked, and the lock is released.
      book(req1, block1, logs[2], 3);
      show(toast(inA, "ok"), 3.4);

      // Now the second gets the lock, finds 10:00 taken, and gets a 409.
      tl.to(state(req2, "wait"), { autoAlpha: 0, duration: 0.15 }, 3.6)
        .to(state(req2, "err"), { autoAlpha: 1, duration: 0.2 }, 3.6)
        .to(req2, { ...REQ_ERR, duration: 0.2 }, 3.6)
        .to(req2, { x: 3, duration: 0.06, yoyo: true, repeat: 5 }, 3.65)
        .to(logs[3], { autoAlpha: 1, x: 0, duration: 0.3 }, 3.6)
        .to(req2, { autoAlpha: 0, xPercent: 130, duration: 0.45, ease: "power2.in" }, 4.15);
      show(toast(inB, "err"), 4.1);
      hide(toast(inA, "ok"), 5.4);
      hide(toast(inB, "err"), 5.7);

      // The grid only offers what is really free: the 45 minutes are gone.
      tl.to(slotIn(inB, booking.wanted), { ...SLOT_IDLE, duration: 0.2 }, 5.8).to(
        booking.taken.flatMap((time) => slotIn(inB, time)),
        { opacity: 0.28, textDecorationLine: "line-through", duration: 0.3, stagger: 0.08 },
        5.9,
      );

      // A second try at 10:45, which goes through.
      pick(inB, booking.fallback, 6.6);
      tl.set(inB("[data-time='wanted']"), { display: "none" }, 6.7).set(
        inB("[data-time='fallback']"),
        { display: "inline" },
        6.7,
      );
      press(inB, 7.2);
      arrive(req3, 7.3);
      tl.to(lock, { autoAlpha: 1, duration: 0.3 }, 7.6);
      book(req3, block2, logs[4], 8);
      show(toast(inB, "ok"), 8.35);

      // The confirmation e-mails, with the product's real subject line.
      tl.to(mails, { autoAlpha: 1, yPercent: 0, duration: 0.45, ease: "power3.out", stagger: 0.15 }, 8.9).to(
        logs[5],
        { autoAlpha: 1, x: 0, duration: 0.3 },
        8.9,
      );
      hide(toast(inB, "ok"), 10.4);
      const still = 9.8;

      // Fade back to the start, so the loop has no cut.
      const end = 12.4;
      tl.to([...mails, ...logs, block1, block2], { autoAlpha: 0, duration: 0.45 }, end)
        .to(slots, { ...SLOT_IDLE, opacity: 1, duration: 0.45 }, end)
        .set(slots, { textDecorationLine: "none" }, end + 0.45);
      tl.set({}, {}, end + 0.7);

      if (prefersReducedMotion()) {
        tl.seek(still);
        return;
      }

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
    { scope: root },
  );

  return (
    <div
      ref={root}
      role="img"
      aria-label={booking.ariaLabel}
      className="@container relative h-full w-full overflow-hidden bg-[#05070a] select-none"
    >
      <div className="absolute inset-0 [--u:1cqw] @max-3xl:[--u:1.28cqw] @max-md:[--u:2cqw]">
        {/* Stage: the product's teal light and its grid. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(52,195,221,0.2),transparent_70%),radial-gradient(45%_55%_at_50%_110%,rgba(52,195,221,0.1),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]"
          style={{ backgroundSize: `${u(4)} ${u(4)}` }}
        />

        <Phone side="a" booking={booking} />

        {/* The studio's agenda, where both requests arrive. */}
        <div
          className="absolute top-[11%] right-[31%] left-[31%] flex h-[53%] flex-col overflow-hidden border border-white/10 bg-[#0b1014]/90 @max-md:right-auto @max-md:left-[4%] @max-md:h-[82%] @max-md:w-[56%]"
          style={{ borderRadius: u(1.2) }}
        >
          <div
            className="flex shrink-0 items-center border-b border-white/10"
            style={{ gap: u(0.6), padding: `${u(0.9)} ${u(1.2)}` }}
          >
            <Image src={booking.mark} alt="" width={16} height={16} draggable={false} style={{ width: u(1.5), height: u(1.5) }} />
            <span className="truncate font-medium text-white" style={{ fontSize: fs(1) }}>
              {agenda.title}
            </span>
            <span className="ml-auto shrink-0 text-white/45" style={{ fontSize: fs(0.8, 5) }}>
              {agenda.day}
            </span>
          </div>

          <div className="relative shrink-0 border-b border-white/5" style={{ height: u(3.4) }}>
            <Request side="left" label={`${clients[0]} · ${booking.wanted}`} />
            <Request side="right" label={`${clients[1]} · ${booking.wanted}`} />
            <Request side="right" label={`${clients[1]} · ${booking.fallback}`} />
          </div>

          <div className="relative flex-1" style={{ padding: `${u(0.6)} ${u(1.2)} ${u(0.9)}` }}>
            {/* While one request holds the lock, the whole schedule is closed to the others. */}
            <div
              data-lock
              className="absolute inset-0 z-10 flex items-center justify-center bg-[#05070a]/45 opacity-0"
            >
              <span
                className="flex items-center font-mono whitespace-nowrap"
                style={{
                  gap: u(0.35),
                  borderRadius: u(0.6),
                  padding: `${u(0.35)} ${u(0.7)}`,
                  fontSize: fs(0.75, 5),
                  color: TEAL,
                  backgroundColor: "rgba(5,7,10,0.9)",
                  border: `1px solid ${TEAL}`,
                }}
              >
                <Icon>{LOCK}</Icon>
                {booking.lock}
              </span>
            </div>
            <div className="relative h-full">
              {agenda.rows.map((time, i) => (
                <div
                  key={time}
                  className="absolute inset-x-0 border-t border-white/[0.06]"
                  style={{ top: `${(i / total) * 100}%`, height: `${100 / total}%` }}
                >
                  <span className="block font-mono text-white/40" style={{ marginTop: u(0.2), fontSize: fs(0.7, 5) }}>
                    {time}
                  </span>
                </div>
              ))}
              <Block row={0} rows={1} total={total} label={agenda.busy} muted />
              <Block
                row={agenda.rows.indexOf(booking.wanted)}
                rows={SERVICE_ROWS}
                total={total}
                label={`${clients[0]} · ${agenda.service}`}
              />
              <Block
                row={agenda.rows.indexOf(booking.fallback)}
                rows={SERVICE_ROWS}
                total={total}
                label={`${clients[1]} · ${agenda.service}`}
              />
            </div>
          </div>
        </div>

        {/* What the API did, line by line. */}
        <div
          className="absolute top-[67%] right-[31%] bottom-[7%] left-[31%] flex flex-col overflow-hidden border border-white/10 bg-[#0b1014]/80 font-mono @max-md:hidden"
          style={{ borderRadius: u(1.2), padding: `${u(0.9)} ${u(1.2)}` }}
        >
          <p className="tracking-[0.16em] text-white/45 uppercase" style={{ fontSize: fs(0.65, 5) }}>
            {booking.logTitle}
          </p>
          <ol className="flex flex-col" style={{ marginTop: u(0.5), gap: u(0.25) }}>
            {booking.log.map((line, i) => (
              <li key={line} data-log className="flex items-center opacity-0" style={{ gap: u(0.5), fontSize: fs(0.75, 5) }}>
                <span style={{ color: LOG_ICONS[i]?.color }}>
                  <Icon>{LOG_ICONS[i]?.glyph}</Icon>
                </span>
                <span className="truncate text-white/75">{line}</span>
              </li>
            ))}
          </ol>
        </div>

        <Phone side="b" booking={booking} />
      </div>
    </div>
  );
}
