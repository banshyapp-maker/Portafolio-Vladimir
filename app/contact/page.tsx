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
    <div className="edge pb-16 pt-[calc(var(--header-h)+2rem)]">
      <div className="screen-panel screen-grid p-7 sm:p-10 lg:p-16">
      <p className="eyebrow mb-6">{contact.eyebrow}</p>
      <AnimatedText
        as="h1"
        lines={["¿Tienes una operación", "que ordenar?"]}
        trigger="mount"
        className="max-w-[12ch] font-display text-h1 font-semibold uppercase leading-[0.86] text-ink"
      />

      <Reveal className="mt-8 max-w-[56ch]">
        <p className="text-small leading-relaxed text-ink-soft">{contact.sub}</p>
      </Reveal>

      <div className="mt-16 grid gap-x-10 gap-y-16 border-t border-line pt-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="eyebrow mb-5">Contacto directo</p>
          <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold uppercase text-ink transition-colors hover:text-accent-strong">
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

      <p className="eyebrow mt-20 text-faint">
        Diseñado y construido a medida · 2026
      </p>
      </div>
    </div>
  );
}
