/* eslint-disable no-undef */
// import "bootstrap";
import { windowLoad } from "../main.js";
import { pagination } from "./productsListIn/pagination.js";
import { displayButtons } from "./productsListIn/displayButtons";
import { renderProducts } from "./productsListIn/renderProducts";
import { pageNavigate } from "./productsListIn/pageNumNavigate";

const btnContainer = document.querySelector(".page-num-btn-container");

windowLoad();

let index = 0;

const startJ = async () => {
  await pagination().then((data) => {
    displayButtons(btnContainer, data);
    renderProducts(data, index);
    pageNavigate(data);
  });
};
startJ();
