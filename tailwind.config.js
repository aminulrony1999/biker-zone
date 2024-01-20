/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        'bike-primary' : '#E76F51',
        'bike-primary-bg' : 'rgba(231, 111, 81, 0.10)'
      }
    },
  },
  plugins: [require("daisyui")],
}
