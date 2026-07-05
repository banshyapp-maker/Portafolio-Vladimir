import { featuredProjects } from "@/data/projects";
import { FeaturedCard } from "./FeaturedCard";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";

export function SelectedWork() {
  return (
    <section id="trabajo" aria-label="Portafolio" className="edge py-8 md:py-16">
      <div className="screen-panel p-7 sm:p-10 lg:p-16">
      <Reveal className="mb-14 flex items-end justify-between gap-8 border-b border-line-strong pb-5">
        <AnimatedText
          as="h2"
          lines={["Portafolio"]}
          className="font-display text-h2 font-semibold uppercase leading-none text-ink"
        />
        <span className="hidden font-mono text-caption uppercase tracking-[0.14em] text-muted sm:block">
          Proyectos seleccionados
        </span>
      </Reveal>

      <div className="flex flex-col gap-16 lg:gap-24">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <MagneticLink
          href="/work"
          underline
          className="outline-button"
        >
          Ver todos los proyectos&nbsp;→
        </MagneticLink>
      </div>
      </div>
    </section>
  );
}
