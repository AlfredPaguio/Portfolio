// import { REPOSITORIES, REPO_OWNER } from "@/data/Repositories";
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
    // kind: "github",
    // repo: {
    //   owner: REPO_OWNER,
    //   name: REPOSITORIES.PortfolioData,
    // },
  },
  ui: {
    brand: { name: "Alfred's Portfolio" },
  },
  collections: {
    projects: collection({
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
        links: fields.array(
          fields.object({
            name: fields.text({ label: "Website Name" }),
            url: fields.url({
              label: "URL",
              description:
                "The website URL associated with the project. This could be either the deployed website of the project, the repository where the project's source code is hosted, or any relevant social media links pertaining to the project.",
            }),
          }),
          {
            label: "Links",
            itemLabel: (props) =>
              props.fields.name.value ?? props.fields.url.value,
          }
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
          formatting: true,
          dividers: true,
          links: true,
          // images: {
          //   directory: "public/images/projects",
          //   publicPath: "/images/projects",
          //   schema: {
          //     title: fields.text({
          //       label: "Caption",
          //       description:
          //         "The text to display under the image in a caption.",
          //     }),
          //   },
          // },
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
                props.fields.alt?.value ??
                props.fields.image?.value ??
                "Image Url",
            },
          },
          {
            label: "Images",
            description:
              "Collection of images showcasing various aspects of the project.",
          }
        ),
      },
    }),
  },

  singletons: {
    stacks: singleton({
      path: "src/content/data/stack",
      label: "Tech Stack",
      schema: {
        programmingLanguages: fields.array(
          fields.text({ label: "Language Name" }),
          {
            label: "Programming Languages",
            itemLabel: (props) => props.value,
          }
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
          }
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
    }),
  },
});
