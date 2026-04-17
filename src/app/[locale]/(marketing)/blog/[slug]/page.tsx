import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";
import { getBlogPostBySlug, blogPostsEn } from "@/data";
import { BlogArticleClient } from "./BlogArticleClient";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of blogPostsEn) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const { locale, slug } = params;
  const post = await getBlogPostBySlug(slug, locale);

  if (!post) return { title: "Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: locale === 'en' ? `https://only-fans.ai/blog/${slug}` : `https://only-fans.ai/${locale}/blog/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, l === 'en' ? `https://only-fans.ai/blog/${slug}` : `https://only-fans.ai/${l}/blog/${slug}`])
      ),
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  setRequestLocale(locale);

  const post = await getBlogPostBySlug(slug, locale);
  if (!post) notFound();

  return <BlogArticleClient post={post} locale={locale} />;
}
