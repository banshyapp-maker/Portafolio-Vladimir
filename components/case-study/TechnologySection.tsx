import type { Technology } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function TechnologySection({ technologies }: { technologies: Technology[] }) {
  return (
    <section aria-label="Tecnología aplicada" className="border-y border-ink bg-ink text-bg">
      <div className="edge py-[var(--s-10,128px)]">
        <div className="grid gap-x-[var(--col-gap,32px)] gap-y-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow mb-4 text-bg/55">Tecnología aplicada</p>
            <h2 className="font-display text-h2 font-normal leading-[1.08] text-bg">
              Decisiones técnicas con una función clara.
            </h2>
            <p className="mt-6 max-w-[36ch] text-body leading-relaxed text-bg/65">
              Cada herramienta resuelve una parte concreta de la operación: automatizar, integrar,
              almacenar o convertir datos en información útil.
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            {technologies.map((technology, index) => (
              <Reveal key={technology.name} delay={index * 0.04}>
                <article className="grid gap-4 border-t border-bg/20 py-7 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-caption text-bg/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-mono text-caption uppercase tracking-[0.14em] text-bg/45">
                      {technology.category}
                    </p>
                    <h3 className="mt-2 font-display text-h3 font-normal text-bg">
                      {technology.name}
                    </h3>
                    <p className="mt-3 max-w-[56ch] text-small leading-relaxed text-bg/65">
                      {technology.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
