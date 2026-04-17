import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service — Stimulus AI",
    description: "Read the terms of service for Stimulus AI. Understand your rights, responsibilities, and the conditions of using our platform.",
  };
}

export default async function TermsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container max-w-3xl py-24 lg:py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-[oklch(0.95_0.01_80)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
        Terms of Service
      </h1>
      <div className="prose prose-invert max-w-none text-[oklch(0.60_0.01_280)]">
        <p>Last updated: April 2026</p>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Stimulus AI, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        <h2>2. Use of Service</h2>
        <p>You agree to use Stimulus AI only for lawful purposes and in accordance with these terms. You must not use the service in any way that could damage or impair the service.</p>
        <h2>3. Account Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <h2>4. Intellectual Property</h2>
        <p>All content, features, and functionality of Stimulus AI are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
        <h2>5. Limitation of Liability</h2>
        <p>Stimulus AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
        <h2>7. Contact</h2>
        <p>For questions about these terms, please contact us at support@only-fans.ai.</p>
      </div>
    </div>
  );
}
