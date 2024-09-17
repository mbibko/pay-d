// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1146px", // Adjust as needed for extra extra large screens
      },
    },
    extend: {
      colors: {
        primary: "#0D2285",
        "gray-primary": "#5d5d5d",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-container-bleed")],
};
