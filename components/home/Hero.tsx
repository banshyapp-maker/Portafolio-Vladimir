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
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section aria-labelledby="hero-title" className="relative min-h-svh w-full overflow-hidden bg-bg-deep">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduced ? false : { scale: 1.05, opacity: 0.55 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE_OUT }}
        >
          <Image
            src="/images/hero-video-poster.jpeg"
            alt="Código y métricas digitales superpuestos sobre un teclado"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
          {!reduced && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
              aria-hidden="true"
              tabIndex={-1}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${videoReady ? "opacity-100" : "opacity-0"}`}
            >
              <source src="/videos/hero-background.mp4?v=desktop" type="video/mp4" />
            </video>
          )}
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,8,.9)_0%,rgba(4,7,8,.68)_28%,rgba(4,7,8,.12)_65%,rgba(4,7,8,.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(4,7,8,.84)_0%,transparent_46%,rgba(4,7,8,.42)_100%)]" />
      </div>

        <div className="relative z-10 flex min-h-svh flex-col justify-between px-[var(--gutter)] pb-7 pt-[calc(var(--header-h)+2rem)] sm:pb-10 lg:pb-12">
          <motion.p
            className="eyebrow mt-5"
            initial={reduced ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
          >
            {hero.eyebrow}
          </motion.p>

          <div className="max-w-[34rem] py-12">
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
              {site.socials
                .filter((social) => social.label !== "WhatsApp" && social.label !== "Email")
                .map((social) => (
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
    </section>
  );
}
