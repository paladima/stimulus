import { getStandalonePageBySlug, getSeoPageBySlug, standalonePagesEn, seoPagesEn } from "@/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import StandalonePageClient from "./StandalonePageClient";
import SeoPageClient from "./SeoPageClient";

interface Props {
  params: { locale: string; slug: string };
}

// Generate static params for all page slugs × all locales
export async function generateStaticParams() {
  const locales = ["en", "ru", "es"];
  const standaloneSlugs = standalonePagesEn.map(p => p.slug);
  const seoSlugs = seoPagesEn.map(p => p.slug);
  const allSlugs = [...standaloneSlugs, ...seoSlugs];
  return locales.flatMap(locale =>
    allSlugs.map(slug => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = params;
  const baseUrl = "https://only-fans.ai";
  const locales = ["en", "ru", "es"];

  // Try standalone first
  const standalonePage = await getStandalonePageBySlug(slug, locale);
  if (standalonePage) {
    const alternates: Record<string, string> = {};
    for (const loc of locales) {
      const prefix = loc === "en" ? "" : `/${loc}`;
      alternates[loc] = `${baseUrl}${prefix}/${slug}`;
    }
    return {
      title: standalonePage.title,
      description: standalonePage.description,
      keywords: standalonePage.keywords,
      alternates: {
        canonical: alternates[locale],
        languages: alternates,
      },
      openGraph: {
        title: standalonePage.title,
        description: standalonePage.description,
        url: alternates[locale],
        siteName: "Stimulus AI",
        type: "website",
      },
    };
  }

  // Try SEO page
  const seoPage = await getSeoPageBySlug(slug, locale);
  if (seoPage) {
    const alternates: Record<string, string> = {};
    for (const loc of locales) {
      const prefix = loc === "en" ? "" : `/${loc}`;
      alternates[loc] = `${baseUrl}${prefix}/${slug}`;
    }
    return {
      title: seoPage.title,
      description: seoPage.description,
      alternates: {
        canonical: alternates[locale],
        languages: alternates,
      },
      openGraph: {
        title: seoPage.title,
        description: seoPage.description,
        url: alternates[locale],
        siteName: "Stimulus AI",
        type: "website",
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: Props) {
  const { slug, locale } = params;

  // Try standalone first
  const standalonePage = await getStandalonePageBySlug(slug, locale);
  if (standalonePage) {
    return <StandalonePageClient page={standalonePage} locale={locale} />;
  }

  // Try SEO page
  const seoPage = await getSeoPageBySlug(slug, locale);
  if (seoPage) {
    return <SeoPageClient page={seoPage} locale={locale} />;
  }

  notFound();
}
