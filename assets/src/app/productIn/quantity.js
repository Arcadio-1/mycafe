const plusbtn = document.getElementById("btn-plus");
const quant = document.getElementById("quant");
const minus = document.getElementById("btn-minus");

export const plusMin = () => {
  plusbtn.addEventListener("click", function () {
    if (quant.value < 10 && quant.value >= 1) quant.value++;
    else quant.value = 10;
  });
  minus.addEventListener("click", function () {
    if (quant.value > 1 && quant.value < 11) quant.value--;
    else quant.value = 1;
  });
};
