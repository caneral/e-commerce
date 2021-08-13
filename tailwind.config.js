module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          base: "#919191",
          header: "#F5F5F5",
          icon: "#7d7d7d"
        },
        orange: {
          base: "#ff6000",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
