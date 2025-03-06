import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C63FF", // Vibrant purple
          dark: "#5A52D9",
          light: "#8A83FF",
        },
        secondary: {
          DEFAULT: "#FF6B6B", // Coral red
          dark: "#E55757",
          light: "#FF8A8A",
        },
        accent: {
          DEFAULT: "#4ECDC4", // Turquoise
          dark: "#3DBDB5",
          light: "#6FDCD4",
        },
        festival: {
          DEFAULT: "#FFD166", // Festival yellow
          dark: "#FFBD1F",
          light: "#FFE0A3",
        },
        dark: "#1A1A2E",
        light: "#F7F7FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config; 
