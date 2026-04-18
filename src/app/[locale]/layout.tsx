import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales, type Locale } from "@/lib/i18n";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kunstpenglerei Speiser · Feine Metallarbeiten aus Wien",
    template: "%s · Kunstpenglerei Speiser",
  },
  description:
    "Kunstpenglerei Andreas Speiser — feine Metallarbeiten aus Wien-Döbling. Vasen, Objekte, Interieur. In dritter Generation.",
  metadataBase: new URL("https://kunstpenglereiv2.vercel.app"),
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${ebGaramond.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header locale={locale as Locale} dict={dict} />
        <div className="flex-1">{children}</div>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
