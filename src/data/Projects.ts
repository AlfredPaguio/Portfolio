export type ProjectProps = {
  title: string;
  stack: string[];
  description?: string;
  responsibilities?: string[];
  imageUrls?: string[];
  links?: { [key: string]: string };
  date: Date;
};

export const Projects = [
  {
    title: "Personal Data Sheet System for public school teachers",
    stack: ["C#", "MySQL", "SAP Crystal Reports"],
    description:
      "This project was created as a part of the School Division Office (Muntinlupa) project. Our primary goal was to create software that could efficiently manage and process personal data for teachers within the public school system. However, I am currently unaware of the status or utilization of this system within the organization.",
    responsibilities: [
      "Assisted Nite Guerrero in the development of the system, contributing to software code creation and feature enhancement.",
      "Played a significant role in identifying and addressing bugs through thorough code analysis and systematic testing, ensuring the software's stability and reliability.",
      "Demonstrated strong problem-solving skills by implementing solutions that enhanced existing software features, contributing to the project's overall progress.",
    ],
    date: new Date(2019, 2),
  },
  {
    title: "Information Site",
    stack: [
      "PHP",
      "Laravel",
      "Laravel Livewire",
      "jQuery",
      "Javascript",
      "Bootstrap",
    ],
    description:
      "The Information Site Enhancement project at B&D IT Consultancy aimed to elevate the company's online presence and improve the user experience (UX) for visitors to the website. This project was part of the company's strategic efforts to effectively communicate its services, values, and culture to potential clients and partners.",
    links: {
      GitHub: "https://github.com/AlfredPaguio/BND-Info-Site",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-07-19"),
  },
  {
    title: "E-Commerce System",
    stack: [
      "PHP",
      "Laravel",
      "Laravel Livewire",
      "JQuery",
      "Javascript",
      "MySQL",
      "Bootstrap",
    ],
    description:
      "The E-commerce Development project at B&D IT Consultancy aimed to create a robust and scalable online platform for clients to showcase and sell their products or services. I'm not sure about the current status of the project's usage within the company. For accurate details on its usage and performance, I recommend contacting the relevant department for this project.",
    links: {
      GitHub: "https://github.com/AlfredPaguio/Livewire-Ecommerce",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-05-06"),
  },
  {
    title: "Human Resource Information System",
    stack: ["Python", "Flask", "jQuery", "Javascript", "MySQL", "Bootstrap"],
    description:
      "The HRIS aimed to streamline various HR processes within the company, including employee data management, payroll, and attendance tracking. The project focused on creating a user-friendly system to improve HR operations. I don't have information regarding the current status or implementation of this project within the company.",
    links: {
      GitHub:
        "https://github.com/AlfredPaguio/Human-Resources-Information-System",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-04-26"),
  },
];
