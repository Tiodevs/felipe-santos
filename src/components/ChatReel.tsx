"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { fs, u } from "@/lib/reel-units";
import type { ChatReelCopy } from "@/i18n/get-dictionary";

/** Answered and refused, in the colors the product's own dashboard uses. */
const GREEN = "#4ade80";
const RED = "#f87171";
/** Fill of the trace panel: an idle dot hides the line that runs behind it. */
const PANEL = "#111113";

const NO_GLOW = "0 0 0 0px rgba(255,255,255,0)";
const DOT = {
  idle: { backgroundColor: PANEL, borderColor: "rgba(255,255,255,0.3)", boxShadow: NO_GLOW },
  running: {
    backgroundColor: "#fafafa",
    borderColor: "#fafafa",
    boxShadow: "0 0 0 4px rgba(255,255,255,0.14)",
  },
  ok: { backgroundColor: GREEN, borderColor: GREEN, boxShadow: NO_GLOW },
  stop: { backgroundColor: RED, borderColor: RED, boxShadow: NO_GLOW },
  skip: { backgroundColor: PANEL, borderColor: "rgba(255,255,255,0.1)", boxShadow: NO_GLOW },
};

/** Typed text is uncovered from the left, one step per character. */
const CLIP_HIDDEN = "inset(0px 100% 0px 0px)";
const CLIP_SHOWN = "inset(0px 0% 0px 0px)";
/** Seconds per typed character. */
const TYPE_SPEED = 0.045;

function SourceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[1.1em] shrink-0">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-[1.05em] shrink-0">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

/** The question typed into the box: uncovered character by character, with a caret. */
function Typed({ id, text }: { id: "a" | "b"; text: string }) {
  return (
    <span data-typed={id} className="absolute inset-y-0 flex items-center" style={{ left: u(1) }}>
      <span className="relative text-white">
        <span data-type-text className="block" style={{ clipPath: CLIP_HIDDEN }}>
          {text}
        </span>
        <span data-caret className="absolute top-[8%] bottom-[8%] left-0 w-px bg-white opacity-0" />
      </span>
    </span>
  );
}

function Outcome({ color, code, label }: { color: string; code: string; label: string }) {
  return (
    <p className="flex flex-wrap items-center" style={{ gap: u(0.6) }}>
      <span
        className="inline-flex items-center rounded-full border font-mono"
        style={{
          gap: u(0.45),
          padding: `${u(0.3)} ${u(0.8)}`,
          fontSize: fs(0.85, 5),
          color,
          borderColor: `${color}66`,
          backgroundColor: `${color}14`,
        }}
      >
        <span className="rounded-full" style={{ width: u(0.5), height: u(0.5), backgroundColor: color }} />
        {code}
      </span>
      <span className="text-white/70" style={{ fontSize: fs(0.95) }}>
        {label}
      </span>
    </p>
  );
}

/**
 * A motion graphic of an AI assistant at work, coded instead of recorded. On
 * the left, a chat: a question is typed, the answer streams in word by word
 * with its source numbers. On the right, the question's trace: each step of
 * the pipeline lights up as it runs. Then a medical question is refused at the
 * gate, everything after it is skipped, and the question is swapped for the
 * privacy notice. Plays only while on screen; small covers keep just the chat.
 */
export function ChatReel({ chat }: { chat: ChatReelCopy }) {
  const root = useRef<HTMLDivElement>(null);
  const a = chat.answered;
  const b = chat.refused;

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const q = gsap.utils.selector(el);
      const sceneA = q("[data-scene='a']");
      const sceneB = q("[data-scene='b']");
      const [userA] = q("[data-scene='a'] [data-user]");
      const [userB] = q("[data-scene='b'] [data-user]");
      const stream = q("[data-stream]");
      const cites = q("[data-cite]");
      const sources = q("[data-sources]");
      const original = q("[data-original]");
      const stored = q("[data-stored]");
      const refusal = q("[data-refusal]");
      const placeholder = q("[data-placeholder]");
      const send = q("[data-send]");
      const [typedA] = q("[data-typed='a']");
      const [typedB] = q("[data-typed='b']");
      const dots = q("[data-dot]");
      const labels = q("[data-label]");
      const resultsA = q("[data-result='a']");
      const resultsB = q("[data-result='b']");
      const outcomes = q("[data-outcome]");
      const [outcomeA, outcomeB] = outcomes;
      const notes = q("[data-note]");
      if (!userA || !userB || !typedA || !typedB) return;

      const tl = gsap.timeline({ repeat: -1, paused: true });

      // Every loop starts on an empty chat and an idle trace.
      tl.set(sceneA, { autoAlpha: 1, y: 0 }, 0)
        .set(sceneB, { autoAlpha: 0, y: 0 }, 0)
        .set([userA, userB], { autoAlpha: 0, y: 10 }, 0)
        .set(stream, { autoAlpha: 0 }, 0)
        .set(cites, { scale: 0.4 }, 0)
        .set(sources, { autoAlpha: 0, y: 6 }, 0)
        .set(original, { display: "block", autoAlpha: 1, filter: "blur(0px)" }, 0)
        .set(stored, { display: "none", autoAlpha: 0 }, 0)
        .set(refusal, { autoAlpha: 0, y: 10 }, 0)
        .set(placeholder, { autoAlpha: 1 }, 0)
        .set(q("[data-type-text]"), { clipPath: CLIP_HIDDEN }, 0)
        .set(q("[data-caret]"), { autoAlpha: 0, left: "0%" }, 0)
        .set(dots, DOT.idle, 0)
        .set(labels, { opacity: 0.45, textDecorationLine: "none" }, 0)
        .set([...resultsA, ...resultsB], { autoAlpha: 0, x: -4 }, 0)
        .set(outcomes, { autoAlpha: 0, y: 6 }, 0)
        .set(notes, { autoAlpha: 0, x: -4 }, 0);

      /** Types the question into the box. Returns when it is done. */
      const type = (field: Element, at: number) => {
        const text = field.querySelector("[data-type-text]");
        const caret = field.querySelector("[data-caret]");
        const chars = text?.textContent?.length ?? 0;
        const duration = chars * TYPE_SPEED;
        const ease = `steps(${chars})`;
        tl.set(placeholder, { autoAlpha: 0 }, at)
          .set(caret, { autoAlpha: 1 }, at)
          .to(text, { clipPath: CLIP_SHOWN, duration, ease }, at)
          .to(caret, { left: "100%", duration, ease }, at);
        return at + duration;
      };

      /** Presses Enviar: the box empties and the question becomes a bubble. */
      const submit = (field: Element, bubble: Element, at: number) => {
        tl.to(send, { backgroundColor: "rgba(250,250,250,0.92)", color: "#09090b", duration: 0.12 }, at)
          .to(send, { backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", duration: 0.35 }, at + 0.2)
          .set(field.querySelector("[data-type-text]"), { clipPath: CLIP_HIDDEN }, at + 0.12)
          .set(field.querySelector("[data-caret]"), { autoAlpha: 0, left: "0%" }, at + 0.12)
          .set(placeholder, { autoAlpha: 1 }, at + 0.12)
          .to(bubble, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }, at + 0.2);
      };

      /** Runs one step of the trace and lands it green (ok) or red (stop). */
      const run = (i: number, at: number, length: number, end: "ok" | "stop") => {
        tl.to(dots[i], { ...DOT.running, duration: 0.15 }, at)
          .to(labels[i], { opacity: 1, duration: 0.2 }, at)
          .to(dots[i], { ...DOT[end], duration: 0.2 }, at + length)
          .to((end === "ok" ? resultsA : resultsB)[i], { autoAlpha: 1, x: 0, duration: 0.3 }, at + length);
        return at + length;
      };

      const resetTrace = (at: number) => {
        tl.to(dots, { ...DOT.idle, duration: 0.35 }, at)
          .to(labels, { opacity: 0.45, duration: 0.35 }, at)
          .set(labels, { textDecorationLine: "none" }, at + 0.35)
          .to([...resultsA, ...resultsB, ...outcomes, ...notes], { autoAlpha: 0, duration: 0.3 }, at);
      };

      // Scene A: a public question, answered with its source.
      let t = type(typedA, 0.35);
      submit(typedA, userA, t + 0.2);
      t = run(0, t + 0.6, 0.45, "ok");
      t = run(1, t + 0.05, 0.3, "ok");
      t = run(2, t + 0.05, 0.5, "ok");
      t = run(3, t + 0.05, 0.3, "ok");

      // Generation runs while the answer streams in, word by word.
      const generate = t + 0.05;
      tl.to(dots[4], { ...DOT.running, duration: 0.15 }, generate).to(
        labels[4],
        { opacity: 1, duration: 0.2 },
        generate,
      );
      let s = generate + 0.1;
      stream.forEach((piece) => {
        if (piece.hasAttribute("data-cite")) {
          tl.to(piece, { autoAlpha: 1, scale: 1, duration: 0.3, ease: "back.out(2.4)" }, s);
          s += 0.14;
        } else {
          tl.to(piece, { autoAlpha: 1, duration: 0.12 }, s);
          s += 0.055;
        }
      });
      tl.to(dots[4], { ...DOT.ok, duration: 0.2 }, s).to(
        resultsA[4],
        { autoAlpha: 1, x: 0, duration: 0.3 },
        s,
      );
      t = run(5, s + 0.05, 0.35, "ok");
      tl.to(sources, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }, t + 0.05).to(
        outcomeA,
        { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" },
        t + 0.2,
      );
      // The still frame for reduced motion: the answer, done, with its trace.
      const still = t + 1;
      const endA = t + 2.2;
      tl.to(sceneA, { autoAlpha: 0, y: -14, duration: 0.45, ease: "power2.in" }, endA);
      resetTrace(endA);

      // Scene B: a medical question, refused at the gate and never stored.
      const startB = endA + 0.5;
      tl.set(sceneB, { autoAlpha: 1 }, startB);
      t = type(typedB, startB + 0.1);
      submit(typedB, userB, t + 0.2);
      t = run(0, t + 0.6, 0.5, "stop");
      t = run(1, t + 0.05, 0.3, "stop");

      // Nothing after the gate runs.
      const after = t + 0.05;
      tl.to(dots.slice(2), { ...DOT.skip, duration: 0.25, stagger: 0.07 }, after)
        .to(labels.slice(2), { opacity: 0.3, duration: 0.25, stagger: 0.07 }, after)
        .set(labels.slice(2), { textDecorationLine: "line-through" }, after)
        .to(resultsB.slice(2), { autoAlpha: 1, x: 0, duration: 0.25, stagger: 0.07 }, after);

      // The question gives way to the privacy notice, and the fixed reply
      // lands whole: it is not generated, so it does not stream.
      tl.to(original, { filter: "blur(4px)", autoAlpha: 0, duration: 0.3 }, t + 0.1)
        .set(original, { display: "none" }, t + 0.4)
        .set(stored, { display: "block" }, t + 0.4)
        .to(stored, { autoAlpha: 1, duration: 0.35 }, t + 0.4)
        .to(refusal, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, t + 0.3)
        .to(outcomeB, { autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.out" }, t + 0.55)
        .to(notes, { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.15 }, t + 0.75);

      const endB = t + 2.9;
      tl.to(sceneB, { autoAlpha: 0, y: -14, duration: 0.45, ease: "power2.in" }, endB);
      resetTrace(endB);
      tl.set({}, {}, endB + 0.6);

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

  const bubble = {
    borderRadius: u(0.9),
    padding: `${u(0.7)} ${u(1.1)}`,
    fontSize: fs(1.2),
  };

  return (
    <div
      ref={root}
      role="img"
      aria-label={chat.ariaLabel}
      className="@container relative h-full w-full overflow-hidden bg-[#09090b] select-none"
    >
      <div className="absolute inset-0 [--u:1cqw] @max-3xl:[--u:1.28cqw] @max-md:[--u:2cqw]">
        {/* Stage: a soft light and a dot grid, in the product's neutral tones. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(55%_65%_at_80%_8%,rgba(255,255,255,0.08),transparent_70%),radial-gradient(40%_50%_at_0%_100%,rgba(74,222,128,0.07),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1.5px)]"
          style={{ backgroundSize: `${u(2.4)} ${u(2.4)}` }}
        />

        {/* Chat */}
        <div
          className="absolute top-[6%] bottom-[6%] left-[4%] flex w-[58%] flex-col overflow-hidden border border-white/10 bg-[#111113] shadow-[0_2.5cqw_6cqw_rgba(0,0,0,0.5)] @max-md:right-[4%] @max-md:w-auto"
          style={{ borderRadius: u(1.2) }}
        >
          <div
            className="flex shrink-0 items-center border-b border-white/10"
            style={{ gap: u(0.8), padding: `${u(1)} ${u(1.6)}` }}
          >
            <Image
              src={chat.mark}
              alt=""
              width={16}
              height={16}
              draggable={false}
              style={{ width: u(1.9), height: u(1.9) }}
            />
            <span className="font-medium text-white" style={{ fontSize: fs(1.15) }}>
              {chat.brand}
            </span>
            <span className="ml-auto text-white/45" style={{ fontSize: fs(1) }}>
              {chat.title}
            </span>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <p
              className="absolute inset-x-0 top-0 font-medium tracking-tight text-white/90 @max-md:hidden"
              style={{ padding: `${u(2)} ${u(1.8)} 0`, fontSize: fs(1.9) }}
            >
              {chat.greeting}
            </p>

            {/* Scene A: answered, with its source. */}
            <div
              data-scene="a"
              className="absolute inset-0 flex flex-col justify-end"
              style={{ gap: u(1.2), padding: u(1.8) }}
            >
              <p data-user className="max-w-[80%] self-end bg-white/[0.08] text-white opacity-0" style={bubble}>
                {a.question}
              </p>
              <p className="leading-[1.5] text-white/85" style={{ fontSize: fs(1.3) }}>
                {a.answer.map((sentence) => (
                  <span key={sentence.text}>
                    {sentence.text.split(" ").map((word, i) => (
                      <span key={i} data-stream className="opacity-0">
                        {word}{" "}
                      </span>
                    ))}
                    <span
                      data-stream
                      data-cite
                      className="inline-flex items-center justify-center rounded-[0.4em] bg-white/[0.12] align-[0.1em] font-mono text-white opacity-0"
                      style={{ minWidth: "1.5em", height: "1.4em", fontSize: "0.72em" }}
                    >
                      {sentence.cite}
                    </span>{" "}
                  </span>
                ))}
              </p>
              <span
                data-sources
                className="inline-flex items-center self-start border border-white/10 bg-white/[0.04] text-white/70 opacity-0"
                style={{ gap: u(0.5), borderRadius: u(0.6), padding: `${u(0.45)} ${u(0.8)}`, fontSize: fs(1) }}
              >
                <SourceIcon />
                {a.source}
              </span>
            </div>

            {/* Scene B: refused at the gate. */}
            <div
              data-scene="b"
              className="absolute inset-0 flex flex-col justify-end opacity-0"
              style={{ gap: u(1.2), padding: u(1.8) }}
            >
              <p data-user className="max-w-[80%] self-end bg-white/[0.08] text-white opacity-0" style={bubble}>
                <span data-original className="block">
                  {b.question}
                </span>
                <span data-stored className="hidden text-white/55 italic">
                  <span className="mr-[0.35em] inline-block align-[-0.12em]">
                    <LockIcon />
                  </span>
                  {b.storedAs}
                </span>
              </p>
              <div
                data-refusal
                className="border border-[#f87171]/40 bg-[#f87171]/[0.07] opacity-0"
                style={{ borderRadius: u(0.8), padding: u(1.2) }}
              >
                <p className="flex items-center font-medium text-[#fecaca]" style={{ gap: u(0.6), fontSize: fs(1.1) }}>
                  <span className="shrink-0 rounded-full bg-[#f87171]" style={{ width: u(0.6), height: u(0.6) }} />
                  {b.title}
                </p>
                <p className="leading-[1.5] text-white/80" style={{ marginTop: u(0.6), fontSize: fs(1.2) }}>
                  {b.body} <span className="@max-md:hidden">{b.extra}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="shrink-0 border-t border-white/10" style={{ padding: `${u(1.2)} ${u(1.6)} ${u(1.3)}` }}>
            <div className="flex items-center" style={{ gap: u(0.8) }}>
              <div
                className="relative flex-1 overflow-hidden border border-white/[0.12] bg-white/[0.03] whitespace-nowrap"
                style={{ borderRadius: u(0.7), padding: `${u(0.75)} ${u(1)}`, fontSize: fs(1.05) }}
              >
                <span data-placeholder className="block truncate text-white/35">
                  {chat.placeholder}
                </span>
                <Typed id="a" text={a.question} />
                <Typed id="b" text={b.question} />
              </div>
              <span
                data-send
                className="shrink-0 bg-white/[0.12] text-white/70"
                style={{ borderRadius: u(0.6), padding: `${u(0.75)} ${u(1.1)}`, fontSize: fs(1.05) }}
              >
                {chat.send}
              </span>
            </div>
            <p className="truncate text-white/35 @max-md:hidden" style={{ marginTop: u(0.7), fontSize: fs(0.85) }}>
              {chat.disclaimer}
            </p>
          </div>
        </div>

        {/* Trace */}
        <div
          className="absolute top-[6%] right-[4%] bottom-[6%] flex w-[30%] flex-col border border-white/10 bg-[#111113]/80 @max-md:hidden"
          style={{ borderRadius: u(1.2), padding: u(1.6) }}
        >
          <p
            className="flex items-center font-mono tracking-[0.16em] text-white/50 uppercase"
            style={{ gap: u(0.6), fontSize: fs(0.85, 5) }}
          >
            <span className="animate-pulse rounded-full bg-white/70" style={{ width: u(0.55), height: u(0.55) }} />
            {chat.traceTitle}
          </p>

          <ol className="relative flex flex-col" style={{ marginTop: u(2), gap: u(1.5) }}>
            <span
              aria-hidden="true"
              className="absolute w-px bg-white/10"
              style={{ left: u(0.45), top: u(0.75), bottom: u(2.2) }}
            />
            {chat.steps.map((step) => (
              <li key={step.label} className="relative flex" style={{ gap: u(0.9) }}>
                <span
                  data-dot
                  className="relative shrink-0 rounded-full border"
                  style={{ width: u(0.9), height: u(0.9), marginTop: u(0.3), ...DOT.idle }}
                />
                <span className="min-w-0">
                  <span data-label className="block leading-tight text-white opacity-45" style={{ fontSize: fs(1.05) }}>
                    {step.label}
                  </span>
                  <span className="grid font-mono" style={{ marginTop: u(0.35), fontSize: fs(0.85, 5) }}>
                    <span data-result="a" className="[grid-area:1/1] text-white/55 opacity-0">
                      {step.answered}
                    </span>
                    <span
                      data-result="b"
                      className={`[grid-area:1/1] opacity-0 ${step.refused ? "text-[#fca5a5]" : "text-white/30"}`}
                    >
                      {step.refused ?? chat.skipped}
                    </span>
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-auto grid">
            <div data-outcome className="[grid-area:1/1] self-end opacity-0">
              <Outcome color={GREEN} code={a.outcome.code} label={a.outcome.label} />
            </div>
            <div data-outcome className="[grid-area:1/1] self-end opacity-0">
              <Outcome color={RED} code={b.outcome.code} label={b.outcome.label} />
              <ul className="flex flex-col" style={{ marginTop: u(0.8), gap: u(0.4) }}>
                {b.notes.map((note) => (
                  <li
                    key={note}
                    data-note
                    className="flex items-center text-white/60 opacity-0"
                    style={{ gap: u(0.5), fontSize: fs(0.9) }}
                  >
                    <LockIcon />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
