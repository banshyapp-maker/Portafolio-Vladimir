import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

interface CaseStudySectionProps {
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/** Two-column editorial section: sticky-ish label left, content right. */
export function CaseStudySection({ label, title, children, className }: CaseStudySectionProps) {
  return (
    <section className={cn("edge py-[var(--s-9,96px)]", className)}>
      <div className="grid gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <p className="eyebrow">{label}</p>
            {title && (
              <h2 className="mt-3 font-display text-h3 font-normal text-ink">{title}</h2>
            )}
          </Reveal>
        </div>
        <div className="md:col-span-8 md:col-start-5">{children}</div>
      </div>
    </section>
  );
}
