"use client";

import { useLenis } from "@/components/providers/LenisProvider";

export function BackToTop() {
  const lenis = useLenis();

  function toTop() {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={toTop}
      className="eyebrow link-underline self-start text-ink-soft transition-colors hover:text-ink"
    >
      Volver arriba ↑
    </button>
  );
}
