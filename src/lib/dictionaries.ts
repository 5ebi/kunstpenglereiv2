import "server-only";

import de from "@/dictionaries/de.json";
import en from "@/dictionaries/en.json";
import type { Locale } from "./i18n";

const dictionaries = {
  de: () => Promise.resolve(de),
  en: () => Promise.resolve(en),
} as const;

export type Dictionary = typeof de;

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
