"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";

// template.tsx re-mounts on every navigation, so this runs the enter
// transition for each route without any AnimatePresence/router hacks.
let firstMount = true;

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (firstMount) {
      firstMount = false; // don't steal focus on the very first load
      return;
    }
    // On client-side navigation, move focus to the main landmark for a11y.
    document.getElementById("main")?.focus({ preventScroll: true });
  }, []);

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
