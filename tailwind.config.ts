import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        mist: "#F6F7F6",
        ink: "#0A0D0B",
        accent: "#0C7A55",
        pos: "#0C7A55",
        neg: "#C2402A",
        line: "rgba(10,13,11,0.09)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,13,11,0.05), 0 8px 32px rgba(10,13,11,0.06)",
        panel: "0 1px 2px rgba(10,13,11,0.04), 0 16px 56px rgba(10,13,11,0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
