"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/uGksgNLtoiWnRbuw.png";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const productLinks = [
    { label: tNav("howItWorks"), href: "/how-it-works" },
    { label: tNav("features"), href: "/features" },
    { label: tNav("interface"), href: "/interface" },
    { label: tNav("calculator"), href: "/calculator" },
  ];

  const resourceLinks = [
    { label: tNav("blog"), href: "/blog" },
    { label: tNav("faq"), href: "/faq" },
    { label: tNav("about"), href: "/about" },
  ];

  const legalLinks = [
    { label: t("privacy"), href: "/privacy" },
    { label: t("terms"), href: "/terms-service" },
  ];

  return (
    <footer className="border-t border-obsidian-border bg-obsidian py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src={LOGO_URL} alt="Stimulus AI" className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-foreground-subtle leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("product")}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("resources")}
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t("legal")}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-obsidian-border text-center">
          <p className="text-sm text-foreground-subtle">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
