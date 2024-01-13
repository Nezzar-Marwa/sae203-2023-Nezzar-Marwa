/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    "colors": {
      "articles": "#f29e51",
      "backgroundcolor": "#ffffff",
      "noirfooter": "#282828",
      "typogold": "#ab6c32",
      "rouge": "#b70606",
      "noir": "#000000",
      "indigo": "#5180FB"
     },
     "fontFamily": {
      "staatliches": "Staatliches",
      "mulish": "Mulish"
     },
    extend: {
      gridTemplateColumns: {
        principal: 'repeat(12, minmax(0, 64px))',
        // '2': 'repeat(2, minmax(0, 150px))',
      },
      gridTemplateRows:{
        secondary: 'repeat(6, minmax(0, 64px))',
      },
    }
  },
  plugins: []
}
