"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navigation() {
  const pathname = usePathname();
  const items = site.nav.filter((n) => n.href !== "/");

  return (
    <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
      {items.map((item) => {
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
              "link-underline font-mono text-caption uppercase tracking-[0.14em] transition-colors",
              active ? "text-ink" : "text-muted hover:text-ink",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
