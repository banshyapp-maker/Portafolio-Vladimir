import Link from "next/link";
import { site } from "@/data/site";
import { MagneticLink } from "@/components/motion/MagneticLink";
import { BackToTop } from "./BackToTop";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-strong bg-bg-deep">
      <div className="edge py-[var(--s-9,96px)]">
        <div className="grid gap-[var(--s-7,48px)] md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow mb-5">{site.availability}</p>
            <a
              href={`mailto:${site.email}`}
              className="link-underline font-display text-h3 text-ink"
            >
              {site.email}
            </a>
          </div>

          <div className="flex flex-col gap-7 md:items-end">
            <nav aria-label="Pie de página" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline font-mono text-caption uppercase tracking-[0.14em] text-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ul className="flex flex-wrap gap-6 md:justify-end">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <MagneticLink
                    href={s.href}
                    underline
                    className="font-mono text-caption uppercase tracking-[0.14em] text-ink-soft"
                  >
                    {s.label}
                  </MagneticLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[var(--s-8,64px)] flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow normal-case tracking-[0.1em]">
            © {year} {site.name} · Diseñado y construido a medida
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
