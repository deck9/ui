const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#050505",
      white: "#ffffff",
      grey: colors.blueGray,
      yellow: colors.yellow,
      blue: {
          50: "#ebf1ff",
          100: "#e1eafe",
          200: "#d0dffe",
          300: "#b9cefd",
          400: "#9cbafb",
          500: "#79a1f7",
          600: "#5084f2",
          700: "#2463ea",
          800: "#164bbc",
          900: "#13347e",
      },
      red: colors.red,
      primary: {
          50: "#ebf1ff",
          100: "#e1eafe",
          200: "#d0dffe",
          300: "#b9cefd",
          400: "#9cbafb",
          500: "#79a1f7",
          600: "#5084f2",
          700: "#2463ea",
          800: "#164bbc",
          900: "#13347e",
      },
  },
    extend: {
      container: {
        center: true,
        padding: "1rem",
    },
    fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        heading: ["Inter var", ...defaultTheme.fontFamily.sans],
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
