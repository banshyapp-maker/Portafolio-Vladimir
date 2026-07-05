import type { Metadata } from "next";
import { contact } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";
import { ContactForm } from "@/components/contact/ContactForm";

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

      <div className="mt-[var(--s-9,96px)] grid gap-x-[var(--col-gap,32px)] gap-y-16 border-t border-line pt-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow mb-5">Contacto directo</p>
          <a href={`mailto:${site.email}`} className="link-underline font-display text-xl text-ink">
            {site.email}
          </a>

          <p className="eyebrow mb-5 mt-12">También puedes encontrarme en</p>
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
        </aside>
      </div>

      <p className="eyebrow mt-[var(--s-10,128px)] text-faint">
        Diseñado y construido a medida · 2026
      </p>
    </div>
  );
}
