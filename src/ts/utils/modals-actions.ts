const closeModalButtons =
  document.querySelectorAll<HTMLElement>(".dialog-close");

export function handleOpenModal(modal: HTMLElement | null) {
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

export function handleCloseModal(event: Event) {
  const modal = (event.currentTarget as HTMLElement).closest(".backdrop");
  modal?.classList.remove("active");
  document.body.style.overflow = "";
}

closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", handleCloseModal);
});
