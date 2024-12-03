export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  img: string;
  img2x: string;
  acceleration?: string;
  topSpeed?: string;
  type?: string;
}

export const cars = [
  {
    id: 1,
    brand: "Tesla",
    model: "Model X",
    price: 98900,
    img: "/images/t-model-x-min.png",
    img2x: "/images/t-model-x@2x-min.png",
  },
  {
    id: 2,
    brand: "Tesla",
    model: "Model 3",
    price: 45900,
    img: "./images/t-model-3-min.png",
    img2x: "./images/t-model-3@2x-min.png",
  },
  {
    id: 3,
    brand: "Audi",
    model: "E-tron",
    price: 175900,
    img: "/images/a-etron-min.png",
    img2x: "/images/a-etron@2x-min.png",
  },
  {
    id: 4,
    brand: "Porsche",
    model: "Boxster 987",
    price: 126900,
    img: "/images/p-boxter-987-min.png",
    img2x: "/images/p-boxter-987@2x-min.png",
  },
  {
    id: 5,
    brand: "Porsche",
    model: "Panamera",
    price: 126900,
    img: "/images/p-panamera-min.png",
    img2x: "/images/p-panamera@2x-min.png",
  },
  {
    id: 6,
    brand: "Porsche",
    model: "Turbo S",
    price: 175900,
    img: "/images/p-turbo-s-min.png",
    img2x: "/images/p-turbo-s@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 7,
    brand: "Porsche",
    model: "Taycan",
    price: 114900,
    img: "/images/p-taycan-min.png",
    img2x: "/images/p-taycan@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 8,
    brand: "Porsche",
    model: "Turbo S Cross",
    price: 150900,
    img: "/images/p-turbo-s-cross-min.png",
    img2x: "/images/p-turbo-s-cross@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 9,
    brand: "Porsche",
    model: "Boxster 718",
    price: 125900,
    img: "/images/p-boxter-987-min.png",
    img2x: "/images/p-boxter-987@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
  {
    id: 10,
    brand: "Porsche",
    model: "Cayman",
    price: 128900,
    img: "/images/p-cayman-min.png",
    img2x: "/images/p-cayman@2x-min.png",
    acceleration: "3.7 Sec",
    topSpeed: "356 Km/h",
    type: "Electric",
  },
];
