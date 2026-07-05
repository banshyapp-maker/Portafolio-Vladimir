import Link from "next/link";
import { projects } from "@/data/projects";

export function NextProject({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const next = projects[(idx + 1) % projects.length];
  if (!next || next.slug === currentSlug) return null;

  return (
    <section aria-label="Siguiente proyecto" className="border-t border-line-strong">
      <Link href={`/work/${next.slug}`} className="group block">
        <div className="edge py-[var(--s-10,128px)]">
          <p className="eyebrow mb-5">Siguiente proyecto</p>
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-display text-h1 font-semibold uppercase leading-[0.86] text-ink">
              <span className="relative inline">
                {next.title}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </span>
            </h2>
            <span
              aria-hidden
              className="hidden shrink-0 font-mono text-h3 text-muted transition-transform duration-300 group-hover:translate-x-2 sm:block"
            >
              →
            </span>
          </div>
          <p className="mt-4 font-mono text-caption uppercase tracking-[0.14em] text-muted">
            {next.category}
          </p>
        </div>
      </Link>
    </section>
  );
}
