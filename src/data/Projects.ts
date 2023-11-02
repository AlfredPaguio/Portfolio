/* eslint import/no-unresolved: [2, { ignore: ['\\.png$'] }]*/

// E-commerce
import e_commerce_login_throttle from "/images/projects/e-commerce/login_throttle.png";
import e_commerce_login_attempt from "/images/projects/e-commerce/login_attempt.png";
import e_commerce_login from "/images/projects/e-commerce/login.png";
import e_commerce_register from "/images/projects/e-commerce/register.png";
import e_commerce_shopping_cart from "/images/projects/e-commerce/shopping_cart.png";

import e_commerce_admin_add_file from "/images/projects/e-commerce/admin/add_file.png";
import e_commerce_admin_add_promotional_banner from "/images/projects/e-commerce/admin/add_promotional banner.png";
import e_commerce_admin_brand_add from "/images/projects/e-commerce/admin/brand_add.png";
import e_commerce_admin_brands from "/images/projects/e-commerce/admin/brands.png";
import e_commerce_admin_categories from "/images/projects/e-commerce/admin/categories.png";
import e_commerce_admin_category_add from "/images/projects/e-commerce/admin/category_add.png";
import e_commerce_admin_category_delete from "/images/projects/e-commerce/admin/category_delete.png";
import e_commerce_admin_category_edit from "/images/projects/e-commerce/admin/category_edit.png";
import e_commerce_admin_landing_page from "/images/projects/e-commerce/admin/landing_page.png";
import e_commerce_admin_product_edit_1 from "/images/projects/e-commerce/admin/product_edit-1.png";
import e_commerce_admin_product_edit_2_1 from "/images/projects/e-commerce/admin/product_edit-2-1.png";
import e_commerce_admin_product_edit_2_2 from "/images/projects/e-commerce/admin/product_edit-2-2.png";
import e_commerce_admin_product_edit_3 from "/images/projects/e-commerce/admin/product_edit-3.png";
import e_commerce_admin_product_list from "/images/projects/e-commerce/admin/product_list.png";
import e_commerce_admin_promotional_banner_list from "/images/projects/e-commerce/admin/promotional_banner_list.png";
import e_commerce_admin_site_settings_2 from "/images/projects/e-commerce/admin/site_settings_2.png";
import e_commerce_admin_site_settings_1 from "/images/projects/e-commerce/admin/site_settings-1.png";
import e_commerce_admin_site_settings_3 from "/images/projects/e-commerce/admin/site_settings-3.png";

export type ProjectType = {
  title: string;
  stack: string[];
  description?: string;
  responsibilities?: string[];
  images?: Array<{ imageUrl: string; description?: string }>;
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
    images: [
      { imageUrl: e_commerce_login_attempt, description: "Login Attempt" },
      { imageUrl: e_commerce_login_throttle, description: "Login Throttle" },
      { imageUrl: e_commerce_login, description: "Login" },
      { imageUrl: e_commerce_register, description: "Register" },
      { imageUrl: e_commerce_shopping_cart, description: "Shopping Cart" },
      {
        imageUrl: e_commerce_admin_categories,
        description: "Admin Categories",
      },
      { imageUrl: e_commerce_admin_add_file, description: "Admin Add File" },
      {
        imageUrl: e_commerce_admin_add_promotional_banner,
        description: "Admin Add Promotional Banner",
      },
      {
        imageUrl: e_commerce_admin_site_settings_3,
        description: "Admin Site Settings 3",
      },
      { imageUrl: e_commerce_admin_brand_add, description: "Admin Brand Add" },
      { imageUrl: e_commerce_admin_brands, description: "Admin Brands" },
      {
        imageUrl: e_commerce_admin_categories,
        description: "Admin Categories",
      },
      {
        imageUrl: e_commerce_admin_category_add,
        description: "Admin Category Add",
      },
      {
        imageUrl: e_commerce_admin_category_delete,
        description: "Admin Category Delete",
      },
      {
        imageUrl: e_commerce_admin_category_edit,
        description: "Admin Category Edit",
      },
      {
        imageUrl: e_commerce_admin_landing_page,
        description: "Admin Landing Page",
      },
      {
        imageUrl: e_commerce_admin_product_edit_1,
        description: "Admin Product Edit 1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_1,
        description: "Admin Product Edit 2-1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_2,
        description: "Admin Product Edit 2-2",
      },
      {
        imageUrl: e_commerce_admin_product_edit_3,
        description: "Admin Product Edit 3",
      },
      {
        imageUrl: e_commerce_admin_product_list,
        description: "Admin Product List",
      },
      {
        imageUrl: e_commerce_admin_promotional_banner_list,
        description: "Admin Promotional Banner List",
      },
      {
        imageUrl: e_commerce_admin_site_settings_2,
        description: "Admin Site Settings 2",
      },
      {
        imageUrl: e_commerce_admin_site_settings_1,
        description: "Admin Site Settings 1",
      },
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
