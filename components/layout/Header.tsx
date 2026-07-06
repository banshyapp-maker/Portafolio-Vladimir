"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = false;
    const onScroll = () => {
      const next = window.scrollY > 8;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    };
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <div className="edge flex h-[var(--header-h)] items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name} — inicio`}
          className="font-mono text-caption uppercase tracking-[0.18em] text-ink"
        >
          Vladimir Cornejo
        </Link>
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}
