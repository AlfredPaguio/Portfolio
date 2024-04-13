import { collection, fields } from "@keystatic/core";

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
    stack: fields.array(fields.text({ label: "Stack" }), {
      label: "Stack",
      itemLabel: (props) => props.value,
    }),
    summary: fields.text({
      label: "Summary",
      validation: { isRequired: false },
    }),
    date: fields.date({
      label: "Project Date",
      description: "The date of the project's first/last commit",
    }),
    gitHubURL: fields.url({
      label: "Repository URL",
      description: "Github URL of repo",
      validation: { isRequired: false },
    }),
    websiteURL: fields.url({
      label: "Website URL",
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
    content: fields.document({
      label: "Description",
      layouts: [[1], [1, 1], [1, 2], [2, 1]],
      formatting: true,
      links: true,
      dividers: true,
      tables: true,
      images: {
        directory: "public/images/projects",
        publicPath: "/images/projects",
        // schema: {
        //   title: fields.text({
        //     label: "Caption",
        //     description:
        //       "The text to display under the image in a caption.",
        //   }),
        // },
      },
    }),
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
      },
      {
        label: "Images",
        description:
          "Collection of images showcasing various aspects of the project.",
      },
    ),
  },
});
