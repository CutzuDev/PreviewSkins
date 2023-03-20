/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fredoka-one": ["Fredoka One", "cursive"],
      },
      boxShadow: {
        customBox: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        phone: { max: "480px" },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
