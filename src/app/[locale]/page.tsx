import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 md:pt-40 pb-24 md:pb-32">
        <Container>
          <p className="label mb-8">{dict.home.eyebrow}</p>
          <h1 className="max-w-4xl">{dict.home.heading}</h1>
          <p className="mt-10 max-w-xl text-lg text-[var(--color-ink-muted)]">
            {dict.home.intro}
          </p>
        </Container>
      </section>

      {/* Featured works */}
      <section className="py-24 md:py-32 border-t border-[var(--color-rule)]">
        <Container>
          <SectionHeading eyebrow={dict.nav.arbeiten}>
            {dict.home.featuredHeading}
          </SectionHeading>
          <div className="grid gap-10 md:gap-16 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/${locale}/arbeiten`}
                className="block"
              >
                <ProjectCard project={project} locale={locale as Locale} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Studio teaser + CTA */}
      <section className="py-24 md:py-32 border-t border-[var(--color-rule)]">
        <Container narrow>
          <p className="label mb-6">{dict.atelier.eyebrow}</p>
          <h2 className="mb-8">{dict.atelier.heading}</h2>
          <p className="text-lg text-[var(--color-ink-muted)]">
            {dict.atelier.body[0]}
          </p>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <Link
              href={`/${locale}/atelier`}
              className="border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              {dict.home.aboutLink}
            </Link>
            <Link
              href={`/${locale}/kontakt`}
              className="border-b border-[var(--color-ink)] pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
            >
              {dict.home.contactCta}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
