import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, getProjectSlugs } from "@/data/projects";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { ProjectOverview } from "@/components/case-study/ProjectOverview";
import { TechnologySection } from "@/components/case-study/TechnologySection";
import { ProjectMediaGrid } from "@/components/case-study/ProjectMediaGrid";
import { NextProject } from "@/components/case-study/NextProject";

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
      <ProjectOverview project={project} />
      <TechnologySection technologies={project.technologies} />
      <ProjectMediaGrid artifacts={project.artifacts} seedBase={project.slug} />
      <NextProject currentSlug={project.slug} />
    </article>
  );
}
