import type { Artifact } from "@/types";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";
import { cn } from "@/lib/cn";

interface ProjectMediaGridProps {
  artifacts: Artifact[];
  seedBase: string;
}

function ratioOf(aspect: string): number {
  const [w, h] = aspect.split("/").map(Number);
  return w && h ? w / h : 16 / 9;
}

export function ProjectMediaGrid({ artifacts, seedBase }: ProjectMediaGridProps) {
  const gallery = artifacts.slice(1);
  if (gallery.length === 0) return null;

  return (
    <section aria-label="Vistas del proyecto" className="edge py-[var(--s-10,128px)]">
      <Reveal className="mb-12">
        <p className="eyebrow mb-3">Galería</p>
        <h2 className="font-display text-h2 font-semibold uppercase text-ink">Vistas del proyecto</h2>
        <p className="mt-5 max-w-[54ch] text-lead text-ink-soft">
          Pantallas y automatizaciones que forman parte de la solución.
        </p>
      </Reveal>

      <div className="grid gap-x-[var(--col-gap,32px)] gap-y-14 md:grid-cols-2">
        {gallery.map((a, i) => {
          const ratio = ratioOf(a.aspect);
          // exact ratios carry the native width — big desktop captures need the
          // full row or their UI text lands at ~28% scale and turns illegible
          const nativeW = Number(a.aspect.split("/")[0]) || 0;
          const full = i === 0 || ratio >= 2.5 || (Boolean(a.src) && nativeW >= 1100);
          // ultra-wide banners skip the chrome bar (it would be half their height)
          const framed = Boolean(a.src) && ratio < 2.5;
          return (
            <figure key={a.id} className={cn(full && "md:col-span-2")}>
              <PlaceholderMedia
                seed={`${seedBase}-${a.id}`}
                alt={a.alt}
                aspect={a.aspect}
                tint={a.tint}
                kind={a.kind}
                src={a.src}
                frame={framed}
                className={!framed && a.src ? "border border-line-strong" : undefined}
                sizes={full ? "(max-width: 1280px) 100vw, 1280px" : "(max-width: 768px) 100vw, 640px"}
              />
              <figcaption className="mt-4 flex gap-3 text-small text-muted">
                <span className="font-mono text-caption text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {a.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
