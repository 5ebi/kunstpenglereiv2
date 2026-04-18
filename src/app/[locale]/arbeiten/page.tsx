import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, type Locale } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export default async function ArbeitenPage({ params }: PageProps<"/[locale]/arbeiten">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main className="pt-24 md:pt-32 pb-32">
      <Container>
        <SectionHeading eyebrow={dict.arbeiten.eyebrow}>
          {dict.arbeiten.heading}
        </SectionHeading>
        <p className="max-w-2xl text-lg text-[var(--color-ink-muted)] mb-16">
          {dict.arbeiten.intro}
        </p>

        <div className="grid gap-12 md:gap-20 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.slug}
              className={idx % 3 === 1 ? "md:mt-24" : ""}
            >
              <ProjectCard project={project} locale={locale as Locale} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
