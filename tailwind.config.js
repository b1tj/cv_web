/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('https://i.imgur.com/DH9wS4K.png')",
      },

      textColor: {
        green: "#2ecc71",
        heading: "#555555",
        description: "#666666",
        "contact-color": "#6A6E71",
        "input-text": "#4B5557",
        "cef-heading": "#555555",
      },

      backgroundColor: {
        "section-grey": "#F2F2F2",
        input: "#4B5557",
        dark: "#191E22",
      },

      fontFamily: {
        "sans-serif": "sans-serif",
      },

      colors: {
        green: "#2ecc71",
      },

      keyframes: {
        "slide-tl": {
          "0%": { transform: "translateX(300px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },

      animation: {
        "slide-tl": "slide-tl 1s ease forwards",
      },
    },
  },

  plugins: [require("./src/plugins/animationDelay.plugin")],
};
