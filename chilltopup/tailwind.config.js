/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  plugins: [],
};

