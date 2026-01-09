/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        sidebar: "#121212",
        card: "#1a1a1a",
        accent: "#3b82f6", // Blue
        gold: "#fbbf24",   // Gold for capital
        gray: "#9ca3af",   // Gray for financial
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
