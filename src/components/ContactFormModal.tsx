"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { X, Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const t = useTranslations("contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactMethod: "telegram",
    contactValue: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          pageUrl: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setForm({ name: "", email: "", contactMethod: "telegram", contactValue: "" });
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-obsidian-light border border-obsidian-border rounded-2xl p-8 shadow-2xl"
        style={{ animation: "fadeInScale 0.3s ease-out" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground-muted hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <div className="text-center py-8">
            <CheckCircle size={48} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-foreground font-display mb-2">
              {t("successTitle")}
            </h3>
            <p className="text-foreground-muted">{t("successDesc")}</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-foreground font-display mb-2">
              {t("title")}
            </h3>
            <p className="text-foreground-muted text-sm mb-6">{t("subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-foreground-subtle mb-1.5">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("namePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-foreground text-sm focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground-subtle mb-1.5">
                  {t("emailLabel")}
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-foreground text-sm focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-foreground-subtle mb-1.5">
                  {t("contactMethodLabel")}
                </label>
                <div className="flex gap-2">
                  {(["phone", "telegram", "whatsapp"] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setForm({ ...form, contactMethod: method })}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm border transition-colors ${
                        form.contactMethod === method
                          ? "bg-gold/10 border-gold text-gold"
                          : "bg-obsidian border-obsidian-border text-foreground-muted hover:border-foreground-subtle"
                      }`}
                    >
                      {t(method)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={form.contactValue}
                  onChange={(e) => setForm({ ...form, contactValue: e.target.value })}
                  placeholder={t("contactValuePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg bg-obsidian border border-obsidian-border text-foreground text-sm focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle size={16} />
                  {t("errorDesc")}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gold text-obsidian font-semibold text-sm hover:bg-gold-light transition-all disabled:opacity-50 gold-glow-sm"
              >
                {status === "sending" ? (
                  t("sending")
                ) : (
                  <>
                    <Send size={16} />
                    {t("submit")}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
