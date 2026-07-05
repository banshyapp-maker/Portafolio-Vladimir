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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          VC<span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-8">
          <Navigation />
          <a
            href="https://wa.me/50768384242"
            className="hidden font-mono text-[0.65rem] tracking-[0.08em] text-muted transition-colors hover:text-accent-strong lg:block"
          >
            +507 6838-4242
          </a>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
