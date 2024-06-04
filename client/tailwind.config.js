/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custB: "#121212",
        custV: "#664DD4",
        custL: "#D4C3F2",
        custY: "#F6D26F",
      },
    },
  },
  plugins: [],
};
