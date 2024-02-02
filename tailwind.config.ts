import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#A9E93F",
        secondary: "#CE4DF0",
        tertiary: "#FAED93",
        quarternary: "rgba(255, 255, 255, 0.2)",
        gray: "rgba(255, 255, 255, 0.5)",
        white: "#FFFFFF",
        dark: "#030402",
      },
      fontFamily: {
        primary: ["var(--font-amberyGarden)"],
        secondary: ["var(--font-cakra)"],
        tertiary: ["var(--font-turret-road)"],
      },
      fontSize: {
        big: "184px",
        xxl: "256px",
      },
    },
  },
  plugins: [],
};
export default config;
