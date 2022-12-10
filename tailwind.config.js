/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js,jsx}', './components/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        offWhite: '#FCFCF9',
        light: '#D9D9D9',
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
    },
  },
  plugins: [],
};
