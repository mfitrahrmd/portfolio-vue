module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      rubik: ["Rubik"],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      "accent-1": "#08FFC8",
      primary: {
        50: "#D9E5F7",
        100: "#B3CBEF",
        200: "#6897DF",
        300: "#2A68C6",
        400: "#1A407A",
        500: "#0A192F",
        600: "#081426",
        700: "#06101D",
        800: "#040911",
        900: "#020408",
      },
      secondary: {
        50: "#F0FFFF",
        100: "#E5FFFF",
        200: "#C7FFFF",
        300: "#ADFFFF",
        400: "#94FFFF",
        500: "#79FFFE",
        600: "#2EFFFF",
        700: "#00E0E0",
        800: "#009494",
        900: "#004D4D",
      },
      gray: {
        50: "#F7F7F8",
        100: "#F1F2F3",
        200: "#E1E3E5",
        300: "#D4D6D9",
        400: "#C3C7CB",
        500: "#B6BABF",
        600: "#8D939B",
        700: "#696F78",
        800: "#45494F",
        900: "#242629",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      inset: ["group-hover", "hover"],
    },
  },
  plugins: [],
};
