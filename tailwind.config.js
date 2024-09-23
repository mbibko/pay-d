// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,njk,html}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.8rem',
        xs: "1.625rem", // 26px,
      },
      screens: {
        "2xl": "1198px", // Adjust as needed for extra extra large screens
      },
    },
    fontFamily: {
      mono: ["Space Mono", "monospace", "serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "414px",
      },
      colors: {
        primary: "#0D2285",
        secondary: "#3C3",
        "gray-primary": "#5d5d5d",
      },
      // backgroundImage: (theme) => ({
      //   "gradient-to-45": "linear-gradient(45deg, #ffed4a, #ff3860)",
      //   "gradient-to-135": "linear-gradient(135deg, #ffed4a, #ff3860)",
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("tailwindcss-container-bleed")],
};
