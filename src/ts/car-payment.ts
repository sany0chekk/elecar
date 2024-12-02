import { cars } from "../api/cars";
import { handleCloseModal, handleOpenModal } from "./utils/modals-actions";

const buyCarBtns = document.querySelectorAll<HTMLElement>("#buy-car-btn");
const carModalCancelBtn =
  document.querySelector<HTMLElement>(".car-dialog-cancel");
const carModalContent =
  document.querySelector<HTMLElement>("#car-modal-content");
const carPaymentModal =
  document.querySelector<HTMLElement>("#car-payment-modal");

buyCarBtns?.forEach((btn) => {
  btn.addEventListener("click", (event: Event) => {
    const carId = (event.currentTarget as HTMLElement).dataset.id;
    const car = cars.find((car) => Number(car.id) === Number(carId));

    if (carModalContent && car) {
      carModalContent.innerHTML = ` 
        <h2 class="dialog-title car-dialog-title">Purchase Confirmation</h2>
        <img
          srcset="${car.img} 1x, ${car.img2x} 2x"
          src="${car.img}"
          alt="${car.brand} ${car.model}"
          class="car-dialog-img"
        />
  
        <h2 class="car-dialog-brand">
          ${car.brand} <span class="car-dialog-model">${car.model}</span>
        </h2>
        <p class="car-dialog-price">Total to Pay: <span>$${car.price}</span></p>
        `;
      handleOpenModal(carPaymentModal);
    }
  });
});

carModalCancelBtn?.addEventListener("click", (event: Event) => {
  handleCloseModal(event);
  if (carModalContent) {
    carModalContent.innerHTML = "";
  }
});
