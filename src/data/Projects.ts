/* eslint import/no-unresolved: [2, { ignore: ['\\.png$'] }]*/

// E-commerce
import e_commerce_login_throttle from "/images/projects/e-commerce/login_throttle.png";
import e_commerce_login_attempt from "/images/projects/e-commerce/login_attempt.png";
import e_commerce_login from "/images/projects/e-commerce/login.png";
import e_commerce_register from "/images/projects/e-commerce/register.png";
import e_commerce_shopping_cart from "/images/projects/e-commerce/shopping_cart.png";

import e_commerce_admin_add_file from "/images/projects/e-commerce/admin/add_file.png";
import e_commerce_admin_add_promotional_banner from "/images/projects/e-commerce/admin/add_promotional_banner.png";
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
// Information Site
// import info_site_home from "/images/projects/information_site/home.png";
import info_site_home_large from "/images/projects/information_site/large_home.png";
import info_site_about from "/images/projects/information_site/about.png";
import info_site_services from "/images/projects/information_site/services.png";
import info_site_faq from "/images/projects/information_site/faq.png";
import info_site_faq_open from "/images/projects/information_site/faq_open.png";
import info_site_contact from "/images/projects/information_site/contact.png";

export type ProjectType = {
  id: string;
  title: string;
  stack: string[];
  summary?: string;
  description?: string;
  responsibilities?: string[];
  images?: Array<{ imageUrl: string; alt?: string }>;
  links?: { [key: string]: string };
  date: Date;
};

export const Projects = [
  {
    id: "PDSS2019",
    title: "Personal Data Sheet System for public school teachers",
    stack: ["C# 5.0", "MySQL", "SAP Crystal Reports"],
    summary: "Managed personal data for public school teachers.",
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
      { imageUrl: info_site_home_large, alt: "Home" },
      // { imageUrl: info_site_home, alt: "Home" },
      { imageUrl: info_site_about, alt: "About" },
      { imageUrl: info_site_services, alt: "Services" },
      { imageUrl: info_site_faq, alt: "FAQ" },
      {
        imageUrl: info_site_faq_open,
        alt: "FAQ - All accordion opened",
      },
      { imageUrl: info_site_contact, alt: "Contact" },
    ],
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
        imageUrl: e_commerce_admin_landing_page,
        alt: "Admin - Landing Page",
      },
      { imageUrl: e_commerce_login, alt: "Login" },
      { imageUrl: e_commerce_login_attempt, alt: "Login Attempt" },
      { imageUrl: e_commerce_login_throttle, alt: "Login Throttle" },
      { imageUrl: e_commerce_register, alt: "Register" },
      { imageUrl: e_commerce_shopping_cart, alt: "Shopping Cart" },
      {
        imageUrl: e_commerce_admin_categories,
        alt: "Admin - Categories",
      },
      { imageUrl: e_commerce_admin_add_file, alt: "Admin - Add File" },
      {
        imageUrl: e_commerce_admin_add_promotional_banner,
        alt: "Admin - Add Promotional Banner",
      },
      {
        imageUrl: e_commerce_admin_site_settings_3,
        alt: "Admin - Site Settings 3",
      },
      { imageUrl: e_commerce_admin_brand_add, alt: "Admin - Brand Add" },
      { imageUrl: e_commerce_admin_brands, alt: "Admin - Brands" },
      {
        imageUrl: e_commerce_admin_categories,
        alt: "Admin - Categories",
      },
      {
        imageUrl: e_commerce_admin_category_add,
        alt: "Admin - Category Add",
      },
      {
        imageUrl: e_commerce_admin_category_delete,
        alt: "Admin - Category Delete",
      },
      {
        imageUrl: e_commerce_admin_category_edit,
        alt: "Admin - Category Edit",
      },
      {
        imageUrl: e_commerce_admin_product_edit_1,
        alt: "Admin - Product Edit 1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_1,
        alt: "Admin - Product Edit 2-1",
      },
      {
        imageUrl: e_commerce_admin_product_edit_2_2,
        alt: "Admin - Product Edit 2-2",
      },
      {
        imageUrl: e_commerce_admin_product_edit_3,
        alt: "Admin - Product Edit 3",
      },
      {
        imageUrl: e_commerce_admin_product_list,
        alt: "Admin - Product List",
      },
      {
        imageUrl: e_commerce_admin_promotional_banner_list,
        alt: "Admin - Promotional Banner List",
      },
      {
        imageUrl: e_commerce_admin_site_settings_2,
        alt: "Admin - Site Settings 2",
      },
      {
        imageUrl: e_commerce_admin_site_settings_1,
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
  },
];
