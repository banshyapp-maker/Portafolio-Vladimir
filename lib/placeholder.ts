/**
 * Deterministic, palette-constrained placeholder art.
 * The same seed always yields the same warm-bone gradient + ink accent,
 * so layouts look designed before real screenshots exist.
 */

export type Tint = "accent" | "neutral" | "warm" | "cool";

function hash(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export interface PlaceholderPalette {
  from: string;
  to: string;
  ink: string;
  accent: string;
  angle: number;
}

export function seedToPalette(seed: string, tint: Tint = "neutral"): PlaceholderPalette {
  const h = hash(seed);
  const base = 28 + (h % 22); // warm 28–50deg band (paper)
  const angle = 105 + (h % 70);

  const warmFrom = `hsl(${base} 30% 93%)`;
  const warmTo = `hsl(${base + 8} 26% 82%)`;

  const palettes: Record<Tint, Pick<PlaceholderPalette, "from" | "to">> = {
    neutral: { from: warmFrom, to: warmTo },
    warm: { from: `hsl(${base - 4} 38% 90%)`, to: `hsl(${base + 14} 34% 78%)` },
    cool: { from: `hsl(${(base + 180) % 360} 14% 90%)`, to: `hsl(208 18% 80%)` },
    accent: { from: warmFrom, to: `hsl(208 22% 74%)` },
  };

  return {
    ...palettes[tint],
    ink: "#1a1916",
    accent: "#2b3a4a",
    angle,
  };
}

/** A tiny deterministic SVG used as next/image blurDataURL when a real src exists. */
export function blurDataURL(seed: string, tint: Tint = "neutral"): string {
  const p = seedToPalette(seed, tint);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='10'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${p.from}'/><stop offset='1' stop-color='${p.to}'/></linearGradient></defs><rect width='16' height='10' fill='url(%23g)'/></svg>`;
  return `data:image/svg+xml;utf8,${svg.replace(/#/g, "%23")}`;
}
