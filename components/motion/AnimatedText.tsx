"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";
import type { ElementType } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";

interface AnimatedTextProps {
  /** Each entry is one visual line/group; its words wrap responsively. */
  lines: string[];
  as?: ElementType;
  className?: string;
  /** "mount" animates immediately; "inView" waits for scroll. */
  trigger?: "mount" | "inView";
  stagger?: number;
  delay?: number;
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

/**
 * Word-by-word reveal that wraps naturally (responsive-safe). The full text
 * stays in the DOM as readable content; only the visual rise is animated.
 */
export function AnimatedText({
  lines,
  as: Tag = "span",
  className,
  trigger = "inView",
  stagger = 0.05,
  delay = 0,
}: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  const parent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const animation =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "show" as const }
      : {
          initial: "hidden" as const,
          whileInView: "show" as const,
          viewport: { once: true, amount: 0.5 },
        };

  return (
    <Tag className={className}>
      <motion.span className="block" variants={parent} {...animation}>
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.split(" ").map((word, wi) => (
              <Fragment key={wi}>
                <motion.span className="inline-block" variants={wordVariants}>
                  {word}
                </motion.span>{" "}
              </Fragment>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
