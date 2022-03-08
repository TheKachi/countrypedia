module.exports = {
  // content: ["./pages/**/*.{vue,js}", "./components/**/*.{vue,js}"],
  content: [],
  darkMode: "class",
  theme: {
    // darkSelector: ".dark-mode",

    colors: {
      white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      black: "hsl(200, 15%, 8%)", // Light Mode Text
      gray: "hsl(0, 0%, 52%)", // Light Mode Input
      slate: "hsl(209, 23%, 22%)", // Dark Mode Elements
      light: "hsl(0, 0%, 98%)", // Light Mode Background
      dark: "hsl(207, 26%, 17%)", // Dark Mode Background
    },

    spacing: {
      0: "0px",
      1: "1px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      96: "96px",
      120: "120px",
      300: "300px",
      full: "100%",
    },

    fontSize: {
      sm: "14px", // Homepage Items
      base: "16px", // Detail Page
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
      "4xl": "40px",
      "5xl": "64px",
    },

    // Font weights
    // 300 - font-light
    // 600 - font-semibold
    // 800 - font-extrabold

    extend: {},
  },

  // plugins: [require("tailwindcss-dark-mode")()],

  // variants: {
  //   backgroundColor: [
  //     "dark-hover",
  //     "dark-group-hover",
  //     "dark-even",
  //     "dark-odd",
  //   ],
  //   borderColor: ["dark-focus", "dark-focus-within"],
  //   textColor: ["dark-hover", "dark-active"],
  // },
};
