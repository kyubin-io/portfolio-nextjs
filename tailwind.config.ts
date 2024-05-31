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
      boxShadow: {
        a: "5px 4px var(--red-color), -5px -6px var(--blue-color)",
        b: "-5px -6px var(--red-color), 5px 4px var(--blue-color)",
        c: "5px -4px var(--red-color), -8px 4px var(--blue-color)",
        d: "-8px -4px var(--red-color), -5px -4px var(--blue-color)",
        e: "-5px 0px var(--red-color), 5px -4px var(--blue-color)",
      },
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
            "box-shadow": "5px 4px red, -5px -6px blue",
          },
          "25%": {
            "box-shadow": "-5px -6px red, 5px 4px blue",
          },
          "50%": {
            "box-shadow": "5px -4px red, -8px 4px blue",
          },
          "75%": {
            "box-shadow": "-8px -4px red, -5px -4px blue",
          },
          "100%": {
            "box-shadow": "-5px 0px red, 5px -4px blue",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "text-shadow": (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
