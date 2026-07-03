import { contact } from "@/data/content";
import { site } from "@/data/site";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { MagneticLink } from "@/components/motion/MagneticLink";

export function ContactCTA() {
  return (
    <section
      id="contacto"
      aria-label="Contacto"
      className="border-t border-line-strong bg-bg-deep"
    >
      <div className="edge py-[var(--s-11,192px)]">
        <p className="eyebrow mb-6">{contact.eyebrow}</p>

        <AnimatedText
          as="h2"
          lines={["¿Tienes una operación", "que ordenar?"]}
          className="font-display text-h1 font-normal leading-[1.02] text-ink"
        />

        <p className="mt-10 max-w-[56ch] text-lead text-ink-soft">{contact.sub}</p>

        <div className="mt-12">
          <a
            href={`mailto:${site.email}`}
            className="link-underline font-display text-h3 text-ink"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
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
                {s.handle ? ` — ${s.handle}` : ""}
              </MagneticLink>
            ))}
        </div>
      </div>
    </section>
  );
}
