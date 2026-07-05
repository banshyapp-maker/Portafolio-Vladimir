import Link from "next/link";
import type { Project } from "@/types";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";

function MetaItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="eyebrow mb-2">{label}</dt>
      <dd className="text-small text-ink">{children}</dd>
    </div>
  );
}

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <header className="edge pt-[calc(var(--header-h)+var(--s-9,96px))]">
      <nav aria-label="Ruta" className="eyebrow mb-8 flex items-center gap-3">
        <Link href="/work" className="link-underline">
          Proyectos
        </Link>
        <span aria-hidden className="text-faint">/</span>
        <span className="text-ink">{project.category}</span>
      </nav>

      <AnimatedText
        as="h1"
        lines={[project.title]}
        trigger="mount"
        className="font-display text-h1 font-semibold uppercase leading-[0.86] text-ink"
      />

      <Reveal className="mt-10">
        <PlaceholderMedia
          seed={project.slug}
          alt={project.artifacts[0]?.alt ?? `${project.title} — vista general`}
          aspect={project.artifacts[0]?.src ? project.artifacts[0].aspect : "21/9"}
          tint="accent"
          kind="image"
          src={project.artifacts[0]?.src}
          frame={Boolean(project.artifacts[0]?.src)}
          preload
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </Reveal>

      <dl className="mt-10 grid grid-cols-2 gap-8 border-b border-line pb-10 md:grid-cols-4">
        <MetaItem label="Rol">{project.role}</MetaItem>
        <MetaItem label="Categoría">{project.category}</MetaItem>
        <MetaItem label="Año">{project.year}</MetaItem>
        <MetaItem label="Estado">{project.status}</MetaItem>
      </dl>
    </header>
  );
}
