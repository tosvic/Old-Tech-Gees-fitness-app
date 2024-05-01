/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'',
        'Txt-color': '#011639',
        'logo-color':'#137AF7',
        'logo-txt':'#2A2C30',
        'bg-color': '#BFC6CF',
        'input-bg-color': 'rgba(191, 198, 207, 1%)',
        'shadow-color': 'rgba(0, 0, 0, 0.308)',
        'button': '#FF0000',
      }
    },
  },
  plugins: [],
}