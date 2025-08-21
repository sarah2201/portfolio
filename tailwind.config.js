// tailwind.config.js
module.exports = {
  darkMode: 'class', // ← This is crucial!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}