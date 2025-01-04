/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      animation: {
        'glitch': 'glitch 4s infinite',
        'glitch-2': 'glitch 4s infinite reverse',
      },
    },
  },
  plugins: [],
};