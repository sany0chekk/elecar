import { Car, cars } from "../api/cars";

const swiperList = document.querySelector<HTMLElement>(".swiper-wrapper");

function renderCarsInSwiper(list: Car[]) {
  if (swiperList) {
    swiperList.innerHTML = list
      .map((car: Car) => {
        if (car.type === "Electric") {
          return `
          <li class="swiper-slide card cars-card">
          <h3 class="card-title cars-card-title">${car.brand}</h3>
          <p class="card-subtitle cars-card-subtitle">${car.model}</p>
          <img
            srcset="
              ${car.img}    1x,
              ${car.img2x} 2x
            "
            src="${car.img}"
            alt="${car.brand} ${car.model}"
            class="cars-card-img"
          />
          <ul class="cars-card-benefits">
             <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#speed"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${car.acceleration} Sec</p>
            </li>
            <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#stats"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${car.topSpeed} Km/h</p>
            </li>
            <li class="cars-card-benefits-item">
              <span class="card-card-benefits-icon">
              <svg>
                <use href="./images/svg/icons.svg#charging"></use>
              </svg>
              </span>
              <p class="cars-card-benefits-text">${car.type}</p>
            </li>
          </ul>
          <p class="card-price cars-card-price">$${car.price}</p>
          <button class="card-btn cars-card-btn buy-car-btn" data-id="${car.id}">
            <svg>
              <use href="./images/svg/icons.svg#shopping"></use>
            </svg>
          </button>
        </li>
        `;
        }
      })
      .join("");
  }
}

renderCarsInSwiper(cars);
