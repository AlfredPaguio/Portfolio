import { collection, fields } from "@keystatic/core";
import { contentField } from "./fields/content";
import techStackData from "@/content/data/stack.json";

export const projectsSchema = collection({
  label: "Projects",
  // entryLayout: "content",
  slugField: "title",
  path: "src/content/projects/*",
  previewUrl: `/preview/start?branch={branch}&to=/projects/{slug}`,
  format: { contentField: "content" },
  schema: {
    title: fields.slug({
      name: { label: "Name", validation: { isRequired: true } },
    }),
    featured: fields.checkbox({
      label: "Featured Project",
      description:
        "Check this to display the project in the Featured Projects section",
      defaultValue: false,
    }),
    stack: fields.array(
      fields.select({
        label: "Select Technology",
        options: [
          ...techStackData.programmingLanguages.map((tech) => ({
            label: tech.name,
            value: tech.name,
            key: tech.name,
          })),
          ...techStackData.frameworks.map((tech) => ({
            label: tech.name,
            value: tech.name,
            key: tech.name,
          })),
          ...techStackData.databaseManagementSystems.map((tech) => ({
            label: tech.name,
            value: tech.name,
            key: tech.name,
          })),
          ...techStackData.developerTools.map((tech) => ({
            label: tech.name,
            value: tech.name,
            key: tech.name,
          })),
          ...techStackData.libraries.map((tech) => ({
            label: tech.name,
            value: tech.name,
            key: tech.name,
          })),
        ],
        defaultValue:
          techStackData.programmingLanguages[0]?.name ||
          techStackData.frameworks[0]?.name ||
          techStackData.libraries[0]?.name ||
          techStackData.databaseManagementSystems[0]?.name ||
          techStackData.developerTools[0]?.name,
      }),
      {
        label: "Tech Stack",
        itemLabel: (props) => props.value || "",
        description: "Technologies from your tech stack used in this project",
      },
    ),
    otherStack: fields.array(
      fields.text({
        label: "Add Technology",
      }),
      {
        label: "Other Technologies",
        itemLabel: (props) => props.value,

        description:
          "Additional technologies used in this project (not in your tech stack)",
      },
    ),
    summary: fields.text({
      label: "Summary",
      description: "A brief description of the project (used in project cards)",
      validation: { isRequired: false },
      multiline: true,
    }),
    date: fields.date({
      label: "Project Date",
      description: "The date of the project's first/last commit",
    }),
    links: fields.array(
      fields.object({
        name: fields.text({ label: "Website Name" }),
        category: fields.select({
          label: "Link Type",
          options: [
            { label: "Source Code", value: "source" },
            { label: "Live Demo", value: "demo" },
            { label: "Documentation", value: "docs" },
            { label: "Social Media", value: "social" },
            { label: "Other", value: "other" },
          ],
          defaultValue: "other",
        }),
        url: fields.url({
          label: "URL",
          description: "The website URL",
          validation: {
            isRequired: true,
          },
        }),
      }),
      {
        label: "External Links",
        itemLabel: (props) =>
          props.fields.name.value
            ? `${props.fields.name.value} (${props.fields.category.value})`
            : `${props.fields.category.value}`,
      },
    ),
    status: fields.select({
      label: "Status",
      description: "The project's status",
      options: [
        { label: "Active", value: "active" },
        { label: "Archived", value: "archived" },
        { label: "Maintenance only", value: "maintenance" },
        { label: "Unknown", value: "unknown" },
      ],
      defaultValue: "active",
    }),
    content: contentField,
    images: fields.blocks(
      {
        upload: {
          label: "Upload Project image",
          schema: fields.object({
            image: fields.image({
              label: "Image File",
              directory: "public/images/projects",
              publicPath: "images/projects",
              validation: {
                isRequired: true,
              },
            }),
            alt: fields.text({
              label: "Alt Text",
              validation: { isRequired: false },
            }),
          }),
          itemLabel: (props) =>
            props.fields.alt?.value ??
            props.fields.image.value?.filename ??
            "Image File",
        },
        // The second block option is a link to an image URL.
        url: {
          label: "Add Image URL",
          schema: fields.object({
            image: fields.url({
              label: "Image URL",
              description: "URL of the image",
              validation: { isRequired: true },
            }),
            alt: fields.text({
              label: "Alt Text",
              validation: { isRequired: false },
            }),
          }),
          itemLabel: (props) =>
            props.fields.alt?.value ?? props.fields.image?.value ?? "Image Url",
        },
        cloud: {
          label: "Cloud Image",
          schema: fields.cloudImage({
            label: "Project Image",
            description: "upload screenshots/images of the project",
            validation: {
              isRequired: true,
            },
          }),
        },
      },
      {
        label: "Images",
        description:
          "Collection of images showcasing various aspects of the project.",
      },
    ),
    videos: fields.array(
      fields.url({
        label: "Video URL",
        description: "URL of a video showcasing the project",
      }),
      {
        label: "Video Link",
        itemLabel: (props) => props.value ?? "Add video link",
      },
    ),
  },
});
