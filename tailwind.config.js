/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Jost-Medium": "Jost-Medium",
        "Jost-Regular": "Jost-Regular",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out",
        slideOut: "slideOut 0.5s ease-in",
      },
    },
  },
  plugins: [],
}

