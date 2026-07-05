import type { Metadata } from "next";
import { allProjects } from "@/data/projects";
import { ProjectList } from "@/components/work/ProjectList";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de automatización, RPA e IA aplicada que reducen costos, errores y tiempos operativos.",
};

export default function WorkPage() {
  return (
    <div className="edge pt-[calc(var(--header-h)+var(--s-9,96px))] pb-[var(--s-10,128px)]">
      <header className="mb-[var(--s-9,96px)]">
        <p className="eyebrow mb-5">Proyectos</p>
        <AnimatedText
          as="h1"
          lines={["Tecnología que convierte", "procesos en resultados."]}
          trigger="mount"
          className="font-display text-h1 font-normal leading-[1.02] text-ink"
        />
        <Reveal className="mt-8 max-w-[54ch]">
          <p className="text-lead text-ink-soft">
            Cada proyecto parte de un reto operativo concreto y termina en una solución que reduce
            tareas manuales, acelera la información y le da más control al negocio.
          </p>
        </Reveal>
      </header>

      <ProjectList projects={allProjects} />
    </div>
  );
}
