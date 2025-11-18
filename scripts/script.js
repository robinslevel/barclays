// JavaScript Document
console.log("welkom world");

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("header nav");
  if (!nav) return;

  /********************************
   * "Personal" dropdown button
   ********************************/
  // eerste button
  const dropdownBtn = nav.querySelector("button[aria-controls='nav-klein']") || nav.querySelector("button:nth-of-type(1)");
  const dropdownMenu = document.querySelector("#nav-menu");

  if (dropdownBtn && dropdownMenu) {
    // start closed 
    dropdownMenu.hidden = true;
    dropdownBtn.setAttribute("aria-expanded", "false");

    dropdownBtn.addEventListener("click", () => {
      const expanded = dropdownBtn.getAttribute("aria-expanded") === "true";
      const willOpen = !expanded;

      dropdownBtn.setAttribute("aria-expanded", String(willOpen));
      dropdownMenu.hidden = !willOpen;

      // rotate the little arrow
      const arrow = dropdownBtn.querySelector("svg");
      if (arrow) {
        arrow.style.transition = "transform 0.25s ease";
        arrow.style.transform = willOpen ? "rotate(180deg)" : "rotate(0deg)";
      }
    });
  }
  //
  /********************************
   * "ul" dropdown button
   ********************************/
  const menuBtn = document.querySelector("#menu-btn");
  const menuList = document.querySelector("#nav-list");

  if (menuBtn && menuList) {
    // start closed
    menuList.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {
      // toggle class ul
      const isOpen = menuList.classList.toggle("is-open");

      //aria-expanded
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }
});

