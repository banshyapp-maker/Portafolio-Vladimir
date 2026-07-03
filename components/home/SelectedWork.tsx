import { featuredProjects } from "@/data/projects";
import { FeaturedCard } from "./FeaturedCard";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";

export function SelectedWork() {
  return (
    <section id="trabajo" aria-label="Portafolio" className="edge py-[var(--s-10,128px)]">
      <Reveal className="mb-[var(--s-9,96px)] border-b border-line-strong pb-6">
        <AnimatedText
          as="h2"
          lines={["Portafolio."]}
          className="font-display text-h3 font-normal text-ink"
        />
      </Reveal>

      <div className="flex flex-col gap-[var(--s-11,192px)]">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-[var(--s-9,96px)] border-t border-line pt-8">
        <MagneticLink
          href="/work"
          underline
          className="font-mono text-small uppercase tracking-[0.14em] text-ink"
        >
          Ver todo el trabajo&nbsp;→
        </MagneticLink>
      </div>
    </section>
  );
}
