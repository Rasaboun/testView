/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,astro}",
  ],
  theme: {
    extend: {
      keyframes: {
        openning: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "openning": "openning 0.7s ease-in-out"
      },
    },
  },
};
