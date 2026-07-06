"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { ProjectSummary } from "@/data/projects";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Large alternating project card. Hover is intentional, not just scale:
 * an accent-treated layer wipes in (clip-path), a cursor hint follows the
 * pointer, the title underline draws, and the category nudges across.
 */
export function FeaturedCard({ project, index }: { project: ProjectSummary; index: number }) {
  const reduced = useReducedMotion();
  const flip = index % 2 === 1;
  const [hover, setHover] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 300, damping: 30, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !mediaRef.current) return;
    const r = mediaRef.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  const idx = String(index + 1).padStart(2, "0");
  const cover = project.cover;
  const mediaKind = cover?.kind ?? "image";
  const mediaFit = cover?.src ? "contain" : "cover";

  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`Ver caso de estudio: ${project.title}`}
      className="group block focus-visible:outline-offset-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <article className="grid items-center gap-x-10 gap-y-7 md:grid-cols-[1.08fr_.92fr]">
        <div
          ref={mediaRef}
          onMouseMove={onMove}
          className={cn("relative", !reduced && "md:cursor-none", flip && "md:order-2")}
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={reduced ? undefined : { scale: hover ? 1.04 : 1 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
              className="will-change-transform"
            >
              <PlaceholderMedia
                seed={project.slug}
                alt={cover?.alt ?? project.title}
                aspect="4/3"
                tint="neutral"
                kind={mediaKind}
                src={cover?.src}
                fit={mediaFit}
                label={project.category}
              />
            </motion.div>

            {!reduced && (
              <motion.div
                aria-hidden
                className="absolute inset-0"
                initial={false}
                animate={{ clipPath: hover ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
                transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              >
                <motion.div
                  animate={{ scale: hover ? 1.04 : 1 }}
                  transition={{ duration: 0.7, ease: EASE_OUT }}
                  className="h-full w-full"
                >
                  <PlaceholderMedia
                    seed={project.slug}
                    alt=""
                    aspect="4/3"
                    tint="accent"
                    kind={mediaKind}
                    src={cover?.src}
                    fit={mediaFit}
                  />
                </motion.div>
              </motion.div>
            )}

            {!reduced && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-ink text-bg"
                style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
                animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.5 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em]">
                  Ver ↗
                </span>
              </motion.div>
            )}
          </div>
        </div>

        <div className={cn(flip && "md:order-1")}>
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-caption text-faint">{idx}</span>
            <span className="h-px w-8 bg-line-strong" />
            <span className="font-mono text-caption uppercase tracking-[0.14em] text-muted transition-transform duration-300 group-hover:translate-x-1">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-h2 font-semibold uppercase leading-[0.95] text-ink">
            <span className="relative inline">
              {project.title}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </span>
          </h3>

          <p className="mt-5 max-w-[42ch] text-small leading-relaxed text-ink-soft">{project.valueProp}</p>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {project.technologyNames.map((technology) => (
              <span
                key={technology}
                className="border border-line px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-muted"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 font-mono text-caption uppercase tracking-[0.14em] text-muted">
            <span>{project.year}</span>
            <span aria-hidden className="text-faint">·</span>
            <span>{project.status}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
