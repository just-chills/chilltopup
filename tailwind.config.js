/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // important:true,

  theme: {
    extend: {
      colors: {
        primary: "#baff00",
        secondary: "#121212",
      },
      container: {
        center : true,
        padding: {
          DEFUALT : '1rem',
          sm : '3rem',
        },
      },
      display: {
        'webkit-box': '-webkit-box',
      },
      fontFamily: {
        DBheavent: ['DBHeavent', 'sans-serif'],
        DBheavent_light: ['DBHeavent-light', 'sans-serif'],
        DBheavent_normal: ['DBHeavent-normal', 'sans-serif'],
        DBheavent_bold: ['DBHeavent-bold', 'sans-serif'],
      },
      boxShadow: {
        lime: "0 0 0 1px #b8e50a",
      },
    },
  },
  plugins: [],
};
