/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        info: '#2196f3',
        danger: '#f44336',
        warning: '#ff9800',
      },
      transitionProperty: {
        'show': 'height opacity max-height',
      },
    },
  },
  plugins: [],
}

