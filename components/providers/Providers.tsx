"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { LenisProvider } from "./LenisProvider";
import { EASE_OUT } from "@/lib/motion";

/**
 * Client provider tree.
 * <MotionConfig reducedMotion="user"> makes every Framer animation honor the
 * OS setting automatically; LenisProvider adds smooth scroll + the GSAP bridge.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.6, ease: EASE_OUT }}>
      <LenisProvider>{children}</LenisProvider>
    </MotionConfig>
  );
}
