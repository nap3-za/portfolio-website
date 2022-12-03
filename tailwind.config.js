/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'source.css'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#12426E",
        lightPrimary: "#15628D",
        secondary: "#00AFEF",
        txblack: "#00070ee6",
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "950px",
      lg: "1440px",
      xl: "1700px",
    },
  },
  plugins: [],
}
