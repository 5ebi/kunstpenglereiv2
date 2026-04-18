export type Project = {
  slug: string;
  titleDe: string;
  titleEn: string;
  categoryDe: string;
  categoryEn: string;
  cover: string;
  aspect: "portrait" | "landscape";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "vase-kupfer",
    titleDe: "Vase · Getrieben, Kupfer",
    titleEn: "Vase · Raised, copper",
    categoryDe: "Objekt",
    categoryEn: "Object",
    cover: "/placeholders/object-01.svg",
    aspect: "portrait",
    featured: true,
  },
  {
    slug: "hotel-interieur",
    titleDe: "Hotel-Interieur · Messing",
    titleEn: "Hotel interior · Brass",
    categoryDe: "Interieur",
    categoryEn: "Interior",
    cover: "/placeholders/object-02.svg",
    aspect: "landscape",
    featured: true,
  },
  {
    slug: "objekt-zink",
    titleDe: "Objekt · Zink",
    titleEn: "Object · Zinc",
    categoryDe: "Objekt",
    categoryEn: "Object",
    cover: "/placeholders/object-03.svg",
    aspect: "portrait",
    featured: true,
  },
  {
    slug: "leuchte-massanfertigung",
    titleDe: "Leuchte · Sonderanfertigung",
    titleEn: "Light · Bespoke",
    categoryDe: "Interieur",
    categoryEn: "Interior",
    cover: "/placeholders/object-04.svg",
    aspect: "portrait",
    featured: true,
  },
  {
    slug: "restaurierung",
    titleDe: "Restaurierung · Historische Beschläge",
    titleEn: "Restoration · Historic hardware",
    categoryDe: "Restaurierung",
    categoryEn: "Restoration",
    cover: "/placeholders/object-05.svg",
    aspect: "landscape",
  },
  {
    slug: "kuenstler-kollaboration",
    titleDe: "Künstler-Kollaboration · Wandarbeit",
    titleEn: "Artist collaboration · Wall piece",
    categoryDe: "Kollaboration",
    categoryEn: "Collaboration",
    cover: "/placeholders/object-06.svg",
    aspect: "portrait",
  },
];
