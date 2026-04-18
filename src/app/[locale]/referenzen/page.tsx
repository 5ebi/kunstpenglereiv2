import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";
import { categoryOrder, clients, type ClientCategory } from "@/lib/clients";

export default async function ReferenzenPage({
  params,
}: PageProps<"/[locale]/referenzen">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const grouped = categoryOrder
    .map((cat) => ({ cat, items: clients.filter((c) => c.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <main className="pt-24 md:pt-32 pb-32">
      <Container>
        <SectionHeading eyebrow={dict.referenzen.eyebrow}>
          {dict.referenzen.heading}
        </SectionHeading>
        <p className="max-w-2xl text-lg text-[var(--color-ink-muted)] mb-16">
          {dict.referenzen.intro}
        </p>

        <div className="space-y-16">
          {grouped.map(({ cat, items }) => (
            <section key={cat}>
              <p className="label mb-6">
                {dict.referenzen.categories[cat as ClientCategory]}
              </p>
              <ul className="divide-y divide-[var(--color-rule)] border-y border-[var(--color-rule)]">
                {items.map((c) => (
                  <li
                    key={`${c.name}-${c.location ?? ""}`}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <span className="font-serif text-xl md:text-2xl">
                      {c.name}
                      {c.tbd ? (
                        <span className="ml-3 align-middle text-xs uppercase tracking-[0.15em] text-[var(--color-accent)]">
                          [TBD]
                        </span>
                      ) : null}
                    </span>
                    {c.location ? (
                      <span className="label">{c.location}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
