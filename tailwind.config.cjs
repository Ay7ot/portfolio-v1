/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Taviraj': ['Taviraj', 'sans-serif'],
        'Sriracha': ['Sriracha', 'cursive'],
        'Alegreya Sans SC ': ['Alegreya Sans SC', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'alkatra': ['Alkatra', 'cursive'],
      }
    },
  },
  plugins: [],
}
