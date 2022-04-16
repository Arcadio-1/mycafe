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

/***/ "./assets/src/app/product.js":
/*!***********************************!*\
  !*** ./assets/src/app/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./assets/src/main.js\");\n/* harmony import */ var _productIn_tabsExplore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productIn/tabsExplore.js */ \"./assets/src/app/productIn/tabsExplore.js\");\n/* harmony import */ var _productIn_quantity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productIn/quantity.js */ \"./assets/src/app/productIn/quantity.js\");\n/* harmony import */ var _productIn_fetchProduct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productIn/fetchProduct.js */ \"./assets/src/app/productIn/fetchProduct.js\");\n/* harmony import */ var _productIn_product_img_explorImg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productIn/product-img/explorImg.js */ \"./assets/src/app/productIn/product-img/explorImg.js\");\n/* harmony import */ var _productIn_product_img_sliderrender_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productIn/product-img/sliderrender.js */ \"./assets/src/app/productIn/product-img/sliderrender.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst loadrAll = async () => {\r\n  (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.windowLoad)();\r\n  (0,_productIn_tabsExplore_js__WEBPACK_IMPORTED_MODULE_1__.tabsExplore)();\r\n  (0,_productIn_quantity_js__WEBPACK_IMPORTED_MODULE_2__.plusMin)();\r\n  await (0,_productIn_fetchProduct_js__WEBPACK_IMPORTED_MODULE_3__.fetchProduct)(\"d8\").then((data) => {\r\n    (0,_productIn_product_img_sliderrender_js__WEBPACK_IMPORTED_MODULE_5__.sliderrender)(data);\r\n    // showSmallImg(data);\r\n  });\r\n  (0,_productIn_product_img_explorImg_js__WEBPACK_IMPORTED_MODULE_4__.explorImg)();\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  loadrAll();\r\n});\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/product.js?");

/***/ }),

/***/ "./assets/src/app/productIn/fetchProduct.js":
/*!**************************************************!*\
  !*** ./assets/src/app/productIn/fetchProduct.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchProduct\": () => (/* binding */ fetchProduct)\n/* harmony export */ });\n/* harmony import */ var _components_fetchProdList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/fetchProdList */ \"./assets/src/components/fetchProdList.js\");\n\r\nconst fetchProduct = async (id) => {\r\n  const products = await (0,_components_fetchProdList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const thisprod = products.find((prod) => {\r\n    if (prod.id == id) {\r\n      return prod;\r\n    }\r\n  });\r\n  return thisprod;\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/fetchProduct.js?");

/***/ }),

/***/ "./assets/src/app/productIn/product-img/explorImg.js":
/*!***********************************************************!*\
  !*** ./assets/src/app/productIn/product-img/explorImg.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"explorImg\": () => (/* binding */ explorImg)\n/* harmony export */ });\nconst explorImg = () => {\r\n  const container = document.querySelector(\".p-main-slider\");\r\n  const nextbtn = document.getElementById(\"next-img-btn\");\r\n  const prevbtn = document.getElementById(\"prev-img-btn\");\r\n\r\n  prevbtn.addEventListener(\"click\", () => {\r\n    sliding(\"prev\");\r\n  });\r\n  nextbtn.addEventListener(\"click\", () => {\r\n    sliding();\r\n  });\r\n\r\n  const sliding = (type) => {\r\n    const active = document.querySelector(\".active\");\r\n    const last = document.querySelector(\".last\");\r\n    let next = active.nextElementSibling;\r\n\r\n    if (!next) {\r\n      next = container.firstElementChild;\r\n    }\r\n\r\n    active.classList.remove(\"active\");\r\n    last.classList.remove(\"last\");\r\n\r\n    if (type == \"prev\") {\r\n      active.classList.add(\"next\");\r\n      last.classList.add(\"active\");\r\n      next = last.previousElementSibling;\r\n      if (!next) {\r\n        container.lastElementChild.classList.remove(\"next\");\r\n        container.lastElementChild.classList.add(\"last\");\r\n        return;\r\n      }\r\n      next.classList.remove(\"next\");\r\n      next.classList.add(\"last\");\r\n      return;\r\n    }\r\n\r\n    next.classList.remove(\"next\");\r\n    next.classList.add(\"active\");\r\n    active.classList.add(\"last\");\r\n    last.classList.add(\"next\");\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/product-img/explorImg.js?");

/***/ }),

/***/ "./assets/src/app/productIn/product-img/showSmallImg.js":
/*!**************************************************************!*\
  !*** ./assets/src/app/productIn/product-img/showSmallImg.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSmallImg\": () => (/* binding */ showSmallImg)\n/* harmony export */ });\n/* harmony import */ var _sliderrender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderrender.js */ \"./assets/src/app/productIn/product-img/sliderrender.js\");\n\r\nconst showSmallImg = (prod) => {\r\n  const smallImges = document.querySelectorAll(\".p-s-area\");\r\n  smallImges.forEach((img) => {\r\n    img.addEventListener(\"click\", (e) => {\r\n      const theSrc = e.currentTarget.dataset.id;\r\n      (0,_sliderrender_js__WEBPACK_IMPORTED_MODULE_0__.sliderrender)(prod, theSrc);\r\n      // console.log(theSrc);\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/product-img/showSmallImg.js?");

/***/ }),

/***/ "./assets/src/app/productIn/product-img/sliderrender.js":
/*!**************************************************************!*\
  !*** ./assets/src/app/productIn/product-img/sliderrender.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderrender\": () => (/* binding */ sliderrender)\n/* harmony export */ });\n/* harmony import */ var _showSmallImg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showSmallImg.js */ \"./assets/src/app/productIn/product-img/showSmallImg.js\");\n\r\nconst sliderrender = (prod, index = 0) => {\r\n  let lastIs = true;\r\n  // console.log(+index);\r\n  const imgSlider = document.querySelector(\".p-main-slider\");\r\n  const smallImg = document.querySelector(\".p-s-img\");\r\n  let position = \"next\";\r\n  // index--;\r\n  const mainImgCode = prod.imgList\r\n    .map((link, id) => {\r\n      if (id == index) {\r\n        position = \"active\";\r\n      }\r\n      if (id > index) {\r\n        position = \"next\";\r\n      }\r\n      if (id == index - 1) {\r\n        lastIs = false;\r\n        position = \"last\";\r\n      }\r\n      if (lastIs && prod.imgList.length - 1 == id) {\r\n        position = \"last\";\r\n      }\r\n      return `<img class=\"p-main-img ${position}\" data-id=${id} src=\"${link}\" alt=\"\" />`;\r\n    })\r\n    .join(\"\");\r\n  imgSlider.innerHTML = mainImgCode;\r\n  const htmlCode = prod.imgList\r\n    .map((link, id) => {\r\n      return `<div class=\"p-s-area\" data-id=${id}><img src=\"${link}\" alt=\"\" /></div>`;\r\n    })\r\n    .join(\"\");\r\n  smallImg.innerHTML = htmlCode;\r\n  (0,_showSmallImg_js__WEBPACK_IMPORTED_MODULE_0__.showSmallImg)(prod);\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/product-img/sliderrender.js?");

/***/ }),

/***/ "./assets/src/app/productIn/quantity.js":
/*!**********************************************!*\
  !*** ./assets/src/app/productIn/quantity.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plusMin\": () => (/* binding */ plusMin)\n/* harmony export */ });\nconst plusbtn = document.getElementById(\"btn-plus\");\r\nconst quant = document.getElementById(\"quant\");\r\nconst minus = document.getElementById(\"btn-minus\");\r\n\r\nconst plusMin = () => {\r\n  plusbtn.addEventListener(\"click\", function () {\r\n    if (quant.value < 10 && quant.value >= 1) quant.value++;\r\n    else quant.value = 10;\r\n  });\r\n  minus.addEventListener(\"click\", function () {\r\n    if (quant.value > 1 && quant.value < 11) quant.value--;\r\n    else quant.value = 1;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/quantity.js?");

/***/ }),

/***/ "./assets/src/app/productIn/tabsExplore.js":
/*!*************************************************!*\
  !*** ./assets/src/app/productIn/tabsExplore.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsExplore\": () => (/* binding */ tabsExplore)\n/* harmony export */ });\nfunction tabsExplore() {\r\n  const btns = document.querySelectorAll(\".p-down-title\");\r\n  const tabs = document.querySelectorAll(\".down-tab\");\r\n  document.querySelectorAll(\".p-down-title\").forEach((btns) => {\r\n    btns.addEventListener(\"click\", () => {\r\n      const downTitle = btns.parentElement;\r\n      const PDown = downTitle.parentElement;\r\n      const TabNum = btns.dataset.forTab;\r\n      const TabAct = PDown.querySelector(`.down-tab[data-tab=\"${TabNum}\"]`);\r\n\r\n      downTitle.querySelectorAll(\".p-down-title\").forEach((btns) => {\r\n        btns.classList.remove(\"p-down-active-tab\");\r\n      });\r\n      PDown.querySelectorAll(\".down-tab\").forEach((tabs) => {\r\n        tabs.classList.remove(\"active-display\");\r\n      });\r\n      btns.classList.add(\"p-down-active-tab\");\r\n      TabAct.classList.add(\"active-display\");\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/app/productIn/tabsExplore.js?");

/***/ }),

/***/ "./assets/src/components/fetchProdList.js":
/*!************************************************!*\
  !*** ./assets/src/components/fetchProdList.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchProdList = async () => {\r\n  const prodListJ = await fetch(\"./assets/src/json/productList.json\");\r\n  const prodList = await prodListJ.json();\r\n  //   console.log(prodList);\r\n  return prodList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchProdList);\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/fetchProdList.js?");

/***/ }),

/***/ "./assets/src/components/navRender.js":
/*!********************************************!*\
  !*** ./assets/src/components/navRender.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navRender\": () => (/* binding */ navRender)\n/* harmony export */ });\nconst navRender = async () => {\r\n  const navLinkCunt = document.querySelector(\".nav2-ul\");\r\n  ////\r\n  const getnavLinksJson = async () => {\r\n    const fetchNavLinks = await fetch(\"./assets/src/json/navLink.json\");\r\n    const data = await fetchNavLinks.json();\r\n    return data;\r\n  };\r\n  // console.log(getnavLinksJson);\r\n  const links = await getnavLinksJson();\r\n  links.map((item) => {\r\n    const creatLi = document.createElement(\"li\");\r\n    const { text, link } = item;\r\n    creatLi.innerHTML = `<a href=\"${link}\">${text}</a>`;\r\n    navLinkCunt.appendChild(creatLi);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/navRender.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"windowLoad\": () => (/* binding */ windowLoad)\n/* harmony export */ });\n/* harmony import */ var _components_tagolmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tagolmenu.js */ \"./assets/src/components/tagolmenu.js\");\n/* harmony import */ var _components_navRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navRender.js */ \"./assets/src/components/navRender.js\");\n\r\n\r\n\r\nconst windowLoad = () => {\r\n  (0,_components_tagolmenu_js__WEBPACK_IMPORTED_MODULE_0__.tagolmenu)();\r\n  (0,_components_navRender_js__WEBPACK_IMPORTED_MODULE_1__.navRender)();\r\n};\r\n// window.addEventListener(\"load\", () => {\r\n\r\n// });\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/app/product.js");
/******/ 	
/******/ })()
;