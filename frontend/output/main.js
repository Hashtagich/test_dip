/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/fairytale-page.css":
/*!************************************!*\
  !*** ./src/css/fairytale-page.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/fairytale-page.css?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/menu.css?");

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ (() => {

eval("const menuBurger = document.getElementById(\"menuBurger\");\r\nconst menu = document.getElementById(\"menu\");\r\nconst menuClose = document.getElementById(\"menuClose\");\r\n\r\n// Открытие меню\r\nmenuBurger.addEventListener(\"click\", () => {\r\n    menu.classList.toggle(\"menu-active\");\r\n});\r\n\r\n// Закрытие меню\r\nmenuClose.addEventListener(\"click\", () => {\r\n    menu.classList.remove(\"menu-active\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/js/burger.js?");

/***/ }),

/***/ "./src/js/carousels.js":
/*!*****************************!*\
  !*** ./src/js/carousels.js ***!
  \*****************************/
/***/ (() => {

eval("\r\n// const bookWrapper = document.getElementById('bookWrapper');\r\n// const leftButton = document.querySelector('.left');\r\n// const rightButton = document.querySelector('.right');\r\n// let scrollAmount = 0;\r\n// const scrollStep = 400; // Шаг прокрутки в пикселях\r\n\r\n// function updateButtons() {\r\n//     const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;\r\n//     leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';\r\n//     rightButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';\r\n// }\r\n\r\n// function scrollBooks(direction) {\r\n//     const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;\r\n\r\n//     if (direction === 'right') {\r\n//         scrollAmount += scrollStep;\r\n//         if (scrollAmount > maxScroll) scrollAmount = maxScroll;\r\n//     } else if (direction === 'left') {\r\n//         scrollAmount -= scrollStep;\r\n//         if (scrollAmount < 0) scrollAmount = 0;\r\n//     }\r\n\r\n//     bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;\r\n//     updateButtons();\r\n// }\r\n\r\n// leftButton.onclick = () => scrollBooks('left');\r\n// rightButton.onclick = () => scrollBooks('right');\r\n\r\n// updateButtons();\r\n\r\ndocument.querySelectorAll('.carousels').forEach((carousel) => {\r\n    const bookWrapper = carousel.querySelector('.book-wrapper');\r\n    const leftButton = carousel.querySelector('.scroll-btn.left');\r\n    const rightButton = carousel.querySelector('.scroll-btn.right');\r\n    const scrollStep = parseInt(carousel.getAttribute('data-scroll-step'), 10) || 600; \r\n    let scrollAmount = 0;\r\n\r\n    function updateButtons() {\r\n        const maxScroll = bookWrapper.scrollWidth - bookWrapper.parentElement.offsetWidth;\r\n        leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';\r\n        rightButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';\r\n    }\r\n\r\n    function scrollBooks(direction) {\r\n        const maxScroll = bookWrapper.scrollWidth - bookWrapper.parentElement.offsetWidth;\r\n\r\n        if (direction === 'right') {\r\n            scrollAmount += scrollStep;\r\n            if (scrollAmount > maxScroll) scrollAmount = maxScroll;\r\n        } else if (direction === 'left') {\r\n            scrollAmount -= scrollStep;\r\n            if (scrollAmount < 0) scrollAmount = 0;\r\n        }\r\n\r\n        bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;\r\n        updateButtons();\r\n    }\r\n\r\n    leftButton.addEventListener('click', () => scrollBooks('left'));\r\n    rightButton.addEventListener('click', () => scrollBooks('right'));\r\n\r\n    updateButtons();\r\n});\r\n\r\n\r\n// карусель с отзывами\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const wrapper = document.querySelector(\".wrapper-withReviews\");\r\n  const reviews = document.querySelectorAll(\".review\");\r\n  const leftBtn = document.querySelector(\".leftBtn\");\r\n  const rightBtn = document.querySelector(\".rightBtn\");\r\n\r\n  const reviewWidth = 310; \r\n  let currentOffset = 0; \r\n\r\n  function updateCarousel() {\r\n    wrapper.style.transform = `translateX(${-currentOffset}px)`;\r\n  }\r\n\r\n  rightBtn.addEventListener(\"click\", () => {\r\n    if (currentOffset < (reviews.length - 1) * reviewWidth) {\r\n      currentOffset += reviewWidth;\r\n      updateCarousel();\r\n    }\r\n  });\r\n\r\n  leftBtn.addEventListener(\"click\", () => {\r\n    if (currentOffset > 0) {\r\n      currentOffset -= reviewWidth;\r\n      updateCarousel();\r\n    }\r\n  });\r\n\r\n  updateCarousel();\r\n});\n\n//# sourceURL=webpack:///./src/js/carousels.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/menu.css */ \"./src/css/menu.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_fairytale_page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/fairytale-page.css */ \"./src/css/fairytale-page.css\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _carousels_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousels.js */ \"./src/js/carousels.js\");\n/* harmony import */ var _carousels_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_carousels_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("// Получаем элементы слайдера\r\nconst slider = document.querySelector('.slider');\r\nconst prevButton = document.querySelector('.slider-left');\r\nconst nextButton = document.querySelector('.slider-right');\r\nconst slides = Array.from(slider.querySelectorAll('.slide'));\r\nconst slideCount = slides.length;\r\nlet slideIndex = 0;\r\n\r\n// Устанавливаем обработчики событий для кнопок\r\nprevButton.addEventListener('click', showPreviousSlide);\r\nnextButton.addEventListener('click', showNextSlide);\r\n\r\n// Функция для показа предыдущего слайда\r\nfunction showPreviousSlide() {\r\n  slideIndex = (slideIndex - 1 + slideCount) % slideCount;\r\n  updateSlider();\r\n}\r\n\r\n// Функция для показа следующего слайда\r\nfunction showNextSlide() {\r\n  slideIndex = (slideIndex + 1) % slideCount;\r\n  updateSlider();\r\n}\r\n\r\n// Функция для обновления отображения слайдера\r\nfunction updateSlider() {\r\n  slides.forEach((slide, index) => {\r\n    if (index === slideIndex) {\r\n      slide.style.display = 'block';\r\n    } else {\r\n      slide.style.display = 'none';\r\n    }\r\n  });\r\n}\r\n\r\n// Инициализация слайдера\r\nupdateSlider();\n\n//# sourceURL=webpack:///./src/js/slider.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;