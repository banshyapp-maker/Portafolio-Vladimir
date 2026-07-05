import Link from "next/link";
import { site } from "@/data/site";
import { MagneticLink } from "@/components/motion/MagneticLink";
import { BackToTop } from "./BackToTop";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-deep">
      <div className="edge py-10">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="font-display text-h3 font-semibold uppercase leading-none text-ink transition-colors hover:text-accent-strong"
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
              {site.socials.filter((s) => s.label !== "WhatsApp").map((s) => (
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

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow normal-case tracking-[0.1em]">
            © {year} {site.name} · Diseñado y construido a medida
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
