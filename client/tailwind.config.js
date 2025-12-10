/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#0F172A",
        accent: {
          DEFAULT: "#0077B6",
          hover: "#005f92",
          light: "#E0F2FE",
        },
        neutral: {
          bg: "#F8F9FA",
          border: "#CED4DA",
          text: "#64748B",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
