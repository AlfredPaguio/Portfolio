/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  corePlugins: {
    preflight: true,
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },

      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },

      keyframes: {
        scrollToRight: {
          "0%": { transform: "translateX(0)", opacity: 0 },
          "25%, 75%": { opacity: 1 },
          "100%": { transform: "translateX(4.5rem)", opacity: 0 },
        },

        revealKeyFrame: {
          "0%": {
            transform: "scaleX(0) scaleY(0.01)",
            opacity: 0,
          },
          "2%, 6%, 10%, 14%, 18%": {
            opacity: 0,
          },
          "4%, 8%, 12%, 16%, 20%": {
            opacity: 1,
          },
          "60%": {
            opacity: 1,
            transform: "scaleX(1) scaleY(0.01)",
          },
          "100%": {
            opacity: 1,
            transform: "scaleX(1) scaleY(1)",
          },
        },
      },

      animation: {
        scrollToRightInfinite: "scrollToRight 3s ease-in-out infinite",
        revealAnimation:
          "revealKeyFrame 1.5s cubic-bezier(0.5, 0.5, 0, 1) 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("./plugins/textShadow"), require("./plugins/bailwind")],
};
