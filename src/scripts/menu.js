const menu = document.querySelector(".menu");
const button = document.querySelector(".menu-button");

button?.addEventListener("click", () => {
  const isExpanded = menu?.getAttribute("aria-expanded") === "true";
  menu?.setAttribute("aria-expanded", `${!isExpanded}`);
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".menu[aria-expanded='true']").forEach((menu) => {
    if (!menu.contains(e.target)) {
      menu.setAttribute("aria-expanded", "false");
    }
  });
});
