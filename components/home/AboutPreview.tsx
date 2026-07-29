import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/content";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function AboutPreview() {
  return (
    <section aria-label="Sobre mí" className="border-b border-line bg-surface-sunk">
      <div className="screen-grid relative isolate min-h-[70svh] overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
          <Image
            src="/images/foto-vladimir-sin-marca.png"
            alt="Vladimir Cornejo"
            fill
            unoptimized
            quality={95}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-contain object-right-bottom grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1013_0%,rgba(11,16,19,.72)_28%,rgba(11,16,19,.12)_68%,rgba(11,16,19,.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b1013_0%,transparent_55%)] md:hidden" />
        </div>

        <div className="relative z-10 flex min-h-[70svh] max-w-[42rem] flex-col justify-between p-7 sm:p-10 lg:p-16">
          <Reveal>
            <p className="eyebrow">Sobre mí</p>
            <a href={`mailto:${site.email}`} className="mt-2 block font-mono text-[0.68rem] text-muted transition-colors hover:text-ink">
              {site.email}
            </a>
          </Reveal>

          <Reveal className="max-w-[34rem] py-20 md:py-12">
            <h2 className="font-display text-h2 font-semibold uppercase leading-[0.92] text-ink">
              Diseño sistemas para operaciones reales.
            </h2>
            <p className="mt-7 max-w-[50ch] text-small leading-relaxed text-ink-soft">
              {about.snapshot}
            </p>
            <Link href="/about" className="outline-button mt-8">Conocer más</Link>
          </Reveal>

          <p className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted">
            {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
