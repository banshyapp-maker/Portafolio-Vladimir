import type { Metadata } from "next";
import { allProjects } from "@/data/projects";
import { ProjectList } from "@/components/work/ProjectList";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Trabajo",
  description:
    "Casos de estudio en gestión documental, automatización, BPM y reportería para operaciones reales.",
};

export default function WorkPage() {
  return (
    <div className="edge pt-[calc(var(--header-h)+var(--s-9,96px))] pb-[var(--s-10,128px)]">
      <header className="mb-[var(--s-9,96px)]">
        <p className="eyebrow mb-5">Trabajo</p>
        <AnimatedText
          as="h1"
          lines={["Sistemas,", "no páginas web."]}
          trigger="mount"
          className="font-display text-h1 font-normal leading-[1.02] text-ink"
        />
        <Reveal className="mt-8 max-w-[54ch]">
          <p className="text-lead text-ink-soft">
            Casos de estudio de gestión documental, automatización, interfaces BPM y reportería
            operativa — construidos para procesos de negocio reales.
          </p>
        </Reveal>
      </header>

      <ProjectList projects={allProjects} />
    </div>
  );
}
