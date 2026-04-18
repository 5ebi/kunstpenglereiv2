import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";

export default async function AtelierPage({ params }: PageProps<"/[locale]/atelier">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="pt-24 md:pt-32 pb-32">
      <Container>
        <SectionHeading eyebrow={dict.atelier.eyebrow}>
          {dict.atelier.heading}
        </SectionHeading>
      </Container>

      <Container narrow className="space-y-6 text-lg leading-relaxed">
        {dict.atelier.body.map((para, i) => (
          <p key={i} className={i === 0 ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)]"}>
            {para}
          </p>
        ))}
      </Container>

      <Container className="mt-24">
        <figure className="max-w-[860px] mx-auto">
          <div className="relative aspect-[4/5] bg-[var(--color-bg-alt)]">
            <Image
              src="/placeholders/object-02.svg"
              alt="Andreas Speiser"
              fill
              sizes="(min-width: 768px) 860px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="label mt-4 text-center">
            {dict.atelier.portraitCaption}
          </figcaption>
        </figure>
      </Container>
    </main>
  );
}
