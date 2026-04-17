"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/ContactFormModal";
import StickyCTA from "@/components/StickyCTA";

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>{children}</main>
      <Footer />
      <StickyCTA onOpenContact={() => setContactOpen(true)} />
      <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
