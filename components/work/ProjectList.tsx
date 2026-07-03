"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";

/**
 * Editorial index of projects with a single preview thumbnail that follows
 * the cursor (desktop only). On touch / reduced motion it's a plain list.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  // Keeps the last hovered project visible while the preview fades out.
  const [displayIndex, setDisplayIndex] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 350, damping: 35, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 350, damping: 35, mass: 0.4 });

  const preview = projects[displayIndex];

  function onMove(e: React.MouseEvent) {
    if (reduced) return;
    mx.set(e.clientX);
    my.set(e.clientY);
  }

  return (
    <div className="relative" onMouseMove={onMove}>
      <ul className="border-t border-line-strong">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={i}
            onEnter={() => {
              setActive(i);
              setDisplayIndex(i);
            }}
            onLeave={() => setActive((a) => (a === i ? null : a))}
          />
        ))}
      </ul>

      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed z-40 hidden w-[clamp(180px,18vw,280px)] md:block"
          style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
          animate={{ opacity: active !== null ? 1 : 0, scale: active !== null ? 1 : 0.9 }}
          transition={{ duration: 0.3, ease: EASE_OUT }}
        >
          <PlaceholderMedia
            seed={preview.slug}
            alt=""
            aspect="4/3"
            tint="accent"
            kind={preview.artifacts[0]?.kind ?? "image"}
          />
        </motion.div>
      )}
    </div>
  );
}
