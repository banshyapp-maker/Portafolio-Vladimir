import type { Project } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section aria-label="Resumen y funcionalidades" className="edge py-[var(--s-10,128px)]">
      <div className="grid gap-x-[var(--col-gap,32px)] gap-y-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-5">Resumen del proyecto</p>
          <h2 className="font-display text-h2 font-semibold uppercase leading-[0.94] text-ink">
            {project.valueProp}
          </h2>
          <p className="mt-8 text-lead leading-relaxed text-ink-soft">{project.solution}</p>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9" delay={0.05}>
          <aside className="relative overflow-hidden border border-line-strong bg-bg-deep p-8">
            <span
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-line-strong"
            />
            <p className="eyebrow mb-5">El reto</p>
            <p className="relative text-body leading-relaxed text-ink-soft">{project.problem}</p>
          </aside>
        </Reveal>
      </div>

      <div className="mt-[var(--s-10,128px)]">
        <Reveal className="mb-12 max-w-[58ch]">
          <p className="eyebrow mb-3">Funcionalidades principales</p>
          <h2 className="font-display text-h2 font-semibold uppercase text-ink">
            Lo que hace la solución
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <article
              key={feature.title}
              className="group flex min-h-60 flex-col bg-bg p-7 transition-colors duration-300 hover:bg-bg-deep"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-caption text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="h-3 w-3 rounded-full border border-line-strong transition-colors duration-300 group-hover:bg-ink"
                />
              </div>
              <h3 className="font-display text-h3 font-semibold uppercase leading-none text-ink">
                {feature.title}
              </h3>
              <p className="mt-4 text-small leading-relaxed text-ink-soft">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
