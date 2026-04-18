import Link from "next/link";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: Props) {
  const base = `/${locale}`;
  const navItems: [string, string][] = [
    [`${base}/atelier`, dict.nav.atelier],
    [`${base}/arbeiten`, dict.nav.arbeiten],
    [`${base}/leistungen`, dict.nav.leistungen],
    [`${base}/referenzen`, dict.nav.referenzen],
    [`${base}/kontakt`, dict.nav.kontakt],
  ];

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur border-b border-[var(--color-rule)]">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link
            href={base}
            className="font-serif text-lg tracking-tight hover:text-[var(--color-accent)] transition-colors"
          >
            {dict.brand.wordmark}
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <LanguageSwitcher current={locale} />
          </div>
        </div>
        <nav className="md:hidden flex flex-wrap gap-x-5 gap-y-2 pb-4 text-sm">
          {navItems.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
