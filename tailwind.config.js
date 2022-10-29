/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-pink-hover": "#FF5480",
        quote: "#9283E0",
        passive: "#9B9B9B",
        "default-black": "#4A4A4A",
        tag: "#27AEFF",
        heading: "#111210",
      },
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
