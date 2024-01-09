import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        tungsten: ["var(--font-tungsten)"],
        din: ["var(--font-din-alternate)"],
      },
      colors: {
        primary: {
          50: "#FFBE17",
          100: "#C8991B",
          200: "#382900",
        },
        success: "#42FF00",
      },
      dropShadow: {
        btn: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      boxShadow: {
        "play-hover":
          "0px 0px 2.528px 0px #FFC93C, 0px 0px 5.055px 0px #FFC93C, 0px 0px 17.693px 0px #FFC93C, 0px 0px 35.386px 0px #FFC93C, 0px 0px 60.661px 0px #FFC93C, 0px 0px 106.157px 0px #FFC93C",
      },
    },
  },
  plugins: [],
};
export default config;
