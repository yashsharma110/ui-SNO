// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        league: ['"League Gothic"', "sans‑serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
