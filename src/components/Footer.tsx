import Link from "next/link";
import { Container } from "./Container";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-[var(--color-rule)] py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-1 text-sm text-[var(--color-ink-muted)]">
            <p className="font-serif text-[var(--color-ink)] text-lg">
              {dict.kontakt.address.company}
            </p>
            <p>{dict.kontakt.address.street}</p>
            <p>{dict.kontakt.address.city}</p>
            <p>
              <a href="tel:+4313686300" className="hover:text-[var(--color-ink)] transition-colors">
                +43 1 368 63 00
              </a>
              {" · "}
              <a
                href="mailto:office@kunstspengler.at"
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                office@kunstspengler.at
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.15em] text-[var(--color-ink-muted)]">
            <Link
              href={`/${locale}/kontakt`}
              className="hover:text-[var(--color-ink)] transition-colors"
            >
              {dict.footer.impressum}
            </Link>
            <span>© {year}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
