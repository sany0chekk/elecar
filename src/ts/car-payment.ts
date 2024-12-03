import { Car, cars } from "../api/cars";
import { handleCloseModal, handleOpenModal } from "./utils/modals-actions";

let car: Car | undefined;

const carListContainers = document.querySelectorAll<HTMLElement>(
  ".car-list-container"
);
const carModalContent =
  document.querySelector<HTMLElement>("#car-modal-content");
const carPaymentModal =
  document.querySelector<HTMLElement>("#car-payment-modal");

carListContainers?.forEach((container) => {
  container.addEventListener("click", (event: Event) => {
    const target = event.target as HTMLElement;

    if (target.closest(".buy-car-btn")) {
      const carId = (target.closest(".buy-car-btn") as HTMLElement).dataset.id;
      car = cars.find((car) => Number(car.id) === Number(carId));

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
        <div class="car-dialog-btns">
          <button class="button car-dialog-btn car-dialog-book">Book Now</button>
          <button class="button car-dialog-btn car-dialog-cancel">Cancel</button>
        </div>
        `;
        handleOpenModal(carPaymentModal);
      }
    }
  });
});

carModalContent?.addEventListener("click", (event: Event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains("car-dialog-book")) {
    carModalContent.innerHTML = `
    <h2 class="dialog-title car-dialog-title">Booking Confirmed</h2>
      <p class="car-dialog-message">
        Your car <strong>${car?.brand} ${car?.model}</strong> has been booked and is waiting for you at the showroom!
      </p>
  `;
  }

  if (target.classList.contains("car-dialog-cancel")) {
    handleCloseModal(event);
    if (carModalContent) {
      carModalContent.innerHTML = "";
    }
  }
});
