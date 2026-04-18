"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  current: Locale;
};

export function LanguageSwitcher({ current }: Props) {
  const pathname = usePathname() ?? `/${current}`;

  const swap = (target: Locale) => {
    const segments = pathname.split("/");
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = target;
      return segments.join("/") || `/${target}`;
    }
    return `/${target}`;
  };

  return (
    <nav aria-label="Language" className="flex items-center gap-2 text-xs uppercase tracking-[0.15em]">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 ? <span aria-hidden className="text-[var(--color-rule)]">·</span> : null}
          {l === current ? (
            <span className="text-[var(--color-ink)]">{l}</span>
          ) : (
            <Link
              href={swap(l)}
              className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {l}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
