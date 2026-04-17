import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stimulus AI",
  description: "AI-powered automation for OnlyFans agencies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root layout renders children directly — the [locale]/layout.tsx
  // provides <html> and <body> with the correct lang attribute.
  // For non-locale routes (admin), we wrap with default html/body.
  return children;
}
