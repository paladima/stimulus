"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { BlogPost } from "@/data";
import { ArrowLeft, Clock, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Props {
  post: BlogPost;
  locale: string;
}

export function BlogArticleClient({ post, locale }: Props) {
  const t = useTranslations("blog");

  return (
    <article className="py-24 lg:py-32">
      <div className="container max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-[oklch(0.55_0.01_280)] hover:text-[oklch(0.78_0.12_85)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {t("backToBlog")}
        </Link>

        {/* Hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[oklch(0.78_0.12_85/0.1)] text-[oklch(0.78_0.12_85)] text-xs font-medium">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[oklch(0.45_0.01_280)]">
              <Calendar size={12} />
              {new Date(post.publishDate).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-xs text-[oklch(0.45_0.01_280)]">
              <Clock size={12} />
              {post.readTime} min read
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.95_0.01_80)] leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.h1}
          </h1>

          <p className="text-lg text-[oklch(0.55_0.01_280)] leading-relaxed">
            {post.excerpt}
          </p>

          <p className="mt-4 text-sm text-[oklch(0.45_0.01_280)]">
            {t("by")} {post.author}
          </p>
        </header>

        {/* Hero Image */}
        {post.heroImage && (
          <div className="rounded-2xl overflow-hidden mb-12 border border-[oklch(0.22_0.01_280)]">
            <img
              src={post.heroImage}
              alt={post.h1}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Sections */}
        <div className="prose-stimulus space-y-10">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2
                className="text-2xl font-bold text-[oklch(0.92_0.01_80)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {section.h2}
              </h2>

              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-base text-[oklch(0.60_0.01_280)] leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 my-4">
                  {section.bullets.map((bullet, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-sm text-[oklch(0.55_0.01_280)]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.12_85)] flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto my-6 rounded-xl border border-[oklch(0.22_0.01_280)]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[oklch(0.15_0.01_280)]">
                        {section.table.headers.map((h, hi) => (
                          <th
                            key={hi}
                            className="px-4 py-3 text-left font-semibold text-[oklch(0.78_0.12_85)]"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr
                          key={ri}
                          className="border-t border-[oklch(0.18_0.01_280)]"
                        >
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-3 text-[oklch(0.55_0.01_280)]"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl font-bold text-[oklch(0.92_0.01_80)] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("faq")}
            </h2>
            <div className="space-y-3">
              {post.faq.map((item, i) => (
                <FaqItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-[oklch(0.15_0.01_280)] border border-[oklch(0.22_0.01_280)] text-xs text-[oklch(0.50_0.01_280)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[oklch(0.78_0.12_85/0.1)] to-[oklch(0.78_0.12_85/0.05)] border border-[oklch(0.78_0.12_85/0.2)] text-center">
          <h3
            className="text-2xl font-bold text-[oklch(0.95_0.01_80)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("ctaTitle")}
          </h3>
          <p className="text-[oklch(0.55_0.01_280)] mb-6 max-w-lg mx-auto">
            {t("ctaDescription")}
          </p>
          <a
            href="https://stimulus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[oklch(0.78_0.12_85)] text-[oklch(0.10_0.01_280)] font-semibold text-sm hover:bg-[oklch(0.85_0.10_85)] transition-all duration-300"
          >
            {t("ctaButton")}
          </a>
        </div>
      </div>
    </article>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[oklch(0.22_0.01_280)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[oklch(0.13_0.01_280)] transition-colors"
      >
        <span className="text-sm font-semibold text-[oklch(0.88_0.01_80)] pr-4">
          {question}
        </span>
        {open ? (
          <ChevronUp size={18} className="text-[oklch(0.78_0.12_85)] flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-[oklch(0.50_0.01_280)] flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-[oklch(0.55_0.01_280)] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
