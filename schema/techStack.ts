import { fields, singleton } from "@keystatic/core";

const technologyField = fields.object({
  name: fields.text({ label: "Technology Name" }),
  status: fields.select({
    label: "Status",
    options: [
      { label: "Using", value: "using" },
      { label: "Learning", value: "learning" },
      { label: "Exploring", value: "exploring" },
      { label: "Interested", value: "interested" },
    ],
    defaultValue: "using",
  }),
  proficiency: fields.select({
    label: "Proficiency",
    options: [
      { label: "Beginner", value: "1" },
      { label: "Basic understanding", value: "2" },
      { label: "Intermediate", value: "3" },
      { label: "Advanced", value: "4" },
      { label: "Expert", value: "5" },
    ],
    defaultValue: "1",
  }),
});

export const techStackSchema = singleton({
  path: "src/content/data/stack",
  format: "json",
  label: "Tech Stack",
  schema: {
    programmingLanguages: fields.array(technologyField, {
      label: "Programming Languages",
      itemLabel: (props) =>
        `${props.fields.name.value} (${props.fields.status.value})`,
    }),
    frameworks: fields.array(technologyField, {
      label: "Frameworks",
      itemLabel: (props) =>
        `${props.fields.name.value} (${props.fields.status.value})`,
    }),
    databaseManagementSystems: fields.array(technologyField, {
      label: "Database Management Systems",
      itemLabel: (props) =>
        `${props.fields.name.value} (${props.fields.status.value})`,
    }),
    developerTools: fields.array(technologyField, {
      label: "Developer Tools",
      itemLabel: (props) =>
        `${props.fields.name.value} (${props.fields.status.value})`,
    }),
    libraries: fields.array(technologyField, {
      label: "Libraries",
      itemLabel: (props) =>
        `${props.fields.name.value} (${props.fields.status.value})`,
    }),
  },
});
