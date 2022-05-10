import { addbasket } from "./productIn/addBascket";
import { getLocalStorge } from "./productIn/addBascket";
import { deleteprod } from "./productIn/addBascket";

const renderOrderList = () => {
  const list = getLocalStorge();
  const orderListContainer = document.querySelector(".order-list-container");
  let total = 0;
  let totalWithOutDiscount = 0;
  const OrderItemHTML = list.map((item) => {
    totalWithOutDiscount += item.number * item.price;
    total += item.number * (item.price - (item.offPersent / 100) * item.price);
    const creatDiv = document.createElement("div");
    creatDiv.classList.add("order-list-item");
    creatDiv.innerHTML = `<img
                  class="order-list-item-img"
                  src="${item.imageLink}"
                  alt=""
                />
                <div class="order-list-item-inner">
                  <p class="order-list-item-title">
                   ${item.title}
                  </p>
                  <div class="order-list-item-details">
                    <div class="order-list-item-detail">
                      <div class="oreder-list-item-details-Weight">
                        <label for="details-Weight">وزن :</label>
                        <select name="details-Weight" id="">
                          <option value="250" ${
                            item.wight == 250 && `selected ="selected"`
                          }">250 گرم</option>
                          <option value="500" ${
                            item.wight == 500 && `selected ="selected"`
                          } >500 گرم</option>
                          <option value="1000" ${
                            item.wight == 1000 && `selected ="selected"`
                          }>1 کیلوگرم</option>
                        </select>
                      </div>
                      <div class="oreder-list-item-details-grind">
                        <label for="details-grind">آسیاب :</label>
                        <select name="details-grindt" id="">
                          <option value="asyab-0" ${
                            item.asyabValue == "asyab-0" &&
                            `selected ="selected"`
                          }>
                            دانه قهوه (بدون آسیاب)
                          </option>
                          <option value="asyab-2" ${
                            item.asyabValue == "asyab-2" &&
                            `selected ="selected"`
                          }>جذوه (بسیار ریز)</option>
                          <option value="asyab-3" ${
                            item.asyabValue == "asyab-3" &&
                            `selected ="selected"`
                          }>
                            اسپرسو ساز خانگی (ریز)
                          </option>
                          <option value="asyab-4" ${
                            item.asyabValue == "asyab-4" &&
                            `selected ="selected"`
                          }>مکاپات (ریز)</option>
                          <option value="aasyab-5 ${
                            item.asyabValue == "asyab-5" &&
                            `selected ="selected"`
                          }">
                            وی شصت (ریز تا متوسط)
                          </option>
                          <option value="asyab-6" ${
                            item.asyabValue == "asyab-6" &&
                            `selected ="selected"`
                          }>
                            قهوه ساز خانگی (متوسط)
                          </option>
                          <option value="asyab-7" ${
                            item.asyabValue == "asyab-7" &&
                            `selected ="selected"`
                          }>کمکس (متوسط به درشت)</option>
                          <option value="asyab-8" ${
                            item.asyabValue == "asyab-8" &&
                            `selected ="selected"`
                          }>فرنچ پرس (درشت)</option>
                          <option value="asyab-9" ${
                            item.asyabValue == "asyab-9" &&
                            `selected ="selected"`
                          }>کلد برو (خیلی درشت)</option>
                        </select>
                      </div>
                      <div class="quantity">
                        <label for="quantity-num">تعداد :</label>
                        <div class="quantity-intro">
                          <div class="btn-r">
                            <input type="button" class="butt" id="btn-plus" />
                          </div>
                          <div class="btn-m">
                            <input
                              type="number"
                              class="quantity-num"
                              name="quantity-num"
                              pattern="[0-9]*"
                              value="${item.number}"
                              max="10"
                              min="1"
                              id="quantt"
                            />
                          </div>
                          <div class="btn-l">
                            <input type="button" class="butt" id="btn-minus" />
                          </div>
                        </div>
                      </div>
                      <div class="order-list-item-delete">
                      <button class="delete-prod-orderList-btn" data-keyid="${
                        item.id
                      }">حذف</button>
                      </div>
                    </div>
                    <div class="order-list-item-stock">
                      <span class="is-stock">${
                        item.sell == "special" ? "موجود در انبار" : "نا موجود"
                      }</span>
                      <p class="order-list-item-stock-price">
                        قیمت : <span>${new Intl.NumberFormat("en-US", {
                          style: "decimal",
                        }).format(item.price)} تومان</span>
                      </p>
                      <p class="discount">تخفیف : <span>${new Intl.NumberFormat(
                        "en-US",
                        {
                          style: "decimal",
                        }
                      ).format(
                        Math.ceil(
                          item.number * ((item.offPersent / 100) * item.price)
                        )
                      )} تومان</span></p>
                    </div>
                    <div class="order-list-item-totalPrice">
                      <p>قیمت کل : <span>${new Intl.NumberFormat("en-US", {
                        style: "decimal",
                      }).format(
                        Math.ceil(
                          item.number *
                            (item.price - (item.offPersent / 100) * item.price)
                        )
                      )} تومان</span></p>
                    </div>
                  </div>
                </div>
        `;
    creatDiv
      ////creat delete btn
      .querySelector(".delete-prod-orderList-btn")
      .addEventListener("click", (e) => {
        const key = e.target.dataset.keyid;
        console.log(`${key} is deleted`);
        deleteprod(key);
        orderListContainer.innerHTML = ``;
        renderOrderList();
      });

    orderListContainer.appendChild(creatDiv);
    //creat order-total
    const orderTotalContainer = document.querySelector(
      ".order-total-container"
    );
    orderTotalContainer.innerHTML = `<div class="order-total-container-price">
                <p>
                  قیمت کل : <span class="order-total-price">${new Intl.NumberFormat(
                    "en-US",
                    {
                      style: "decimal",
                    }
                  ).format(Math.ceil(totalWithOutDiscount))} تومان</span>
                </p>
                <p class="order-total-discount-count">
                  مجموع تخفیف :
                  <span class="order-total-discount">${new Intl.NumberFormat(
                    "en-US",
                    {
                      style: "decimal",
                    }
                  ).format(
                    Math.ceil(totalWithOutDiscount - total)
                  )} تومان</span>
                </p>
              </div>
              <div class="order-total-container-post">
                <p>هزینه پستی بر اساس آدرس و وزن مرسوله شما محاسبه میگردد.</p>
                <p class="order-total-transport">
                  ارسال رایگان برای خرید های بیش از 300 هزار تومان.
                </p>
              </div>
              <div class="order-total-price-with-discount">
                <p>مبلغ قابل پرداخت: <span>${new Intl.NumberFormat("en-US", {
                  style: "decimal",
                }).format(Math.ceil(total))}تومان</span></p>
              </div>
              <button class="order-total-submit-orderList-btn">
                ادامه جهت تسویه حساب
              </button>`;
  });
};
renderOrderList();
