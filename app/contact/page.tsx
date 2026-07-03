import type { Metadata } from "next";
import { contact } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";

export const metadata: Metadata = {
  title: "Contacto",
  description: contact.sub,
};

export default function ContactPage() {
  return (
    <div className="edge pt-[calc(var(--header-h)+var(--s-9,96px))] pb-[var(--s-10,128px)]">
      <p className="eyebrow mb-6">{contact.eyebrow}</p>
      <AnimatedText
        as="h1"
        lines={["¿Tienes una operación", "que ordenar?"]}
        trigger="mount"
        className="font-display text-h1 font-normal leading-[1.02] text-ink"
      />

      <Reveal className="mt-8 max-w-[56ch]">
        <p className="text-lead text-ink-soft">{contact.sub}</p>
      </Reveal>

      <div className="mt-[var(--s-9,96px)] grid gap-x-[var(--col-gap,32px)] gap-y-12 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-5">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="link-underline font-display text-h3 text-ink"
          >
            {site.email}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-5">En otros lugares</p>
          <ul className="space-y-3">
            {site.socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <li key={s.label}>
                  <MagneticLink
                    href={s.href}
                    underline
                    className="font-mono text-small uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {s.label}
                    {s.handle ? <span className="text-faint"> — {s.handle}</span> : null}
                  </MagneticLink>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className="eyebrow mt-[var(--s-10,128px)] text-faint">
        Diseñado y construido a medida · 2026
      </p>
    </div>
  );
}
