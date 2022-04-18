import { tabsExplore } from "./productIn/tabsExplore.js";
import { plusMin } from "./productIn/quantity.js";
import { fetchProduct } from "./productIn/fetchProduct.js";
import { explorImg } from "./productIn/product-img/explorImg.js";
import { sliderrender } from "./productIn/product-img/sliderrender.js";
import { swiper } from "./productIn/swiper.js";
import { addbasket } from "./productIn/addBascket.js";

const loadrAll = async () => {
  tabsExplore();
  plusMin();
  await fetchProduct("d8").then((data) => {
    sliderrender(data);
    addbasket(data);
    // console.log(data);
  });
  explorImg();
};

document.addEventListener("DOMContentLoaded", () => {
  loadrAll();
});
