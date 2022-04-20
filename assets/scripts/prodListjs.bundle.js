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

/***/ "./assets/src/app/products-list.js":
/*!*****************************************!*\
  !*** ./assets/src/app/products-list.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productsListIn_pagination_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsListIn/pagination.js */ \"./assets/src/app/productsListIn/pagination.js\");\n/* harmony import */ var _productsListIn_displayButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsListIn/displayButtons */ \"./assets/src/app/productsListIn/displayButtons.js\");\n/* harmony import */ var _productsListIn_renderProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsListIn/renderProducts */ \"./assets/src/app/productsListIn/renderProducts.js\");\n/* harmony import */ var _productsListIn_pageNumNavigate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productsListIn/pageNumNavigate */ \"./assets/src/app/productsListIn/pageNumNavigate.js\");\n/* harmony import */ var _productsListIn_creatcooki__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productsListIn/creatcooki */ \"./assets/src/app/productsListIn/creatcooki.js\");\n/* eslint-disable no-undef */\r\n// import \"bootstrap\";\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst btnContainer = document.querySelector(\".page-num-btn-container\");\r\n\r\nlet index = 0;\r\n\r\nconst startJ = async () => {\r\n  await (0,_productsListIn_pagination_js__WEBPACK_IMPORTED_MODULE_0__.pagination)().then((data) => {\r\n    (0,_productsListIn_displayButtons__WEBPACK_IMPORTED_MODULE_1__.displayButtons)(btnContainer, data);\r\n    (0,_productsListIn_renderProducts__WEBPACK_IMPORTED_MODULE_2__.renderProducts)(data, index);\r\n    (0,_productsListIn_pageNumNavigate__WEBPACK_IMPORTED_MODULE_3__.pageNavigate)(data);\r\n    (0,_productsListIn_creatcooki__WEBPACK_IMPORTED_MODULE_4__.creatcooki)();\r\n  });\r\n};\r\nstartJ();\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/products-list.js?");

/***/ }),

/***/ "./assets/src/app/productsListIn/creatcooki.js":
/*!*****************************************************!*\
  !*** ./assets/src/app/productsListIn/creatcooki.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creatcooki\": () => (/* binding */ creatcooki)\n/* harmony export */ });\nconst creatcooki = () => {\r\n  const products = document.querySelectorAll(\".products\");\r\n  products.forEach((item) => {\r\n    item.addEventListener(\"click\", (e) => {\r\n      document.cookie = `${e.currentTarget.dataset.id}`;\r\n      let cook = document.cookie.split(\";\");\r\n      const lenth = cook.length - 1;\r\n      return cook[lenth];\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productsListIn/creatcooki.js?");

/***/ }),

/***/ "./assets/src/app/productsListIn/displayButtons.js":
/*!*********************************************************!*\
  !*** ./assets/src/app/productsListIn/displayButtons.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayButtons\": () => (/* binding */ displayButtons)\n/* harmony export */ });\nconst displayButtons = async (btnContainer, prodList) => {\r\n  let HTbtn = [];\r\n  // console.log(prodList);\r\n  for (let i = 0; i < prodList.length; i++) {\r\n    HTbtn.push(\r\n      `<button type=\"button\" data-id = \"${i}\" class=\"page-num-btn\">${\r\n        i + 1\r\n      }</button>`\r\n    );\r\n  }\r\n  HTbtn.unshift(\r\n    '<button type=\"button\" class=\"prev-btn\"><i class=\"fa-solid fa-angle-right\"></i></button>'\r\n  );\r\n  HTbtn.push(\r\n    '<button type=\"button\" class=\"next-btn\"><i class=\"fa-solid fa-angle-left\"></i></button>'\r\n  );\r\n  btnContainer.innerHTML = HTbtn.join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productsListIn/displayButtons.js?");

/***/ }),

/***/ "./assets/src/app/productsListIn/pageNumNavigate.js":
/*!**********************************************************!*\
  !*** ./assets/src/app/productsListIn/pageNumNavigate.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageNavigate\": () => (/* binding */ pageNavigate)\n/* harmony export */ });\n/* harmony import */ var _renderProducts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProducts */ \"./assets/src/app/productsListIn/renderProducts.js\");\n/* harmony import */ var _creatcooki__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatcooki */ \"./assets/src/app/productsListIn/creatcooki.js\");\n\r\n\r\nconst pageNavigate = (prodList) => {\r\n  const btnContainer = document.querySelector(\".page-num-btn-container\");\r\n  btnContainer.addEventListener(\"click\", (e) => {\r\n    const numBtn = document.querySelectorAll(\".page-num-btn\");\r\n    if (e.target.classList.contains(\"page-num-btn\")) {\r\n      numBtn.forEach((btn) => {\r\n        btn.classList.remove(\"active\");\r\n      });\r\n      let index = +e.target.textContent - 1;\r\n      (0,_renderProducts__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(prodList, index);\r\n    }\r\n\r\n    if (e.target.parentElement.classList.contains(\"next-btn\")) {\r\n      index++;\r\n      if (index >= prodList.length) {\r\n        index = 0;\r\n      }\r\n      (0,_renderProducts__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(prodList, index);\r\n    }\r\n    if (e.target.parentElement.classList.contains(\"prev-btn\")) {\r\n      index--;\r\n      if (index < 0) {\r\n        index = prodList.length - 1;\r\n      }\r\n      (0,_renderProducts__WEBPACK_IMPORTED_MODULE_0__.renderProducts)(prodList, index);\r\n    }\r\n    (0,_creatcooki__WEBPACK_IMPORTED_MODULE_1__.creatcooki)();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productsListIn/pageNumNavigate.js?");

/***/ }),

/***/ "./assets/src/app/productsListIn/pagination.js":
/*!*****************************************************!*\
  !*** ./assets/src/app/productsListIn/pagination.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pagination\": () => (/* binding */ pagination)\n/* harmony export */ });\n/* harmony import */ var _components_fetchProdList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/fetchProdList.js */ \"./assets/src/components/fetchProdList.js\");\n\r\n\r\nconst pagination = async () => {\r\n  const products = await (0,_components_fetchProdList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const perPage = 24;\r\n  const pageNum = Math.ceil(products.length / perPage);\r\n  const newprod = Array.from({ length: pageNum }, (_, index) => {\r\n    let start = index * perPage;\r\n    return products.slice(start, start + perPage);\r\n  });\r\n  // console.log(newprod);\r\n  return newprod;\r\n};\r\n\r\n// export const rty = pagination();\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productsListIn/pagination.js?");

/***/ }),

/***/ "./assets/src/app/productsListIn/renderProducts.js":
/*!*********************************************************!*\
  !*** ./assets/src/app/productsListIn/renderProducts.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProducts\": () => (/* binding */ renderProducts)\n/* harmony export */ });\nconst listContainer = document.querySelector(\".best-sells\");\r\n\r\nfunction renderProducts(prodList, index) {\r\n  async function renderProd() {\r\n    const numBtn = document.querySelectorAll(\".page-num-btn\");\r\n    numBtn.forEach((btn) => {\r\n      btn.classList.remove(\"active\");\r\n    });\r\n\r\n    numBtn[index].classList.add(\"active\");\r\n    const HTprodList = prodList[index]\r\n      .map((prod) => {\r\n        const { title, link, imageLink, price, id } = prod;\r\n        return `<div class=\"products\" data-id=\"${id}\">\r\n            <a href=\"${link}\">\r\n              <img class=\"proimg\" src=\"${imageLink}\" alt=\"\" />\r\n              <h3>${title}</h3>\r\n              <span class=\"off-price\">${new Intl.NumberFormat(\"en-US\", {\r\n                style: \"decimal\",\r\n              }).format(price.value)}</span>\r\n              <div class=\"order\">\r\n                <div class=\"all-price\">\r\n                  <span class=\"price\">${new Intl.NumberFormat(\"en-US\", {\r\n                    style: \"decimal\",\r\n                  }).format(\r\n                    Math.ceil(price.value - price.offPersent * price.value)\r\n                  )}</span>\r\n                  <span class=\"toman\">${price.currency}</span>\r\n                </div>\r\n                <div class=\"add-basket\">\r\n                  <img src=\"./assets/src/image/icon/order.png\" alt=\"\" />\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n      `;\r\n      })\r\n      .join(\"\");\r\n    listContainer.innerHTML = HTprodList;\r\n  }\r\n  return renderProd();\r\n}\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productsListIn/renderProducts.js?");

/***/ }),

/***/ "./assets/src/components/fetchProdList.js":
/*!************************************************!*\
  !*** ./assets/src/components/fetchProdList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchProdList = async () => {\r\n  const prodListJ = await fetch(\"./assets/src/json/productList.json\");\r\n  const prodList = await prodListJ.json();\r\n  //   console.log(prodList);\r\n  return prodList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchProdList);\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/fetchProdList.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/app/products-list.js");
/******/ 	
/******/ })()
;