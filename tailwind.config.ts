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
        "green-color": "var(--green-color)",
        "dark-green-color": "var(--dark-green-color)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
      },
      animation: {
        pulse: "pulse 1s infinite",
        widthAnimation: "widthAnimation 1s",
      },
      keyframes: {
        pulse: {
          from: { opacity: "0", background: "#6cff8d" },
          to: { opacity: "0" },
        },
        widthAnimation: {
          "0%": { width: "85%" },
          "100%": { width: "280px" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
