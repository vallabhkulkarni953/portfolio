
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#18181B",
        primary: "#FAFAFA",
        secondary: "#A1A1AA",
        accent: "#2DD4BF",
        border: "#27272A",
        success: "#34D399",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
