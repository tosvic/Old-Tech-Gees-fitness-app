/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#191919',
        'text-color': '#fff',
        'shadow-color': 'rgba(0, 0, 0, 0.308)',
        'button': '#D0FD3E',
      }
    },
  },
  plugins: [],
}
