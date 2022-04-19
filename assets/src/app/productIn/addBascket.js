export const addbasket = (prod) => {
  const addBsktBtn = document.querySelector(".add-basket1");
  document.getElementById("op2").checked = true;

  addBsktBtn.addEventListener("click", () => {
    let editFlag = false;
    const product = creatItem(prod);
    const list = getLocalStorge();
    if (list.length > 0) {
      // list.find((item) => {
      //   item.id == product.id;
      // });
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
  });
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
