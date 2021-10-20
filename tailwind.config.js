/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.mdx",
      "./src/**/*.ts",
      "./src/**/*.stories.ts",
      "./src/**/*.stories.tsx",
    ],
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#050505",
        white: "#ffffff",
        grey: colors.blueGray,
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
