/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        newBlue: "#407BFF",
        newChatBlue: "rgba(64, 123, 255, 0.9)",
        newVeryLightBlue: "#eff3ff",
        newLightBlue: "#56A4FF",
        newDarkBlue: "#1052FF",
        newTomato: "#FF725E",
        newOrange: "#FF5656",
        newDarkNavyGrey: "#263238",
        newYellow: "#FFDA56",
        newOcean: "#1DFBEE",
        newOceanGreen: "#92E3A9",
        newDarkGreen: "#077825",
        nb1: "#4C9EFF",
        nb2: "#9CB7FF",
        newDarkGreen: "#084462",
      },
      screens: {
        mobile: "340px",
      },
    },
  },
  plugins: [],
};
