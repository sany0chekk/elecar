import { Car } from "./cars";

export interface ElectricCar extends Car {
  acceleration: string;
  topSpeed: string;
  type: string;
}

export const eCars: ElectricCar[] = [
  {
    id: 1,
    brand: "Porsche",
    model: "Turbo S",
    price: 175900,
    img: "./images/p-turbo-s-min.png",
    img2x: "./images/p-turbo-s@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 2,
    brand: "Porsche",
    model: "Taycan",
    price: 114900,
    img: "./images/p-taycan-min.png",
    img2x: "./images/p-taycan@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "Turbo S Cross",
    price: 150900,
    img: "./images/p-turbo-s-cross-min.png",
    img2x: "./images/p-turbo-s-cross@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 4,
    brand: "Porsche",
    model: "Boxster 718",
    price: 125900,
    img: "./images/p-boxter-987-min.png",
    img2x: "./images/p-boxter-987@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 5,
    brand: "Porsche",
    model: "Cayman",
    price: 128900,
    img: "./images/p-cayman-min.png",
    img2x: "./images/p-cayman@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
];
