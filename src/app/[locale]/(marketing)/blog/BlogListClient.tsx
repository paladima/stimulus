"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { BlogPost } from "@/data";
import { Clock, ArrowRight, Tag } from "lucide-react";

interface Props {
  posts: BlogPost[];
  categories: readonly { id: string; label: string }[];
  locale: string;
}

export function BlogListClient({ posts, categories, locale }: Props) {
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-5xl font-bold text-[oklch(0.95_0.01_80)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h1>
          <p className="text-lg text-[oklch(0.55_0.01_280)] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[oklch(0.78_0.12_85)] text-[oklch(0.10_0.01_280)]"
                  : "bg-[oklch(0.15_0.01_280)] text-[oklch(0.60_0.01_280)] border border-[oklch(0.22_0.01_280)] hover:border-[oklch(0.78_0.12_85/0.3)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group rounded-2xl bg-[oklch(0.13_0.01_280)] border border-[oklch(0.22_0.01_280)] overflow-hidden hover:border-[oklch(0.78_0.12_85/0.3)] transition-all duration-300"
            >
              {/* Hero Image */}
              {post.heroImage && (
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6">
                {/* Category + Read Time */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[oklch(0.78_0.12_85/0.1)] text-[oklch(0.78_0.12_85)] text-xs font-medium">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[oklch(0.45_0.01_280)]">
                    <Clock size={12} />
                    {post.readTime} min
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-lg font-bold text-[oklch(0.90_0.01_80)] mb-2 group-hover:text-[oklch(0.78_0.12_85)] transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-[oklch(0.50_0.01_280)] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[oklch(0.78_0.12_85)] group-hover:gap-2 transition-all">
                  {t("readMore")}
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[oklch(0.45_0.01_280)] py-12">
            {t("noArticles")}
          </p>
        )}
      </div>
    </section>
  );
}
