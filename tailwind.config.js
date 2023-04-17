/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'kakao': '#FAE100',
      },
      fontFamily: {
        logo: ['GangwonEduPowerExtraBoldA', "sans-serif"], 
      },
  },
  plugins: [],
}}