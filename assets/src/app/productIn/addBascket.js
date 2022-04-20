export const addbasket = (prod) => {
  const addBsktBtn = document.querySelector(".add-basket1");
  document.getElementById("op2").checked = true;
  rendercard();
  addBsktBtn.addEventListener("click", () => {
    let editFlag = false;
    const product = creatItem(prod);
    const list = getLocalStorge();
    if (list.length > 0) {
      list.map((item) => {
        if (item.id == product.id) {
          item.number = parseInt(product.number) + parseInt(item.number);
          const prodTarget = JSON.stringify(list);
          localStorage.setItem("list", prodTarget);
          editFlag = true;
        }
      });
    }
    if (!editFlag) {
      list.push(product);
      const prodTarget = JSON.stringify(list);
      localStorage.setItem("list", prodTarget);
    }
    rendercard();
  });
};

const rendercard = () => {
  const numOfProdInCard = document.querySelector(".sh-b-up-num");
  const list = getLocalStorge();
  numOfProdInCard.textContent = list.length;
  const cardContainer = document.querySelector(".sh-b-mid");
  const htmlCode = list
    .map((item) => {
      return `
              <article>
              <div class="sh-b-mid-right">
              <img src="${item.imageLink}" class="sh-b-mid-img" alt="">
              <img src="${
                item.sell == "special"
                  ? "./assets/src/image/productCard/Special.svg"
                  : ""
              }" class="sh-b-mid-mode" alt="">
              <div class="quantity-intro">
              <div class="btn-r">
                <input type="button" class="butt" id="btn-plus" >
              </div>
              <div class="btn-m">
                <input
                  type="number"
                  class="quantity-num"
                  pattern="[0-9]*"
                  value="${item.number}"
                  max="10"
                  min="1"
                  id="quant"
                />
              </div>
              <div class="btn-l">
                <input type="button" class="butt" id="btn-minus" >
              </div>
            </div>
            </div>
            <div class="sh-b-mid-left">
              <p class="sh-b-mid-title">${item.title}</p>
              <p class="sh-b-mid-moadel"><i class="fa-solid fa-box-archive"></i>بسته ${
                item.wight
              }</p>
              <p class="sh-b-mid-avalble"> <i class="fa-solid fa-cubes"></i>${
                item.sell == "special" ? "موجود در انبار" : "نا موجود"
              }</p>
              <p class="sh-b--mid-off">
              ${new Intl.NumberFormat("en-US", {
                style: "decimal",
              }).format(
                Math.ceil(item.number * (item.offPersent * item.price))
              )}
              تومان تخفیف </p>
              <p class="sh-b--mid-price">${new Intl.NumberFormat("en-US", {
                style: "decimal",
              }).format(
                Math.ceil(
                  item.number * (item.price - item.offPersent * item.price)
                )
              )}<span> تومان </span></p>
            </div>
            </article>
    `;
    })
    .join("");
  cardContainer.innerHTML = htmlCode;
};

const getLocalStorge = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};

const creatItem = (prod) => {
  const radios = document.getElementsByName("wight");
  const selected = Array.from(radios).find((radio) => radio.checked);
  const asyab = document.getElementById("asyab-selector1");
  const asyabValue = asyab.options[asyab.selectedIndex].value;
  const asyabText = asyab.options[asyab.selectedIndex].text;
  const quantity = document.getElementById("quantt");
  const product = {
    id: prod.id,
    title: prod.title,
    brand: prod.brand,
    link: prod.link,
    imageLink: prod.imageLink,
    price: prod.price.value,
    offPersent: prod.price.offPersent,
    sell: prod.sell,
    availability: prod.availability,
    wight: selected.value,
    asyabText: asyabText,
    asyabValue: asyabValue,
    number: quantity.value,
  };
  return product;
};
