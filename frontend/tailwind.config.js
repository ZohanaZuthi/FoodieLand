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
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
      
    },
  },
  plugins: [],
};
