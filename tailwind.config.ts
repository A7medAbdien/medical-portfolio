import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fff0ef",
          100: "#ffd0cc",
          200: "#ffbab4",
          300: "#ff9a91",
          400: "#ff867c",
          500: "#ff685b",
          600: "#e85f53",
          700: "#b54a41",
          800: "#8c3932",
          900: "#6b2c26",
        },
        tertiary: {
          50: "#e9eaec",
          100: "#bbbdc4",
          200: "#9b9da8",
          300: "#6d7180",
          400: "#515568",
          500: "#252b42",
          600: "#22273c",
          700: "#1a1f2f",
          800: "#141824",
          900: "#10121c",
        },
        secondary: {
          50: "#eff7f6",
          100: "#cce5e4",
          200: "#b3d9d7",
          300: "#90c7c5",
          400: "#7bbdb9",
          500: "#5aaca8",
          600: "#529d99",
          700: "#407a77",
          800: "#325f5c",
          900: "#264847",
        }
      }
    },
  },
  plugins: [],
};
export default config;