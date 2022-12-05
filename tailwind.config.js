/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/components/createHeader.js"],
  theme: {
    fontFamily: {
      'h1': ['Hind Guntur', 'sans-serif'],
      'h2': ['Fira Sans', 'sans-serif'],
      'body': ['Hind', 'sans-serif'],
    },
    
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
