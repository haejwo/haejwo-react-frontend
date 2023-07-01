/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        'kakao': '#FAE100',
        'brand' : '#FFD400',
      },
      fontFamily: {
        logo: ['GangwonEduPowerExtraBoldA', "sans-serif"],
        notice: ['S-CoreDream-3Light', 'sans-serif'],
      },
  },
  plugins: [],
}}