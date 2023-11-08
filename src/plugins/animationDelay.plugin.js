import plugin from "tailwindcss/plugin";

const animationDelay = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "animation-delay": (value) => {
        return {
          "animation-delay": value + "ms",
        };
      },
    },
    {
      values: theme("transitionDelay"),
    },
  );
});

module.exports = animationDelay;
