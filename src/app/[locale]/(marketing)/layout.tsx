import { setRequestLocale } from "next-intl/server";
import MarketingShell from "./MarketingShell";

export default function MarketingLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return <MarketingShell>{children}</MarketingShell>;
}
