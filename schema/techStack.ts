import { fields, singleton } from "@keystatic/core";

export const techStackSchema = singleton({
  path: "src/content/data/stack",
  format: "json",
  label: "Tech Stack",
  schema: {
    programmingLanguages: fields.array(
      fields.text({ label: "Language Name" }),
      {
        label: "Programming Languages",
        itemLabel: (props) => props.value,
      },
    ),
    frameworks: fields.array(fields.text({ label: "Framework Name" }), {
      label: "Frameworks",
      itemLabel: (props) => props.value,
    }),
    databaseManagementSystems: fields.array(
      fields.text({ label: "DBMS Name" }),
      {
        label: "Database Management Systems",
        itemLabel: (props) => props.value,
      },
    ),
    developerTools: fields.array(fields.text({ label: "Tool Name" }), {
      label: "Developer Tools",
      itemLabel: (props) => props.value,
    }),
    libraries: fields.array(fields.text({ label: "Library name" }), {
      label: "Libraries",
      itemLabel: (props) => props.value,
    }),
  },
});
