import { collection, fields } from "@keystatic/core";
import { contentField } from "./fields/content";

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
      description: "Check this to display the project in the Featured Projects section",
      defaultValue: false,
    }),
    stack: fields.array(fields.text({ label: "Technology" }), {
      label: "Tech Stack",
      itemLabel: (props) => props.value,
      description: "Technologies used in this project",
    }),
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
    gitHubURL: fields.url({
      label: "Repository URL",
      description: "GitHub URL of the repository",
      validation: { isRequired: false },
    }),
    websiteURL: fields.url({
      label: "Live Website URL",
      description: "Where project is deployed",
      validation: { isRequired: false },
    }),
    externalLinks: fields.conditional(
      fields.checkbox({
        label: "External Links?",
        defaultValue: false,
        description: "(e.g., GitLab, Facebook, X, etc.)",
      }),
      {
        true: fields.array(
          fields.object({
            name: fields.text({ label: "Website Name" }),
            url: fields.url({
              label: "URL",
              description:
                "The website URL associated with the project. This could be either the deployed website of the project, the repository where the project's source code is hosted, or any relevant social media links pertaining to the project.",
              validation: {
                isRequired: true,
              },
            }),
          }),
          {
            label: "External Links",
            itemLabel: (props) =>
              props.fields.name.value ?? props.fields.url.value,
          },
        ),
        false: fields.empty(),
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
