/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          "primary": "#0FCFEC",
          "secondary": "#19D3AE",
          "neutral": "#3A4256",
        },
      },
      "light"
    ],
  },
  plugins: [require("daisyui")],
}