"use client";

import { useTranslations } from "next-intl";
import InterfaceVisual from "@/components/InterfaceVisual";
import SectionHeading from "@/components/SectionHeading";
import ROICalculator from "@/components/ROICalculator";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  Upload,
  Brain,
  MessageSquare,
  Zap,
  BarChart3,
  Users,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Target,
} from "lucide-react";
import { useState } from "react";

const IMAGES = {
  dashboard: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/SmifIzugTmpzAaMG.png",
  chat: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/drZDytsFqrVfXfQP.png",
  contentLibrary: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/yArwkYwNhGvxZFlk.png",
  pricing: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/ebjSjbsiNQLyjVHo.png",
  analytics: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/IQvwqIGngSPTCJNA.png",
  stages: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/eZzSIMLqlyeTbYhK.png",
  fanProfile: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/UbCXAzkLGPluLrst.png",
  automation: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/vxkRlBlNCyWYZPOm.png",
};

/* ─── Hero Section ─── */
function HeroSection() {
  const t = useTranslations("hero");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    { title: t("feature1Title"), desc: t("feature1Desc") },
    { title: t("feature2Title"), desc: t("feature2Desc") },
    { title: t("feature3Title"), desc: t("feature3Desc") },
    { title: t("feature4Title"), desc: t("feature4Desc") },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[oklch(0.78_0.12_85/0.04)] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[oklch(0.78_0.12_85/0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.78_0.12_85/0.1)] border border-[oklch(0.78_0.12_85/0.2)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.12_85)] animate-pulse" />
              <span className="text-xs font-medium text-[oklch(0.78_0.12_85)] tracking-wide uppercase">
                {t("badge")}
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-[oklch(0.95_0.01_80)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("title1")}
              <br />
              <span className="gradient-text-gold">{t("title2")}</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-[oklch(0.60_0.01_280)] leading-relaxed max-w-lg">
              {t("subtitle")}
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <span className="mt-1 w-5 h-5 rounded-full border border-[oklch(0.78_0.12_85/0.5)] flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.12_85)]" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-[oklch(0.88_0.01_80)]">{item.title}</span>
                    <span className="text-sm text-[oklch(0.50_0.01_280)]"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://stimulus.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[oklch(0.78_0.12_85)] text-[oklch(0.10_0.01_280)] font-semibold text-sm hover:bg-[oklch(0.85_0.10_85)] transition-all duration-300 gold-glow-sm"
              >
                {t("ctaPrimary")}
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[oklch(0.30_0.02_280)] text-[oklch(0.70_0.01_280)] text-sm hover:border-[oklch(0.78_0.12_85/0.4)] hover:text-[oklch(0.78_0.12_85)] transition-all duration-300"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <InterfaceVisual
              src={IMAGES.dashboard}
              alt="Stimulus AI Dashboard"
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── For Creators Section ─── */
function ForCreatorsSection() {
  const t = useTranslations("creators");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const benefits = [
    { icon: Clock, title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: TrendingUp, title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: Shield, title: t("benefit3Title"), desc: t("benefit3Desc") },
    { icon: Sparkles, title: t("benefit4Title"), desc: t("benefit4Desc") },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-[oklch(0.13_0.01_280)] border border-[oklch(0.22_0.01_280)] p-6 transition-all duration-700 ease-out hover:border-[oklch(0.78_0.12_85/0.3)] hover:bg-[oklch(0.15_0.01_280)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.78_0.12_85/0.1)] flex items-center justify-center mb-4">
                <item.icon size={22} className="text-[oklch(0.78_0.12_85)]" />
              </div>
              <h3 className="text-lg font-bold text-[oklch(0.90_0.01_80)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
                {item.title}
              </h3>
              <p className="text-sm text-[oklch(0.50_0.01_280)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── For Agencies Section ─── */
function ForAgenciesSection() {
  const t = useTranslations("agencies");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const benefits = [
    { icon: Users, title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: Target, title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: DollarSign, title: t("benefit3Title"), desc: t("benefit3Desc") },
    { icon: BarChart3, title: t("benefit4Title"), desc: t("benefit4Desc") },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`flex gap-4 items-start transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.78_0.12_85/0.1)] flex items-center justify-center flex-shrink-0 mt-1">
                  <item.icon size={20} className="text-[oklch(0.78_0.12_85)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[oklch(0.90_0.01_80)] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[oklch(0.50_0.01_280)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <InterfaceVisual
              src={IMAGES.analytics}
              alt="Agency analytics dashboard"
              direction="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works Section ─── */
function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      step: "01",
      icon: Upload,
      title: t("step1Title"),
      description: t("step1Desc"),
      image: IMAGES.contentLibrary,
      alt: "Content library interface",
      direction: "right" as const,
    },
    {
      step: "02",
      icon: Brain,
      title: t("step2Title"),
      description: t("step2Desc"),
      image: IMAGES.chat,
      alt: "AI chat analysis interface",
      direction: "left" as const,
    },
    {
      step: "03",
      icon: MessageSquare,
      title: t("step3Title"),
      description: t("step3Desc"),
      image: IMAGES.automation,
      alt: "Automation dashboard",
      direction: "right" as const,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, i) => (
            <StepBlock key={step.step} {...step} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({
  step,
  icon: Icon,
  title,
  description,
  image,
  alt,
  direction,
  reversed,
}: {
  step: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  direction: "left" | "right";
  reversed: boolean;
}) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      style={{ direction: reversed ? "rtl" : "ltr" }}
    >
      <div
        className={`transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ direction: "ltr", transitionDelay: "100ms" }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl font-bold text-[oklch(0.78_0.12_85/0.2)]" style={{ fontFamily: "var(--font-display)" }}>
            {step}
          </span>
          <div className="w-10 h-10 rounded-xl bg-[oklch(0.78_0.12_85/0.1)] flex items-center justify-center">
            <Icon size={20} className="text-[oklch(0.78_0.12_85)]" />
          </div>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-[oklch(0.92_0.01_80)] mb-4" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h3>
        <p className="text-base lg:text-lg text-[oklch(0.55_0.01_280)] leading-relaxed">
          {description}
        </p>
      </div>
      <div style={{ direction: "ltr" }}>
        <InterfaceVisual src={image} alt={alt} direction={direction} delay={200} />
      </div>
    </div>
  );
}

/* ─── Core Features Section ─── */
function CoreFeaturesSection() {
  const t = useTranslations("features");

  const features = [
    {
      icon: Zap,
      title: t("stagesTitle"),
      description: t("stagesDesc"),
      image: IMAGES.stages,
      alt: "Conversation stages builder",
    },
    {
      icon: DollarSign,
      title: t("pricingTitle"),
      description: t("pricingDesc"),
      image: IMAGES.pricing,
      alt: "Pricing optimization interface",
    },
    {
      icon: Users,
      title: t("fanProfileTitle"),
      description: t("fanProfileDesc"),
      image: IMAGES.fanProfile,
      alt: "Fan profile analytics",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
  alt,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-[oklch(0.13_0.01_280)] border border-[oklch(0.22_0.01_280)] p-6 lg:p-8 transition-all duration-700 ease-out hover:border-[oklch(0.78_0.12_85/0.3)] hover:bg-[oklch(0.15_0.01_280)] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-[oklch(0.78_0.12_85/0.1)] flex items-center justify-center mb-5 group-hover:bg-[oklch(0.78_0.12_85/0.15)] transition-colors">
        <Icon size={22} className="text-[oklch(0.78_0.12_85)]" />
      </div>
      <h3 className="text-xl font-bold text-[oklch(0.90_0.01_80)] mb-3" style={{ fontFamily: "var(--font-display)" }}>
        {title}
      </h3>
      <p className="text-sm text-[oklch(0.50_0.01_280)] leading-relaxed mb-6">{description}</p>
      <div className="interface-frame">
        <img src={image} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
    </div>
  );
}

/* ─── Interface In Action Section ─── */
function InterfaceInActionSection() {
  const t = useTranslations("interfaceSection");

  const scenes = [
    {
      image: IMAGES.automation,
      alt: "Automation Management Dashboard",
      title: t("scene1Title"),
      description: t("scene1Desc"),
    },
    {
      image: IMAGES.analytics,
      alt: "Analytics Dashboard",
      title: t("scene2Title"),
      description: t("scene2Desc"),
    },
  ];

  return (
    <section id="interface" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="space-y-20 lg:space-y-28">
          {scenes.map((scene, i) => (
            <InterfaceScene key={i} {...scene} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InterfaceScene({
  image,
  alt,
  title,
  description,
  index,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="max-w-5xl mx-auto">
        <InterfaceVisual src={image} alt={alt} direction="right" />
        <div className="mt-8 text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-[oklch(0.90_0.01_80)]" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h3>
          <p className="mt-3 text-base text-[oklch(0.50_0.01_280)] max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Alternative to Hiring Section ─── */
function AlternativeToHiringSection() {
  const t = useTranslations("comparison");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const comparisons = [
    { label: t("row1Label"), hiring: t("row1Human"), stimulus: t("row1Stimulus") },
    { label: t("row2Label"), hiring: t("row2Human"), stimulus: t("row2Stimulus") },
    { label: t("row3Label"), hiring: t("row3Human"), stimulus: t("row3Stimulus") },
    { label: t("row4Label"), hiring: t("row4Human"), stimulus: t("row4Stimulus") },
    { label: t("row5Label"), hiring: t("row5Human"), stimulus: t("row5Stimulus") },
    { label: t("row6Label"), hiring: t("row6Human"), stimulus: t("row6Stimulus") },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="rounded-2xl border border-[oklch(0.22_0.01_280)] overflow-hidden">
            <div className="grid grid-cols-3 bg-[oklch(0.15_0.01_280)]">
              <div className="p-4 text-sm font-semibold text-[oklch(0.60_0.01_280)]" />
              <div className="p-4 text-sm font-semibold text-[oklch(0.60_0.01_280)] text-center">{t("headerHuman")}</div>
              <div className="p-4 text-sm font-semibold text-center gradient-text-gold">{t("headerStimulus")}</div>
            </div>
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-[oklch(0.20_0.01_280)] ${
                  i % 2 === 0 ? "bg-[oklch(0.11_0.01_280)]" : "bg-[oklch(0.12_0.01_280)]"
                }`}
              >
                <div className="p-4 text-sm text-[oklch(0.70_0.01_280)]">{row.label}</div>
                <div className="p-4 text-sm text-[oklch(0.50_0.01_280)] text-center">{row.hiring}</div>
                <div className="p-4 text-sm text-[oklch(0.78_0.12_85)] text-center font-medium">{row.stimulus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ROI Calculator Section ─── */
function CalculatorSection() {
  const t = useTranslations("calculator");

  return (
    <section id="calculator" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="max-w-4xl mx-auto">
          <ROICalculator />
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const t = useTranslations("faq");

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
    { q: t("q7"), a: t("a7") },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
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
        <span className="text-base font-semibold text-[oklch(0.88_0.01_80)] pr-4" style={{ fontFamily: "var(--font-display)" }}>
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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-[oklch(0.55_0.01_280)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

/* ─── Final CTA Section ─── */
function FinalCTASection() {
  const t = useTranslations("cta");
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[oklch(0.78_0.12_85/0.04)] rounded-full blur-[200px]" />
      </div>
      <div className="container relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-gold leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-[oklch(0.55_0.01_280)] leading-relaxed max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://stimulus.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[oklch(0.78_0.12_85)] text-[oklch(0.10_0.01_280)] font-semibold text-base hover:bg-[oklch(0.85_0.10_85)] transition-all duration-300 gold-glow"
            >
              {t("button")}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ForCreatorsSection />
      <ForAgenciesSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <InterfaceInActionSection />
      <AlternativeToHiringSection />
      <CalculatorSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
