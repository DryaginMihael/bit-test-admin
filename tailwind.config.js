/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0e0c15',
        'blue-gray': '#121825',
      },
    },
  },
  plugins: [],
};
