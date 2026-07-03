import Link from "next/link";

export default function NotFound() {
  return (
    <div className="edge flex min-h-[70vh] flex-col justify-center py-[var(--s-10,128px)]">
      <p className="eyebrow mb-5">Error 404</p>
      <h1 className="font-display text-h1 font-normal leading-[1.02] text-ink">
        Página no encontrada.
      </h1>
      <p className="mt-6 max-w-[44ch] text-lead text-ink-soft">
        La página que buscas no existe o se movió de lugar.
      </p>
      <Link
        href="/"
        className="link-underline mt-10 self-start font-mono text-small uppercase tracking-[0.14em] text-ink"
      >
        Volver al inicio&nbsp;→
      </Link>
    </div>
  );
}
