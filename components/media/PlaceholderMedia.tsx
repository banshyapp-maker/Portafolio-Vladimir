import Image from "next/image";
import { seedToPalette, blurDataURL, type Tint } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

interface PlaceholderMediaProps {
  seed: string;
  alt: string;
  /** e.g. "16/9", "4/3", or an exact "1917/957" to show a screenshot uncropped */
  aspect?: string;
  tint?: Tint;
  kind?: "image" | "diagram" | "video";
  /** When a real screenshot exists, pass it and it upgrades to next/image. */
  src?: string;
  /**
   * cover: fill the box (crops if aspect differs from the image).
   * contain: float the whole screenshot over the seeded art backdrop.
   */
  fit?: "cover" | "contain";
  /** Wrap the media in a browser-window chrome (bar + dots). */
  frame?: boolean;
  className?: string;
  preload?: boolean;
  sizes?: string;
  /** Small mono label — overlay top-left, or inside the bar when framed. */
  label?: string;
}

function DiagramMotif({ color }: { color: string }) {
  const nodes = [180, 420, 660, 900, 1020];
  const y = 375;
  return (
    <g stroke={color} strokeWidth="2" fill="none" opacity="0.32">
      {nodes.slice(0, -1).map((x, i) => (
        <line key={i} x1={x + 34} y1={y} x2={nodes[i + 1] - 34} y2={y} />
      ))}
      {nodes.map((x, i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 22 : 16} fill={color} fillOpacity={i === 2 ? 0.5 : 0.12} />
      ))}
    </g>
  );
}

/**
 * Polished, deterministic placeholder art (gradient + geometry + grain),
 * constrained to the editorial palette. Swaps to next/image when `src` is set.
 */
export function PlaceholderMedia({
  seed,
  alt,
  aspect = "16/9",
  tint = "neutral",
  kind = "image",
  src,
  fit = "cover",
  frame = false,
  className,
  preload,
  sizes = "(max-width: 768px) 100vw, 640px",
  label,
}: PlaceholderMediaProps) {
  const p = seedToPalette(seed, tint);
  // tint is part of the id: same-seed instances (base + hover layer) must not share defs
  const uid = `ph-${`${seed}-${tint}`.replace(/[^a-z0-9]/gi, "")}`;
  const ratio = aspect.replace("/", " / ");
  const decorative = Boolean(src) || !alt;

  const art = (
    <svg
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : alt}
      aria-hidden={decorative ? true : undefined}
      viewBox="0 0 1200 750"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={p.from} />
          <stop offset="1" stopColor={p.to} />
        </linearGradient>
        <filter id={`${uid}-n`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="1200" height="750" fill={`url(#${uid}-g)`} />
      <circle cx="980" cy="170" r="320" fill={p.accent} fillOpacity="0.05" />
      <rect x="0" y="500" width="1200" height="1" fill={p.ink} opacity="0.08" />
      <rect x="0" y="250" width="1200" height="1" fill={p.ink} opacity="0.05" />

      {kind === "diagram" && <DiagramMotif color={p.accent} />}

      <rect width="1200" height="750" filter={`url(#${uid}-n)`} opacity="0.05" />
    </svg>
  );

  const media = (
    <div
      className={cn("relative isolate overflow-hidden bg-surface-sunk", !frame && className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        fit === "contain" ? (
          <>
            {art}
            <div className="absolute inset-[6%]">
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized
                quality={95}
                sizes={sizes}
                preload={preload}
                className="object-contain drop-shadow-[0_18px_28px_rgba(26,25,22,0.28)]"
              />
            </div>
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            unoptimized
            quality={95}
            placeholder="blur"
            blurDataURL={blurDataURL(seed, tint)}
            sizes={sizes}
            preload={preload}
            className="object-cover"
          />
        )
      ) : (
        art
      )}

      {label && !frame && (
        <span className="eyebrow absolute left-4 top-4 z-10 text-ink/70">{label}</span>
      )}
    </div>
  );

  if (!frame) return media;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[3px] border border-line-strong bg-surface shadow-[0_1px_0_rgba(26,25,22,0.05),0_28px_56px_-28px_rgba(26,25,22,0.3)]",
        className,
      )}
    >
      <div aria-hidden className="flex items-center gap-1.5 border-b border-line bg-bg-deep px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        <span className="h-2 w-2 rounded-full border border-line-strong" />
        {label && (
          <span className="ml-2.5 truncate font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
            {label}
          </span>
        )}
      </div>
      {media}
    </div>
  );
}
