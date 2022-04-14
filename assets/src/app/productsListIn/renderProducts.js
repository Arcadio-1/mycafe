const listContainer = document.querySelector(".best-sells");

export function renderProducts(prodList, index) {
  async function renderProd() {
    const numBtn = document.querySelectorAll(".page-num-btn");
    numBtn.forEach((btn) => {
      btn.classList.remove("active");
    });

    numBtn[index].classList.add("active");
    const HTprodList = prodList[index]
      .map((prod) => {
        const { title, link, imageLink, price } = prod;
        return `<div class="products product-1">
            <a href="${link}">
              <img class="proimg" src="${imageLink}" alt="" />
              <h3>${title}</h3>
              <span class="off-price">${new Intl.NumberFormat("en-US", {
                style: "decimal",
              }).format(price.value)}</span>
              <div class="order">
                <div class="all-price">
                  <span class="price">${new Intl.NumberFormat("en-US", {
                    style: "decimal",
                  }).format(
                    Math.ceil(price.value - price.offPersent * price.value)
                  )}</span>
                  <span class="toman">${price.currency}</span>
                </div>
                <div class="add-basket">
                  <img src="./assets/src/image/icon/order.png" alt="" />
                </div>
              </div>
            </a>
          </div>
      `;
      })
      .join("");
    listContainer.innerHTML = HTprodList;
  }
  return renderProd();
}
