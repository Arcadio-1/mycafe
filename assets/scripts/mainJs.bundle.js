/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/app/productIn/addBascket.js":
/*!************************************************!*\
  !*** ./assets/src/app/productIn/addBascket.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addbasket\": () => (/* binding */ addbasket),\n/* harmony export */   \"getLocalStorge\": () => (/* binding */ getLocalStorge),\n/* harmony export */   \"rendercard\": () => (/* binding */ rendercard)\n/* harmony export */ });\nconst addbasket = (prod) => {\r\n  const addBsktBtn = document.querySelector(\".add-basket1\");\r\n  document.getElementById(\"op2\").checked = true;\r\n  rendercard();\r\n  addBsktBtn.addEventListener(\"click\", () => {\r\n    let editFlag = false;\r\n    const product = creatItem(prod);\r\n    const list = getLocalStorge();\r\n    if (list.length > 0) {\r\n      list.map((item) => {\r\n        if (item.id == product.id) {\r\n          item.number = parseInt(product.number) + parseInt(item.number);\r\n          const prodTarget = JSON.stringify(list);\r\n          localStorage.setItem(\"list\", prodTarget);\r\n          editFlag = true;\r\n        }\r\n      });\r\n    }\r\n    if (!editFlag) {\r\n      list.push(product);\r\n      const prodTarget = JSON.stringify(list);\r\n      localStorage.setItem(\"list\", prodTarget);\r\n    }\r\n    rendercard();\r\n  });\r\n};\r\n\r\nconst rendercard = () => {\r\n  const numOfProdInCard = document.querySelector(\".sh-b-up-num\");\r\n  const totalPrice = document.querySelector(\".sh-b-totalPrice\");\r\n  let total = 0;\r\n  const list = getLocalStorge();\r\n  const numOfprodInNav = document.querySelector(\".order-num\");\r\n  numOfprodInNav.textContent = list.length;\r\n  numOfProdInCard.textContent = list.length;\r\n  const cardContainer = document.querySelector(\".sh-b-mid\");\r\n  cardContainer.innerHTML = ``;\r\n  list.map((item) => {\r\n    total += item.number * (item.price - (item.offPersent / 100) * item.price);\r\n    console.log(total, item.number, item.offPersent, item.price);\r\n    const createArtical = document.createElement(\"article\");\r\n    createArtical.innerHTML = `\r\n              <article>\r\n              <div class=\"sh-b-mid-right\">\r\n              <img src=\"${item.imageLink}\" class=\"sh-b-mid-img\" alt=\"\">\r\n              <img src=\"${\r\n                item.sell == \"special\"\r\n                  ? \"./assets/src/image/productCard/Special.svg\"\r\n                  : \"\"\r\n              }\" class=\"sh-b-mid-mode\" alt=\"\">\r\n              <div class=\"quantity-intro\">\r\n              <div class=\"btn-r\">\r\n                <input type=\"button\" class=\"butt\" id=\"btn-plus\" >\r\n              </div>\r\n              <div class=\"btn-m\">\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"quantity-num\"\r\n                  pattern=\"[0-9]*\"\r\n                  value=\"${item.number}\"\r\n                  max=\"10\"\r\n                  min=\"1\"\r\n                  id=\"quant\"\r\n                />\r\n              </div>\r\n              <div class=\"btn-l\">\r\n                <input type=\"button\" class=\"butt\" id=\"btn-minus\" >\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"sh-b-mid-left\">\r\n              <p class=\"sh-b-mid-title\">${item.title}</p>\r\n              <p class=\"sh-b-mid-moadel\"><i class=\"fa-solid fa-box-archive\"></i>بسته ${\r\n                item.wight\r\n              }</p>\r\n              <p class=\"sh-b-mid-avalble\"> <i class=\"fa-solid fa-cubes\"></i>${\r\n                item.sell == \"special\" ? \"موجود در انبار\" : \"نا موجود\"\r\n              }</p>\r\n              <p class=\"sh-b--mid-off\">\r\n              ${new Intl.NumberFormat(\"en-US\", {\r\n                style: \"decimal\",\r\n              }).format(\r\n                Math.ceil(item.number * ((item.offPersent / 100) * item.price))\r\n              )}\r\n              تومان تخفیف </p>\r\n              <p class=\"sh-b--mid-price\">${new Intl.NumberFormat(\"en-US\", {\r\n                style: \"decimal\",\r\n              }).format(\r\n                Math.ceil(\r\n                  item.number *\r\n                    (item.price - (item.offPersent / 100) * item.price)\r\n                )\r\n              )}<span> تومان </span></p>\r\n            </div>\r\n            <button class=\"delete-prod-frombsket-btn\" data-keyid=\"${\r\n              item.id\r\n            }\"></button>\r\n            </article>\r\n    `;\r\n    cardContainer.appendChild(createArtical);\r\n    const deleteBtn = createArtical.querySelector(\".delete-prod-frombsket-btn\");\r\n    deleteBtn.addEventListener(\"click\", (e) => {\r\n      const key = e.target.dataset.keyid;\r\n      console.log(`${key} is deleted`);\r\n      deleteprod(key);\r\n    });\r\n  });\r\n  totalPrice.textContent = new Intl.NumberFormat(\"en-US\", {\r\n    style: \"decimal\",\r\n  }).format(Math.ceil(total));\r\n};\r\n\r\nconst getLocalStorge = () => {\r\n  return localStorage.getItem(\"list\")\r\n    ? JSON.parse(localStorage.getItem(\"list\"))\r\n    : [];\r\n};\r\n\r\nconst creatItem = (prod) => {\r\n  const radios = document.getElementsByName(\"wight\");\r\n  const selected = Array.from(radios).find((radio) => radio.checked);\r\n  const asyab = document.getElementById(\"asyab-selector1\");\r\n  const asyabValue = asyab.options[asyab.selectedIndex].value;\r\n  const asyabText = asyab.options[asyab.selectedIndex].text;\r\n  const quantity = document.getElementById(\"quantt\");\r\n  const product = {\r\n    id: prod.id,\r\n    title: prod.title,\r\n    brand: prod.brand,\r\n    link: prod.link,\r\n    imageLink: prod.imageLink,\r\n    price: prod.price.value,\r\n    offPersent: prod.price.offPersent,\r\n    sell: prod.sell,\r\n    availability: prod.availability,\r\n    wight: selected.value,\r\n    asyabText: asyabText,\r\n    asyabValue: asyabValue,\r\n    number: parseInt(quantity.value),\r\n  };\r\n  return product;\r\n};\r\n\r\nconst deleteprod = (key) => {\r\n  let list = getLocalStorge();\r\n  list = list.filter((item) => {\r\n    if (item.id !== key) {\r\n      return item;\r\n    }\r\n  });\r\n  const prodTarget = JSON.stringify(list);\r\n  localStorage.setItem(\"list\", prodTarget);\r\n\r\n  rendercard();\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/addBascket.js?");

/***/ }),

/***/ "./assets/src/components/navRender.js":
/*!********************************************!*\
  !*** ./assets/src/components/navRender.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navRender\": () => (/* binding */ navRender)\n/* harmony export */ });\nconst navRender = async () => {\r\n  const navLinkCunt = document.querySelector(\".nav2-ul\");\r\n  ////\r\n  const getnavLinksJson = async () => {\r\n    const fetchNavLinks = await fetch(\"./assets/src/json/navLink.json\");\r\n    const data = await fetchNavLinks.json();\r\n    return data;\r\n  };\r\n  // console.log(getnavLinksJson);\r\n  const links = await getnavLinksJson();\r\n  links.map((item) => {\r\n    const creatLi = document.createElement(\"li\");\r\n    const { text, link } = item;\r\n    creatLi.innerHTML = `<a href=\"${link}\">${text}</a>`;\r\n    navLinkCunt.appendChild(creatLi);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/navRender.js?");

/***/ }),

/***/ "./assets/src/components/navfix.js":
/*!*****************************************!*\
  !*** ./assets/src/components/navfix.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navfix\": () => (/* binding */ navfix)\n/* harmony export */ });\nconst navfix = () => {\r\n  const navbar = document.querySelector(\".nav1-continer \");\r\n  window.addEventListener(\"scroll\", function () {\r\n    const scrollHeight = window.pageYOffset;\r\n    const navHeight = navbar.getBoundingClientRect().height;\r\n    if (scrollHeight > navHeight * 2) {\r\n      navbar.classList.add(\"nav-fix\");\r\n    } else {\r\n      navbar.classList.remove(\"nav-fix\");\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/navfix.js?");

/***/ }),

/***/ "./assets/src/components/showbasket.js":
/*!*********************************************!*\
  !*** ./assets/src/components/showbasket.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showbasket\": () => (/* binding */ showbasket)\n/* harmony export */ });\n/* harmony import */ var _app_productIn_addBascket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/productIn/addBascket.js */ \"./assets/src/app/productIn/addBascket.js\");\n\r\nconst showbasket = () => {\r\n  (0,_app_productIn_addBascket_js__WEBPACK_IMPORTED_MODULE_0__.rendercard)();\r\n  const basketBtn = document.querySelector(\".show-basket-btn\");\r\n  const basketcard = document.querySelector(\".show-basket\");\r\n  const nav = document.querySelector(\".uper\");\r\n  const container = document.querySelectorAll(\".container\");\r\n  basketBtn.addEventListener(\"mouseover\", () => {\r\n    const basketBtnPosition = basketBtn.getBoundingClientRect();\r\n    basketcard.style.left = `${basketBtnPosition.left}px`;\r\n    basketcard.style.top = `${\r\n      basketBtnPosition.bottom + window.pageYOffset - 3\r\n    }px`;\r\n    basketcard.classList.add(\"display-basket-card\");\r\n  });\r\n  nav.addEventListener(\"mouseover\", (e) => {\r\n    if (!e.target.parentElement.classList.contains(\"show-basket-btn\")) {\r\n      basketcard.classList.remove(\"display-basket-card\");\r\n    }\r\n  });\r\n  container.forEach((cunt) => {\r\n    cunt.addEventListener(\"mouseover\", () => {\r\n      if (basketcard.classList.contains(\"display-basket-card\")) {\r\n        basketcard.classList.remove(\"display-basket-card\");\r\n      }\r\n    });\r\n  });\r\n  // const list = getLocalStorge();\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/showbasket.js?");

/***/ }),

/***/ "./assets/src/components/tagolmenu.js":
/*!********************************************!*\
  !*** ./assets/src/components/tagolmenu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tagolmenu\": () => (/* binding */ tagolmenu)\n/* harmony export */ });\nconst menuBtn = document.getElementById(\"hamberger-menu\");\r\nconst menuLinks = document.querySelector(\".nav2-ul\");\r\nconst menuLinksContiner = document.querySelector(\".nav-ul-container\");\r\nlet tog = false;\r\nconst tagolmenu = () => {\r\n  menuBtn.addEventListener(\"click\", () => {\r\n    console.log(menuLinksContiner);\r\n    const position = menuLinks.getBoundingClientRect();\r\n    console.log(tog);\r\n\r\n    // menuLinksContiner.classList.toggle(\"display-flex\");\r\n    if (!tog) {\r\n      tog = true;\r\n      return (menuLinksContiner.style.height = `${position.height}px`);\r\n    } else if (tog) {\r\n      tog = false;\r\n      return (menuLinksContiner.style.height = \"0px\");\r\n    }\r\n    console.log(tog);\r\n  });\r\n  window.addEventListener(\r\n    \"resize\",\r\n    () => {\r\n      const linkContainerClientRect = menuLinksContiner.getBoundingClientRect();\r\n      if (linkContainerClientRect.width > 830) {\r\n        return (menuLinksContiner.style.height = \"25px\");\r\n      } else if (linkContainerClientRect.width < 880) {\r\n        tog = false;\r\n        return (menuLinksContiner.style.height = \"0px\");\r\n      }\r\n    },\r\n    true\r\n  );\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/tagolmenu.js?");

/***/ }),

/***/ "./assets/src/main.js":
/*!****************************!*\
  !*** ./assets/src/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_tagolmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tagolmenu.js */ \"./assets/src/components/tagolmenu.js\");\n/* harmony import */ var _components_navRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navRender.js */ \"./assets/src/components/navRender.js\");\n/* harmony import */ var _components_navfix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navfix.js */ \"./assets/src/components/navfix.js\");\n/* harmony import */ var _components_showbasket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showbasket.js */ \"./assets/src/components/showbasket.js\");\n\r\n\r\n\r\n\r\nconst windowLoad = () => {\r\n  (0,_components_navRender_js__WEBPACK_IMPORTED_MODULE_1__.navRender)();\r\n  (0,_components_tagolmenu_js__WEBPACK_IMPORTED_MODULE_0__.tagolmenu)();\r\n  (0,_components_navfix_js__WEBPACK_IMPORTED_MODULE_2__.navfix)();\r\n  (0,_components_showbasket_js__WEBPACK_IMPORTED_MODULE_3__.showbasket)();\r\n};\r\nwindowLoad();\r\n// window.addEventListener(\"load\", () => {\r\n\r\n// });\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/main.js");
/******/ 	
/******/ })()
;