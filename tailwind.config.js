/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F6F5F3',
        text: {
          DEFAULT: '#2B2B2B',
          secondary: '#6A6A6A',
        },
        accent: {
          DEFAULT: '#5A7184',
          hover: '#7B94A7',
        },
        highlight: '#EEEAE5',
      },
    },
  },
  plugins: [],
}
