/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-shadow": "0 0 5px rgba(0, 0, 0, 0.5)",
        "custom-light": "0 0 5px #BBB",
        "custom-dark": "0 0 10px #000",
      },
      colors: {
        themeColor: "#40E0D0",
        cardColor: "#fff ",
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
