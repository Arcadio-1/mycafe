import { tagolmenu } from "./tagolmenu.js";
import { navfix } from "./navfix.js";
import { showbasket } from "./showbasket.js";
export const navRender = async () => {
  const nav1Cunt = document.querySelector(".nav-1");
  nav1Cunt.innerHTML = `
            <div class="logo">
            <a href="./index.html">
              <img src="./assets/src/image/Tarane-Logo2.png" alt="کافه ترانه"
            /></a>
          </div>
          <div class="search-box">
            <label for="search"
              ><img
                src="./assets/src/image/icon/search_icon.svg"
                alt=""
                for="search"
            /></label>
            <input type="text" placeholder="جستجو در کافه ترانه" id="search" />
          </div>
          <div class="log">
            <a href="#">ورود</a>
            <span>/</span>
            <a href="#">ثبت نام</a>
          </div>
          <div class="notif">
          <a href="./order.html">
          <button class="show-basket-btn">
              <span class="order-num">0</span>
            </button>
          </a>

          </div>
          <div id="menu">
            <button id="hamberger-menu"><i class="fas fa-bars"></i></button>
          </div>
  `;
  console.log("1");
  // const menuBtn = document.getElementById("menu");
  // console.dir(menuBtn);
  // tagolmenu();
  // navfix();
  // showbasket();

  const navLinkCunt = document.querySelector(".nav2-ul");
  ////
  const getnavLinksJson = async () => {
    const fetchNavLinks = await fetch("./assets/src/json/navLink.json");
    const data = await fetchNavLinks.json();
    return data;
  };
  // console.log(getnavLinksJson);
  const links = await getnavLinksJson();
  links.map((item) => {
    const creatLi = document.createElement("li");
    const { text, link } = item;
    creatLi.innerHTML = `<a href="${link}">${text}</a>`;
    navLinkCunt.appendChild(creatLi);
  });
  tagolmenu();
  navfix();
  showbasket();
};
