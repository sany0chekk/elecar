const menuBtn = document.querySelector<HTMLElement>(".header-menu-btn");
const menuElement = document.querySelector<HTMLElement>(".header-menu");

menuBtn?.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuElement?.classList.toggle("active");

  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
});
