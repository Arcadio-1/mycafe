import { rendercard } from "../app/productIn/addBascket.js";
export const showbasket = () => {
  rendercard();
  const basketBtn = document.querySelector(".show-basket-btn");
  const basketcard = document.querySelector(".show-basket");
  const nav = document.querySelector(".uper");
  const container = document.querySelectorAll(".container");

  basketBtn.addEventListener("mouseover", () => {
    const basketBtnPosition = basketBtn.getBoundingClientRect();
    basketcard.style.left = `${basketBtnPosition.left}px`;
    basketcard.style.top = `${
      basketBtnPosition.bottom + window.pageYOffset - 3
    }px`;
    basketcard.classList.add("display-basket-card");
  });
  nav.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("show-basket-btn")) {
      basketcard.classList.remove("display-basket-card");
    }
  });
  container.forEach((cunt) => {
    cunt.addEventListener("mouseover", () => {
      if (basketcard.classList.contains("display-basket-card")) {
        basketcard.classList.remove("display-basket-card");
      }
    });
  });
  // const list = getLocalStorge();
};
