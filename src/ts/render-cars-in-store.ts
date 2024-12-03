import { Car, cars } from "../api/cars";

const storeList = document.querySelector<HTMLElement>(".store-list");

function renderCars(list: Car[]) {
  if (storeList) {
    storeList.innerHTML = list
      .map((car: Car) => {
        if (car.type !== "Electric") {
          return `
        <li class="card store-item">
          <h3 class="card-title store-item-title">${car.brand}</h3>
          <p class="card-subtitle store-item-subtitle">${car.model}</p>
          <img 
            srcset="${car.img} 1x, ${car.img2x} 2x" 
            src="${car.img}" 
            alt="${car.model}" 
            class="store-item-img" 
          />
          <p class="card-price store-item-price">$${car.price.toLocaleString()}</p>
          <button class="card-btn store-item-btn buy-car-btn" data-id="${
            car.id
          }">
            <svg>
              <use href="/images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
      `;
        }
      })
      .join("");
  }
}

renderCars(cars);

const filtersButtons =
  document.querySelectorAll<HTMLElement>(".store-filters-btn");

filtersButtons?.forEach((button: HTMLElement) => {
  button.addEventListener("click", () => {
    filtersButtons.forEach((btn: HTMLElement) =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const brand = button.id.trim();

    const filterCars =
      brand === "all"
        ? cars
        : cars.filter((car) => car.brand.toLowerCase() === brand.toLowerCase());

    renderCars(filterCars);
  });
});
