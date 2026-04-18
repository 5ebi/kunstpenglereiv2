import Image from "next/image";
import type { Project } from "@/lib/projects";
import type { Locale } from "@/lib/i18n";

type Props = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: Props) {
  const title = locale === "de" ? project.titleDe : project.titleEn;
  const category = locale === "de" ? project.categoryDe : project.categoryEn;
  const aspectClass = project.aspect === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]";

  return (
    <figure className="group">
      <div
        className={`relative overflow-hidden bg-[var(--color-bg-alt)] ${aspectClass}`}
      >
        <Image
          src={project.cover}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-serif text-lg">{title}</span>
        <span className="label shrink-0">{category}</span>
      </figcaption>
    </figure>
  );
}
