import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D1117",
        cta: "#C5A059",
        textPrimary: "#F0F0F0",
        accent: "#1A2B3C",
        card: "#1C2128",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        cairo: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};

export default config;
