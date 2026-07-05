import type { Metadata } from "next";
import { allProjects } from "@/data/projects";
import { ProjectList } from "@/components/work/ProjectList";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos de automatización, RPA e IA aplicada que reducen costos, errores y tiempos operativos.",
};

export default function WorkPage() {
  return (
    <div className="bg-surface-sunk pt-[var(--header-h)]">
      <div className="edge py-16 lg:py-24">
        <header className="mb-16 border-b border-line-strong pb-12">
          <p className="eyebrow mb-5">Portafolio / 2025—2026</p>
          <AnimatedText
            as="h1"
            lines={["Sistemas que convierten", "procesos en resultados."]}
            trigger="mount"
            className="max-w-[15ch] font-display text-h1 font-semibold uppercase leading-[0.86] text-ink"
          />
          <Reveal className="mt-10 grid gap-8 md:grid-cols-3">
            <p className="max-w-[48ch] text-small leading-relaxed text-ink-soft md:col-span-2">
              Cada proyecto parte de un reto operativo concreto y termina en una solución que reduce
              tareas manuales, acelera la información y le da más control al negocio.
            </p>
            <dl className="grid grid-cols-2 gap-5 font-mono text-caption uppercase tracking-[0.1em]">
              <div><dt className="text-faint">Especialidad</dt><dd className="mt-1 text-ink">Automation + AI</dd></div>
              <div><dt className="text-faint">Base</dt><dd className="mt-1 text-ink">Panamá</dd></div>
            </dl>
          </Reveal>
        </header>

        <ProjectList projects={allProjects} />
      </div>
    </div>
  );
}
