/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
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
