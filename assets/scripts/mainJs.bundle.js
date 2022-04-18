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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showbasket\": () => (/* binding */ showbasket)\n/* harmony export */ });\nconst showbasket = () => {\r\n  const basketBtn = document.querySelector(\".show-basket-btn\");\r\n  const basketcard = document.querySelector(\".show-basket\");\r\n  const nav = document.querySelector(\".uper\");\r\n  const container = document.querySelectorAll(\".container\");\r\n  basketBtn.addEventListener(\"mouseover\", () => {\r\n    console.log(window.pageYOffset);\r\n\r\n    const basketBtnPosition = basketBtn.getBoundingClientRect();\r\n    basketcard.style.left = `${basketBtnPosition.left}px`;\r\n    basketcard.style.top = `${\r\n      basketBtnPosition.bottom + window.pageYOffset - 3\r\n    }px`;\r\n    basketcard.classList.add(\"display-basket-card\");\r\n  });\r\n  nav.addEventListener(\"mouseover\", (e) => {\r\n    if (!e.target.parentElement.classList.contains(\"show-basket-btn\")) {\r\n      basketcard.classList.remove(\"display-basket-card\");\r\n    }\r\n  });\r\n  container.forEach((cunt) => {\r\n    cunt.addEventListener(\"mouseover\", () => {\r\n      if (basketcard.classList.contains(\"display-basket-card\")) {\r\n        basketcard.classList.remove(\"display-basket-card\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://cafetarane/./assets/src/components/showbasket.js?");

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