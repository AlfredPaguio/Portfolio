// from https://www.hyperui.dev/blog/text-shadow-with-tailwindcss

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      "text-shadow": (value) => ({
        textShadow: value,
      }),
    },
    { values: theme("textShadow") },
  );
});
