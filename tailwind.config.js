// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    container: {
      center: true,
      padding: "2rem", // 32px
      screens: {
        "2xl": "1210px", // Adjust as needed for extra extra large screens
      },
    },
    fontFamily: {
      mono: ["Space Mono", "monospace", "serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
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
