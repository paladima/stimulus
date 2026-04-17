import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const seoByLocale: Record<string, { title: string; description: string }> = {
  en: {
    title: "Stimulus AI — #1 OnlyFans AI Chatter & Automation Platform (2026)",
    description:
      "Stimulus AI automates OnlyFans chats, PPV sales, and content delivery 24/7. Replace human chatters, boost revenue 2-3x, and scale your agency with AI. Start free today.",
  },
  ru: {
    title: "Stimulus AI — ИИ-чаттер для OnlyFans №1 | Автоматизация чатов и продаж (2026)",
    description:
      "Stimulus AI автоматизирует чаты OnlyFans, продажи PPV и доставку контента 24/7. Замените чаттеров на ИИ, увеличьте доход в 2-3 раза и масштабируйте агентство.",
  },
  es: {
    title: "Stimulus AI — Chatter IA para OnlyFans #1 | Automatización de Chats y Ventas (2026)",
    description:
      "Stimulus AI automatiza chats de OnlyFans, ventas PPV y entrega de contenido 24/7. Reemplaza chatters humanos, aumenta ingresos 2-3x y escala tu agencia con IA.",
  },
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const seo = seoByLocale[locale] || seoByLocale.en;
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "https://only-fans.ai",
      languages: {
        en: "https://only-fans.ai",
        ru: "https://only-fans.ai/ru",
        es: "https://only-fans.ai/es",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: "https://only-fans.ai",
      siteName: "Stimulus AI",
      type: "website",
    },
  };
}

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return <HomeClient />;
}
