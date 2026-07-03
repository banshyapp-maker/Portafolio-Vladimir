import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { ArchitectureFlow } from "@/components/case-study/ArchitectureFlow";
import { ProjectMediaGrid } from "@/components/case-study/ProjectMediaGrid";
import { CaseStudyImpact } from "@/components/case-study/CaseStudyImpact";
import { NextProject } from "@/components/case-study/NextProject";
import { Reveal } from "@/components/motion/Reveal";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.valueProp,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="pb-[var(--s-9,96px)]">
      <CaseStudyHero project={project} />

      <CaseStudySection label="El problema">
        <p className="prose-editorial">{project.problem}</p>
      </CaseStudySection>

      <CaseStudySection label="La solución">
        <p className="prose-editorial">{project.solution}</p>
      </CaseStudySection>

      <ArchitectureFlow steps={project.flow} />

      <ProjectMediaGrid artifacts={project.artifacts} seedBase={project.slug} />

      <CaseStudyImpact metrics={project.impact} />

      <section aria-label="Aprendizajes y próximas mejoras" className="edge py-[var(--s-10,128px)]">
        <div className="grid gap-x-[var(--col-gap,32px)] gap-y-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Aprendizajes</p>
            <p className="text-lead text-ink-soft">{project.learnings}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow mb-4">Próximas mejoras</p>
            <p className="text-lead text-ink-soft">{project.next}</p>
          </Reveal>
        </div>
      </section>

      <NextProject currentSlug={project.slug} />
    </article>
  );
}
