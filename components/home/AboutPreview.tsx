import Image from "next/image";
import { about } from "@/data/content";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticLink } from "@/components/motion/MagneticLink";

export function AboutPreview() {
  return (
    <section aria-label="Sobre mí" className="edge py-[var(--s-10,128px)]">
      <div className="grid gap-y-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <p className="eyebrow mb-6">Sobre mí</p>
            <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full">
              <Image
                src="/images/Foto-circular.png"
                alt="Vladimir Cornejo"
                fill
                sizes="160px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-9 md:col-start-4">
          <Reveal>
            <p className="font-display text-h3 font-normal leading-[1.28] text-ink [text-wrap:balance]">
              {about.snapshot}
            </p>
          </Reveal>
          <div className="mt-10">
            <MagneticLink
              href="/about"
              underline
              className="font-mono text-small uppercase tracking-[0.14em] text-ink"
            >
              Más sobre mí&nbsp;→
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}
