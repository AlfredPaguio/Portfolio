// E-commerce
import e_commerce_login_throttle from "@/public/images/projects/e-commerce/login_throttle.png";
import e_commerce_login_attempt from "@/public/images/projects/e-commerce/login_attempt.png";
import e_commerce_login from "@/public/images/projects/e-commerce/login.png";
import e_commerce_register from "@/public/images/projects/e-commerce/register.png";
import e_commerce_shopping_cart from "@/public/images/projects/e-commerce/shopping_cart.png";

import e_commerce_admin_add_file from "@/public/images/projects/e-commerce/admin/add_file.png";
import e_commerce_admin_add_promotional_banner from "@/public/images/projects/e-commerce/admin/add_promotional_banner.png";
import e_commerce_admin_brand_add from "@/public/images/projects/e-commerce/admin/brand_add.png";
import e_commerce_admin_brands from "@/public/images/projects/e-commerce/admin/brands.png";
import e_commerce_admin_categories from "@/public/images/projects/e-commerce/admin/categories.png";
import e_commerce_admin_category_add from "@/public/images/projects/e-commerce/admin/category_add.png";
import e_commerce_admin_category_delete from "@/public/images/projects/e-commerce/admin/category_delete.png";
import e_commerce_admin_category_edit from "@/public/images/projects/e-commerce/admin/category_edit.png";
import e_commerce_admin_landing_page from "@/public/images/projects/e-commerce/admin/landing_page.png";
import e_commerce_admin_product_edit_1 from "@/public/images/projects/e-commerce/admin/product_edit-1.png";
import e_commerce_admin_product_edit_2_1 from "@/public/images/projects/e-commerce/admin/product_edit-2-1.png";
import e_commerce_admin_product_edit_2_2 from "@/public/images/projects/e-commerce/admin/product_edit-2-2.png";
import e_commerce_admin_product_edit_3 from "@/public/images/projects/e-commerce/admin/product_edit-3.png";
import e_commerce_admin_product_list from "@/public/images/projects/e-commerce/admin/product_list.png";
import e_commerce_admin_promotional_banner_list from "@/public/images/projects/e-commerce/admin/promotional_banner_list.png";
import e_commerce_admin_site_settings_2 from "@/public/images/projects/e-commerce/admin/site_settings_2.png";
import e_commerce_admin_site_settings_1 from "@/public/images/projects/e-commerce/admin/site_settings-1.png";
import e_commerce_admin_site_settings_3 from "@/public/images/projects/e-commerce/admin/site_settings-3.png";
// Information Site
// import info_site_home from "@/public/images/projects/information_site/home.png";
import info_site_home_large from "@/public/images/projects/information_site/large_home.png";
import info_site_about from "@/public/images/projects/information_site/about.png";
import info_site_services from "@/public/images/projects/information_site/services.png";
import info_site_faq from "@/public/images/projects/information_site/faq.png";
import info_site_faq_open from "@/public/images/projects/information_site/faq_open.png";
import info_site_contact from "@/public/images/projects/information_site/contact.png";
// React Typescript Calculator
import react_ts_calculator_screenshot1 from "@/public/images/projects/react-ts-calculator/screenshot1.png";
import react_ts_calculator_screenshot2 from "@/public/images/projects/react-ts-calculator/screenshot2.png";

export type ProjectType = {
  id: string;
  title: string;
  stack: string[];
  summary?: string;
  description?: string;
  images?: Array<{ imageUrl: string; alt?: string }>;
  links?: { [key: string]: string };
  date: Date;
  status: "Active" | "Archived" | "Maintenance" | "Unknown";
};

export const Projects: ProjectType[] = [
  {
    id: "PDSS2019",
    title: "Personal Data Sheet System for public school teachers",
    stack: ["C# 5.0", "MySQL", "SAP Crystal Reports"],
    summary: "Managed personal data for public school teachers.",
    description: `This project was created as a part of the School Division Office (Muntinlupa) project. Our primary goal was to create software that could efficiently manage and process personal data for teachers within the public school system. However, I am currently unaware of the status or utilization of this system within the organization.
## Responsibilities:
- Assisted [Nite Guerrero](https://www.facebook.com/nite.guerrero) in the development of the system, contributing to software code creation and feature enhancement.
- Played a significant role in identifying and addressing bugs through thorough code analysis and systematic testing, ensuring the software's stability and reliability.
- Demonstrated strong problem-solving skills by implementing solutions that enhanced existing software features, contributing to the project's overall progress.`,
    date: new Date(2019, 2),
    status: "Unknown",
  },
  {
    id: "InfoSiteB&D",
    title: "Information Site",
    stack: [
      "PHP",
      "Laravel",
      "Laravel Livewire",
      "jQuery",
      "Javascript",
      "Bootstrap",
    ],
    summary:
      "Elevated online presence and improved UX for B&D IT Consultancy site.",
    description:
      "The Information Site Enhancement project at B&D IT Consultancy aimed to elevate the company's online presence and improve the user experience (UX) for visitors to the website. This project was part of the company's strategic efforts to effectively communicate its services, values, and culture to potential clients and partners.",
    links: {
      GitHub: "https://github.com/AlfredPaguio/BND-Info-Site",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-07-19"),
    images: [
      { imageUrl: info_site_home_large.src, alt: "Home" },
      // { imageUrl: info_site_home.src, alt: "Home" },
      { imageUrl: info_site_about.src, alt: "About" },
      { imageUrl: info_site_services.src, alt: "Services" },
      { imageUrl: info_site_faq.src, alt: "FAQ" },
      {
        imageUrl: info_site_faq_open.src,
        alt: "FAQ - All accordion opened",
      },
      { imageUrl: info_site_contact.src, alt: "Contact" },
    ],
    status: "Archived",
  },
  {
    id: "E-CommerceB&D",
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
    images: [
      {
        imageUrl: e_commerce_admin_landing_page.src,
        alt: "Admin - Landing Page",
      },
      { imageUrl: e_commerce_login.src, alt: "Login" },
      { imageUrl: e_commerce_login_attempt.src, alt: "Login Attempt" },
      { imageUrl: e_commerce_login_throttle.src, alt: "Login Throttle" },
      { imageUrl: e_commerce_register.src, alt: "Register" },
      { imageUrl: e_commerce_shopping_cart.src, alt: "Shopping Cart" },
      {
        imageUrl: e_commerce_admin_categories.src,
        alt: "Admin - Categories",
      },
      { imageUrl: e_commerce_admin_add_file.src, alt: "Admin - Add File" },
      {
        imageUrl: e_commerce_admin_add_promotional_banner.src,
        alt: "Admin - Add Promotional Banner",
      },
      {
        imageUrl: e_commerce_admin_site_settings_3.src,
        alt: "Admin - Site Settings 3",
      },
      { imageUrl: e_commerce_admin_brand_add.src, alt: "Admin - Brand Add" },
      { imageUrl: e_commerce_admin_brands.src, alt: "Admin - Brands" },
      {
        imageUrl: e_commerce_admin_categories.src,
        alt: "Admin - Categories",
      },
      {
        imageUrl: e_commerce_admin_category_add.src,
        alt: "Admin - Category Add",
      },
      {
        imageUrl: e_commerce_admin_category_delete.src,
        alt: "Admin - Category Delete",
      },
      {
        imageUrl: e_commerce_admin_category_edit.src,
        alt: "Admin - Category Edit",
      },
      {
        imageUrl: e_commerce_admin_product_edit_1.src,
        alt: "Admin - Product Edit 1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_1.src,
        alt: "Admin - Product Edit 2-1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_2.src,
        alt: "Admin - Product Edit 2-2",
      },
      {
        imageUrl: e_commerce_admin_product_edit_3.src,
        alt: "Admin - Product Edit 3",
      },
      {
        imageUrl: e_commerce_admin_product_list.src,
        alt: "Admin - Product List",
      },
      {
        imageUrl: e_commerce_admin_promotional_banner_list.src,
        alt: "Admin - Promotional Banner List",
      },
      {
        imageUrl: e_commerce_admin_site_settings_2.src,
        alt: "Admin - Site Settings 2",
      },
      {
        imageUrl: e_commerce_admin_site_settings_1.src,
        alt: "Admin - Site Settings 1",
      },
    ],
    summary:
      "Developed a robust and scalable online platform for selling products.",
    description:
      "The E-commerce Development project at B&D IT Consultancy aimed to create a robust and scalable online platform for clients to showcase and sell their products or services. I'm not sure about the current status of the project's usage within the company. For accurate details on its usage and performance, I recommend contacting the relevant department for this project.",
    links: {
      GitHub: "https://github.com/AlfredPaguio/Livewire-Ecommerce",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-05-06"),
    status: "Unknown",
  },
  {
    id: "HRISB&D",
    title: "Human Resource Information System",
    stack: ["Python", "Flask", "jQuery", "Javascript", "MySQL", "Bootstrap"],
    summary: "Streamlined HR processes, including data management and payroll.",
    description:
      "The HRIS aimed to streamline various HR processes within the company, including employee data management, payroll, and attendance tracking. The project focused on creating a user-friendly system to improve HR operations. I don't have information regarding the current status or implementation of this project within the company.",
    links: {
      GitHub:
        "https://github.com/AlfredPaguio/Human-Resources-Information-System",
      Website: "https://bditconsultancy.com/",
    },
    date: new Date("2023-04-26"),
    status: "Unknown",
  },
  {
    id: "react-ts-calculator",
    title: "Calculator",
    stack: ["TypeScript", "React", "TailwindCSS"],
    summary:
      "A React-based calculator web application, designed to perform basic math operations without relying on the built-in `eval()` function in JavaScript.",
    description:
      "A simple calculator web application built with React, TypeScript, Vite, and TailwindCSS. The project intentionally avoids using the built-in eval() function in JavaScript, providing a challenge and a more controlled approach to expression evaluation. Users can perform basic arithmetic calculations using this intuitive and responsive calculator.",
    date: new Date("2024-01-14"),
    links: {
      GitHub: "https://github.com/AlfredPaguio/react-ts-calculator",
      Website: "https://alfredpaguio.github.io/react-ts-calculator/",
    },
    images: [
      {
        imageUrl: react_ts_calculator_screenshot1.src,
        alt: "Main screen",
      },
      { imageUrl: react_ts_calculator_screenshot2.src, alt: "History screen" },
    ],
    status: "Maintenance",
  },
  {
    id: "Portfolio",
    title: "This Portfolio",
    stack: ["React", "TypeScript", "TailwindCSS"],
    summary:
      "This project showcases my skills and projects, built using TypeScript, React, and various other libraries and tools.",
    description: `
This project showcases my skills and projects, built using TypeScript, React, and various other libraries and tools.
## Features
### 1. Filter Projects
- **Filter by Name:** Easily search and filter projects by their names using the search bar.
- **Filter by Technologies Used:** Find projects based on the technologies used.
### 2. Sort Projects
- **Name (A-Z):** Sort projects alphabetically by name in ascending order.
- **Name (Z-A):** Sort projects alphabetically by name in descending order.
- **Date (Newest First):** Sort projects by date, showcasing the most recent projects first.
- **Date (Oldest First):** Sort projects by date, showcasing the oldest projects first.
    `,
    links: {
      GitHub: "https://github.com/AlfredPaguio/Portfolio",
    },
    date: new Date("2023-09-17"),
    status: "Active",
  },
  {
    id: "CI4News",
    title: "CodeIgniter News Project",
    stack: ["CodeIgniter 4", "Bootstrap", "PHP", "MySQL"],
    summary:
      "This project documents my journey of my hands-on learning for CodeIgniter 4.",
    description:
      "This project serves as a platform for me to learn CodeIgniter, document my experience, and share my insights with the community. Through this project, I aim to showcase my progress as I explore the CodeIgniter framework and build a news-related application.",
    links: {
      GitHub: "https://github.com/AlfredPaguio/CodeIgniter-News",
    },
    date: new Date("2023-08-25"),
    status: "Archived",
  },
];
