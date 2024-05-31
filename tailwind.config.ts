import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

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
        "red-color": "var(--red-color)",
        "blue-color": "var(--blue-color)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
      },
      animation: {
        pulse: "pulse 1s infinite",
        widthAnimation: "widthAnimation 1s forwards",
        coloredIconAnimation: "coloredIconAnimation 0.2s infinite",
        movingWheel: "movingWheel 0.5s linear infinite",
        scrollAnim: "scrollAnim 1s infinite",
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
        coloredIconAnimation: {
          "0%": {
            "box-shadow":
              "3px 2px rgba(244, 67, 54, 0.75), -3px -4px rgba(33, 150 ,243, 0.75)",
          },
          "25%": {
            "box-shadow":
              "-3px -4px rgba(244, 67, 54, 0.75), 3px 2px rgba(33, 150 ,243, 0.75)",
          },
          "50%": {
            "box-shadow":
              "3px -2px rgba(244, 67, 54, 0.75), -6px 2px rgba(33, 150 ,243, 0.75)",
          },
          "75%": {
            "box-shadow":
              "-6px -2px rgba(244, 67, 54, 0.75), -3px -2px rgba(33, 150 ,243, 0.75)",
          },
          "100%": {
            "box-shadow":
              "-3px 0px rgba(244, 67, 54, 0.75), 3px -2px rgba(33, 150 ,243, 0.75)",
          },
        },
        movingWheel: {
          "0%": { top: "1px" },
          "25%": { top: "2px" },
          "50%": { top: "3px" },
          "75%": { top: "2px" },
          "100%": { top: "1px" },
        },
        scrollAnim: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
