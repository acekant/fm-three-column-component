/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        bright_orange: "hsl(31, 77%, 52%)",
        dark_cyan: "hsl(184, 100%, 22%)",
        very_dark_cyan: "hsl(179, 100%, 13%)",
        transparent_white_paragraphs: "hsla(0, 0%, 100%, 0.75)",
        very_light_gray_background_headings_buttons: "hsl(0, 0%, 95%)"
      },
      fontSize:{
        paragraph: "15px"
      },
      fontFamily: {
        lexend_deca: ["Lexend Deca","sans-serif"],
        big_shoulders: ["Big Shoulders","sans-serif"]
      },
      screens: {
        '2xl': '1440px'
      }
    },
  },
  plugins: [],
}

