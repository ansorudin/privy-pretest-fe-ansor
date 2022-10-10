const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "primary-black": "#848484",
      "primary-white": "#F5F5F5",
      "primary-green": "#58B8B6",
      "primary-red": "#D57E7E",
      "primary-yellow": "#ECD699",
      "primary-blue": "#3D6B9E",
      "primary-light-blue": "#E9F6F6",
      "primary-light-green": "#9ED2C6",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
