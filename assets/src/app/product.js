import { bestsellRender } from "./productIn/bestsellRender";
import { tabsExplore } from "./productIn/tabsExplore.js";
import { commentOrQuestion } from "./productIn/commentOrQuestion.js";
import { plusMin } from "./productIn/quantity.js";
import { fetchProduct } from "./productIn/fetchProduct.js";
import { explorImg } from "./productIn/product-img/explorImg.js";
import { sliderrender } from "./productIn/product-img/sliderrender.js";
import { addbasket } from "./productIn/addBascket.js";
import { getcooki } from "./productIn/getcooki";
import { addComment } from "./productIn/addComment";
import { openAnswerBox } from "./productIn/answerQuestion";

window.addEventListener("DOMContentLoaded", () => {
  const loadrAll = async () => {
    bestsellRender();
    tabsExplore();
    commentOrQuestion();
    plusMin();
    const theID = getcooki();
    await fetchProduct(theID).then((data) => {
      sliderrender(data);
      addbasket(data);
    });
    explorImg();
    addComment();
    openAnswerBox();
  };
  loadrAll();
});
