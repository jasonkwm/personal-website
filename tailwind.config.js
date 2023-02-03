/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        movedown: {
          "0%": {top: "0.5rem", opacity: 1},
          "100%": {top: "1.75rem", opacity: 0}
        },
        shakeLittle: {
          "0%": {transform: "rotate(0deg)"},
          "25%": {transform: "rotate(6deg)"},
          "50%": {transform: "rotate(-6deg)"},
          "75%": {transform: "rotate(6deg)"},
          "100%": {transform: "rotate(0deg)"},
        },
        expandButton: {
          "0%": {transform: "scale(1)"},
          "50%": {transform: "scale(1.05)"},
          "100%": {transform: "scale(1)"}
        }
      },
      animation: {
        movedown: "movedown 1.5s infinite",
        shakeLittle: "shakeLittle 0.5s",
        expandButton: "expandButton 0.8s"
      }
    },
  },
  plugins: [],
}
