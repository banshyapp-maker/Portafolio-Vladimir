import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register client-side only. This module must only be imported from
// "use client" components (or effects), never at server render time.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** GSAP easing names matched to the CSS easing tokens. */
export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "power1.inOut",
} as const;

export { gsap, ScrollTrigger };
