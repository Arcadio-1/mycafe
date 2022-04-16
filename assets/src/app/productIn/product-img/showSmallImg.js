import { sliderrender } from "./sliderrender.js";
export const showSmallImg = (prod) => {
  const smallImges = document.querySelectorAll(".p-s-area");
  smallImges.forEach((img) => {
    img.addEventListener("click", (e) => {
      const theSrc = e.currentTarget.dataset.id;
      sliderrender(prod, theSrc);
      // console.log(theSrc);
    });
  });
};
