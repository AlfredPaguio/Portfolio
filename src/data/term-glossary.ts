export interface TermDefinition {
  label: string;
  definition: string;
  href?: string;
  linkLabel?: string;
}

export const termGlossary = {
  frontmatter: {
    label: "frontmatter",
    definition:
      "A metadata block at the top of a Markdown or MDX file. Here it holds fields like title, summary, date, and technologies.",
  },
  "zod-schema": {
    label: "Zod schema",
    definition:
      "A set of rules describing which content fields exist and what values they accept. The editor uses those rules to build and validate its form.",
    href: "https://zod.dev/",
    linkLabel: "Zod documentation",
  },
  "file-system-access": {
    label: "File System Access API",
    definition:
      "A browser feature that lets a site read or write files and folders you choose, after you grant permission.",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/File_System_API",
    linkLabel: "MDN: File System API",
  },
  "sandboxed-evaluation": {
    label: "sandboxed evaluation",
    definition:
      "Running the project config in a restricted environment to inspect its schema, separate from the editor's normal application code.",
  },
  WebAssembly: {
    label: "WebAssembly",
    definition:
      "A compact binary format that lets code compiled from languages like C or Rust run in a browser. Here, esbuild uses it to transform the config locally.",
    href: "https://developer.mozilla.org/en-US/docs/WebAssembly",
    linkLabel: "MDN: WebAssembly",
  },
  CommonJS: {
    label: "CommonJS",
    definition:
      "A JavaScript module format that loads dependencies with require() and exposes values through module.exports.",
  },
  "function-constructor": {
    label: "Function constructor",
    definition:
      "JavaScript's Function() constructor creates a function from a string of code. The editor runs the transformed config this way inside its restricted environment.",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function",
    linkLabel: "MDN: Function constructor",
  },
  "JSON-Schema": {
    label: "JSON Schema",
    definition:
      "A standard format for describing the fields and allowed values in JSON data. The editor uses it to render a dynamic form.",
    href: "https://json-schema.org/learn",
    linkLabel: "JSON Schema guide",
  },
  Inertia: {
    label: "Inertia.js",
    definition:
      "A framework that connects server-side routes and data to a React page, without requiring a separate API for each screen.",
    href: "https://inertiajs.com/",
    linkLabel: "Inertia.js documentation",
  },
  CRUD: {
    label: "CRUD",
    definition:
      "Create, read, update, and delete: the four basic actions for managing stored records.",
  },
  RBAC: {
    label: "role-based access control",
    definition:
      "A way to grant access by assigning people roles, such as administrator or member, with permissions attached to each role.",
  },
  "sentiment-analysis": {
    label: "sentiment analysis",
    definition:
      "Using software to estimate whether a piece of text expresses a positive, negative, or neutral opinion.",
  },
  "web-scraping": {
    label: "web scraping",
    definition:
      "Collecting selected information from web pages with software, instead of copying it by hand.",
  },
  Selenium: {
    label: "Selenium",
    definition:
      "A browser automation tool. In this project it gathered product details and reviews from shopping sites.",
    href: "https://www.selenium.dev/documentation/",
    linkLabel: "Selenium documentation",
  },
  "headless-browser": {
    label: "headless browser",
    definition:
      "A browser that loads pages and runs their code without opening a visible window.",
  },
  "Beautiful-Soup": {
    label: "Beautiful Soup",
    definition:
      "A Python library for parsing HTML and selecting information from a web page's markup.",
    href: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/",
    linkLabel: "Beautiful Soup documentation",
  },
  "expression-evaluation": {
    label: "expression evaluation",
    definition:
      "Reading a mathematical expression, following its operator order, and calculating the result.",
  },
  "javascript-eval": {
    label: "eval()",
    definition:
      "A JavaScript function that executes code written as a string. This calculator avoids it and handles arithmetic expressions with its own logic.",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",
    linkLabel: "MDN: eval()",
  },
  UX: {
    label: "user experience (UX)",
    definition:
      "How people experience and interact with a product, including how easy it is to understand and use.",
  },
  HRIS: {
    label: "HRIS",
    definition:
      "Human Resource Information System: software for managing employee records and HR processes.",
  },
  "RESTful-API": {
    label: "RESTful API",
    definition:
      "A web interface that lets other software work with data through standard HTTP requests, such as creating or retrieving a short link.",
  },
} as const;
