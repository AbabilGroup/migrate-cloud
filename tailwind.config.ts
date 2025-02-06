import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        primary: "#30C7B5",
        secondary: "#F37464",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
