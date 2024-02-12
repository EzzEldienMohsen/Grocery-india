/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config}'*/
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'fast-pattern': "url('./src/assets/154555-OV1I6M-55.jpg')",
      },
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
      themes: ['light', 'dracula', 'winter'],
    },
  },
};
