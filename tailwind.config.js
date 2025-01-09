/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./js/script.js'],
  theme: {
    fontFamily: {
      sans: ['Sansation'],
    },
    extend: {}
    ,
    colors: {
      'kwhite': '#F6F6F6',
      'kblack': '#171717',
      'kaccent' : '#08AB9F',
    },
  },
  plugins: [],
}

