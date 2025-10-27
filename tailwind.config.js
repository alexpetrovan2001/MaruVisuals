/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        highlight: 'var(--color-highlight)',
      },
    },
  // theme: {
  //   extend: {
  //     colors: {
  //       bg: '#F6F5F3',
  //       text: {
  //         DEFAULT: '#2B2B2B',
  //         secondary: '#6A6A6A',
  //       },
  //       accent: {
  //         DEFAULT: '#5A7184',
  //         hover: '#7B94A7',
  //       },
  //       highlight: '#EEEAE5',
  //     },
  //     colors: {
  //       // Background
  //       bg: '#6D4C41', // warm brown
  //
  //       // Text colors
  //       text: {
  //         DEFAULT: '#F5F5F5',      // light cream for good contrast
  //         secondary: '#D6CFC2',    // softer off-white for secondary text
  //       },
  //
  //       // Accent colors (buttons, links, highlights)
  //       accent: {
  //         DEFAULT: '#A78B6F',       // muted tan/coffee tone
  //         hover: '#C9A678',         // warmer hover shade
  //       },
  //
  //       // Highlight / cards / overlays
  //       highlight: '#EDE4DC',       // light warm neutral
  //     },
  },
  plugins: [],
}
