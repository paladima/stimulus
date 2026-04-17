import type { MetadataRoute } from "next";
import { standalonePagesEn, seoPagesEn, blogPostsEn } from "@/data";

const BASE_URL = "https://only-fans.ai";
const locales = ["en", "ru", "es"] as const;

function localizedUrl(path: string, locale: string): string {
  if (locale === "en") return `${BASE_URL}${path}`;
  return `${BASE_URL}/${locale}${path}`;
}

function alternatesForPath(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localizedUrl(path, locale);
  }
  languages["x-default"] = localizedUrl(path, "en");
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  // Homepage
  for (const locale of locales) {
    entries.push({
      url: localizedUrl("/", locale),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: alternatesForPath("/"),
    });
  }

  // Standalone pages
  for (const page of standalonePagesEn) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/${page.slug}`, locale),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: alternatesForPath(`/${page.slug}`),
      });
    }
  }

  // SEO pages
  for (const page of seoPagesEn) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/${page.slug}`, locale),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: alternatesForPath(`/${page.slug}`),
      });
    }
  }

  // Blog listing
  for (const locale of locales) {
    entries.push({
      url: localizedUrl("/blog", locale),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: alternatesForPath("/blog"),
    });
  }

  // Blog articles
  for (const post of blogPostsEn) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/blog/${post.slug}`, locale),
        lastModified: post.publishDate || now,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: alternatesForPath(`/blog/${post.slug}`),
      });
    }
  }

  // Privacy & Terms
  for (const page of ["privacy", "terms"]) {
    for (const locale of locales) {
      entries.push({
        url: localizedUrl(`/${page}`, locale),
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: alternatesForPath(`/${page}`),
      });
    }
  }

  return entries;
}
