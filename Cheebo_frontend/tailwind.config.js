/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "#8d1de4",
        "dark-blue": "#111825", 
        "dark-gray": "#202936",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
