const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html",
  './src/**/*.jsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.blue
      },
      container: {
        center: true,
        padding: "1rem"

      }
    }
  },
  variants: {
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    textOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    color: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {}
  },
  plugins: []
};
