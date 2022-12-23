/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
