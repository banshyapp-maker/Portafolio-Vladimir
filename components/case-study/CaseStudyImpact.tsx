import type { ImpactMetric } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function CaseStudyImpact({ metrics }: { metrics: ImpactMetric[] }) {
  if (metrics.length === 0) return null;

  return (
    <section aria-label="Impacto" className="border-y border-line-strong bg-bg-deep">
      <div className="edge py-[var(--s-10,128px)]">
        <Reveal className="mb-12">
          <p className="eyebrow mb-3">Impacto</p>
          <h2 className="font-display text-h2 font-normal text-ink">Resultados</h2>
        </Reveal>

        <dl className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col bg-bg-deep p-8">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-normal leading-[0.95] text-ink">
                {m.value}
              </dd>
              <p className="mt-4 font-mono text-caption uppercase tracking-[0.12em] text-muted">
                {m.label}
              </p>
              {m.note && <p className="mt-1 text-small text-faint">{m.note}</p>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
