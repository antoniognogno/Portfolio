/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navy' : '#011222',
      },
      backgroundImage: {
        'blue-dust': "url('./src/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}

