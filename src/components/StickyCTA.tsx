"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

interface StickyCTAProps {
  onOpenContact?: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  const t = useTranslations("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onOpenContact}
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-obsidian font-semibold text-sm hover:bg-gold-light transition-all gold-glow-sm shadow-2xl"
      >
        {t("ctaPrimary")}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
