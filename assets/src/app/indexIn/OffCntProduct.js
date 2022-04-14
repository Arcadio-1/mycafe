class OffCntProduct {
  constructor(
    faTitle,
    enTitle,
    offPersont,
    titleImg,
    fullTitle,
    offPrice,
    price,
    prodImg
  ) {
    this.faTitle = faTitle;
    this.enTitle = enTitle;
    this.offPersont = offPersont;
    this.titleImg = titleImg;
    this.fullTitle = fullTitle;
    this.offPrice = offPrice;
    this.price = price;
    this.prodImg = prodImg;
  }
}

export class OffCntList {
  productlist = [
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
    new OffCntProduct(
      "بن مانو",
      "Bonmano",
      -30,
      "./assets/src/image/off-price/off-price--big/1.png",
      "قهوه فرانسه بن مانو -250گرم",
      147000,
      138600,
      "./assets/src/image/off-price/off-price-small/1.jpg"
    ),
  ];

  render() {
    const offcntProductsHook = document.querySelector(".offcnt");
    // console.log(this.productlist.length);
    // console.log(this.productlist);
    // for (const i = 0; i < this.productlist.length; i++){
    //   if
    // }
    for (const prod of this.productlist) {
      // console.log(this.productlist.indexOf(prod));
      const creatDiv = document.createElement("div");
      creatDiv.classList.add("offcnt-c");
      if (this.productlist.indexOf(prod) % 2 == 0) {
        creatDiv.innerHTML = `
      <div class="big-side big-side1">
              <div class="big-side-title">
                <h3>${prod.enTitle}</h3>
                <h3>${prod.faTitle}</h3>
              </div>
              <div class="big-side-dwn">
                <div class="big-side-off">
                  <p>تا</p>
                  <p>${prod.offPersont}</p>
                </div>
                <img src="${prod.titleImg}" alt="" />
              </div>
            </div>
            <div class="small-side small-side1">
              <h3>${prod.fullTitle}</h3>
              <div class="small-side-dwn">
                <img
                  class="offcnt-pro-img"
                  src="${prod.prodImg}"
                  alt=""
                />
                <div class="offcnt-pro-dtl">
                  <div>
                    <del class="offcnt-pro-del">${prod.offPrice}</del>
                    <div>
                      <span class="offcnt-pro-price">${prod.price}</span>
                      <span class="offcnt-pro-tmn">تومان</span>
                    </div>
                  </div>
                  <div class="add-basket">
                    <img
                      class="offcnt-pro-basket"
                      src="./assets/src/image/icon/order.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

      `;
      } else {
        creatDiv.innerHTML = `
                  <div class="small-side small-side2">
              <h3>${prod.fullTitle}</h3>
              <div class="small-side-dwn">
                <img
                  class="offcnt-pro-img"
                  src="${prod.prodImg}"
                  alt=""
                />
                <div class="offcnt-pro-dtl">
                  <div>
                    <del class="offcnt-pro-del">${prod.offPrice}</del>
                    <div>
                      <span class="offcnt-pro-price">${prod.price}</span>
                      <span class="offcnt-pro-tmn">تومان</span>
                    </div>
                  </div>
                  <div class="add-basket">
                    <img
                      class="offcnt-pro-basket"
                      src="./assets/src/image/icon/order.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
      <div class="big-side big-side2">
              <div class="big-side-title">
                <h3>${prod.enTitle}</h3>
                <h3>${prod.faTitle}</h3>
              </div>
              <div class="big-side-dwn">
                <div class="big-side-off">
                  <p>تا</p>
                  <p>${prod.offPersont}</p>
                </div>
                <img src="${prod.titleImg}" alt="" />
              </div>
            </div>


      `;
      }

      offcntProductsHook.append(creatDiv);
    }
  }
}
