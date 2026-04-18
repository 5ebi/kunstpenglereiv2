import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";

export default async function LeistungenPage({
  params,
}: PageProps<"/[locale]/leistungen">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="pt-24 md:pt-32 pb-32">
      <Container>
        <SectionHeading eyebrow={dict.leistungen.eyebrow}>
          {dict.leistungen.heading}
        </SectionHeading>
      </Container>

      <Container>
        <dl className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
          {dict.leistungen.items.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-16 py-10"
            >
              <dt className="font-serif text-2xl leading-tight">{item.title}</dt>
              <dd className="text-[var(--color-ink-muted)] text-lg leading-relaxed max-w-2xl">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </main>
  );
}
