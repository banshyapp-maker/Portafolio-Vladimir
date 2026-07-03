"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/data/process";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * The site's motion "signature": a vertical line that draws on scroll while
 * each step's node activates and its text rises in. Reduced motion shows the
 * completed diagram (line full, nodes active) with no movement.
 */
export function ProcessFlow() {
  const root = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !root.current) return;
      const ctx = root.current;
      const progress = ctx.querySelector<HTMLElement>(".pf-progress");
      const wrap = ctx.querySelector<HTMLElement>(".pf-wrap");

      if (progress && wrap) {
        gsap.fromTo(
          progress,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: wrap, start: "top 60%", end: "bottom 75%", scrub: 0.5 },
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".pf-step").forEach((step) => {
        const node = step.querySelector<HTMLElement>(".pf-node");
        const body = step.querySelector<HTMLElement>(".pf-body");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: step, start: "top 72%", once: true },
        });
        if (body) tl.from(body, { opacity: 0, y: 24, duration: 0.6, ease: "power3.out" });
        if (node)
          tl.to(
            node,
            {
              backgroundColor: "#2b3a4a",
              borderColor: "#2b3a4a",
              color: "#f3efe7",
              duration: 0.4,
              ease: "power2.out",
            },
            0.05,
          );
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  return (
    <section ref={root} aria-label="Cómo funciona el sistema" className="edge py-[var(--s-10,128px)]">
      <Reveal className="mb-[var(--s-9,96px)] max-w-[52ch]">
        <p className="eyebrow mb-4">Cómo funciona</p>
        <AnimatedText
          as="h2"
          lines={["Del documento", "a la decisión."]}
          className="font-display text-h2 font-normal text-ink"
        />
        <p className="prose-editorial mt-6 text-ink-soft">
          Un mismo sistema, seis pasos: el documento entra, se vuelve dato y termina en una
          decisión con control operativo.
        </p>
      </Reveal>

      <div className="pf-wrap relative">
        <span aria-hidden className="absolute bottom-3 left-[13px] top-3 w-px bg-line-strong" />
        <span
          aria-hidden
          className="pf-progress absolute bottom-3 left-[13px] top-3 w-px origin-top bg-accent"
          style={reduced ? undefined : { transform: "scaleY(0)" }}
        />
        <ol className="flex flex-col gap-[var(--s-8,64px)]">
          {processSteps.map((s) => (
            <li key={s.n} className="pf-step grid grid-cols-[28px_1fr] items-start gap-5 md:gap-8">
              <span
                className={cn(
                  "pf-node flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[0.7rem]",
                  reduced
                    ? "border-accent bg-accent text-bg"
                    : "border-line-strong bg-bg text-muted",
                )}
              >
                {s.n}
              </span>
              <div className="pf-body">
                <h3 className="font-display text-h3 font-normal text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
