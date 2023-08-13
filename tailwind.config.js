/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#efefed",
        gray: "#212121",
        dimgray: {
          "100": "#6b6b6b",
          "200": "#666",
          "300": "#5c5c5b",
        },
        darkslategray: "#333232",
        white: "#fff",
        silver: "#cbbfac",
        black: "#000",
      },
      fontFamily: {
        "kamerik-105": "'Kamerik 105'",
      },
      borderRadius: {
        "11xl": "30px",
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      "xl-3": "20.3px",
      "21xl": "40px",
      "45xl": "64px",
      "29xl": "48px",
      "5xl": "24px",
      "77xl": "96px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
