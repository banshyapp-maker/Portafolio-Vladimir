"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { capabilities } from "@/data/capabilities";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { PlaceholderMedia } from "@/components/media/PlaceholderMedia";

const TINTS = ["neutral", "warm", "accent", "cool"] as const;

export function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section aria-label="Capacidades" className="overflow-hidden border-y border-line bg-bg-deep py-[var(--s-10,128px)]">
      <Reveal className="edge mb-[var(--s-9,96px)] max-w-[40ch]">
        <p className="eyebrow mb-4">Capacidades</p>
        <AnimatedText
          as="h2"
          lines={["Lo que construyo,", "de extremo a extremo."]}
          className="font-display text-h2 font-normal text-ink"
        />
      </Reveal>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex cursor-grab gap-5 px-[var(--gutter)] active:cursor-grabbing"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.04}
        >
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="flex w-[min(78vw,340px)] flex-shrink-0 flex-col"
            >
              <PlaceholderMedia
                seed={c.title}
                alt=""
                aspect="4/3"
                tint={TINTS[i % TINTS.length]}
                kind={i % 3 === 1 ? "diagram" : "image"}
                className="rounded-sm border border-line"
              />

              <div className="mt-5 flex gap-4">
                <span className="pt-1 font-display text-caption text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-h3 font-normal text-ink">{c.title}</h3>
                  <p className="mt-2 font-display text-body text-ink-soft">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
