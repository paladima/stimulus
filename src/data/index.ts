/**
 * Unified data loader for locale-specific content.
 * English data is the source of truth; RU/ES are translated copies.
 * If a translation is missing, falls back to English.
 */

import type { StandalonePageData } from "./standalonePages.en";
import type { SeoPageData } from "./seoPages.en";
import type { BlogPost } from "./blogPosts.en";
import { standalonePages as standalonePagesEn } from "./standalonePages.en";
import { seoPages as seoPagesEn } from "./seoPages.en";
import { blogPosts as blogPostsEn, blogCategories } from "./blogPosts.en";

// ── Standalone Pages ──

let standalonePagesRu: StandalonePageData[] | null = null;
let standalonePagesEs: StandalonePageData[] | null = null;

async function loadStandaloneRu(): Promise<StandalonePageData[]> {
  if (!standalonePagesRu) {
    try {
      const mod = await import("./standalonePages.ru");
      standalonePagesRu = mod.standalonePages;
    } catch {
      standalonePagesRu = standalonePagesEn;
    }
  }
  return standalonePagesRu;
}

async function loadStandaloneEs(): Promise<StandalonePageData[]> {
  if (!standalonePagesEs) {
    try {
      const mod = await import("./standalonePages.es");
      standalonePagesEs = mod.standalonePages;
    } catch {
      standalonePagesEs = standalonePagesEn;
    }
  }
  return standalonePagesEs;
}

export async function getStandalonePages(locale: string): Promise<StandalonePageData[]> {
  switch (locale) {
    case "ru": return loadStandaloneRu();
    case "es": return loadStandaloneEs();
    default: return standalonePagesEn;
  }
}

export async function getStandalonePageBySlug(slug: string, locale: string): Promise<StandalonePageData | undefined> {
  const pages = await getStandalonePages(locale);
  return pages.find(p => p.slug === slug);
}

// ── SEO Pages ──

let seoPagesRu: SeoPageData[] | null = null;
let seoPagesEs: SeoPageData[] | null = null;

async function loadSeoRu(): Promise<SeoPageData[]> {
  if (!seoPagesRu) {
    try {
      const mod = await import("./seoPages.ru");
      seoPagesRu = mod.seoPages;
    } catch {
      seoPagesRu = seoPagesEn;
    }
  }
  return seoPagesRu;
}

async function loadSeoEs(): Promise<SeoPageData[]> {
  if (!seoPagesEs) {
    try {
      const mod = await import("./seoPages.es");
      seoPagesEs = mod.seoPages;
    } catch {
      seoPagesEs = seoPagesEn;
    }
  }
  return seoPagesEs;
}

export async function getSeoPages(locale: string): Promise<SeoPageData[]> {
  switch (locale) {
    case "ru": return loadSeoRu();
    case "es": return loadSeoEs();
    default: return seoPagesEn;
  }
}

export async function getSeoPageBySlug(slug: string, locale: string): Promise<SeoPageData | undefined> {
  const pages = await getSeoPages(locale);
  return pages.find(p => p.slug === slug);
}

// ── Blog Posts ──

let blogPostsRu: BlogPost[] | null = null;
let blogPostsEs: BlogPost[] | null = null;

async function loadBlogRu(): Promise<BlogPost[]> {
  if (!blogPostsRu) {
    try {
      const mod = await import("./blogPosts.ru");
      blogPostsRu = mod.blogPosts;
    } catch {
      blogPostsRu = blogPostsEn;
    }
  }
  return blogPostsRu;
}

async function loadBlogEs(): Promise<BlogPost[]> {
  if (!blogPostsEs) {
    try {
      const mod = await import("./blogPosts.es");
      blogPostsEs = mod.blogPosts;
    } catch {
      blogPostsEs = blogPostsEn;
    }
  }
  return blogPostsEs;
}

export async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  switch (locale) {
    case "ru": return loadBlogRu();
    case "es": return loadBlogEs();
    default: return blogPostsEn;
  }
}

export async function getBlogPostBySlug(slug: string, locale: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts(locale);
  return posts.find(p => p.slug === slug);
}

export { standalonePagesEn, seoPagesEn, blogPostsEn, blogCategories };
export type { StandalonePageData, SeoPageData, BlogPost };
