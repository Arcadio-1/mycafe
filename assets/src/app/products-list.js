/* eslint-disable no-undef */
// import "bootstrap";
import { pagination } from "./productsListIn/pagination.js";
import { displayButtons } from "./productsListIn/displayButtons";
import { renderProducts } from "./productsListIn/renderProducts";
import { pageNavigate } from "./productsListIn/pageNumNavigate";
import { creatcooki } from "./productsListIn/creatcooki";

const btnContainer = document.querySelector(".page-num-btn-container");

let index = 0;

const startJ = async () => {
  await pagination().then((data) => {
    displayButtons(btnContainer, data);
    renderProducts(data, index);
    pageNavigate(data);
    creatcooki();
  });
};
startJ();
