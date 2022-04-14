function setupTabs() {
  const btns = document.querySelectorAll(".p-down-title");
  const tabs = document.querySelectorAll(".down-tab");
  document.querySelectorAll(".p-down-title").forEach((btns) => {
    btns.addEventListener("click", () => {
      const downTitle = btns.parentElement;
      const PDown = downTitle.parentElement;
      const TabNum = btns.dataset.forTab;
      const TabAct = PDown.querySelector(`.down-tab[data-tab="${TabNum}"]`);

      downTitle.querySelectorAll(".p-down-title").forEach((btns) => {
        btns.classList.remove("p-down-active-tab");
      });
      PDown.querySelectorAll(".down-tab").forEach((tabs) => {
        tabs.classList.remove("active-display");
      });
      btns.classList.add("p-down-active-tab");
      TabAct.classList.add("active-display");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
});
/************  quantity  *************/
const plusbtn = document.getElementById("btn-plus");
const quant = document.getElementById("quant");
const minus = document.getElementById("btn-minus");

plusbtn.addEventListener("click", function () {
  if (quant.value < 10 && quant.value >= 1) quant.value++;
  else quant.value = 10;
});
minus.addEventListener("click", function () {
  if (quant.value > 1 && quant.value < 11) quant.value--;
  else quant.value = 1;
});
/************  quantity End  ***********************/
/******** change like btn background color ***********/
const likebtn = document.getElementById("like-btn-id");
const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let randomNum = "#";
likebtn.addEventListener("click", () => {
  likebtn.style.background = getRandomNum();
});
function getRandomNum() {
  randomNum = "#";
  for (let i = 0; i < 6; i++) {
    randomNum += hexColor[Math.floor(Math.random() * hexColor.length)];
  }
  console.log(randomNum);
  return randomNum;
}
/******** change like btn background color End **********************/
