/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',

      'md': '768px',

      'lg': '992px',

      'xl': '1200px',

      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        'Inter': "'Inter' , sans-serif",
        'Montserrat': "'Montserrat',sans-serif",
        'Rubik': "'Rubik' , sans-serif",
      },
    },

  },
  plugins: [],
}

