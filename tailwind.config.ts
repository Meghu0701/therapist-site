import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f766e", // teal-700
          light: "#5eead4",   // teal-300
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
