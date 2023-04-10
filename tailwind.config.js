/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-gray-light": colors.gray["200"],
        "color-gray-default": colors.gray["500"],
        "color-gray-dark": colors.gray["700"],
      },
      spacing: {
        lg: defaultTheme.spacing["5"],
        xl: defaultTheme.spacing["6"],
      },
    },
  },
  plugins: [],
};
