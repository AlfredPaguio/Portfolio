// https://tailwindcss.com/docs/plugins#adding-variants

const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addVariant, matchVariant  }) {
  matchVariant(
    "otherChildrenOnParent",
    (value) => {
      return `[&:has(${value})>:not(${value})]`;
    },
    {
      values: {
        hover: ":hover",
      },
    }
  );

  addVariant("optional", "&:optional");
  addVariant("not", "&:not");
  addVariant("has", "&:has");
});
