/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: "linear-gradient(to left, #079911, #107720)",
        "gradient-hover": "linear-gradient(to right, #079911, #107720)",
      },
    },
    colors: {
      color: {
        transparent: "transparent",
        green: "#079911",
        white: "#fff",
        black: "#232323",
        "black-light": "#393939",
        grey: "#999",
        "green-light": "#EAF5EB",
        "hover-bg-nav": "#72819609",
        "card-bg": "#72819612",
      },
    },
  },
  plugins: [],
};
