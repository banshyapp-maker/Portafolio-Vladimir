"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { site } from "@/data/site";
import { hero } from "@/data/content";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { EASE_OUT } from "@/lib/motion";

function usePanamaTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("es-PA", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "America/Panama",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Hero() {
  const reduced = useReducedMotion();
  const time = usePanamaTime();

  return (
    <section
      aria-labelledby="hero-title"
      className="flex h-dvh min-h-[600px] flex-col overflow-hidden"
    >
      {/* Photo */}
      <motion.div
        className="w-full flex-shrink-0 overflow-hidden"
        initial={reduced ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE_OUT }}
      >
        <Image
          src="/images/foto-vladimir.jpg"
          alt={`${site.name} — retrato`}
          width={1888}
          height={560}
          className="block h-auto w-full"
          preload
          unoptimized
        />
      </motion.div>

      {/* Text section */}
      <div className="flex flex-1 flex-col justify-between px-[var(--gutter)] pb-[var(--s-7,48px)] pt-6">

        {/* Top eyebrow */}
        <motion.p
          className="eyebrow text-muted"
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
        >
          {hero.eyebrow}
        </motion.p>

        {/* Name + location + role + tagline */}
        <div>
          <motion.h1
            id="hero-title"
            className="font-display font-normal leading-[0.88] text-ink"
            style={{ fontSize: "clamp(3rem, 9vw, 11rem)" }}
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE_OUT }}
          >
            {site.name}
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-[1.05rem] font-normal text-ink-soft"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT }}
          >
            {site.location}
            <span className="text-muted">
              {time ? ` · ${time} GMT−5` : ""}
            </span>
          </motion.p>

          <motion.p
            className="mt-4 max-w-[52ch] font-display text-[0.88rem] font-normal italic leading-[1.6] text-muted"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95, ease: EASE_OUT }}
          >
            {hero.tagline}
          </motion.p>
        </div>

      </div>
    </section>
  );
}
