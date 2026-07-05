import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: about.snapshot,
};

export default function AboutPage() {
  return (
    <>
      <section className="edge pb-8 pt-[calc(var(--header-h)+2rem)] md:pb-16">
        <div className="screen-panel screen-grid min-h-[76svh]">
          <div className="absolute inset-y-0 right-0 w-full md:w-[56%]">
            <Image
              src="/images/foto-vladimir.jpg"
              alt={`${site.name} — retrato profesional`}
              fill
              preload
              sizes="(max-width: 768px) 100vw, 56vw"
              className="object-cover object-[61%_center] grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1013_0%,rgba(11,16,19,.66)_30%,rgba(11,16,19,.06)_72%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b1013_0%,transparent_55%)] md:hidden" />
          </div>

          <div className="relative z-10 flex min-h-[76svh] max-w-[43rem] flex-col justify-between p-7 sm:p-10 lg:p-16">
            <div>
              <p className="eyebrow mb-2">Sobre mí</p>
              <a href={`mailto:${site.email}`} className="font-mono text-[0.68rem] text-muted transition-colors hover:text-ink">
                {site.email}
              </a>
            </div>

            <div className="max-w-[35rem] py-20 md:py-10">
              <AnimatedText
                as="h1"
                lines={["Ingeniería para", "operaciones reales."]}
                trigger="mount"
                className="font-display text-h1 font-semibold uppercase leading-[0.86] text-ink"
              />
              <Reveal className="mt-8">
                <p className="max-w-[52ch] text-small leading-relaxed text-ink-soft">{about.snapshot}</p>
                <p className="mt-5 max-w-[52ch] text-small leading-relaxed text-muted">{about.paragraphs[0]}</p>
              </Reveal>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted">
              <span>{site.location}</span>
              {site.socials.slice(0, 2).map((social) => (
                <a key={social.label} href={social.href} className="transition-colors hover:text-accent-strong">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Cómo trabajo" className="edge pb-8 md:pb-16">
        <div className="screen-panel p-7 sm:p-10 lg:p-16">
          <Reveal className="mb-12 flex items-end justify-between gap-8 border-b border-line-strong pb-5">
            <div>
              <p className="eyebrow mb-3">Cómo trabajo</p>
              <h2 className="font-display text-h2 font-semibold uppercase leading-none text-ink">Principios</h2>
            </div>
            <span className="hidden font-mono text-caption text-muted md:block">01 — 03</span>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {about.principles.map((principle, index) => (
              <article key={principle.title} className="flex min-h-72 flex-col bg-surface-sunk p-7">
                <span className="font-mono text-caption text-accent-strong">0{index + 1}</span>
                <h3 className="mt-auto font-display text-h3 font-semibold uppercase leading-none text-ink">
                  {principle.title}
                </h3>
                <p className="mt-4 text-small leading-relaxed text-muted">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
