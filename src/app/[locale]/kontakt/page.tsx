import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";

export default async function KontaktPage({
  params,
}: PageProps<"/[locale]/kontakt">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="pt-24 md:pt-32 pb-32">
      <Container>
        <SectionHeading eyebrow={dict.kontakt.eyebrow}>
          {dict.kontakt.heading}
        </SectionHeading>
      </Container>

      <Container>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-12">
            <div>
              <p className="label mb-3">{dict.kontakt.labels.address}</p>
              <p className="font-serif text-2xl leading-snug">
                {dict.kontakt.address.company}
                <br />
                {dict.kontakt.address.street}
                <br />
                {dict.kontakt.address.city}
                <br />
                {dict.kontakt.address.country}
              </p>
            </div>

            <div>
              <p className="label mb-3">{dict.kontakt.labels.phone}</p>
              <a
                href="tel:+4313686300"
                className="font-serif text-2xl hover:text-[var(--color-accent)] transition-colors"
              >
                +43 1 368 63 00
              </a>
            </div>

            <div>
              <p className="label mb-3">{dict.kontakt.labels.email}</p>
              <a
                href="mailto:office@kunstspengler.at"
                className="font-serif text-2xl hover:text-[var(--color-accent)] transition-colors"
              >
                office@kunstspengler.at
              </a>
            </div>

            <div>
              <p className="label mb-3">{dict.kontakt.labels.hours}</p>
              <p className="font-serif text-2xl">{dict.kontakt.hours}</p>
            </div>
          </div>

          <div>
            <div className="aspect-[4/5] bg-[var(--color-bg-alt)] relative overflow-hidden">
              <iframe
                title="Kunstpenglerei Speiser — Billrothstraße 56, 1190 Wien"
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.344%2C48.241%2C16.358%2C48.249&layer=mapnik&marker=48.245%2C16.351"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <p className="label mt-4">
              Billrothstraße 56, Stiege 1 · 1190 Wien
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
