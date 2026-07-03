"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** 0–1: how far the element drifts toward the cursor. */
  strength?: number;
  underline?: boolean;
  ariaLabel?: string;
}

/**
 * A refined link that drifts subtly toward the cursor (pointer only) and keeps
 * an animated underline. Magnetism is disabled under reduced motion / touch.
 */
export function MagneticLink({
  href,
  children,
  className,
  strength = 0.3,
  underline,
  ariaLabel,
}: MagneticLinkProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const isExternal = !href.startsWith("/");
  const content = <span className={cn(underline && "link-underline")}>{children}</span>;
  const style = reduced ? undefined : { x: springX, y: springY };

  if (isExternal) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={style}
        className={cn("inline-flex items-center", className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <MotionLink
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className={cn("inline-flex items-center", className)}
    >
      {content}
    </MotionLink>
  );
}
