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
          light: '#0a060e',
          DEFAULT: '#0a060e',
          dark: '#f5f1f9', 
        },
        'background': {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#000000',
        },
        'primary': {
          light:'#4e1778',
          DEFAULT: '#4e1778',
          dark: '#be87e8',
        },
        'secondary': {
          light:'#d2a9f4',
          DEFAULT: '#d2a9f4',
          dark: '#340b56',
        },
        'accent': {
          light:'#8026c5',
          DEFAULT: '#8026c5',
          dark: '#943ad9',
        },
       },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
}