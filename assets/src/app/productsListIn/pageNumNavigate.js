import { renderProducts } from "./renderProducts";

export const pageNavigate = (prodList) => {
  const btnContainer = document.querySelector(".page-num-btn-container");
  btnContainer.addEventListener("click", (e) => {
    const numBtn = document.querySelectorAll(".page-num-btn");
    if (e.target.classList.contains("page-num-btn")) {
      numBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      let index = +e.target.textContent - 1;
      renderProducts(prodList, index);
    }

    if (e.target.parentElement.classList.contains("next-btn")) {
      index++;
      if (index >= prodList.length) {
        index = 0;
      }
      renderProducts(prodList, index);
    }
    if (e.target.parentElement.classList.contains("prev-btn")) {
      index--;
      if (index < 0) {
        index = prodList.length - 1;
      }
      renderProducts(prodList, index);
    }
  });
};
