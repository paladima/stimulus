import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: "Privacy Policy — Stimulus AI",
    description: "Learn how Stimulus AI collects, uses, and protects your personal data. Our privacy policy covers data handling, cookies, and your rights.",
  };
}

export default async function PrivacyPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container max-w-3xl py-24 lg:py-32">
      <h1 className="text-3xl lg:text-4xl font-bold text-[oklch(0.95_0.01_80)] mb-8" style={{ fontFamily: "var(--font-display)" }}>
        Privacy Policy
      </h1>
      <div className="prose prose-invert max-w-none text-[oklch(0.60_0.01_280)]">
        <p>Last updated: April 2026</p>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, such as your name, email address, and contact details when you submit our contact form or create an account.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information to provide and improve our services, communicate with you, and send relevant updates about Stimulus AI.</p>
        <h2>3. Data Protection</h2>
        <p>We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure.</p>
        <h2>4. Cookies</h2>
        <p>We use cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser.</p>
        <h2>5. Third-Party Services</h2>
        <p>We may share data with trusted third-party service providers who assist us in operating our website and conducting our business.</p>
        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at support@only-fans.ai for any data-related requests.</p>
        <h2>7. Contact</h2>
        <p>For questions about this privacy policy, please contact us at support@only-fans.ai.</p>
      </div>
    </div>
  );
}
