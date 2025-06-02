/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1E305E",
        dark_blue: "#0D162A",
        brown: "#CD9F70",
        gray_background: "#E9EAEF",
        statusError: "#DC3534",
        borderSubtle: "#d1d5db",
        textPlaceholder: "#A9B0B7",
        inputBorder: "#D1D5DB",
      },
    },
  },
  plugins: [],
};
