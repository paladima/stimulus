"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { routing } from "@/i18n/routing";
import { Link, usePathname } from "@/i18n/navigation";

const locales = routing.locales;
type Locale = (typeof locales)[number];

const localeNames: Record<string, string> = {
  en: "English",
  ru: "Русский",
  es: "Español",
};

const LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/uGksgNLtoiWnRbuw.png";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("howItWorks"), href: "/how-it-works" },
    { label: t("features"), href: "/features" },
    { label: t("interface"), href: "/interface" },
    { label: t("calculator"), href: "/calculator" },
    { label: t("faq"), href: "/faq" },
    { label: t("blog"), href: "/blog" },
  ];

  // next-intl Link handles locale prefixing automatically
  // For language switching, we just need the current path
  const currentPath = pathname || "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.10_0.01_280/0.9)] backdrop-blur-xl border-b border-obsidian-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src={LOGO_URL} alt="Stimulus AI" className="h-8 lg:h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted hover:text-gold transition-colors duration-300 font-body"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-foreground-muted hover:text-gold transition-colors"
            >
              <Globe size={16} />
              <span className="uppercase">{locale}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-obsidian-light border border-obsidian-border rounded-lg py-1 min-w-[140px] shadow-xl z-50">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={currentPath}
                    locale={loc}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-obsidian-lighter transition-colors ${
                      loc === locale ? "text-gold" : "text-foreground-muted"
                    }`}
                  >
                    {localeNames[loc]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gold text-obsidian hover:bg-gold-light transition-all duration-300 font-body"
          >
            {t("startNow")}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-obsidian-light border-t border-obsidian-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base text-foreground-muted hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-3 pt-2 border-t border-obsidian-border">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={currentPath}
                locale={loc}
                onClick={() => setMobileOpen(false)}
                className={`text-sm px-3 py-1.5 rounded-md ${
                  loc === locale
                    ? "bg-gold text-obsidian font-medium"
                    : "text-foreground-muted hover:text-gold"
                }`}
              >
                {localeNames[loc]}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenContact?.();
            }}
            className="block w-full text-center px-5 py-3 text-sm font-medium rounded-lg bg-gold text-obsidian"
          >
            {t("startNow")}
          </button>
        </div>
      )}
    </nav>
  );
}
