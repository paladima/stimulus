"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import type { SeoPageData, SeoSection } from "@/data/seoPages.en";

interface Props {
  page: SeoPageData;
  locale: string;
}

function SectionBlock({ section, index }: { section: SeoSection; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <h2
        className="text-2xl lg:text-3xl font-bold text-[oklch(0.92_0.01_80)] mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {section.h2}
      </h2>

      {section.h3 && (
        <h3
          className="text-xl font-semibold text-[oklch(0.85_0.01_80)] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {section.h3}
        </h3>
      )}

      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-base text-[oklch(0.55_0.01_280)] leading-relaxed mb-4">
          {p}
        </p>
      ))}

      {section.bullets && (
        <ul className="mt-4 mb-6 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[oklch(0.60_0.01_280)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.12_85)] flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-6 mb-8 rounded-xl border border-[oklch(0.22_0.01_280)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[oklch(0.15_0.01_280)]">
                  {section.table.headers.map((h, i) => (
                    <th
                      key={i}
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
                    className={`border-t border-[oklch(0.20_0.01_280)] ${
                      ri % 2 === 0 ? "bg-[oklch(0.11_0.01_280)]" : "bg-[oklch(0.12_0.01_280)]"
                    }`}
                  >
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-[oklch(0.60_0.01_280)]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-[oklch(0.22_0.01_280)] bg-[oklch(0.12_0.01_280)] overflow-hidden transition-colors hover:border-[oklch(0.30_0.01_280)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span
          className="text-base font-semibold text-[oklch(0.88_0.01_80)] pr-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-[oklch(0.50_0.01_280)] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-[oklch(0.55_0.01_280)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function SeoPageClient({ page, locale }: Props) {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.50_0.01_280)] hover:text-[oklch(0.78_0.12_85)] transition-colors"
          >
            <ArrowLeft size={14} />
            {t("backToHome")}
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.95_0.01_80)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {page.h1}
          </h1>
          <p className="text-lg text-[oklch(0.55_0.01_280)] leading-relaxed mb-6">
            {page.intro}
          </p>

          {/* Hero bullets */}
          {page.heroBullets && page.heroBullets.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {page.heroBullets.map((bullet, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.78_0.12_85/0.1)] border border-[oklch(0.78_0.12_85/0.2)] text-sm text-[oklch(0.78_0.12_85)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.12_85)]" />
                  {bullet}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {page.sections.map((section, i) => (
            <SectionBlock key={i} section={section} index={i} />
          ))}
        </div>

        {/* FAQ */}
        {page.faq.length > 0 && (
          <div className="max-w-3xl mx-auto mt-20">
            <h2
              className="text-2xl lg:text-3xl font-bold text-[oklch(0.92_0.01_80)] mb-8 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FAQ
            </h2>
            <div className="space-y-3">
              {page.faq.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <a
            href="https://stimulus.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[oklch(0.78_0.12_85)] text-[oklch(0.10_0.01_280)] font-semibold text-base hover:bg-[oklch(0.85_0.10_85)] transition-all duration-300 gold-glow"
          >
            {page.ctaText}
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Related pages */}
        {page.relatedPages.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-lg font-semibold text-[oklch(0.70_0.01_280)] mb-4">
              {locale === "ru" ? "Связанные страницы" : locale === "es" ? "Páginas relacionadas" : "Related"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {page.relatedPages.map((rp, i) => (
                <Link
                  key={i}
                  href={`/${rp.slug}`}
                  className="px-4 py-2 rounded-lg border border-[oklch(0.22_0.01_280)] text-sm text-[oklch(0.60_0.01_280)] hover:border-[oklch(0.78_0.12_85/0.4)] hover:text-[oklch(0.78_0.12_85)] transition-colors"
                >
                  {rp.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
