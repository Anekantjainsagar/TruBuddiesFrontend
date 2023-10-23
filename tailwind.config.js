/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        newBlue: "#407BFF",
        newVeryLightBlue: "#eff3ff",
        newLightBlue: "#56A4FF",
        newDarkBlue: "#407BFF",
        newTomato: "#FF725E",
        newOrange: "#FF5656",
        newDarkNavyGrey: "#263238",
        newYellow: "#FFDA56",
        newOcean: "#1DFBEE",
        newOceanGreen: "#92E3A9",
        newDarkGreen: "#077825",
      },
      screens: {
        mobile: "340px",
      },
    },
  },
  plugins: [],
};
