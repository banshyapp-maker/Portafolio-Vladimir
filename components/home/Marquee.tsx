const ITEMS = [
  "Automatización",
  "Gestión documental",
  "IA aplicada",
  "Dashboards",
  "Integraciones",
  "BPM",
];

/** Slow editorial ticker between sections. Decorative — hidden from AT. */
export function Marquee() {
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-bg-deep py-4">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-10 pr-10">
            {ITEMS.map((t) => (
              <span
                key={t}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-caption uppercase tracking-[0.18em] text-muted"
              >
                {t}
                <span className="text-faint">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
