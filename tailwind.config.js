/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
        'text': {
          light: '#08020d',
          DEFAULT: '#08020d',
          dark: '#f8f2fd', 
        },
        'background': {
          light: '#ece9ed',
          DEFAULT: '#ece9ed',
          dark: '#151216',
        },
        'primary': {
          light:'#4e1778',
          DEFAULT: '#4e1778',
          dark: '#be87e8',
        },
        'secondary': {
          light:'#dfc3f4',
          DEFAULT: '#dfc3f4',
          dark: '#270b3c',
        },
        'accent': {
          light:'#8026c5',
          DEFAULT: '#8026c5',
          dark: '#943ad9',
        },
       },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}