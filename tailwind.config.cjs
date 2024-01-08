/**@type {import('tailwindcss').Config} */
module.exports = {
  content: [".index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-clear': '#0d6e6e',
        primary: {
          100: "#0d6e6e",
          200: "#b6ccd8",
          300: "#3b3c3d",
        },
        accent: {
          100: "#71c4ef",
          200: "#00668c",
          300: "#ff3d3d",
        },
        text: {
          100: "#1d1c1c",
          200: "#313d44",
        },
        bg: {
          100: "#fffefb",
          200: "#f5f4f1",
          300: "#cccbc8",
        },
      },
      backgroundImage: {
        team: "url('/public/team.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  Plugin: [],
};
