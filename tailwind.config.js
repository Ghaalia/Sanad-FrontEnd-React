/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        RedMain: "#F5574E",
        NavyMain: "#1B1931",
        NavyLight: "#6B6893",
        Grey0: "#EFEFEF",
        Grey3: "#989898",
      },
      fontFamily: {
        sans: ["Urbanist", "sans"],
      },
    },
  },
  plugins: [],
};
