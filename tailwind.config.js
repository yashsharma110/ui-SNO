module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Default sm breakpoint
        md: "768px", // Default md breakpoint
        lg: "1024px", // Default lg breakpoint
        xl: "1280px", // Default xl breakpoint
        custom600: "600px", // Custom breakpoint
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        league: ['"League Gothic"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
