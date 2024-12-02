import { handleOpenModal } from "./utils/modals-actions";

const subscribeModal = document.querySelector<HTMLElement>("#subscribe-modal");
const openSubscribeModalBtn = document.querySelector<HTMLElement>(
  "#open-subscribe-modal"
);

openSubscribeModalBtn?.addEventListener("click", () =>
  handleOpenModal(subscribeModal)
);
