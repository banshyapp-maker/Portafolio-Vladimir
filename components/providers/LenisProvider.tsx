"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface LenisAPI {
  stop: () => void;
  start: () => void;
  scrollTo: (target: number | string | HTMLElement, opts?: Record<string, unknown>) => void;
}

const LenisContext = createContext<LenisAPI | null>(null);

/** Access smooth-scroll controls (pause while a modal is open, scroll to top, etc.). */
export function useLenis() {
  return useContext(LenisContext);
}

/**
 * Owns the single Lenis instance and bridges it to GSAP's ticker so Lenis
 * and ScrollTrigger share one RAF loop. Falls back to native scrolling when
 * the user prefers reduced motion.
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (reduced) return; // native scroll, no smoothing

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000); // gsap secs -> lenis ms
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reduced]);

  // On route change: jump to top and refresh triggers after the new page paints.
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const id = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  const api = useMemo<LenisAPI>(
    () => ({
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
      scrollTo: (target, opts) => {
        if (lenisRef.current) lenisRef.current.scrollTo(target, opts);
        else if (typeof target === "number")
          window.scrollTo({ top: target, behavior: "smooth" });
      },
    }),
    [],
  );

  return <LenisContext.Provider value={api}>{children}</LenisContext.Provider>;
}
