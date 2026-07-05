"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { hero } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";

function usePanamaTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("es-PA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Panama",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

export function Hero() {
  const reduced = useReducedMotion();
  const time = usePanamaTime();

  return (
    <section aria-labelledby="hero-title" className="edge pt-[var(--header-h)] md:pb-8">
      <div className="screen-panel min-h-[calc(100svh-var(--header-h)-2rem)] bg-bg-deep">
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { scale: 1.05, opacity: 0.55 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        >
          <Image
            src="/images/foto-vladimir.jpg"
            alt={`${site.name} — retrato`}
            fill
            preload
            sizes="(max-width: 1360px) 100vw, 1360px"
            className="object-cover object-[53%_center] grayscale"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,8,.96)_0%,rgba(4,7,8,.75)_32%,rgba(4,7,8,.18)_64%,rgba(4,7,8,.65)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,7,8,.86)_0%,transparent_45%,rgba(4,7,8,.26)_100%)]" />

        <div className="relative z-10 flex min-h-[calc(100svh-var(--header-h)-2rem)] flex-col justify-between p-6 sm:p-10 lg:p-14">
          <motion.p
            className="eyebrow mt-5"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
          >
            {hero.eyebrow}
          </motion.p>

          <div className="max-w-[34rem] py-16">
            <motion.p
              className="font-display text-[clamp(1.35rem,2.2vw,2.1rem)] uppercase leading-none tracking-[0.08em] text-ink-soft"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            >
              Vladimir
            </motion.p>
            <motion.h1
              id="hero-title"
              className="font-display text-[clamp(4.7rem,10.5vw,9.8rem)] font-bold uppercase leading-[0.72] tracking-[-0.025em] text-ink"
              initial={reduced ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: EASE_OUT }}
            >
              Cornejo
            </motion.h1>
            <motion.p
              className="mt-6 max-w-[42ch] text-small leading-relaxed text-ink-soft"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE_OUT }}
            >
              {hero.tagline}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: EASE_OUT }}
            >
              <Link href="/about" className="outline-button">Sobre mí</Link>
              <Link href="/work" className="outline-button">Portafolio</Link>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.slice(0, 3).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-ink-soft transition-colors hover:text-accent-strong"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-muted">
              {site.location}{time ? ` · ${time} GMT−5` : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
