/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.{js,ts}"],
  theme: {
    colors: {
      primary: "#FF8C00",
      secondary: "#ECBE12",
      tertiary: "#ffffeb",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
