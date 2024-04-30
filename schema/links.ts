import { fields, singleton } from "@keystatic/core";

export const linksSchema = singleton({
  path: "src/content/data/links",
  format: "json",
  label: "Links",
  schema: {
    social: fields.array(
      fields.object(
        {
          name: fields.text({ label: "Website Name" }),
          url: fields.url({ label: "Links" }),
        },
        {
          label: "Links",
          description: "Social Links",
        },
      ),
      {
        label: "Social Link",
        itemLabel: (props) =>
          props.fields.name.value ??
          (props.fields.url.value &&
            new URL(props.fields.url.value).hostname) ??
          "Link",
      },
    ),
  },
});
