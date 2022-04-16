import { windowLoad } from "../main.js";
import { tabsExplore } from "./productIn/tabsExplore.js";
import { plusMin } from "./productIn/quantity.js";
import { fetchProduct } from "./productIn/fetchProduct.js";
import { explorImg } from "./productIn/product-img/explorImg.js";
import { sliderrender } from "./productIn/product-img/sliderrender.js";

const loadrAll = async () => {
  windowLoad();
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
