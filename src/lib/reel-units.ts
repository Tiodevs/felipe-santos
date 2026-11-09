/**
 * Sizes for the coded project covers. They follow --u, 1% of the cover's
 * width, which each cover's wrapper sets a little larger on small covers so
 * the text stays readable inside a card.
 */
export const u = (n: number) => `calc(var(--u) * ${n})`;

/** A font size on --u that never drops below a readable minimum. */
export const fs = (n: number, min = 6) => `max(${min}px, calc(var(--u) * ${n}))`;
