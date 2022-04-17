import { tabsExplore } from "./productIn/tabsExplore.js";
import { plusMin } from "./productIn/quantity.js";
import { fetchProduct } from "./productIn/fetchProduct.js";
import { explorImg } from "./productIn/product-img/explorImg.js";
import { sliderrender } from "./productIn/product-img/sliderrender.js";

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  // slidesPerView: 6,
  // spaceBetween: 0,
  slidesPerView: 6,
  // centeredSlides: true,
  spaceBetween: 0,
  watchSlidesProgress: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const loadrAll = async () => {
  tabsExplore();
  plusMin();
  await fetchProduct("d8").then((data) => {
    sliderrender(data);
    // showSmallImg(data);
  });
  explorImg();
};

document.addEventListener("DOMContentLoaded", () => {
  loadrAll();
});
