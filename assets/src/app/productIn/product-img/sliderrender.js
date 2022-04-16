import { showSmallImg } from "./showSmallImg.js";
export const sliderrender = (prod, index = 0) => {
  let lastIs = true;
  // console.log(+index);
  const imgSlider = document.querySelector(".p-main-slider");
  const smallImg = document.querySelector(".p-s-img");
  let position = "next";
  // index--;
  const mainImgCode = prod.imgList
    .map((link, id) => {
      if (id == index) {
        position = "active";
      }
      if (id > index) {
        position = "next";
      }
      if (id == index - 1) {
        lastIs = false;
        position = "last";
      }
      if (lastIs && prod.imgList.length - 1 == id) {
        position = "last";
      }
      return `<img class="p-main-img ${position}" data-id=${id} src="${link}" alt="" />`;
    })
    .join("");
  imgSlider.innerHTML = mainImgCode;
  const htmlCode = prod.imgList
    .map((link, id) => {
      return `<div class="p-s-area" data-id=${id}><img src="${link}" alt="" /></div>`;
    })
    .join("");
  smallImg.innerHTML = htmlCode;
  showSmallImg(prod);
};
