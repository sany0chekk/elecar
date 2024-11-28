import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1.5,
  spaceBetween: 23,
  centeredSlides: false,

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 47,
      centeredSlides: true,
    },
  },
});
