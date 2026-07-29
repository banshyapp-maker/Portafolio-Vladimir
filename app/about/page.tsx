import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/home/ContactCTA";

const impactIcons = [
  <svg key="automation" aria-hidden viewBox="0 0 64 64" className="h-14 w-14 fill-none stroke-current" strokeWidth="1.5">
    <rect x="7" y="10" width="16" height="16" rx="2" />
    <rect x="41" y="38" width="16" height="16" rx="2" />
    <path d="M23 18h8a8 8 0 0 1 8 8v12M41 46h-8a8 8 0 0 1-8-8V26" />
    <path d="m35 34 4 4 4-4M29 30l-4-4-4 4" />
  </svg>,
  <svg key="software" aria-hidden viewBox="0 0 64 64" className="h-14 w-14 fill-none stroke-current" strokeWidth="1.5">
    <rect x="7" y="9" width="50" height="38" rx="2" />
    <path d="M7 18h50M15 13.5h1M21 13.5h1M27 13.5h1M20 54h24M26 47v7M38 47v7" />
    <path d="m25 28-6 5 6 5M39 28l6 5-6 5M35 25l-6 16" />
  </svg>,
  <svg key="data" aria-hidden viewBox="0 0 64 64" className="h-14 w-14 fill-none stroke-current" strokeWidth="1.5">
    <path d="M9 53V11M9 53h46" />
    <path d="M17 45V34h8v11M29 45V25h8v20M41 45V16h8v29" />
    <path d="m16 27 10-8 9 4 14-12" />
    <circle cx="16" cy="27" r="2" fill="currentColor" stroke="none" />
    <circle cx="26" cy="19" r="2" fill="currentColor" stroke="none" />
    <circle cx="35" cy="23" r="2" fill="currentColor" stroke="none" />
    <circle cx="49" cy="11" r="2" fill="currentColor" stroke="none" />
  </svg>,
];

export const metadata: Metadata = {
  title: "Sobre mí",
  description: about.snapshot,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface-sunk pt-[var(--header-h)]">
        <div className="screen-grid relative isolate min-h-[calc(100svh-var(--header-h))] overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full md:w-[56%]">
            <Image
              src="/images/foto-vladimir-sin-marca.png"
              alt={`${site.name} — retrato profesional`}
              fill
              unoptimized
              preload
              quality={95}
              sizes="(max-width: 768px) 100vw, 56vw"
              className="object-contain object-right-bottom grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1013_0%,rgba(11,16,19,.66)_30%,rgba(11,16,19,.06)_72%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b1013_0%,transparent_55%)] md:hidden" />
          </div>

          <div className="relative z-10 flex min-h-[calc(100svh-var(--header-h))] max-w-[43rem] flex-col justify-between px-[var(--gutter)] py-10 lg:py-16">
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
              {site.socials
                .filter((social) => social.label !== "WhatsApp")
                .slice(0, 2)
                .map((social) => (
                <a key={social.label} href={social.href} className="transition-colors hover:text-accent-strong">
                  {social.label}
                </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Áreas de impacto" className="border-y border-line bg-bg-deep">
        <div className="edge py-20 md:py-28">
          <Reveal className="mb-12 flex items-end justify-between gap-8 border-b border-line-strong pb-5">
            <div>
              <p className="eyebrow mb-3">Lo que construyo</p>
              <h2 className="font-display text-h2 font-semibold uppercase leading-none text-ink">Áreas de impacto</h2>
            </div>
            <span className="hidden font-mono text-caption text-muted md:block">01 — 03</span>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {about.impactAreas.map((area, index) => (
              <Reveal
                key={area.title}
                delay={index * 0.08}
                y={24}
                className="h-full"
              >
                <article className="group relative flex h-full min-h-[24rem] flex-col overflow-hidden bg-surface-sunk p-7">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-accent/20 opacity-40 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-125 group-hover:opacity-100 motion-reduce:transform-none motion-reduce:transition-none" />
                  <div className="relative flex items-start justify-between">
                    <div className="relative grid h-24 w-24 place-items-center border border-line-strong bg-bg-deep text-accent-strong transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none">
                      <span className="absolute inset-2 border border-line transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-90 motion-reduce:transform-none motion-reduce:transition-none" />
                      <span className="relative transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none">
                        {impactIcons[index]}
                      </span>
                    </div>
                    <span className="font-mono text-caption text-accent-strong transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="relative mt-auto pt-12">
                    <h3 className="font-display text-h3 font-semibold uppercase leading-none text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-small leading-relaxed text-muted">{area.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
