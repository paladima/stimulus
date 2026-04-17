import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        lg: "1320px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "oklch(0.78 0.12 85)",
          light: "oklch(0.85 0.10 85)",
          dark: "oklch(0.65 0.14 85)",
        },
        obsidian: {
          DEFAULT: "oklch(0.10 0.01 280)",
          light: "oklch(0.14 0.01 280)",
          lighter: "oklch(0.18 0.01 280)",
          border: "oklch(0.25 0.01 280)",
        },
        foreground: {
          DEFAULT: "oklch(0.90 0.01 80)",
          muted: "oklch(0.60 0.01 280)",
          subtle: "oklch(0.50 0.01 280)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
