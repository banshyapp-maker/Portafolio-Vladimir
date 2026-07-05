import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: about.snapshot,
};

export default function AboutPage() {
  return (
    <>
      <section className="edge pt-[calc(var(--header-h)+var(--s-9,96px))] pb-[var(--s-9,96px)]">
        <p className="eyebrow mb-5">Sobre mí</p>
        <AnimatedText
          as="h1"
          lines={["Construyo sistemas", "para operaciones reales."]}
          trigger="mount"
          className="max-w-[18ch] font-display text-h1 font-normal leading-[1.02] text-ink"
        />

        <Reveal className="mt-[var(--s-8,64px)]">
          <div className="relative aspect-[21/9] w-full overflow-hidden">
            <Image
              src="/images/foto-vladimir.jpg"
              alt="Retrato profesional"
              fill
              className="object-cover object-center"
              preload
              unoptimized
            />
          </div>
        </Reveal>

        <div className="mt-[var(--s-9,96px)] grid gap-x-[var(--col-gap,32px)] gap-y-12 md:grid-cols-12">
          <div className="md:col-span-7">
            {/* Circular photo + snapshot */}
            <div className="mb-8 flex items-center gap-5">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-line">
                <Image
                  src="/images/Foto-circular.png"
                  alt={`${site.name} — foto de perfil`}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <p className="font-display text-[1.05rem] font-normal text-ink-soft">
                {site.name} · {site.role.split("·")[0].trim()}
              </p>
            </div>

            <p className="prose-editorial">{about.snapshot}</p>
            <div className="mt-8 max-w-[62ch] space-y-6">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-body text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9">
            <dl className="space-y-7 border-t border-line pt-8 md:border-t-0 md:pt-1">
              <div>
                <dt className="eyebrow mb-2">Ubicación</dt>
                <dd className="text-ink">{site.location}</dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Contacto</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="link-underline text-ink">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Redes</dt>
                <dd className="flex flex-wrap gap-4">
                  {site.socials
                    .filter((s) => s.label !== "Email")
                    .map((s) => (
                      <MagneticLink
                        key={s.label}
                        href={s.href}
                        underline
                        className="font-mono text-caption uppercase tracking-[0.14em] text-ink-soft"
                      >
                        {s.label}
                      </MagneticLink>
                    ))}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section aria-label="Cómo trabajo" className="border-t border-line bg-bg-deep">
        <div className="edge py-[var(--s-10,128px)]">
          <Reveal className="mb-12">
            <p className="eyebrow mb-3">Cómo trabajo</p>
            <h2 className="font-display text-h2 font-normal text-ink">Principios</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {about.principles.map((p, i) => (
              <div key={p.title} className="flex flex-col bg-bg-deep p-8">
                <span className="font-mono text-caption text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-h3 font-normal text-ink">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
