import fetchProdList from "../../components/fetchProdList";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export const bestsellRender = () => {
  const slides = document.querySelector(".swiper-wrapper");
  const getlist = async () => {
    const products = await fetchProdList().then((data) => {
      const list = data;
      const list15 = [];
      for (let i = 0; i < 15; i++) {
        list15.push(list[i]);
      }
      // console.log(list10);
      const htmlCode = list15
        .map((item) => {
          const { title, link, imageLink, price, id } = item;
          return `<div class="swiper-slide">
          <div class="products" data-id="${id}">
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
                  </div> 
      `;
        })
        .join("");
      slides.innerHTML = htmlCode;
    });
  };
  getlist();
};

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  watchSlidesProgress: true,
  spaceBetween: 20,
  watchSlidesProgress: true,
  grabCursor: false,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazyLoading: true,
  lazyLoadingInPrevNext: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
