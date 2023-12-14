/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'flight': "url('/src/assets/imgs/1.png')",
      }
    },
  },
  plugins: [],
}

