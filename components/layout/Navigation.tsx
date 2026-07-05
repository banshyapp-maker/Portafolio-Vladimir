"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
      {site.nav.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors",
              active ? "text-accent-strong" : "text-muted hover:text-ink",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
