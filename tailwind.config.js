/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "chem-blue": "#1E90FF",
        "chem-green": "#32CD32",
        "chem-purple": "#8A2BE2",
      },
    },
  },
  plugins: [],
};