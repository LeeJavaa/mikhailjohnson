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
      animation: {
        'text-loop1': 'textLoop1 9s ease-in-out infinite',
        'text-loop2': 'textLoop2 9s ease-in-out infinite',
        'text-loop3': 'textLoop3 9s ease-in-out infinite',
        marque: 'moveRtl 6s linear infinite',
        marque2: 'moveRtl2 15s linear infinite',
        fadeLow: 'opacityFade 1s ease-out',
        floatIn: 'floatIn 1s ease-in-out',
        floatInCover: 'floatInCover 1s ease-in-out',
      },
      keyframes: {
        textLoop1: {
          '0%': {
            transform: 'translate(-50%,-50%)',
            opacity: '100%',
          },
          '23%': {
            transform: 'translate(-50%, -50%)',
            opacity: '100%',
          },
          '33%': {
            transform: 'translate(-50%, -60%)',
            opacity: '0%',
          },
          '90%': {
            transform: 'translate(-50%, -40%)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translate(-50%, -50%)',
            opacity: '100%',
          },
        },
        textLoop2: {
          '0%': {
            transform: 'translate(-50%, -40%)',
            opacity: '0%',
          },
          '23%': {
            transform: 'translate(-50%, -40%)',
            opacity: '0%',
          },
          '33%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
          '56%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
          '66%': {
            transform: 'translate(-50%, -60%)',
            opacity: '0%',
          },
          '100%': {
            transform: 'translate(-50%, -60%)',
            opacity: '0%',
          },
        },
        textLoop3: {
          '0%': { transform: 'translate(-50%, -50%)', opacity: '0' },
          '56%': { transform: 'translate(-50%, -40%)', opacity: '0%' },
          '66%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
          '89%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
          '100%': { transform: 'translate(-50%, -60%)', opacity: '0%' },
        },
        moveRtl: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveRtl2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-600%)' },
        },
        opacityFade: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '10%' },
        },
        floatIn: {
          '0%': { opacity: '0%', transform: 'translateY(15%)' },
          '100%': { opacity: '100%', transform: 'translateY(0%)' },
        },
        floatInCover: {
          '0%': { opacity: '0%', transform: 'translateY(5%)' },
          '100%': { opacity: '100%', transform: 'translateY(0%)' },
        },
      },
    },
  },
  plugins: [],
};
