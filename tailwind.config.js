/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Tailwind will look in these files for class names
  ],
  theme: {
    extend: {
      colors: {
        golden: '#ffc567',
        moss: '#85a79e',
        sakura: '#edbcb4',
        blush: '#f28483',
        champagne: '#f8ede3',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],  // Add Quicksand to Tailwind's font family
      },
    },
  },
  plugins: [],
};
