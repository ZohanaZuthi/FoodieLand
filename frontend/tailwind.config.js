/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],    // default font
        inter: ["Inter", "sans-serif"],   // optional explicit
        lobster: ["Lobster", "cursive"],  // <--- THIS must match @font-face name
      },
    },
  },
  plugins: [],
};
