/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { main: "'Barlow', sans-serif" },
      backgroundColor: {
        main: "black",
        primary: "white",
        slidertext: "rgba(0, 0, 0, 0.3)",
      },
      colors: {
        main: "white",
        primary: "black",
      },
      padding: {
        main: "0rem 12rem",
        lg: "0rem 9rem",
        sm: "0 2rem",
      },
      fontSize: {
        title: "3rem",
      },
      screens: {
        xsm: "445px",
        sm: "665px",
        md: "768px",
        lg: "1024px",
        xl: "1502px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
