/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#121212',
        'shadow-color': 'rgba(0, 0, 0, 0.308)',
        'button': '#FF0000',
      }
    },
  },
  plugins: [],
}