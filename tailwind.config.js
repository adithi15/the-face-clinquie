/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("./tailwindcss-glassmorphism.js"), // 👈 Add your glass plugin
  ],
};
