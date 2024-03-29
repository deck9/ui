/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{vue,ts,mdx}",
    "./src/**/*.stories.{ts,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        black: "#050505",
        white: "#ffffff",
        grey: colors.slate,
        red: colors.red,
        yellow: colors.yellow,
        blue: colors.blue,
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Recursive var", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
      keyframes: {
        spinner: {
          "0%, 70%, 100%": { transform: "scale3D(1,1,1);" },
          "35%": { transform: "scale3D(0,0,1);" },
        },
      },
      animation: {
        spinner: "spinner 1.3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@deck9/tailwindcss-recursive-font-helper"),
  ],
};
