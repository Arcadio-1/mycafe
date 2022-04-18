import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  watchSlidesProgress: true,
  grabCursor: false,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
