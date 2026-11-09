"use client";

import { useEffect, useRef, type ReactNode } from "react";
import type { ServiceStep, ServiceStepId } from "@/i18n/get-dictionary";
import { EASE, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/*
 * Three isometric plates, one per stage of the service. Art is laid out on a
 * plan grid (u, v) where the plate is |u| + |v| <= 2: u runs left to right on
 * screen and v top to bottom, squashed to the isometric 30 degree angle.
 */
const CX = 180;
const S = 100;
const UX = 0.866 * S;
const VY = 0.5 * S;
const PLATE_Y = [110, 260, 410];
const TAU = Math.PI * 2;

type UV = readonly [number, number];

const r2 = (n: number) => Math.round(n * 100) / 100;
const project = (cy: number, [u, v]: UV) => [r2(CX + UX * u), r2(cy + VY * v)] as const;
const path = (cy: number, points: UV[], close = false) =>
  `M${points.map((p) => project(cy, p).join(" ")).join("L")}${close ? "Z" : ""}`;
const diamond = (cy: number, [u, v]: UV, r: number) =>
  path(cy, [[u, v - r], [u + r, v], [u, v + r], [u - r, v]], true);
const ring = (cy: number, rho: number) => ({ cx: CX, cy, rx: r2(UX * rho), ry: r2(VY * rho) });
const polar = (rho: number, a: number): UV => [rho * Math.cos(a), rho * Math.sin(a)];

/* Diagnosis: a radar sweeping over a floor grid, lighting up what it finds. */
const RADAR = 1.14;
const BLIPS: UV[] = [[0.62, -0.48], [-0.78, 0.12], [0.18, 0.86]];
const BLIP_ANGLES = BLIPS.map(([u, v]) => Math.atan2(v, u));

const wedge = (cy: number, a: number) => {
  const arc = Array.from({ length: 11 }, (_, i) => polar(RADAR, a - 0.8 + (0.8 * i) / 10));
  return path(cy, [[0, 0], ...arc], true);
};

function DiagnoseArt({ cy }: { cy: number }) {
  const grid = [-0.5, 0, 0.5].flatMap((c) => [
    path(cy, [[c + 1, c - 1], [c - 1, c + 1]]),
    path(cy, [[-1 - c, -1 + c], [1 - c, 1 + c]]),
  ]);
  const start = -Math.PI / 4;

  return (
    <>
      {grid.map((d) => (
        <path key={d} className="svc-grid" d={d} />
      ))}
      {[0.38, 0.76, RADAR].map((rho) => (
        <ellipse key={rho} data-draw className="svc-line" {...ring(cy, rho)} />
      ))}
      <path data-sweep className="svc-sweep" d={wedge(cy, start)} />
      <path data-sweep-edge className="svc-line svc-strong" d={path(cy, [[0, 0], polar(RADAR, start)])} />
      {BLIPS.map((b) => {
        const [x, y] = project(cy, b);
        return <circle key={`${x}-${y}`} data-blip className="svc-dot" cx={x} cy={y} r={3.2} />;
      })}
      <circle className="svc-dot" cx={CX} cy={cy} r={3} />
    </>
  );
}

/* Implementation: sources feeding a core that serves outputs and calls a tool. */
const NODES = {
  s1: [-1.2, -0.42],
  s2: [-1.2, 0.42],
  hub: [0, 0],
  o1: [1.2, -0.42],
  o2: [1.2, 0.42],
  tool: [0, 1.12],
} as const satisfies Record<string, UV>;
const ROUTES: UV[][] = [
  [NODES.s1, NODES.hub, NODES.o1],
  [NODES.s2, NODES.hub, NODES.o2],
  [NODES.hub, NODES.tool, NODES.hub],
];

function BuildArt({ cy }: { cy: number }) {
  const edges = [
    [NODES.s1, NODES.hub],
    [NODES.s2, NODES.hub],
    [NODES.hub, NODES.o1],
    [NODES.hub, NODES.o2],
  ];

  return (
    <>
      {edges.map(([a, b]) => (
        <path key={`${a}-${b}`} data-draw className="svc-line" d={path(cy, [a, b])} />
      ))}
      <path className="svc-line svc-dash" d={path(cy, [NODES.hub, NODES.tool])} />
      {[NODES.s1, NODES.s2, NODES.o1, NODES.o2, NODES.tool].map((n) => (
        <path key={`${n}`} data-draw className="svc-node" d={diamond(cy, n, 0.2)} />
      ))}
      <path data-draw className="svc-node" d={diamond(cy, NODES.hub, 0.36)} />
      <path className="svc-core" d={diamond(cy, NODES.hub, 0.18)} />
      {ROUTES.map((route) => {
        const [x, y] = project(cy, route[0]);
        return <circle key={`${route}`} data-packet className="svc-packet" cx={x} cy={y} r={3} />;
      })}
    </>
  );
}

/* Maintenance: a monitoring loop around live metrics. */
const ORBIT = 1.15;
const BAR_U = [-0.45, -0.15, 0.15, 0.45];
const BAR_V = 0.38;
const BAR_REST = [22, 36, 28, 46];
const BAR_PEAK = [40, 24, 48, 30];

const arrowHead = (cy: number, a: number) => {
  const [px, py] = project(cy, polar(ORBIT, a));
  const tx = -UX * Math.sin(a);
  const ty = VY * Math.cos(a);
  const len = Math.hypot(tx, ty);
  const [bx, by] = [-tx / len, -ty / len];
  const tip = (sign: number) => {
    const c = Math.cos(0.5);
    const s = Math.sin(0.5) * sign;
    return `${r2(px + 8 * (bx * c - by * s))} ${r2(py + 8 * (bx * s + by * c))}`;
  };
  return `M${tip(1)}L${px} ${py}L${tip(-1)}`;
};

function MaintainArt({ cy }: { cy: number }) {
  const base = r2(cy + VY * BAR_V);
  const [dotX, dotY] = project(cy, polar(ORBIT, -Math.PI / 2));

  return (
    <>
      <ellipse className="svc-line svc-dash" {...ring(cy, ORBIT)} />
      <path data-draw className="svc-line" d={arrowHead(cy, -0.35)} />
      <path data-draw className="svc-line" d={arrowHead(cy, Math.PI - 0.35)} />
      <path data-draw className="svc-line" d={path(cy, [[-0.72, BAR_V], [0.72, BAR_V]])} />
      {BAR_U.map((u, i) => {
        const x = r2(CX + UX * u);
        return (
          <line key={u} data-bar className="svc-bar" x1={x} y1={base} x2={x} y2={base - BAR_REST[i]} />
        );
      })}
      <circle data-orbit-dot className="svc-dot" cx={dotX} cy={dotY} r={3.5} />
    </>
  );
}

const ART: Record<ServiceStepId, (props: { cy: number }) => ReactNode> = {
  diagnose: DiagnoseArt,
  build: BuildArt,
  maintain: MaintainArt,
};

/** The loop each plate runs while it is the active one. */
function buildLoop(id: ServiceStepId, layer: SVGGElement, cy: number) {
  if (id === "diagnose") {
    const sweep = layer.querySelector("[data-sweep]");
    const edge = layer.querySelector("[data-sweep-edge]");
    const blips = Array.from(layer.querySelectorAll<SVGCircleElement>("[data-blip]"));
    const turn = { a: -Math.PI / 4 };

    return gsap.to(turn, {
      a: -Math.PI / 4 + TAU,
      duration: 3.6,
      ease: "none",
      repeat: -1,
      paused: true,
      onUpdate: () => {
        sweep?.setAttribute("d", wedge(cy, turn.a));
        edge?.setAttribute("d", path(cy, [[0, 0], polar(RADAR, turn.a)]));
        blips.forEach((blip, i) => {
          const behind = (((turn.a - BLIP_ANGLES[i]) % TAU) + TAU) % TAU;
          const glow = behind < 1.8 ? 1 - behind / 1.8 : 0;
          blip.setAttribute("r", String(r2(3.2 + 2.4 * glow)));
        });
      },
    });
  }

  if (id === "build") {
    const packets = Array.from(layer.querySelectorAll<SVGCircleElement>("[data-packet]"));
    const tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.2 });

    ROUTES.forEach((route, i) => {
      const dot = packets[i];
      const start = i * 0.45;
      const [x0, y0] = project(cy, route[0]);
      tl.set(dot, { attr: { cx: x0, cy: y0 }, opacity: 1 }, start);
      route.slice(1).forEach((p, j) => {
        const [x, y] = project(cy, p);
        tl.to(dot, { attr: { cx: x, cy: y }, duration: 0.8, ease: "power1.inOut" }, start + j * 0.8);
      });
      tl.to(dot, { opacity: 0, duration: 0.2 }, start + (route.length - 1) * 0.8);
    });

    return tl;
  }

  const dot = layer.querySelector<SVGCircleElement>("[data-orbit-dot]");
  const bars = Array.from(layer.querySelectorAll<SVGLineElement>("[data-bar]"));
  const orbit = { a: -Math.PI / 2 };
  const tl = gsap.timeline({ paused: true });

  tl.to(
    orbit,
    {
      a: -Math.PI / 2 + TAU,
      duration: 5,
      ease: "none",
      repeat: -1,
      onUpdate: () => {
        const [x, y] = project(cy, polar(ORBIT, orbit.a));
        dot?.setAttribute("cx", String(x));
        dot?.setAttribute("cy", String(y));
      },
    },
    0,
  );
  bars.forEach((bar, i) => {
    const base = Number(bar.getAttribute("y1"));
    tl.to(
      bar,
      {
        attr: { y2: base - BAR_PEAK[i] },
        duration: 1.1 + i * 0.25,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
      0,
    );
  });

  return tl;
}

type ServiceStackProps = {
  steps: ServiceStep[];
  active: number;
  onSelect: (index: number) => void;
};

/** The stack of plates beside the steps; the active one lights up and moves. */
export function ServiceStack({ steps, active, onSelect }: ServiceStackProps) {
  const root = useRef<SVGSVGElement>(null);
  const activeRef = useRef(active);
  const activate = useRef<(index: number) => void>(() => {});

  useGSAP(
    (_context, contextSafe) => {
      const svg = root.current;
      if (!svg || !contextSafe) return;

      const reduce = prefersReducedMotion();
      const layerAt = (i: number) => svg.querySelector<SVGGElement>(`[data-layer="${i}"]`);
      const loops = steps.map((step, i) => {
        const layer = layerAt(i);
        return reduce || !layer ? null : buildLoop(step.id, layer, PLATE_Y[i]);
      });

      let inView = false;
      let current = -1;

      // Only the active plate animates, and only while the stack is on screen.
      const sync = () =>
        loops.forEach((loop, i) => {
          if (!loop) return;
          if (inView && i === current) loop.play();
          else loop.pause();
        });

      activate.current = contextSafe((i: number) => {
        if (i === current) return;
        current = i;
        const layer = layerAt(i);
        if (!reduce && layer) {
          gsap.fromTo(
            layer.querySelectorAll("[data-draw]"),
            { drawSVG: "0%" },
            { drawSVG: "100%", duration: 0.9, stagger: 0.05, ease: "power2.inOut", overwrite: true },
          );
        }
        sync();
      });

      ScrollTrigger.create({
        trigger: svg,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          inView = self.isActive;
          sync();
        },
      });

      if (!reduce) {
        // The plates stack up from the bottom one as the section comes in.
        gsap.from(svg.querySelectorAll("[data-layer-in]"), {
          y: -36,
          autoAlpha: 0,
          duration: 1,
          stagger: 0.14,
          ease: EASE.expo,
          scrollTrigger: { trigger: svg, start: "top 80%" },
        });
      }

      activate.current(activeRef.current);
    },
    { scope: root },
  );

  useEffect(() => {
    activeRef.current = active;
    activate.current(active);
  }, [active]);

  // Bottom plate first, so the upper ones overlap it.
  const order = steps.map((_, i) => i).reverse();

  return (
    <svg
      ref={root}
      viewBox="0 0 360 520"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="h-full w-auto overflow-visible"
    >
      {order.map((i) => {
        const Art = ART[steps[i].id];
        const cy = PLATE_Y[i];
        return (
          <g key={steps[i].id} data-layer-in>
            <g
              data-layer={i}
              data-active={i === active}
              className="svc-layer"
              onClick={() => onSelect(i)}
            >
              <path className="svc-plate" d={path(cy, [[0, -2], [2, 0], [0, 2], [-2, 0]], true)} />
              <Art cy={cy} />
            </g>
          </g>
        );
      })}
    </svg>
  );
}
