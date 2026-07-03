import type { FlowStep } from "@/types";
import { Reveal } from "@/components/motion/Reveal";

export function ArchitectureFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <section aria-label="Arquitectura y flujo" className="edge py-[var(--s-9,96px)]">
      <Reveal className="mb-12">
        <p className="eyebrow mb-3">Arquitectura</p>
        <h2 className="font-display text-h2 font-normal text-ink">Flujo del sistema</h2>
      </Reveal>

      <Reveal>
        <ol className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="flex min-h-[180px] flex-col gap-3 bg-bg p-7">
              <span className="font-mono text-caption text-accent">
                {String(s.n).padStart(2, "0")}
              </span>
              <h3 className="font-display text-h3 font-normal leading-[1.1] text-ink">
                {s.title}
              </h3>
              <p className="text-small text-ink-soft">{s.detail}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
