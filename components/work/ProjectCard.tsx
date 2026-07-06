"use client";

import Link from "next/link";
import type { Project } from "@/types";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";

interface ProjectCardProps {
  project: Project;
  index: number;
  onEnter: () => void;
  onLeave: () => void;
}

/** A single editorial index row in the Work list. */
export function ProjectCard({ project, index, onEnter, onLeave }: ProjectCardProps) {
  const cover = project.artifacts[0];

  return (
    <li className="border-b border-line">
      <Link
        href={`/work/${project.slug}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        aria-label={`Ver caso de estudio: ${project.title}`}
        className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 gap-y-3 py-8 md:grid-cols-[3.5rem_1fr_12rem_9rem] md:py-10"
      >
        <span className="font-mono text-caption text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold uppercase leading-[0.92] text-ink transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:translate-x-3 md:group-hover:text-accent-strong">
          {project.title}
        </h2>
        {cover?.src && (
          <div className="col-span-2 mt-3 md:hidden">
            <PlaceholderMedia
              seed={project.slug}
              alt={cover.alt}
              aspect="16/9"
              tint={cover.tint}
              kind={cover.kind}
              src={cover.src}
              fit="contain"
              sizes="100vw"
            />
          </div>
        )}
        <span className="col-start-2 font-mono text-caption uppercase tracking-[0.14em] text-muted md:col-start-3 md:self-center md:text-right">
          {project.category}
        </span>
        <span className="col-start-2 hidden font-mono text-caption uppercase tracking-[0.14em] text-faint md:col-start-4 md:block md:self-center md:text-right">
          {project.year} · {project.status}
        </span>
      </Link>
    </li>
  );
}
