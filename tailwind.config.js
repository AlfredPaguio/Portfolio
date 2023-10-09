/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        text: {
          light: "#171102",
          DEFAULT: "#171102",
          dark: "#fdf7e8",
        },
        background: {
          light: "#fefbfc",
          DEFAULT: "#fefbfc",
          dark: "#040102",
        },
        primary: {
          light: "#db146b",
          DEFAULT: "#db146b",
          dark: "#eb247a",
        },
        secondary: {
          light: "#ddbcf5",
          DEFAULT: "#ddbcf5",
          dark: "#2b0a43",
        },
        accent: {
          light: "#894abf",
          DEFAULT: "#894abf",
          dark: "#7e40b5",
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    require("./plugins/textShadow"),
  ],
};
