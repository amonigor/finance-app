import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bcolor-1": "rgb(var(--bcolor-1) / <alpha-value>)",
      "bcolor-2": "rgb(var(--bcolor-2) / <alpha-value>)",
      "interactive-1": "rgb(var(--interactive-1) / <alpha-value>)",
      "interactive-2": "rgb(var(--interactive-2) / <alpha-value>)",
      "interactive-3": "rgb(var(--interactive-3) / <alpha-value>)",
      "border-1": "rgb(var(--border-1) / <alpha-value>)",
      "border-2": "rgb(var(--border-2) / <alpha-value>)",
      "border-3": "rgb(var(--border-3) / <alpha-value>)",
      "primary-1": "rgb(var(--primary-1) / <alpha-value>)",
      "primary-2": "rgb(var(--primary-2) / <alpha-value>)",
      "tcolor-1": "rgb(var(--tcolor-1) / <alpha-value>)",
      "tcolor-2": "rgb(var(--tcolor-2) / <alpha-value>)",
      muted: "rgb(var(--muted) / <alpha-value>)",
      danger: "rgb(var(--danger) / <alpha-value>)",
      success: "rgb(var(--success) / <alpha-value>)",
    },
  },
  plugins: [],
};
export default config;
