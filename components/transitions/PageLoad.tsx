"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_INOUT } from "@/lib/motion";
import { site } from "@/data/site";

// Module flag: the curtain only plays on the first full load, not on
// client-side navigations (this component persists in the layout).
let played = false;

/** A single bone-colored curtain that lifts away on first load. */
export function PageLoad() {
  const reduced = useReducedMotion();
  const [done, setDone] = useState(played);

  if (done) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[100] flex items-end bg-bg"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={reduced ? { duration: 0 } : { duration: 0.75, ease: EASE_INOUT, delay: 0.08 }}
      onAnimationComplete={() => {
        played = true;
        setDone(true);
      }}
    >
      <div className="edge w-full pb-[10vh]">
        <span className="eyebrow">{site.name}</span>
      </div>
    </motion.div>
  );
}
