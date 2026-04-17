import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ru", "es"] as const;
export const defaultLocale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
});
