export const addbasket = (prod) => {
  const addBsktBtn = document.querySelector(".add-basket1");
  addBsktBtn.addEventListener("click", () => {
    const prodTarget = JSON.stringify(prod);
    localStorage.setItem("product", prodTarget);
  });
};
