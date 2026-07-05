"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { site } from "@/data/site";
import { useLenis } from "@/components/providers/LenisProvider";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_INOUT, EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";

const panelVariants: Variants = {
  hidden: { y: "-100%" },
  show: { y: "0%" },
  exit: { y: "-100%" },
};
const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
  exit: {},
};
const itemVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.5, ease: EASE_OUT } },
  exit: { y: "110%" },
};

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const reduced = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll lock, focus trap, Esc, focus restore.
  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 60);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
      trigger?.focus();
    };
  }, [open, lenis]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-5 top-[14px] z-[100] flex h-10 w-10 items-center justify-center"
      >
        <span
          className={cn(
            "absolute h-px w-6 transition-all duration-300",
            open ? "rotate-45 bg-ink" : "-translate-y-[3px] bg-ink",
          )}
        />
        <span
          className={cn(
            "absolute h-px w-6 transition-all duration-300",
            open ? "-rotate-45 bg-ink" : "translate-y-[3px] bg-ink",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            className="fixed inset-0 z-[90] flex flex-col bg-bg-deep text-ink"
            variants={reduced ? undefined : panelVariants}
            initial={reduced ? { opacity: 0 } : "hidden"}
            animate={reduced ? { opacity: 1 } : "show"}
            exit={reduced ? { opacity: 0 } : "exit"}
            transition={{ duration: reduced ? 0.2 : 0.6, ease: EASE_INOUT }}
          >
            <div className="edge flex h-[var(--header-h)] items-center">
              <span className="font-mono text-caption uppercase tracking-[0.18em] text-ink">VC.</span>
            </div>

            <motion.ul
              className="edge mt-auto mb-[12vh] flex flex-col gap-1"
              variants={reduced ? undefined : listVariants}
              initial={reduced ? undefined : "hidden"}
              animate={reduced ? undefined : "show"}
              exit={reduced ? undefined : "exit"}
            >
              {site.nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden py-1">
                  <motion.span className="block" variants={reduced ? undefined : itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-[clamp(2.5rem,12vw,4.5rem)] font-semibold uppercase leading-[0.95] text-ink"
                    >
                      <span className="mr-4 align-super font-mono text-[0.9rem] text-bg/40">
                        0{i + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.span>
                </li>
              ))}
            </motion.ul>

            <div className="edge mb-[7vh] flex flex-wrap gap-x-6 gap-y-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="link-underline font-mono text-caption uppercase tracking-[0.14em] text-muted"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
