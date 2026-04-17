import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";
import { getBlogPosts, blogCategories } from "@/data";
import { BlogListClient } from "./BlogListClient";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const titles: Record<string, string> = {
    en: "Blog — OnlyFans AI Automation Insights | Stimulus AI",
    ru: "Блог — Инсайты по ИИ-автоматизации OnlyFans | Stimulus AI",
    es: "Blog — Perspectivas sobre automatización IA de OnlyFans | Stimulus AI",
  };
  const descriptions: Record<string, string> = {
    en: "Expert guides, case studies, and strategies for OnlyFans creators and agencies using AI chat automation. Boost revenue with Stimulus AI.",
    ru: "Экспертные руководства, кейсы и стратегии для создателей и агентств OnlyFans, использующих ИИ-автоматизацию чатов. Увеличьте доход со Stimulus AI.",
    es: "Guías expertas, estudios de caso y estrategias para creadores y agencias de OnlyFans que usan automatización de chat con IA. Aumenta ingresos con Stimulus AI.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: locale === 'en' ? 'https://only-fans.ai/blog' : `https://only-fans.ai/${locale}/blog`,
      languages: Object.fromEntries(
        locales.map((l) => [l, l === 'en' ? 'https://only-fans.ai/blog' : `https://only-fans.ai/${l}/blog`])
      ),
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  setRequestLocale(locale);

  const posts = await getBlogPosts(locale);

  return <BlogListClient posts={posts} categories={[...blogCategories]} locale={locale} />;
}
