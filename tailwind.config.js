/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut .5s linear',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '100%': { color: theme('colors.red.300') },
          '0%': { color: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
