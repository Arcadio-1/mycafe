export const showbasket = () => {
  const basketBtn = document.querySelector(".show-basket-btn");
  const basketcard = document.querySelector(".show-basket");
  const nav = document.querySelector(".uper");
  const container = document.querySelectorAll(".container");
  basketBtn.addEventListener("mouseover", () => {
    console.log(window.pageYOffset);

    const basketBtnPosition = basketBtn.getBoundingClientRect();
    basketcard.style.left = `${basketBtnPosition.left}px`;
    basketcard.style.top = `${
      basketBtnPosition.bottom + window.pageYOffset - 3
    }px`;
    basketcard.classList.add("display-basket-card");
  });
  nav.addEventListener("mouseover", (e) => {
    if (!e.target.parentElement.classList.contains("show-basket-btn")) {
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
};
