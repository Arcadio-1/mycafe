export const creatcooki = () => {
  const products = document.querySelectorAll(".products");
  products.forEach((item) => {
    item.addEventListener("click", (e) => {
      document.cookie = `${e.currentTarget.dataset.id}`;
      let cook = document.cookie.split(";");
      const lenth = cook.length - 1;
      return cook[lenth];
    });
  });
};
