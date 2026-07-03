import type { Variants } from "motion/react";

// Easing tuples shared with the CSS tokens (see globals.css).
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_INOUT: [number, number, number, number] = [0.65, 0, 0.35, 1];
export const EASE_SOFT: [number, number, number, number] = [0.33, 0, 0.1, 1];

/** Restrained section-header reveal (the only place we use a fade+rise). */
export const headerReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Parent that staggers its children; keep the stagger small and the count low. */
export const staggerParent = (stagger = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** A single line/word sliding up from inside an overflow-hidden mask. */
export const maskRise: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: EASE_OUT } },
};

/** Generic viewport options for once-only scroll reveals. */
export const inView = { once: true, amount: 0.4, margin: "0px 0px -10% 0px" } as const;
