/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Inter", "monospace"],
    },
    colors: {
      "ec-red": "#c92222",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
