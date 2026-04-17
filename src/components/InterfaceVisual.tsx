"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface InterfaceVisualProps {
  src: string;
  alt: string;
  direction?: "left" | "right";
  delay?: number;
}

export default function InterfaceVisual({
  src,
  alt,
  direction = "right",
  delay = 0,
}: InterfaceVisualProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const translateClass =
    direction === "right"
      ? isVisible
        ? "translate-x-0"
        : "translate-x-16"
      : isVisible
        ? "translate-x-0"
        : "-translate-x-16";

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${translateClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="interface-frame">
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
    </div>
  );
}
