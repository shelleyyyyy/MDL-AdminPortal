module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/user-profile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./assets/img/faces/marc.jpg":
/*!***********************************!*\
  !*** ./assets/img/faces/marc.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marc-8880a65c57d7f031579335be153f64a0.jpg";

/***/ }),

/***/ "./assets/img/reactlogo.png":
/*!**********************************!*\
  !*** ./assets/img/reactlogo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/img/sidebar-1.jpg":
/*!**********************************!*\
  !*** ./assets/img/sidebar-1.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sidebar-1-8e9f0a3c5578a20733d5bad0e51c91fb.jpg";

/***/ }),

/***/ "./assets/img/sidebar-2.jpg":
/*!**********************************!*\
  !*** ./assets/img/sidebar-2.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sidebar-2-310509c95512893dc661bd3a6b0d2a5d.jpg";

/***/ }),

/***/ "./assets/img/sidebar-3.jpg":
/*!**********************************!*\
  !*** ./assets/img/sidebar-3.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sidebar-3-2503169017014036cf0dd0dd7c2a2b8a.jpg";

/***/ }),

/***/ "./assets/img/sidebar-4.jpg":
/*!**********************************!*\
  !*** ./assets/img/sidebar-4.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sidebar-4-fc9cb0538eb5a4dfd6fbb1bf6dd6189b.jpg";

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard.js":
/*!*************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard.js ***!
  \*************************************************/
/*! exports provided: hexToRgb, drawerWidth, transition, container, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, blackColor, whiteColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, darkBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, darkCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardSubtitle, cardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkBoxShadow", function() { return darkBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkCardHeader", function() { return darkCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/nextjs-material-dashboard
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7", "#212121", "#263238"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};
const darkBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(grayColor[12]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const darkCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + grayColor[13] + ", " + grayColor[12] + ")"
}, darkBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/buttonStyle.js":
/*!************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/buttonStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  rose: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2)"
    }
  },
  primary: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2)"
    }
  },
  info: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardAvatarStyle.js":
/*!****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardAvatarStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const cardAvatarStyle = {
  cardAvatar: {
    "&$cardAvatarProfile img": {
      width: "100%",
      height: "auto"
    }
  },
  cardAvatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
    padding: "0",
    boxShadow: "0 16px 38px -12px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.56), 0 4px 25px 0px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  cardAvatarPlain: {}
};
/* harmony default export */ __webpack_exports__["default"] = (cardAvatarStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js":
/*!**************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardFooterStyle.js":
/*!****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardFooterStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterStats: {
    borderTop: "1px solid " + assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][10],
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardFooterChart: {
    borderTop: "1px solid " + assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][10]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js":
/*!****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cardHeaderStyle = {
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$darkCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"])
  },
  successCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"])
  },
  dangerCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"])
  },
  infoCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"])
  },
  primaryCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"])
  },
  roseCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["roseCardHeader"])
  },
  darkCardHeader: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    "&:not($cardHeaderIcon)": _objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["darkCardHeader"])
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/cardStyle.js":
/*!**********************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/cardStyle.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.87)",
    background: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/customInputStyle.js":
/*!*****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/customInputStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const customInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][4] + " !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
    }
  },
  labelRoot: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][3] + " !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    letterSpacing: "unset"
  }),
  labelRootError: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
  },
  labelRootSuccess: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  marginTop: {
    marginTop: "16px"
  },
  formControl: {
    paddingBottom: "10px",
    margin: "27px 0 0 0",
    position: "relative",
    verticalAlign: "unset"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/footerStyle.js":
/*!************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/footerStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const footerStyle = {
  block: _objectSpread(_objectSpread({
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontWeight: "500",
    fontSize: "12px"
  }),
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  footer: _objectSpread({
    bottom: "0",
    borderTop: "1px solid " + assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][11],
    padding: "15px 0"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]),
  container: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  a: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js":
/*!*****************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_dropdownStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/dropdownStyle.js */ "./assets/jss/nextjs-material-dashboard/dropdownStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread(_objectSpread({}, Object(assets_jss_nextjs_material_dashboard_dropdownStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theme)), {}, {
  search: {
    "& > div": {
      marginTop: "0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
      }
    }
  },
  linkText: _objectSpread(_objectSpread({
    zIndex: "4"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px",
    margin: "0px"
  }),
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      right: "4px",
      fontSize: "9px",
      background: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
      fontSize: "14px",
      marginRight: "8px"
    })
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/headerStyle.js":
/*!************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/headerStyle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerStyle = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][7],
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["container"]), {}, {
    minHeight: "50px"
  }),
  flex: {
    flex: 1
  },
  title: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
  }),
  appResponsive: {
    top: "8px"
  },
  primary: _objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultBoxShadow"]),
  info: _objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultBoxShadow"]),
  success: _objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultBoxShadow"]),
  warning: _objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultBoxShadow"]),
  danger: _objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultBoxShadow"])
});

/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/rtlHeaderLinksStyle.js":
/*!********************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/rtlHeaderLinksStyle.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_dropdownStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/dropdownStyle.js */ "./assets/jss/nextjs-material-dashboard/dropdownStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const headerLinksStyle = theme => _objectSpread(_objectSpread({}, Object(assets_jss_nextjs_material_dashboard_dropdownStyle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theme)), {}, {
  search: {
    "& > div": {
      marginTop: "0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
      }
    }
  },
  linkText: _objectSpread(_objectSpread({
    zIndex: "4"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px",
    margin: "0px"
  }),
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      right: "4px",
      fontSize: "9px",
      background: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
      fontSize: "14px",
      marginRight: "8px"
    })
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/components/sidebarStyle.js":
/*!*************************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/components/sidebarStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const sidebarStyle = theme => ({
  drawerPaper: _objectSpread(_objectSpread({
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["boxShadow"]), {}, {
    width: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"],
    [theme.breakpoints.up("md")]: {
      width: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"],
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: _objectSpread(_objectSpread({
      width: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]
    }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["boxShadow"]), {}, {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]}px, 0, 0)`
    }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["transition"])
  }),
  drawerPaperRTL: {
    [theme.breakpoints.up("md")]: {
      left: "auto !important",
      right: "0 !important"
    },
    [theme.breakpoints.down("sm")]: {
      left: "0  !important",
      right: "auto !important"
    }
  },
  logo: {
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][6]) + ", 0.3)"
    }
  },
  logoLink: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  }),
  logoLinkRTL: {
    textAlign: "right"
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "10px",
    marginRight: "15px"
  },
  img: {
    width: "35px",
    top: "22px",
    position: "absolute",
    verticalAlign: "middle",
    border: "0"
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"],
      opacity: ".8"
    }
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  },
  item: {
    position: "relative",
    display: "block",
    textDecoration: "none",
    "&:hover,&:focus,&:visited,&": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }
  },
  itemLink: _objectSpread({
    width: "auto",
    transition: "all 300ms linear",
    margin: "10px 15px 0",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    backgroundColor: "transparent"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]),
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.8)"
  },
  itemIconRTL: {
    marginRight: "3px",
    marginLeft: "15px",
    float: "right"
  },
  itemText: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    margin: "0",
    lineHeight: "30px",
    fontSize: "14px",
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }),
  itemTextRTL: {
    textAlign: "right"
  },
  whiteFont: {
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  },
  purple: _objectSpread(_objectSpread({
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"]), {}, {
    "&:hover,&:focus": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
    }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"])
  }),
  blue: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ",.2)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ",.2)"
    }
  },
  green: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ",.2)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ",.2)"
    }
  },
  orange: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ",.2)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ",.2)"
    }
  },
  red: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ",.2)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ",.2)"
    }
  },
  white: {
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",.2)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      boxShadow: "0 12px 20px -10px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",.28), 0 4px 20px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ",.12), 0 7px 8px -5px rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ",.2)"
    },
    "& $itemText": {
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]
    },
    "& $itemIcon": {
      color: "rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8]) + ", 0.8)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  },
  activePro: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (sidebarStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/dropdownStyle.js":
/*!***************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/dropdownStyle.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const dropdownStyle = theme => ({
  buttonLink: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginLeft: "30px",
      width: "auto"
    }
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9],
      marginRight: "15px"
    }
  },
  linkText: _objectSpread(_objectSpread({
    zIndex: "4"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px"
  }),
  popperClose: {
    pointerEvents: "none"
  },
  popperResponsive: {
    [theme.breakpoints.down("md")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      WebkitBoxShadow: "none",
      boxShadow: "none",
      color: "black"
    }
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "unset !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] + " !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
          }
        }
      }
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    WebkitBackgroundClip: "padding-box",
    backgroundClip: "padding-box"
  },
  dropdownItem: _objectSpread(_objectSpread({}, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.42857143",
    color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8],
    whiteSpace: "nowrap",
    height: "unset",
    minHeight: "unset",
    "&:hover": _objectSpread({
      backgroundColor: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      color: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"])
  })
});

/* harmony default export */ __webpack_exports__["default"] = (dropdownStyle);

/***/ }),

/***/ "./assets/jss/nextjs-material-dashboard/layouts/adminStyle.js":
/*!********************************************************************!*\
  !*** ./assets/jss/nextjs-material-dashboard/layouts/adminStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard.js */ "./assets/jss/nextjs-material-dashboard.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: _objectSpread(_objectSpread({
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right"
  }, assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["transition"]), {}, {
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  }),
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container: assets_jss_nextjs_material_dashboard_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  map: {
    marginTop: "70px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (appStyle);

/***/ }),

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Card\\Card.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function Card(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile,
    chart
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "chart"]);

  const cardClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  chart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Card/CardAvatar.js":
/*!***************************************!*\
  !*** ./components/Card/CardAvatar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardAvatar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardAvatarStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardAvatarStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardAvatarStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Card\\CardAvatar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function CardAvatar(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardAvatarStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    children,
    className,
    plain,
    profile
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className", "plain", "profile"]);

  const cardAvatarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardAvatarClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
CardAvatar.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./components/Card/CardBody.js":
/*!*************************************!*\
  !*** ./components/Card/CardBody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardBodyStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Card\\CardBody.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function CardBody(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  const cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Card/CardFooter.js":
/*!***************************************!*\
  !*** ./components/Card/CardFooter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardFooterStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardFooterStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Card\\CardFooter.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function CardFooter(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile,
    stats,
    chart
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "stats", "chart"]);

  const cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardFooterClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  chart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Card/CardHeader.js":
/*!***************************************!*\
  !*** ./components/Card/CardHeader.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js */ "./assets/jss/nextjs-material-dashboard/components/cardHeaderStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Card\\CardHeader.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


function CardHeader(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const classes = useStyles();

  const {
    className,
    children,
    color,
    plain,
    stats,
    icon
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "stats", "icon"]);

  const cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: cardHeaderClasses
  }, rest), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["warning", "success", "danger", "info", "primary", "rose", "dark"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegularButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/buttonStyle.js */ "./assets/jss/nextjs-material-dashboard/components/buttonStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\CustomButtons\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components




function RegularButton(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const classes = useStyles();

  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, rest), {}, {
    classes: _objectSpread(_objectSpread({}, muiClasses), {}, {
      root: btnClasses
    }),
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  // use this to pass the classes props from Material-UI
  muiClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/CustomInput/CustomInput.js":
/*!***********************************************!*\
  !*** ./components/CustomInput/CustomInput.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/customInputStyle.js */ "./assets/jss/nextjs-material-dashboard/components/customInputStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\CustomInput\\CustomInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // @material-ui/core components




 // @material-ui/icons


 // core components


function CustomInput(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success
  } = props;
  const labelClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.marginTop]: labelText === undefined
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, formControlProps), {}, {
    className: formControlProps.className + " " + classes.formControl,
    children: [labelText !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({
      className: classes.labelRoot + labelClasses,
      htmlFor: id
    }, labelProps), {}, {
      children: labelText
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread({
      classes: {
        root: marginTop,
        disabled: classes.disabled,
        underline: underlineClasses
      },
      id: id
    }, inputProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.feedback + " " + classes.labelRootError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this) : success ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.feedback + " " + classes.labelRootSuccess
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./components/FixedPlugin/FixedPlugin.js":
/*!***********************************************!*\
  !*** ./components/FixedPlugin/FixedPlugin.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FixedPlugin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/img/sidebar-1.jpg */ "./assets/img/sidebar-1.jpg");
/* harmony import */ var assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/img/sidebar-2.jpg */ "./assets/img/sidebar-2.jpg");
/* harmony import */ var assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/img/sidebar-3.jpg */ "./assets/img/sidebar-3.jpg");
/* harmony import */ var assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/sidebar-4.jpg */ "./assets/img/sidebar-4.jpg");
/* harmony import */ var assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\FixedPlugin\\FixedPlugin.js";

/*eslint-disable*/
 // nodejs library to set properties for components

 // nodejs library that concatenates classes







function FixedPlugin(props) {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("dropdown show");
  const [bg_checked, setBg_checked] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [bgImage, setBgImage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.bgImage);

  const handleClick = () => {
    props.handleFixedClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("fixed-plugin", {
      "rtl-fixed-plugin": props.rtlActive
    }),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "fixedPluginClasses",
      className: props.fixedClasses,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: handleClick,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          className: "fa fa-cog fa-2x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "dropdown-menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "header-title",
          children: "SIDEBAR FILTERS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "adjustments-line",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "switch-trigger",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "white" ? "badge filter badge-white active" : "badge filter badge-white",
                "data-color": "white",
                onClick: () => {
                  props.handleColorClick("white");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "purple" ? "badge filter badge-purple active" : "badge filter badge-purple",
                "data-color": "purple",
                onClick: () => {
                  props.handleColorClick("purple");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "blue" ? "badge filter badge-blue active" : "badge filter badge-blue",
                "data-color": "blue",
                onClick: () => {
                  props.handleColorClick("blue");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "green" ? "badge filter badge-green active" : "badge filter badge-green",
                "data-color": "green",
                onClick: () => {
                  props.handleColorClick("green");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "red" ? "badge filter badge-red active" : "badge filter badge-red",
                "data-color": "red",
                onClick: () => {
                  props.handleColorClick("red");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: props.bgColor === "orange" ? "badge filter badge-orange active" : "badge filter badge-orange",
                "data-color": "orange",
                onClick: () => {
                  props.handleColorClick("orange");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "header-title",
          children: "Images"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: bgImage === assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "img-holder switch-trigger",
            onClick: () => {
              setBgImage(assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
              props.handleImageClick(assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: assets_img_sidebar_1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: bgImage === assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "img-holder switch-trigger",
            onClick: () => {
              setBgImage(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);
              props.handleImageClick(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: bgImage === assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "img-holder switch-trigger",
            onClick: () => {
              setBgImage(assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);
              props.handleImageClick(assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: assets_img_sidebar_3_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: bgImage === assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "img-holder switch-trigger",
            onClick: () => {
              setBgImage(assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);
              props.handleImageClick(assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: assets_img_sidebar_4_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
              alt: "..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "button-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "button-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "success",
              href: "https://www.creative-tim.com/product/nextjs-material-dashboard?ref=njsmd-fixed-plugin",
              target: "_blank",
              fullWidth: true,
              children: "Download free!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "button-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "button-container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "warning",
              href: "https://www.creative-tim.com/product/nextjs-material-dashboard-pro?ref=njsmd-fixed-plugin",
              target: "_blank",
              fullWidth: true,
              children: "Get PRO version"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "button-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
            color: "info",
            fullWidth: true,
            href: "https://www.creative-tim.com/learning-lab/nextjs/overview/material-dashboard?ref=njsmd-fixed-plugin",
            target: "_blank",
            children: "Documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "adjustments-line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
FixedPlugin.propTypes = {
  bgImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  handleFixedClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fixedClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["white", "purple", "blue", "green", "orange", "red"]),
  handleColorClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleImageClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/footerStyle.js */ "./assets/jss/nextjs-material-dashboard/components/footerStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Footer\\Footer.js";

/*eslint-disable*/

 // @material-ui/core components



 // core components


function Footer(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: classes.footer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.left,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_5___default.a, {
          className: classes.list,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#home",
              className: classes.block,
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#company",
              className: classes.block,
              children: "Company"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#portfolio",
              className: classes.block,
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
            className: classes.inlineBlock,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#blog",
              className: classes.block,
              children: "Blog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: classes.right,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: ["\xA9 ", 1900 + new Date().getYear(), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://www.creative-tim.com?ref=njsmd-footer",
            target: "_blank",
            className: classes.a,
            children: "Creative Tim"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this), ", made with love for a better web"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Grid/GridContainer.js":
/*!******************************************!*\
  !*** ./components/Grid/GridContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Grid\\GridContainer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};
function GridContainer(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
  const classes = useStyles();

  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({
    container: true
  }, rest), {}, {
    className: classes.grid,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Grid/GridItem.js":
/*!*************************************!*\
  !*** ./components/Grid/GridItem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Grid\\GridItem.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



const styles = {
  grid: {
    padding: "0 15px !important"
  }
};
function GridItem(props) {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
  const classes = useStyles();

  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({
    item: true
  }, rest), {}, {
    className: classes.grid,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};

/***/ }),

/***/ "./components/Hooks/useWindowSize.js":
/*!*******************************************!*\
  !*** ./components/Hooks/useWindowSize.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Hook

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    width: undefined,
    height: undefined
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    } // Add event listener


    window.addEventListener("resize", handleResize); // Call handler right away so state gets updated with initial window size

    handleResize(); // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./components/Navbars/AdminNavbarLinks.js":
/*!************************************************!*\
  !*** ./components/Navbars/AdminNavbarLinks.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminNavbarLinks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Hooks_useWindowSize_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/Hooks/useWindowSize.js */ "./components/Hooks/useWindowSize.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js */ "./assets/jss/nextjs-material-dashboard/components/headerLinksStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Navbars\\AdminNavbarLinks.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @material-ui/core components









 // @material-ui/icons




 // core components





function AdminNavbarLinks() {
  const size = Object(components_Hooks_useWindowSize_js__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
  const classes = useStyles();
  const [openNotification, setOpenNotification] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [openProfile, setOpenProfile] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.searchWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        formControlProps: {
          className: classes.margin + " " + classes.search
        },
        inputProps: {
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search"
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        color: "white",
        "aria-label": "edit",
        justIcon: true,
        round: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
      color: size.width > 959 ? "transparent" : "white",
      justIcon: size.width > 959,
      simple: !(size.width > 959),
      "aria-label": "Dashboard",
      className: classes.buttonLink,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14___default.a, {
        className: classes.icons
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
        mdUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.linkText,
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.manager,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        color: size.width > 959 ? "transparent" : "white",
        justIcon: size.width > 959,
        simple: !(size.width > 959),
        "aria-owns": openNotification ? "notification-menu-list-grow" : null,
        "aria-haspopup": "true",
        onClick: handleClickNotification,
        className: classes.buttonLink,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_13___default.a, {
          className: classes.icons
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: classes.notifications,
          children: "5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
          mdUp: true,
          implementation: "css",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: handleCloseNotification,
            className: classes.linkText,
            children: "Notification"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        open: Boolean(openNotification),
        anchorEl: openNotification,
        transition: true,
        disablePortal: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [classes.popperClose]: !openNotification
        }) + " " + classes.popperNav,
        children: ({
          TransitionProps,
          placement
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({}, TransitionProps), {}, {
          id: "notification-menu-list-grow",
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default.a, {
              onClickAway: handleCloseNotification,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
                role: "menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseNotification,
                  className: classes.dropdownItem,
                  children: "Mike John responded to your email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseNotification,
                  className: classes.dropdownItem,
                  children: "You have 5 new tasks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseNotification,
                  className: classes.dropdownItem,
                  children: ["You", "'", "re now friend with Andrew"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseNotification,
                  className: classes.dropdownItem,
                  children: "Another Notification"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseNotification,
                  className: classes.dropdownItem,
                  children: "Another One"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.manager,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
        color: size.width > 959 ? "transparent" : "white",
        justIcon: size.width > 959,
        simple: !(size.width > 959),
        "aria-owns": openProfile ? "profile-menu-list-grow" : null,
        "aria-haspopup": "true",
        onClick: handleClickProfile,
        className: classes.buttonLink,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, {
          className: classes.icons
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
          mdUp: true,
          implementation: "css",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: classes.linkText,
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        open: Boolean(openProfile),
        anchorEl: openProfile,
        transition: true,
        disablePortal: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [classes.popperClose]: !openProfile
        }) + " " + classes.popperNav,
        children: ({
          TransitionProps,
          placement
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({}, TransitionProps), {}, {
          id: "profile-menu-list-grow",
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default.a, {
              onClickAway: handleCloseProfile,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
                role: "menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseProfile,
                  className: classes.dropdownItem,
                  children: "Profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseProfile,
                  className: classes.dropdownItem,
                  children: "Settings"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {
                  light: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleCloseProfile,
                  className: classes.dropdownItem,
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 15
          }, this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Navbars/Navbar.js":
/*!**************************************!*\
  !*** ./components/Navbars/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminNavbarLinks.js */ "./components/Navbars/AdminNavbarLinks.js");
/* harmony import */ var _RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RTLNavbarLinks.js */ "./components/Navbars/RTLNavbarLinks.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/headerStyle.js */ "./assets/jss/nextjs-material-dashboard/components/headerStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Navbars\\Navbar.js";



 // @material-ui/core components





 // @material-ui/icons

 // core components





function Header(props) {
  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(); // create styles for this component

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
  const classes = useStyles();

  function makeBrand() {
    var name = "NextJS Material Dashboard";
    props.routes.map(prop => {
      if (router.route.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }

      return null;
    });
    return name;
  }

  const {
    color
  } = props;
  const appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [" " + classes[color]]: color
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.appBar + appBarClasses,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.flex,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: "transparent",
          href: "#",
          className: classes.title,
          children: makeBrand()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
        smDown: true,
        implementation: "css",
        children: props.rtlActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 30
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 51
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
        mdUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: props.handleDrawerToggle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
};

/***/ }),

/***/ "./components/Navbars/RTLNavbarLinks.js":
/*!**********************************************!*\
  !*** ./components/Navbars/RTLNavbarLinks.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RTLNavbarLinks; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Hooks_useWindowSize_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Hooks/useWindowSize.js */ "./components/Hooks/useWindowSize.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_rtlHeaderLinksStyle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/rtlHeaderLinksStyle.js */ "./assets/jss/nextjs-material-dashboard/components/rtlHeaderLinksStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Navbars\\RTLNavbarLinks.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @material-ui/core components








 // @material-ui/icons




 // core components





function RTLNavbarLinks() {
  const size = Object(components_Hooks_useWindowSize_js__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_rtlHeaderLinksStyle_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleToggle = event => {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };

  const handleClose = () => {
    setOpen(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.searchWrapper,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        formControlProps: {
          className: classes.margin + " " + classes.search
        },
        inputProps: {
          placeholder: "جستجو...",
          inputProps: {
            "aria-label": "Search"
          }
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        color: "white",
        "aria-label": "edit",
        justIcon: true,
        round: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: size.width > 959 ? "transparent" : "white",
      justIcon: size.width > 959,
      simple: !(size.width > 959),
      "aria-label": "Dashboard",
      className: classes.buttonLink,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.icons
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
        mdUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.linkText,
          children: "\u0622\u0645\u0627\u0631\u0647\u0627"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.manager,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        color: size.width > 959 ? "transparent" : "white",
        justIcon: size.width > 959,
        simple: !(size.width > 959),
        "aria-owns": open ? "menu-list-grow" : null,
        "aria-haspopup": "true",
        onClick: handleToggle,
        className: classes.buttonLink,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_12___default.a, {
          className: classes.icons
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: classes.notifications,
          children: "\u06F5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
          mdUp: true,
          implementation: "css",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: handleToggle,
            className: classes.linkText,
            children: "\u0627\u0639\u0644\u0627\u0646\u200C\u0647\u0627"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_10___default.a, {
        open: Boolean(open),
        anchorEl: open,
        transition: true,
        disablePortal: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [classes.popperClose]: !open
        }) + " " + classes.popperNav,
        children: ({
          TransitionProps,
          placement
        }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_6___default.a, _objectSpread(_objectSpread({}, TransitionProps), {}, {
          id: "menu-list-grow",
          style: {
            transformOrigin: placement === "bottom" ? "center top" : "center bottom"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8___default.a, {
              onClickAway: handleClose,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_5___default.a, {
                role: "menu",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleClose,
                  className: classes.dropdownItem,
                  children: "\u0645\u062D\u0645\u062F\u0631\u0636\u0627 \u0628\u0647 \u0627\u06CC\u0645\u06CC\u0644 \u0634\u0645\u0627 \u067E\u0627\u0633\u062E \u062F\u0627\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleClose,
                  className: classes.dropdownItem,
                  children: "\u0634\u0645\u0627 \u06F5 \u0648\u0638\u06CC\u0641\u0647 \u062C\u062F\u06CC\u062F \u062F\u0627\u0631\u06CC\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleClose,
                  className: classes.dropdownItem,
                  children: "\u0627\u0632 \u062D\u0627\u0644\u0627 \u0634\u0645\u0627 \u0628\u0627 \u0639\u0644\u06CC\u0631\u0636\u0627 \u062F\u0648\u0633\u062A \u0647\u0633\u062A\u06CC\u062F"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleClose,
                  className: classes.dropdownItem,
                  children: "\u0627\u0639\u0644\u0627\u0646 \u062F\u06CC\u06AF\u0631"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  onClick: handleClose,
                  className: classes.dropdownItem,
                  children: "\u0627\u0639\u0644\u0627\u0646 \u062F\u06CC\u06AF\u0631"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this)
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      color: size.width > 959 ? "transparent" : "white",
      justIcon: size.width > 959,
      simple: !(size.width > 959),
      "aria-label": "Person",
      className: classes.buttonLink,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: classes.icons
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9___default.a, {
        mdUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: classes.linkText,
          children: "\u062D\u0633\u0627\u0628 \u06A9\u0627\u0631\u0628\u0631\u06CC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Navbars/AdminNavbarLinks.js */ "./components/Navbars/AdminNavbarLinks.js");
/* harmony import */ var components_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Navbars/RTLNavbarLinks.js */ "./components/Navbars/RTLNavbarLinks.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/components/sidebarStyle.js */ "./assets/jss/nextjs-material-dashboard/components/sidebarStyle.js");

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\components\\Sidebar\\Sidebar.js";

/*eslint-disable*/




 // @material-ui/core components







 // core components




function Sidebar(props) {
  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(); // creates styles for this component

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(assets_jss_nextjs_material_dashboard_components_sidebarStyle_js__WEBPACK_IMPORTED_MODULE_15__["default"]);
  const classes = useStyles(); // verifies if routeName is the one active (in browser input)

  function activeRoute(routeName) {
    return router.route.indexOf(routeName) > -1 ? true : false;
  }

  const {
    color,
    logo,
    image,
    logoText,
    routes
  } = props;

  var links = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.list,
    children: routes.map((prop, key) => {
      var activePro = " ";
      var listItemClasses;

      if (prop.path === "/upgrade-to-pro") {
        activePro = classes.activePro + " ";
        listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [" " + classes[color]]: true
        });
      } else {
        listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [" " + classes[color]]: activeRoute(prop.layout + prop.path)
        });
      }

      const whiteFontClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path) || prop.path === "/upgrade-to-pro"
      });
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: prop.layout + prop.path,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: activePro + classes.item,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
            button: true,
            className: classes.itemLink + listItemClasses,
            children: [typeof prop.icon === "string" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12___default.a, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, {
                [classes.itemIconRTL]: props.rtlActive
              }),
              children: prop.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(prop.icon, {
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemIcon, whiteFontClasses, {
                [classes.itemIconRTL]: props.rtlActive
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
              primary: props.rtlActive ? prop.rtlName : prop.name,
              className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.itemText, whiteFontClasses, {
                [classes.itemTextRTL]: props.rtlActive
              }),
              disableTypography: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);

  var brand = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.logo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://www.creative-tim.com?ref=njsmd-sidebar",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.logoLink, {
        [classes.logoLinkRTL]: props.rtlActive
      }),
      target: "_blank",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.logoImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: logo,
          alt: "logo",
          className: classes.img
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this), logoText]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
      mdUp: true,
      implementation: "css",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a, {
        variant: "temporary",
        anchor: props.rtlActive ? "left" : "right",
        open: props.open,
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, {
            [classes.drawerPaperRTL]: props.rtlActive
          })
        },
        onClose: props.handleDrawerToggle,
        ModalProps: {
          keepMounted: true // Better open performance on mobile.

        },
        children: [brand, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sidebarWrapper,
          children: [props.rtlActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_RTLNavbarLinks_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 32
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_AdminNavbarLinks_js__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 53
          }, this), links]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), image !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.background,
          style: {
            backgroundImage: "url(" + image + ")"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
      smDown: true,
      implementation: "css",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_7___default.a, {
        anchor: props.rtlActive ? "right" : "left",
        variant: "permanent",
        open: true,
        classes: {
          paper: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.drawerPaper, {
            [classes.drawerPaperRTL]: props.rtlActive
          })
        },
        children: [brand, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.sidebarWrapper,
          children: links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), image !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.background,
          style: {
            backgroundImage: "url(" + image + ")"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
Sidebar.propTypes = {
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  handleDrawerToggle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["white", "purple", "blue", "green", "orange", "red"]),
  logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  logoText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  routes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

/***/ }),

/***/ "./layouts/Admin.js":
/*!**************************!*\
  !*** ./layouts/Admin.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "perfect-scrollbar");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar/css/perfect-scrollbar.css */ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css");
/* harmony import */ var perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar_css_perfect_scrollbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Navbars/Navbar.js */ "./components/Navbars/Navbar.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Sidebar/Sidebar.js */ "./components/Sidebar/Sidebar.js");
/* harmony import */ var components_FixedPlugin_FixedPlugin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/FixedPlugin/FixedPlugin.js */ "./components/FixedPlugin/FixedPlugin.js");
/* harmony import */ var routes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! routes.js */ "./routes.js");
/* harmony import */ var assets_jss_nextjs_material_dashboard_layouts_adminStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/nextjs-material-dashboard/layouts/adminStyle.js */ "./assets/jss/nextjs-material-dashboard/layouts/adminStyle.js");
/* harmony import */ var assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/sidebar-2.jpg */ "./assets/img/sidebar-2.jpg");
/* harmony import */ var assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/img/reactlogo.png */ "./assets/img/reactlogo.png");
/* harmony import */ var assets_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\layouts\\Admin.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


 // creates a beautiful scrollbar


 // @material-ui/core components

 // core components









let ps;
function Admin(_ref) {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  // used for checking current route
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // styles

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_nextjs_material_dashboard_layouts_adminStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const classes = useStyles(); // ref to help us initialize PerfectScrollbar on windows devices

  const mainPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef(); // states and functions

  const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(assets_img_sidebar_2_jpg__WEBPACK_IMPORTED_MODULE_12___default.a);
  const [color, setColor] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("white");
  const [fixedClasses, setFixedClasses] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  const handleImageClick = image => {
    setImage(image);
  };

  const handleColorClick = color => {
    setColor(color);
  };

  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return router.pathname !== "/admin/maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  }; // initialize and destroy the PerfectScrollbar plugin


  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("resize", resizeFunction); // Specify how to clean up after this effect:

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }

      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Sidebar_Sidebar_js__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
      routes: routes_js__WEBPACK_IMPORTED_MODULE_10__["default"],
      logoText: "Creative Tim",
      logo: assets_img_reactlogo_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      image: image,
      handleDrawerToggle: handleDrawerToggle,
      open: mobileOpen,
      color: color
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.mainPanel,
      ref: mainPanel,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_Navbar_js__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
        routes: routes_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        handleDrawerToggle: handleDrawerToggle
      }, rest), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this), getRoute() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.content,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.container,
          children: children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.map,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, this), getRoute() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 23
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_FixedPlugin_FixedPlugin_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        handleImageClick: handleImageClick,
        handleColorClick: handleColorClick,
        bgColor: color,
        bgImage: image,
        handleFixedClick: handleFixedClick,
        fixedClasses: fixedClasses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/perfect-scrollbar/css/perfect-scrollbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/admin/user-profile.js":
/*!*************************************!*\
  !*** ./pages/admin/user-profile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var layouts_Admin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/Admin.js */ "./layouts/Admin.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardAvatar_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/CardAvatar.js */ "./components/Card/CardAvatar.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Card/CardBody.js */ "./components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./components/Card/CardFooter.js");
/* harmony import */ var assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/faces/marc.jpg */ "./assets/img/faces/marc.jpg");
/* harmony import */ var assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\Users\\Willi\\OneDrive\\Documents\\GitHub\\IoTAdminPortal\\pages\\admin\\user-profile.js";
 // @material-ui/core components


 // layout for this page

 // core components











const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile() {
  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(styles);
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        xs: 12,
        sm: 12,
        md: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
            color: "primary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitleWhite,
              children: "Edit Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.cardCategoryWhite,
              children: "Complete your profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 5,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Company (disabled)",
                  id: "company-disabled",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    disabled: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 3,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Username",
                  id: "username",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Email address",
                  id: "email-address",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "First Name",
                  id: "first-name",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Last Name",
                  id: "last-name",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "City",
                  id: "city",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Country",
                  id: "country",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Postal Code",
                  id: "postal-code",
                  formControlProps: {
                    fullWidth: true
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
                xs: 12,
                sm: 12,
                md: 12,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  style: {
                    color: "#AAAAAA"
                  },
                  children: "About me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  labelText: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
                  id: "about-me",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    multiline: true,
                    rows: 5
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "primary",
              children: "Update Profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
          profile: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardAvatar_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            profile: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#pablo",
              onClick: e => e.preventDefault(),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: assets_img_faces_marc_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: "..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            profile: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
              className: classes.cardCategory,
              children: "CEO / CO-FOUNDER"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              className: classes.cardTitle,
              children: "Alec Thompson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: classes.description,
              children: ["Don", "'", "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "primary",
              round: true,
              children: "Follow"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

UserProfile.layout = layouts_Admin_js__WEBPACK_IMPORTED_MODULE_4__["default"];
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Person */ "@material-ui/icons/Person");
/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ "@material-ui/icons/LibraryBooks");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/BubbleChart */ "@material-ui/icons/BubbleChart");
/* harmony import */ var _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Unarchive */ "@material-ui/icons/Unarchive");
/* harmony import */ var _material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Language */ "@material-ui/icons/Language");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_7__);
/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons








const dashboardRoutes = [{
  path: "/dashboard",
  name: "Dashboard",
  rtlName: "لوحة القيادة",
  icon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_0___default.a,
  layout: "/admin"
}, {
  path: "/user-profile",
  name: "User Profile",
  rtlName: "ملف تعريفي للمستخدم",
  icon: _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_1___default.a,
  layout: "/admin"
}, {
  path: "/table-list",
  name: "Table List",
  rtlName: "قائمة الجدول",
  icon: "content_paste",
  layout: "/admin"
}, {
  path: "/typography",
  name: "Typography",
  rtlName: "طباعة",
  icon: _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_2___default.a,
  layout: "/admin"
}, {
  path: "/icons",
  name: "Icons",
  rtlName: "الرموز",
  icon: _material_ui_icons_BubbleChart__WEBPACK_IMPORTED_MODULE_3___default.a,
  layout: "/admin"
}, {
  path: "/maps",
  name: "Maps",
  rtlName: "خرائط",
  icon: _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_4___default.a,
  layout: "/admin"
}, {
  path: "/notifications",
  name: "Notifications",
  rtlName: "إخطارات",
  icon: _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_5___default.a,
  layout: "/admin"
}, {
  path: "/rtl-page",
  name: "RTL Support",
  rtlName: "پشتیبانی از راست به چپ",
  icon: _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_7___default.a,
  layout: "/rtl"
}, {
  path: "/upgrade-to-pro",
  name: "Upgrade To PRO",
  rtlName: "التطور للاحترافية",
  icon: _material_ui_icons_Unarchive__WEBPACK_IMPORTED_MODULE_6___default.a,
  layout: "/admin"
}];
/* harmony default export */ __webpack_exports__["default"] = (dashboardRoutes);

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/BubbleChart":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BubbleChart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BubbleChart");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Language":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Language" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "@material-ui/icons/LibraryBooks":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LibraryBooks" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Person");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/Unarchive":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Unarchive" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Unarchive");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "perfect-scrollbar":
/*!************************************!*\
  !*** external "perfect-scrollbar" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("perfect-scrollbar");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL2ZhY2VzL21hcmMuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvcmVhY3Rsb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL3NpZGViYXItMS5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9zaWRlYmFyLTIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvc2lkZWJhci0zLmpwZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nL3NpZGViYXItNC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRBdmF0YXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkQm9keVN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkSGVhZGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvY2FyZFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvZm9vdGVyU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyTGlua3NTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9ydGxIZWFkZXJMaW5rc1N0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL3NpZGViYXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvZHJvcGRvd25TdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvbGF5b3V0cy9hZG1pblN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQXZhdGFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZC9DYXJkQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEZvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaXhlZFBsdWdpbi9GaXhlZFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9va3MvdXNlV2luZG93U2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhcnMvQWRtaW5OYXZiYXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhcnMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2YmFycy9SVExOYXZiYXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL0FkbWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vdXNlci1wcm9maWxlLmpzIiwid2VicGFjazovLy8uL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0J1YmJsZUNoYXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25PblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9VbmFyY2hpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZXJmZWN0LXNjcm9sbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGV4VG9SZ2IiLCJpbnB1dCIsInJlcGxhY2UiLCJoZXhSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0Iiwic2Vjb25kIiwibGFzdCIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJkcmF3ZXJXaWR0aCIsInRyYW5zaXRpb24iLCJjb250YWluZXIiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImRlZmF1bHRGb250IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwicHJpbWFyeUNvbG9yIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyQ29sb3IiLCJzdWNjZXNzQ29sb3IiLCJpbmZvQ29sb3IiLCJyb3NlQ29sb3IiLCJncmF5Q29sb3IiLCJibGFja0NvbG9yIiwid2hpdGVDb2xvciIsImJveFNoYWRvdyIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93IiwiZGFya0JveFNoYWRvdyIsIndhcm5pbmdDYXJkSGVhZGVyIiwiYmFja2dyb3VuZCIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImRhcmtDYXJkSGVhZGVyIiwiY2FyZEFjdGlvbnMiLCJtYXJnaW4iLCJwYWRkaW5nVG9wIiwiYm9yZGVyVG9wIiwiaGVpZ2h0IiwiY2FyZEhlYWRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwid2lkdGgiLCJjb2xvciIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWluSGVpZ2h0IiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwidG9wIiwidHJhbnNmb3JtIiwibGVmdCIsIndoaXRlIiwicm9zZSIsInByaW1hcnkiLCJpbmZvIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJzaW1wbGUiLCJ0cmFuc3BhcmVudCIsImRpc2FibGVkIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJsZyIsInNtIiwicm91bmQiLCJibG9jayIsImxpbmsiLCJqdXN0SWNvbiIsImNhcmRBdmF0YXJTdHlsZSIsImNhcmRBdmF0YXIiLCJjYXJkQXZhdGFyUHJvZmlsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJjYXJkQXZhdGFyUGxhaW4iLCJjYXJkQm9keVN0eWxlIiwiY2FyZEJvZHkiLCJmbGV4IiwiV2Via2l0Qm94RmxleCIsImNhcmRCb2R5UGxhaW4iLCJjYXJkQm9keVByb2ZpbGUiLCJjYXJkRm9vdGVyU3R5bGUiLCJjYXJkRm9vdGVyIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY2FyZEZvb3RlclByb2ZpbGUiLCJjYXJkRm9vdGVyUGxhaW4iLCJjYXJkRm9vdGVyU3RhdHMiLCJjYXJkRm9vdGVyQ2hhcnQiLCJjYXJkSGVhZGVyU3R5bGUiLCJib3JkZXJCb3R0b20iLCJ6SW5kZXgiLCJjYXJkSGVhZGVyUGxhaW4iLCJjYXJkSGVhZGVyU3RhdHMiLCJjYXJkSGVhZGVySWNvbiIsImNhcmRTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJ3b3JkV3JhcCIsImNhcmRQbGFpbiIsImNhcmRQcm9maWxlIiwiY2FyZENoYXJ0IiwiY3VzdG9tSW5wdXRTdHlsZSIsInVuZGVybGluZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJ1bmRlcmxpbmVFcnJvciIsInVuZGVybGluZVN1Y2Nlc3MiLCJsYWJlbFJvb3QiLCJsYWJlbFJvb3RFcnJvciIsImxhYmVsUm9vdFN1Y2Nlc3MiLCJmZWVkYmFjayIsInJpZ2h0IiwiZm9ybUNvbnRyb2wiLCJwYWRkaW5nQm90dG9tIiwiZm9vdGVyU3R5bGUiLCJmbG9hdCIsImZvb3RlciIsImJvdHRvbSIsImEiLCJsaXN0IiwiaW5saW5lQmxvY2siLCJoZWFkZXJMaW5rc1N0eWxlIiwidGhlbWUiLCJkcm9wZG93blN0eWxlIiwic2VhcmNoIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibGlua1RleHQiLCJidXR0b25MaW5rIiwic2VhcmNoQnV0dG9uIiwic2VhcmNoSWNvbiIsIm5vdGlmaWNhdGlvbnMiLCJ1cCIsIm1hbmFnZXIiLCJzZWFyY2hXcmFwcGVyIiwiaGVhZGVyU3R5bGUiLCJhcHBCYXIiLCJhcHBSZXNwb25zaXZlIiwic2lkZWJhclN0eWxlIiwiZHJhd2VyUGFwZXIiLCJ2aXNpYmlsaXR5Iiwib3ZlcmZsb3dZIiwiZHJhd2VyUGFwZXJSVEwiLCJsb2dvIiwiY29udGVudCIsImxvZ29MaW5rIiwibG9nb0xpbmtSVEwiLCJsb2dvSW1hZ2UiLCJpbWciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImxpc3RTdHlsZSIsIml0ZW0iLCJpdGVtTGluayIsIml0ZW1JY29uIiwiaXRlbUljb25SVEwiLCJpdGVtVGV4dCIsIml0ZW1UZXh0UlRMIiwid2hpdGVGb250IiwicHVycGxlIiwiYmx1ZSIsImdyZWVuIiwib3JhbmdlIiwicmVkIiwic2lkZWJhcldyYXBwZXIiLCJvdmVyZmxvd1Njcm9sbGluZyIsImFjdGl2ZVBybyIsImxpbmtzIiwicG9wcGVyQ2xvc2UiLCJwb3BwZXJSZXNwb25zaXZlIiwiV2Via2l0Qm94U2hhZG93IiwicG9wcGVyTmF2IiwiZHJvcGRvd24iLCJXZWJraXRCYWNrZ3JvdW5kQ2xpcCIsImJhY2tncm91bmRDbGlwIiwiZHJvcGRvd25JdGVtIiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsIk1zVHJhbnNpdGlvbiIsImNsZWFyIiwiYXBwU3R5bGUiLCJ3cmFwcGVyIiwibWFpblBhbmVsIiwibWFwIiwiQ2FyZCIsInByb3BzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsImNsYXNzZXMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInBsYWluIiwicHJvZmlsZSIsImNoYXJ0IiwicmVzdCIsImNhcmRDbGFzc2VzIiwiY2xhc3NOYW1lcyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJub2RlIiwiQ2FyZEF2YXRhciIsImNhcmRBdmF0YXJDbGFzc2VzIiwiaXNSZXF1aXJlZCIsIkNhcmRCb2R5IiwiY2FyZEJvZHlDbGFzc2VzIiwiQ2FyZEZvb3RlciIsInN0YXRzIiwiY2FyZEZvb3RlckNsYXNzZXMiLCJDYXJkSGVhZGVyIiwiaWNvbiIsImNhcmRIZWFkZXJDbGFzc2VzIiwib25lT2YiLCJSZWd1bGFyQnV0dG9uIiwic2l6ZSIsIm11aUNsYXNzZXMiLCJidG5DbGFzc2VzIiwicm9vdCIsIm9iamVjdCIsIkN1c3RvbUlucHV0IiwiZm9ybUNvbnRyb2xQcm9wcyIsImxhYmVsVGV4dCIsImlkIiwibGFiZWxQcm9wcyIsImlucHV0UHJvcHMiLCJlcnJvciIsImxhYmVsQ2xhc3NlcyIsInVuZGVybGluZUNsYXNzZXMiLCJGaXhlZFBsdWdpbiIsInNldENsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwiYmdfY2hlY2tlZCIsInNldEJnX2NoZWNrZWQiLCJiZ0ltYWdlIiwic2V0QmdJbWFnZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRml4ZWRDbGljayIsImNsYXNzbmFtZXMiLCJydGxBY3RpdmUiLCJmaXhlZENsYXNzZXMiLCJiZ0NvbG9yIiwiaGFuZGxlQ29sb3JDbGljayIsImltYWdpbmUxIiwiaGFuZGxlSW1hZ2VDbGljayIsImltYWdpbmUyIiwiaW1hZ2luZTMiLCJpbWFnaW5lNCIsImZ1bmMiLCJGb290ZXIiLCJEYXRlIiwiZ2V0WWVhciIsImdyaWQiLCJHcmlkQ29udGFpbmVyIiwiR3JpZEl0ZW0iLCJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFkbWluTmF2YmFyTGlua3MiLCJvcGVuTm90aWZpY2F0aW9uIiwic2V0T3Blbk5vdGlmaWNhdGlvbiIsIm9wZW5Qcm9maWxlIiwic2V0T3BlblByb2ZpbGUiLCJoYW5kbGVDbGlja05vdGlmaWNhdGlvbiIsImV2ZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2VOb3RpZmljYXRpb24iLCJoYW5kbGVDbGlja1Byb2ZpbGUiLCJoYW5kbGVDbG9zZVByb2ZpbGUiLCJwbGFjZWhvbGRlciIsImljb25zIiwiQm9vbGVhbiIsIlRyYW5zaXRpb25Qcm9wcyIsInBsYWNlbWVudCIsInRyYW5zZm9ybU9yaWdpbiIsIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsIm1ha2VCcmFuZCIsIm5hbWUiLCJyb3V0ZXMiLCJwcm9wIiwicm91dGUiLCJpbmRleE9mIiwibGF5b3V0IiwicGF0aCIsInJ0bE5hbWUiLCJhcHBCYXJDbGFzc2VzIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwiYXJyYXlPZiIsIlJUTE5hdmJhckxpbmtzIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVDbG9zZSIsIlNpZGViYXIiLCJhY3RpdmVSb3V0ZSIsInJvdXRlTmFtZSIsImltYWdlIiwibG9nb1RleHQiLCJrZXkiLCJsaXN0SXRlbUNsYXNzZXMiLCJ3aGl0ZUZvbnRDbGFzc2VzIiwiYnJhbmQiLCJwYXBlciIsImtlZXBNb3VudGVkIiwiYmFja2dyb3VuZEltYWdlIiwicHMiLCJBZG1pbiIsImNyZWF0ZVJlZiIsInNldEltYWdlIiwic2V0Q29sb3IiLCJzZXRGaXhlZENsYXNzZXMiLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImdldFJvdXRlIiwicGF0aG5hbWUiLCJyZXNpemVGdW5jdGlvbiIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwiUGVyZmVjdFNjcm9sbGJhciIsImN1cnJlbnQiLCJzdXBwcmVzc1Njcm9sbFgiLCJzdXBwcmVzc1Njcm9sbFkiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImNsZWFudXAiLCJkZXN0cm95IiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJjb25zb2xlIiwicCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0Iiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwidmFsdWUiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwidmFsaWRhdGUiLCJwYXJzZWREZXN0aW5hdGlvbiIsImhhZExvY2FsZSIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJzdHJPckFycmF5IiwiY29tcGlsZU5vblBhdGgiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwiZnNQYXRobmFtZSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY2FyZENhdGVnb3J5V2hpdGUiLCJjYXJkVGl0bGVXaGl0ZSIsIlVzZXJQcm9maWxlIiwiZnVsbFdpZHRoIiwibXVsdGlsaW5lIiwicm93cyIsInByZXZlbnREZWZhdWx0IiwiYXZhdGFyIiwiY2FyZENhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJkYXNoYm9hcmRSb3V0ZXMiLCJEYXNoYm9hcmQiLCJQZXJzb24iLCJMaWJyYXJ5Qm9va3MiLCJCdWJibGVDaGFydCIsIkxvY2F0aW9uT24iLCJOb3RpZmljYXRpb25zIiwiTGFuZ3VhZ2UiLCJVbmFyY2hpdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJC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RUFBRSxpQkFEUjtBQUVFTixNQUFJLEVBQUUsZ0JBRlI7QUFHRU8sU0FBTyxFQUFFLG1CQUhYO0FBSUVyRixNQUFJLEVBQUU2ZixtRUFKUjtBQU1FMWEsUUFBTSxFQUFFO0FBTlYsQ0FqRXNCLENBQXhCO0FBMkVla2EsOEVBQWYsRTs7Ozs7Ozs7Ozs7QUN0R0EscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvYWRtaW4vdXNlci1wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hZG1pbi91c2VyLXByb2ZpbGUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21hcmMtODg4MGE2NWM1N2Q3ZjAzMTU3OTMzNWJlMTUzZjY0YTAuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVUFBQUFEaUNBTUFBQUFJN2U3SkFBQUMvVkJNVkVVQUFBQmgydnNBLy8rQS8vOWgydnRoMnZ1QXYvOVYxZjloMnZ0Vi8vOXQyLzlnMi94aDJ2dGkydmhoMnZ0aDJ2dGgydnRnMi90aDJ2dGgydnRmM1BwaDJ2dG01djlWNC85ZzJmeGcyZnhkMGY5aDJ2dGszdjllMmY5bTJmOWkyUDlnMy85ZDNQOWkyZnRoMnZ0aDJ2dGgyL3hpMnZ0aDJ2dGkyL3RiMi85aDIvdGgydnRpMnZ0ZzIveGkydnRtM2Y5cTFmOWgydnRmMi9oZzJ2dGgyL3hnMnZwaDJ2dGgyZnRoMnZ0aTIveGcxL2RoMmZwaDIvdGgydnhoMnZ0aTIvdGgydnRoMi9wajIvcGczLzloMi90ZzJ2dGcyZnRpMmZ4aTJmdGgydnRpMnZwaTIvdGcyL3hoMnZ4aDJ2dGgydnRqMWY5ZjIvbGgydnRoMmZ0ajF2OWgydnRpMnZ0ZTEvaGgydnRqM1BsaDIveGgydnRpMnZwaDJ2eGkyL3RoMnZwaDIveGgydnRoMnZ0ZzJmbGcyZnhlMlBsYTRmOWkzUHRoMnZ0aDJ2dGgydnBoMnZ0bXpQOWgydnRnMnZ4ZjJmdGgydnhnMS9saDIveGgydnRnMnZ0aDJ2cGgydnRnMnZ0ZzJmcGcydnhoMnZwaDJ2dGgydnRoMnZ0ajJ2eGgydnhoMnZ0aDJ2dGgydnRoMi9waDIvdGsydmxpMmZ4ZzJ2dGcyL3BoMnZ0aDJmdGkyUHBoMnZwaTJmcGgydnhnMmZwbTF2OWgyL3RoMnZwazIvOWgydnRoMmZwaDJ2dGgydnRrMlBkaDJ2dGgydnRnMnZ0aDNQOWgyZnBpMnZ0ajNQaGczLzloMnZ0ajJ2dGkyL3hnMnZ4aDIvcGcydnBoMnZwaDIvcGgyZnRpMlA5aTJmcGgyL3RoMnZwaTIvdGkyL3BoMnZwZzJmdGgydnRlMS85aTJQaGkyZnRpMi90aDJ2dGcyZnRpMi90aDIvcGgydnRoMmZ4aDJ2eGgydnRpMnZwaDJmeGoyZnBnMi9wZzJmeGcydnhoMmZwZzJmdGgyZnRoMnZ4aDJmdGkyL3RoMnZ0aDJ2dGcydnhnMnZ0ZzIvcGgyL2xpMnZ0aDJmdGgyLzlpMmZ4aDJ2dGkydnBnMi90aTJ2dGkyZnhoMi90ZzJ2dGgzUHRpMi9waDJ2cGcydnRnMnZ0ZzJ2dGgyL3RoMnZ4ZzIveGkyZnBnMnZwaTJ2eGkyL3hnM1B0ZTNmOWgyUHRoMi90ZzNmaGkyZnRpMi94aDJ2dGgydnRmMlB0ZzJ2cGkydnhoMmZwaDJ2dGgydnhoMnZ0aDJ2dGgydnRnMi90aTJ2dGgydnRoMnZ0SkRlY0FBQUFBL25SU1RsTUEvZ0VDL2Z3RUJ2VURCMVh6SXZUNCszZnQrVFAyQ2dsS1VBdUxGeHNVRFFnV1BQZXhUNGpxeEE3UzhjeE5SQThNK2lQUmsyL2p4Y2FhSU9ETDNaSFo4R2t4RUxhc1BWNkF6bWF2WFo3V2tCSXIxZWNmOHU0bXV5eFU2YWZjamFaYzErOG9XQzRSUWNxNFllUUZzOTVEbVMyYjY3VGl1dVkxbjZXdGhNMUxsc1BBNkhHOUtWSEphdXkrTkdlaW5XVVpSK0VjaWFsMjVTR3Vzc0VkWkhVa0dOTStXMXFoTUtBeWpob3ZqRGM1Y0c2SDJCTW50MGFEZW5pb3YxZFoxR2hmTmppY2wyeHllWmlCaFh2Q1VvSmlLcXF3RlpYYVlIOTlTWDZQT21QZlJZcTVQMHlVYTZSVFRrZ2VRb1lsYzFaOGREdHRrcU8xMjgvSHlFQzgwSktjVjQ4QUFCSHFTVVJCVkhoZTdNQXhFWUFnRkFEUVAvM0YxV015QXdISVlBRVNPQlBDRHBTaWt5VWN2UE85K0JJQUFBQUFBQUFBQUlEUytqNk9lRUhPYXp0WHZUTis0eUh2UHFPbEtOWTFBTDg5YVFkMjN1d0lPd1kyc01rNTU1eHpScElreVRtSlJJbUNnSXFpSUJ3UlVEQ0FnREhuY0R3S3htTTQ1bndNUjA4TzkxMzMzdFBWTTEwejA5TTlIcTlyZHQzbi8xNjlwbGJYcnVydis2cSt3c3Q2ZHRSSWttV3ozdjNpQ0g2Ni9OKy9OU2FKdXRRMjZjbFFIM0JEMjB4S2h2MTZCSDRLM3hVUGxsSGlYVDBhcW5OL1Y4WVEyazJIOGhHbGFZUEhNMVRaczI0b3JXZ013MXZ5aCs2SXd2VHJQQXp2MVdJb2JNaFdXcW82VXdLSFZwWnJ0TFFqRzhyeWJXWWtLYjh1aGdNRmt6UkdNc0VGVmQxT0d4M3pZQ2Z4Z1NUYStBNktlczlEVzh1dlJFUzViOUJXVmpNb3lkZWNmbE0rL0N6dnE5NzdCODVuc05UMEJGaXF0NHJCTXZxZi9tVGxpT2xYUERDRmZqMmdwS00wVEozc2d2RDFLenMweXVvMmc0V1AzNmRzL0IyM3VXRVlONHFHdTZBZzE2OG9iSjhPcytTWHI2Y2txWjhMWVNUVzhsQXllOHRjbUhYclFxRWNDdnFBZ3JZWFFSSS9hMFhKMGlFSU1ibzVKVDN1UkxBdktHanRvSjVqRkZZaFZHTFhPVFNiM3cxQnZ1eENzODFQSW94eUN2ZERPZGtqcWZNa0k1d21kVEpwa3ZVNHpOd3ZhelNaOHozQ3VwUENNQ2dubDhJOFdQajJQTTBXeHNHdjNxczBTZXRVRHhabVVWQnZEdDlCSVJlV0hzbWdTWnNTQ05NbTB1Uy9Gc0hTWlJSK0I5WDBwUzRsRHRZS2x0TmtvZ2hPL1dnZVYwK3RSRmlyclZIM09SU1RtRWJkUjRqRTFTK0ZBUm05QUNBdml3SExaaUlpWTY5MER4UnpuTUlEaU96Q0lBWmtiUUdlOFRLZ3ZEc2lHMHlkTnh0cTZVM2hGdGdvNnNrQTcrazZEUEM4NDRLTlJ5ZzhBYlhjUitFSTdMaGFObVZZVlhtd3RaUENwVkRMS3VxU1hMQzNZQW5EZVBSYjJPdE80V2FvWlROMWY0TVR5ZmN3eEk3R2NNSVkrejlCTFk5Rzk1bGYySVpCVnNkRnQxMjZEbXBaUnQwdU9KUDRJQ1dkM0hCbWc2SXh3VkhVcllORDdoWTBPUTJuYnFTdUx0U1NSdDIxY01oMWdpYVh3S25QcVdzT3RXalUvUUVPWFVMSi9YRG9lZXArOWY5OEFIL05JQzNoVEZ2RkIvQUZPSElWZzNrZWhpT3JGQjFBTDNWMTRFU2VseUV5WjhLSjFZcitEK3hDM2J0d1lHVThEVjc2amJvU0RseWtyalhVMG9xNjEyRnZ4SEFhUExlZW9kLzhraWkyTVI5QkxWT29leEMyaXByVGJ4TmNiZW5YSVIrMjJsRFhFNnFRZjljRzJQRjlSTDl2QUNRY29GOVBOK3hNcEc0MzFOTGZjYVM0RS8xMnVRQWdiam45K3NCT0NuVXZRaTFQVTljRk5pYlQ3MGFmeU1tdHBVR3JnY2l5S1p5R1d2cFF5RUZFTzh0b1dKOERvZlpFR2tZT1JVVHRLRHdNdFZ4TjRSd2lLVmxHUS9zUytGMm9vdUdOR1loa0pvVlNxR1VCaFM4UndkeWJhSWp2QnBOY0x3MDkzSTQrWVFxZ2xuYU9RdTNYMHFCZENzbk45UHV0a3hoRW1RdHFTY2lrN2lsWWU5dER3K1VJc3BnR3p3ZXdOay9aNHBqTzlvSE9na29hNXJrUkpMRTFEY09QMkQ5bUhsU3pocnJ0c0pKd0V3MkQ2alYrTFhsb3pmK3hjMmZONmNuSkpUTzZvL1krR25Za3dFSmlVeWxvb1pJWEtOeUE4SnBjUzhmcU5MRkxDMCtHYW1wUXFBR1piM1RGM1lQNzk4MWdWTGF2UGZCdXk0YmYrcXdXNGVOUXpaVU15WXI0RmcwNGMyQktVLzRITWdldE9UTjVrUStHaGRTbEpVSTFDU09wMnd3QWMrL2MxclpER1g4bXFRMFdmL1prSEFCMFVER2NLanhFM2RRaFY3eTRJWjQvdTdLNkgrWmRreXB0bHRSeUxRV04vL2V1Z25wK3cxOVFONmpHM1dzZ2YwR3YzNUlBaGJobnJodE9aOUlxTy8vai9LVFhYMHpmMUsvZm16VnFWRFJxOUdXTkdyMzc5VHVkZmwrTFA4OTdxZjZ5a1hSbTQvTUwzRkREdEQ3ejZkUVoyS3BGcDY3dmRCdXF2ZnhEc3hoSmZJTmorNC9STUtVWXRuTHVvZUdwOUYxcnN4aEozNnVLVUoxZGFOR0ZsdHBmOTF4Rk16ZHd0cEtDOXk0NGNKZVh3b3J1Z1B0dzN2MFhsOUhTeUhXTFVGMlZ6dE1ZWGxMZFRqV09RQmhJUXkwSVRpZngweEQyTk93emJ5b3QxRzNvUXZYanF0aEtLd1BjQ1BoWW85QTVCNExUU2V3cFJZQXZuVmI2MW5Dam1zbHRRQ3Z5bXhZM1JSNk42Q2J4c0RnRVRLQzE1bmt1VkNOM3RtYW8rSjVlNmlZaTRBRWFCa2QvOEk1TWgxOWlGWFVaRitNWnFrTXZWQmNGdXpRR3kxcnpjRDQyVURnRlEwRVNoV1g1Y0N6N2ZRcEoxNFNlQnoyRy9JZlhaREhFZFNOUUhTVGNuY0lnMmtPVGl3QmdVMmlCd1NRYXZrQVVHZ1pHSlRScjhoc0FhSEowaDhZZ1dlayt4THloZjJlUWpaM0dCcWZtNmtQNFVhT3dIRkVwcDJFdmRPN2gxS1VXUVhjd2ZSK0ROTitKMk9acW1VcFptM0Z6NFZlZndtSHhvL3RTU0IyTnFJeUlwekJNdkZXOUtDeUZueS92SmNxYTduY2hoZzBwcDhSVFhocit4TngrcVJBbTJsb2dlZkhwaW45N2w4TFY4b3A5d0VQSjdCTEVyTEh6YWVZOU1RMnlidkljVG55ZlF2dHNoSENmK3VQVDUxKzZxY2ZyMjhhNkVDSnVFSVhLeGdDUXNJSzZ0QkxJemczMDBxeFZOOFNvZTd2UWJNd3A2eE5mdkEwQW5xVWhEOEVLdm1sRnYvZGZybzFndDJnVVBnU0FyMmhkbWpydElzMVM4aENUam5wcDBtRW13bmlIUWljQWpiZFRtSTBnM2YrVVNVbFdyU1lJTW9GQ2FyS3B1SnlYSVl5UHQ5TEVjeGxpMEtWcERJaTN1QUdybVViZDlrVGdEQVh2V01nV3JHQ0lmVDlDMWk2VndwK0JldkhVcFhhM3VFdWdpZ0hhTnNTY0x6d00rTXZYdHZlU2JFRkJQQzNLY1Z0NkdFYmFJYXZ2RWM4aVhFYWhQeXdjWE1vQTdSSEVtQ2ZpNlpmeU9DemRUYUVjVDFHSUw0RGtmb2FudFlSa1JnYUZjanprb0xCeVFBcjl5bjVFVENrWlRyODNGc0ZhN2FiVU5mMm4xMklMOHdxdGVHcEE4aXdObDNxb0cxVU1hMk03MDYveUpHTEpxL1M3c1RFaU9VQ2hpa0psUFpoTkw2T2xrYU5obGppZlFpYUZUeEZKdmY3ME8rOUM3QmhBdnhNSmlPZ0tCdnNqek54YkdjRkxMbm5oWWpDYkxJajdLZnBkalppUjA0cUd0bTVFbGpDSHNyL0d3ZXgzakVpZXhLNVpsUFdGRGRjNkdqWTJRYXk0V1RyWlllTnl5bzdLNHp1UkVUV1hIN0NYc21kZ3g3VmJxaFdPQ2U3MkZPcG53MWF5aDJadkpBU05pSTI3SUpGalAxbERZS3Q0TFlVVnZsaTdtekxwSEJ6NEM4M2VoR1FWYlhTQzVHMmFEWVFEemJwUWFJalk4Q21GQitERVZ6VHA2SU5rSDIwOENwbTA1dFNFRTVzb0xJNnhtKzJtNXNNSlYyY0dISUxrQ08xb1JkYXJlbXM0VXJ5RXVrR0lDUW5lS0l2eS9raS85bkdRZkV4Yk5TRnhkYURmclZGT0dTMEhzYUJRam9QWUs2cWk0VEhJeHRIV1Y1YnBrZUZ4Y09ZUkNnY1JDdzVUdUFJT25hRFFKUkd5QWJUMUJXU3U4YzZYRU9IM0ZLWWpGdFNPOW1pQnV5TU52U0Q3bnJaeUlidVhodkdKY09iNzJMcXExcWRSMXlMcW5DVEhRTGFBdHU2RXJDNzllc09aZHlua0l5WU1vNjR5RVk0c0o2MWV3WU8wTlFPU1JneFlDMGQ4YzZpYmlOalFWc3FQMlRxbk1lQWpTRndiYWFNalpEZlI1Szdvemk3dlFteklvN0RrSkJ4b1FiTW5JWmxBRzIwaCtTZk5Kc0dCUGVOajdaclF1ZU1wclBmQlZwTXFtdldJc3BaL0FTUTdhSlpaRzdaOEd5aGtGQ05HdkJqTk5YV3ZVUFlFek9LdXQ1bkJDVEM3aGJLYm95blBySVZZMFQyRGhoZGdwelZsc3lGNWxoRWRnbVFEWmZlNFlPTWRHcnFjUmN5NG0zNTFFTmswQnZzQWtBc3VJNmp2ZzlrbkRGYnFQQnFaanRpUnNKNStiUk1SeVljVU5BcC9jOHV6MGt0TG1Udmx4ejVLb1l6Q0trUVN0NDUrLy9BaGhpUlgwVy9yUVZpYnU1SENEelE4RHNsenRQU01SZjVPMitLaExxVWVyRjNUaG40cG94RlRjcjMwcTd3WGxyNmswQUhyS1N6TGdlUnB1OXBxSVhzT2hldXczRUVmakViajZlZXBRSXo1akFIYTR1NndNQ0dRaSt0RnczT1F1TzVnV0MvQTRsVnRlaGkzVXRnTUM0MFhhZ3o0QVRGblAwMkdqME5ZK1NuVU5YME42RUZoWkczSUJpUXhSSmR4a0JWMm9kQUN5SmxLbmFjQVlWMnhqQ1oxRUlQU2FYYmpsUkVqY2E4Q09PNnhUSWVQT0VDWk51R2tWZWNMSnRVMlYwamZqVENtOWFmWlc0aEpWemVsU2RyQ1BRaFJMaFdDNzZhUWRnckJhcTZPcDEvU2lla0lOalpOS2xrdnBiQVZJZlk4bjBZVDd6T0lVYjhmUmJPVXl3c2htNUZKWFVZaUFPeEpvdERhaFJCTkd0YnFNV3padm1GTDYrUm1JNFRySmdyaml3REE5UVoxV2pQSUN1OUxvZG5JWE1Tc1poMG9pVzl4US9pMkxNL2ozLzdBbjl4RWFrRHczdWF0OEJ2a0cxckVVMUwvU3NTd3VFczBTdEltMVVSQVR3cGlvNU96ajhLU3M0aEs0K0VVSnNhSktVMmhEUUpxVGtxajdPa2N4TFpHSFJta3dXT05vU3RPb201cVhFZ1NxUzJpMGltMHZOcVl3NTQ5eGlCM1hjc2dyVDVCek11KzNjc2c4YXRLWGRKaHJNOWg2RUhCOHlTaWNOd2JHb3VvUTZFZkFMaHZPUmJQSU5yQ3hxZ091bTFnaUZhZFNsMTQzclFHQ3lOUzVEaUJQWGtGeVR3WDJoZXlCekMwVDBlR2FGQ0s2bUxjZklacS8rRUs2ckthaE9zNjhDd2M2MGVHdHRkd3RhSXV0Vlo3aHByVDI0WHFJNjVySzFvckR4dSt5aG9OaDc2dW90Q3FTTW9WV0t2Y2xJUHFwYmlsOVJCMmhjbE1qVUpyTnh4eHphWmhDMHdxYUdYOC9VMVEvY3l0TVlzV1ZseHNXWm9JWVZlMGsvaDNOUHdGZ205bzc0WEROSWJYc1dVMnFpZlh2ZVZlV29sL3FkYlJib2tBU2taRk40a0xwbEpJT2dpZ3VOdmtPOVpuMFlxMmZJc2IxZGhCMFVEZGdyZnptdnNlSHN5b0p2RlNHcDcvL3VVMW5iMk1JT09TMGFqdTNLVUxrK2pVZDdEVm0wNTV4L1RPaGhLS0hsK2FTa2ZLSHVxL2FuQ2Z1OS9jMHFpMFpzMmh5Y2tuWjh6WWsveS8xOUgyYXJUbGxlOHUvM1Ixajc4bjBSSHZqbTJGVUVqam8vMzVDMnB6VlFsVTA0eS9vTWVnbmtmNEM5b045VnhDblRiejlJUjkvUGxwZzNhL01tMjdpazNSaFBYVS9SVUFDc2JWbWIyUlA1djJyNzcxeVZrQW1FMmR0d2lxY2FlRXRLVTZtZnZjNmdZaitSL0phTDM3aHdWRFFpczNlcW03aHV5SDdKb0YyMjVmMDJBSm8rTzV2dTdxYjY3dVZRaFpCWVZ0VUUwRmhRVUlLMy9vWWpxMjYzQWN3aXFnc0E3cWtPTisyZ3hZaU50S1EvdnB5YWRxcm16VXFHRU4zZHVOZHA2YU5veUdSN05oWlFWMTY2R2FTZFN0Z0tWMm8yam83N2F1eEdiS0JmdGU3cU9nbWc3VVBRUnJuMmpXSFcyZW9kL2pzTGFPd2xrb0pzTko5dTBTR3JSYkllbVZTY01xUjZXZUs2R1c3bzZxbU9mV3BTRkxHb0VibHRCUVB4OFJ2RTNoVXFqbE5nb1ZpT1RJSEJxdVB3bS9KczFweUdpR1NKSXAzQSsxTktTd0NCRTlVUmFtbDJ0Q2Z4cThleEdSejBQZDY2cDJOaXgwZm9QSzVrVG8vaFRGT1laSzZnNUFMYitsTHMwZFJYZlhDVzY1bnhXNXhnVWI5YWxyQTdXMG9HNDQ3UGpHVUJEblA3dlNyMEUrN0JoL1BSOXErWnk2djhGV3ZlYjBld2VvOE5JdzV4cm5EeG9GdGJ4SzNmTG9lcXl6Njh4VUdxb1d3ZDVnNnRLZ2xuOVJkMk9VWGY0OVNUU2s3WVVEZFNnVVF5bi9pS3AzZko3bkp6ZWFlcGxDSVpUU2dMcEpjT1F4aG5ncnV1V2V0ZFVjd0JOUlJyOFliWUJ2ditJRE9CQU8zVTdKZzI0NDh3T0ZJMURLTExsM2dEM1hDWnJNam91NkczNkptbzBoejhPcGhob0RyblZGbXoxbE5wUlNUbDFkT1BSbVU1b2RpNE16aXhYZEIvNlp1dnB3eFBVQ2c0eXBCMGNtVUpjQlZjaHJ3blk0NFZ2SUVMLzZHazYwcG00UTFMS0p3aERZT3p1R1ljeTVFdzVzcEc0TTFES093aE93ZGFvancwcHRDVnROS0F4VU5hUS9HWGFPeGpOZzZTWXZBd1lXdzhaeEN1OUFMVGxlaDgzUDVnNm15V0lmS3N6ajJhQ2QwMi9BUENobWtMUHU1OGwxR2FEMUFZQW54ak9ncWg4aXVraWhIUlN6bWpxdEJOWmNqOFV6b0tub20zTDRyelRwV1FocnJrcnF0cnVnbUVNVUJzQlM3YVUwcWRvTDRiWFdORm1SQzB0UFV1Z0oxWXl3dmF2WTNYc0pUVHBmZ0ordkRzM21XYzdQWStxV3QyR0tUY09GbFIxbzFyTUlabzluMFNUbHVUaUVVMWhHblhZRGxQTmJDZzhpakdzV2VtamlUWGRCMW0wK3pUcGY2a2FvTXhUcVFqM05OQXA3UTRmdjlWU2FWVFpDaUNGTEtSbDBhd0tDSE0razBCVUtPaytoOGpBazNaNU9wZVRHMmdqRGRWVVNKZmRzZWcxbUp5ZFNHRlVFQmQxQ3cvV2w4RHY3MlZyS1JoNkNoV1oxS2N2c1dWRVBoaWM3MG5BZmxMU0RCcy95Vzg4VjQ3V3hGYmYzOVRESSttUllTa2hQWlJEdnJGcHY1aDZmbnJ2dHZFWkRSaUdVZEdVbXpUSVp4dFRUQ1loazZHYmF1eHFLNmtNYm50MGxzRE91UFczOHl3VkZ1ZWN4b3JYdndZR2M5Q1JHMHY0MUtLdDdYMXFyTDdaMjlncHVUNkdsaldPaHNNWXYwY0tzQ2hlY0s3eDhLc043LzFzb3JmZ09EME9scnZrQVVhclhzZ0hEbURRRHFudHZBNE8wNlRvRVA4V0ZiL1pSMXVadHFBOTRyMFVyQ3RxZ3RyMUg0S2M3ZDluQXp0UTFyVjluNVgrM1o4Y0VBSUlBQU1ENHZMMUl3VWtBRzJnTlEvajVFNElNcFBIeXBZUWx2R0Nyc1RDTjBzNjhidlhaLzlpQ3UxL3BQWll3REFBQUFBQUFBQUFBQUQ1L1QxRjNVMUdpRndBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaWRlYmFyLTEtOGU5ZjBhM2M1NTc4YTIwNzMzZDViYWQwZTUxYzkxZmIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3NpZGViYXItMi0zMTA1MDljOTU1MTI4OTNkYzY2MWJkM2E2YjBkMmE1ZC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2lkZWJhci0zLTI1MDMxNjkwMTcwMTQwMzZjZjBkZDBkZDdjMmEyYjhhLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zaWRlYmFyLTQtZmM5Y2IwNTM4ZWI1YTRkZmQ2ZmJiMWJmNmRkNjE4OWIuanBnXCI7IiwiLyohXHJcblxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHA6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmRcclxuICogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyZWF0aXZldGltb2ZmaWNpYWwvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9ibG9iL21hc3Rlci9MSUNFTlNFLm1kKVxyXG5cclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4gKi9cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAvLyAvLyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gaGV4IGNvbG9yIHRvIHJnYiBjb2xvclxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5YzI3YjAgPT4gb3V0cHV0ID0gMTU2LCAzOSwgMTc2XHJcbi8vIC8vIC8vIEV4YW1wbGU6IGlucHV0ID0gOWMyN2IwID0+IG91dHB1dCA9IDE1NiwgMzksIDE3NlxyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9ICM5OTkgPT4gb3V0cHV0ID0gMTUzLCAxNTMsIDE1M1xyXG4vLyAvLyAvLyBFeGFtcGxlOiBpbnB1dCA9IDk5OSA9PiBvdXRwdXQgPSAxNTMsIDE1MywgMTUzXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGhleFRvUmdiID0gKGlucHV0KSA9PiB7XHJcbiAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBsZXQgaGV4UmVnZXggPSAvWzAtOUEtRmEtZl0vZztcclxuICBpZiAoIWhleFJlZ2V4LnRlc3QoaW5wdXQpIHx8IChpbnB1dC5sZW5ndGggIT09IDMgJiYgaW5wdXQubGVuZ3RoICE9PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yLlwiKTtcclxuICB9XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgbGV0IGZpcnN0ID0gaW5wdXRbMF07XHJcbiAgICBsZXQgc2Vjb25kID0gaW5wdXRbMV07XHJcbiAgICBsZXQgbGFzdCA9IGlucHV0WzJdO1xyXG4gICAgaW5wdXQgPSBmaXJzdCArIGZpcnN0ICsgc2Vjb25kICsgc2Vjb25kICsgbGFzdCArIGxhc3Q7XHJcbiAgfVxyXG4gIGlucHV0ID0gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICBsZXQgZmlyc3QgPSBpbnB1dFswXSArIGlucHV0WzFdO1xyXG4gIGxldCBzZWNvbmQgPSBpbnB1dFsyXSArIGlucHV0WzNdO1xyXG4gIGxldCBsYXN0ID0gaW5wdXRbNF0gKyBpbnB1dFs1XTtcclxuICByZXR1cm4gKFxyXG4gICAgcGFyc2VJbnQoZmlyc3QsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQoc2Vjb25kLCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KGxhc3QsIDE2KVxyXG4gICk7XHJcbn07XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gLy8gLy8gVmFyaWFibGVzIC0gU3R5bGVzIHRoYXQgYXJlIHVzZWQgb24gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcclxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XHJcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBbXCIjOWMyN2IwXCIsIFwiI2FiNDdiY1wiLCBcIiM4ZTI0YWFcIiwgXCIjYWYyY2M1XCJdO1xyXG5jb25zdCB3YXJuaW5nQ29sb3IgPSBbXCIjZmY5ODAwXCIsIFwiI2ZmYTcyNlwiLCBcIiNmYjhjMDBcIiwgXCIjZmZhMjFhXCJdO1xyXG5jb25zdCBkYW5nZXJDb2xvciA9IFtcIiNmNDQzMzZcIiwgXCIjZWY1MzUwXCIsIFwiI2U1MzkzNVwiLCBcIiNmNTVhNGVcIl07XHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFtcIiM0Y2FmNTBcIiwgXCIjNjZiYjZhXCIsIFwiIzQzYTA0N1wiLCBcIiM1Y2I4NjBcIl07XHJcbmNvbnN0IGluZm9Db2xvciA9IFtcIiMwMGFjYzFcIiwgXCIjMjZjNmRhXCIsIFwiIzAwYWNjMVwiLCBcIiMwMGQzZWVcIl07XHJcbmNvbnN0IHJvc2VDb2xvciA9IFtcIiNlOTFlNjNcIiwgXCIjZWM0MDdhXCIsIFwiI2Q4MWI2MFwiLCBcIiNlYjM1NzNcIl07XHJcbmNvbnN0IGdyYXlDb2xvciA9IFtcclxuICBcIiM5OTlcIixcclxuICBcIiM3NzdcIixcclxuICBcIiMzQzQ4NThcIixcclxuICBcIiNBQUFBQUFcIixcclxuICBcIiNEMkQyRDJcIixcclxuICBcIiNERERcIixcclxuICBcIiNiNGI0YjRcIixcclxuICBcIiM1NTU1NTVcIixcclxuICBcIiMzMzNcIixcclxuICBcIiNhOWFmYmJcIixcclxuICBcIiNlZWVcIixcclxuICBcIiNlN2U3ZTdcIixcclxuICBcIiMyMTIxMjFcIixcclxuICBcIiMyNjMyMzhcIixcclxuXTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFwiIzAwMFwiO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gXCIjRkZGXCI7XHJcblxyXG5jb25zdCBib3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCIsXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCIsXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiLFxyXG59O1xyXG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuXHJcbmNvbnN0IGRhcmtCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihncmF5Q29sb3JbMTJdKSArXHJcbiAgICBcIiwuNClcIixcclxufTtcclxuXHJcbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyB3YXJuaW5nQ29sb3JbMV0gKyBcIiwgXCIgKyB3YXJuaW5nQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi53YXJuaW5nQm94U2hhZG93LFxyXG59O1xyXG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgc3VjY2Vzc0NvbG9yWzFdICsgXCIsIFwiICsgc3VjY2Vzc0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcclxufTtcclxuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZGFuZ2VyQ29sb3JbMV0gKyBcIiwgXCIgKyBkYW5nZXJDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmRhbmdlckJveFNoYWRvdyxcclxufTtcclxuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGluZm9Db2xvclsxXSArIFwiLCBcIiArIGluZm9Db2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmluZm9Cb3hTaGFkb3csXHJcbn07XHJcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcmltYXJ5Q29sb3JbMV0gKyBcIiwgXCIgKyBwcmltYXJ5Q29sb3JbMl0gKyBcIilcIixcclxuICAuLi5wcmltYXJ5Qm94U2hhZG93LFxyXG59O1xyXG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcm9zZUNvbG9yWzFdICsgXCIsIFwiICsgcm9zZUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucm9zZUJveFNoYWRvdyxcclxufTtcclxuY29uc3QgZGFya0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGdyYXlDb2xvclsxM10gKyBcIiwgXCIgKyBncmF5Q29sb3JbMTJdICsgXCIpXCIsXHJcbiAgLi4uZGFya0JveFNoYWRvdyxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRBY3Rpb25zID0ge1xyXG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxyXG4gIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gIGJvcmRlclRvcDogXCIxcHggc29saWQgXCIgKyBncmF5Q29sb3JbMTBdLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgLi4uZGVmYXVsdEZvbnQsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyID0ge1xyXG4gIG1hcmdpbjogXCItMjBweCAxNXB4IDBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxNXB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkID0ge1xyXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxyXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgYmFja2dyb3VuZDogd2hpdGVDb2xvcixcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XHJcbiAgYm9yZGVyOiBcIjBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCIsXHJcbn07XHJcblxyXG5jb25zdCB0aXRsZSA9IHtcclxuICBjb2xvcjogZ3JheUNvbG9yWzJdLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgXCImIHNtYWxsXCI6IHtcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbMV0sXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhcmRUaXRsZSA9IHtcclxuICAuLi50aXRsZSxcclxuICBtYXJnaW5Ub3A6IFwiMFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcclxuICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIFwiJiBhXCI6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwLjc1cmVtXCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XHJcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCIsXHJcbn07XHJcblxyXG5jb25zdCBjYXJkTGluayA9IHtcclxuICBcIiYgKyAkY2FyZExpbmtcIjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGV4VG9SZ2IsXHJcbiAgLy92YXJpYWJsZXNcclxuICBkcmF3ZXJXaWR0aCxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGNvbnRhaW5lcixcclxuICBib3hTaGFkb3csXHJcbiAgY2FyZCxcclxuICBkZWZhdWx0Rm9udCxcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIGdyYXlDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgcHJpbWFyeUJveFNoYWRvdyxcclxuICBpbmZvQm94U2hhZG93LFxyXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXHJcbiAgd2FybmluZ0JveFNoYWRvdyxcclxuICBkYW5nZXJCb3hTaGFkb3csXHJcbiAgcm9zZUJveFNoYWRvdyxcclxuICBkYXJrQm94U2hhZG93LFxyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgZGFya0NhcmRIZWFkZXIsXHJcbiAgY2FyZEFjdGlvbnMsXHJcbiAgY2FyZEhlYWRlcixcclxuICBkZWZhdWx0Qm94U2hhZG93LFxyXG4gIHRpdGxlLFxyXG4gIGNhcmRUaXRsZSxcclxuICBjYXJkU3VidGl0bGUsXHJcbiAgY2FyZExpbmssXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgZ3JheUNvbG9yLFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIGhleFRvUmdiLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICAgIG1pbldpZHRoOiBcImF1dG9cIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHBhZGRpbmc6IFwiMTJweCAzMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxyXG4gICAgd2lsbENoYW5nZTogXCJib3gtc2hhZG93LCB0cmFuc2Zvcm1cIixcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgIFwiYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCAmLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIi0xZW1cIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIi0xZW1cIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxOHB4XCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiRqdXN0SWNvblwiOiB7XHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3aGl0ZToge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgY29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2ltcGxlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgICBcIiYkcm9zZVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiRwcmltYXJ5XCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGluZm9cIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGRhbmdlclwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkaXNhYmxlZDoge1xyXG4gICAgb3BhY2l0eTogXCIwLjY1XCIsXHJcbiAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGxnOiB7XHJcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCIsXHJcbiAgfSxcclxuICBzbToge1xyXG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIixcclxuICB9LFxyXG4gIHJvdW5kOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMzBweFwiLFxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGp1c3RJY29uOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcclxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcclxuICAgIHdpZHRoOiBcIjQxcHhcIixcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImJGxnXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIzMnB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiYkc21cIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIixcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTdweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxN3B4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcclxuIiwiaW1wb3J0IHsgaGV4VG9SZ2IsIGJsYWNrQ29sb3IgfSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBjYXJkQXZhdGFyU3R5bGUgPSB7XHJcbiAgY2FyZEF2YXRhcjoge1xyXG4gICAgXCImJGNhcmRBdmF0YXJQcm9maWxlIGltZ1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkQXZhdGFyUHJvZmlsZToge1xyXG4gICAgbWF4V2lkdGg6IFwiMTMwcHhcIixcclxuICAgIG1heEhlaWdodDogXCIxMzBweFwiLFxyXG4gICAgbWFyZ2luOiBcIi01MHB4IGF1dG8gMFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDE2cHggMzhweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICBcIiwgMC41NiksIDAgNHB4IDI1cHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgIFwiLCAwLjIpXCIsXHJcbiAgICBcIiYkY2FyZEF2YXRhclBsYWluXCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkQXZhdGFyUGxhaW46IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEF2YXRhclN0eWxlO1xyXG4iLCJjb25zdCBjYXJkQm9keVN0eWxlID0ge1xyXG4gIGNhcmRCb2R5OiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuOTM3NXJlbSAyMHB4XCIsXHJcbiAgICBmbGV4OiBcIjEgMSBhdXRvXCIsXHJcbiAgICBXZWJraXRCb3hGbGV4OiBcIjFcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgfSxcclxuICBjYXJkQm9keVBsYWluOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCI1cHhcIixcclxuICAgIHBhZGRpbmdSaWdodDogXCI1cHhcIixcclxuICB9LFxyXG4gIGNhcmRCb2R5UHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIjE1cHhcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEJvZHlTdHlsZTtcclxuIiwiaW1wb3J0IHsgZ3JheUNvbG9yIH0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgY2FyZEZvb3RlclN0eWxlID0ge1xyXG4gIGNhcmRGb290ZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMCAxNXB4IDEwcHhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgfSxcclxuICBjYXJkRm9vdGVyUHJvZmlsZToge1xyXG4gICAgbWFyZ2luVG9wOiBcIi0xNXB4XCIsXHJcbiAgfSxcclxuICBjYXJkRm9vdGVyUGxhaW46IHtcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjVweFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjVweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgfSxcclxuICBjYXJkRm9vdGVyU3RhdHM6IHtcclxuICAgIGJvcmRlclRvcDogXCIxcHggc29saWQgXCIgKyBncmF5Q29sb3JbMTBdLFxyXG4gICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB0b3A6IFwiNHB4XCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiBcIjNweFwiLFxyXG4gICAgICB3aWR0aDogXCIxNnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxNnB4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHRvcDogXCI0cHhcIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiM3B4XCIsXHJcbiAgICAgIG1hcmdpbkxlZnQ6IFwiM3B4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEZvb3RlckNoYXJ0OiB7XHJcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiICsgZ3JheUNvbG9yWzEwXSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEZvb3RlclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgZGFya0NhcmRIZWFkZXIsXHJcbiAgd2hpdGVDb2xvcixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyU3R5bGUgPSB7XHJcbiAgY2FyZEhlYWRlcjoge1xyXG4gICAgcGFkZGluZzogXCIwLjc1cmVtIDEuMjVyZW1cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXHJcbiAgICBib3JkZXJCb3R0b206IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgekluZGV4OiBcIjMgIWltcG9ydGFudFwiLFxyXG4gICAgXCImJGNhcmRIZWFkZXJQbGFpbiwmJGNhcmRIZWFkZXJJY29uLCYkY2FyZEhlYWRlclN0YXRzLCYkd2FybmluZ0NhcmRIZWFkZXIsJiRzdWNjZXNzQ2FyZEhlYWRlciwmJGRhbmdlckNhcmRIZWFkZXIsJiRpbmZvQ2FyZEhlYWRlciwmJHByaW1hcnlDYXJkSGVhZGVyLCYkcm9zZUNhcmRIZWFkZXIsJiRkYXJrQ2FyZEhlYWRlclwiOiB7XHJcbiAgICAgIG1hcmdpbjogXCIwIDE1cHhcIixcclxuICAgICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgfSxcclxuICAgIFwiJjpmaXJzdC1jaGlsZFwiOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogXCJjYWxjKC4yNXJlbSAtIDFweCkgY2FsYyguMjVyZW0gLSAxcHgpIDAgMFwiLFxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nQ2FyZEhlYWRlciwmJHN1Y2Nlc3NDYXJkSGVhZGVyLCYkZGFuZ2VyQ2FyZEhlYWRlciwmJGluZm9DYXJkSGVhZGVyLCYkcHJpbWFyeUNhcmRIZWFkZXIsJiRyb3NlQ2FyZEhlYWRlciwmJGRhcmtDYXJkSGVhZGVyXCI6IHtcclxuICAgICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0yMHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIxNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCImJGNhcmRIZWFkZXJTdGF0cyBzdmdcIjoge1xyXG4gICAgICBmb250U2l6ZTogXCIzNnB4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIHdpZHRoOiBcIjM2cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjM2cHhcIixcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTBweCA0cHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzIGksJiRjYXJkSGVhZGVyU3RhdHMgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgZm9udFNpemU6IFwiMzZweFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjU2cHhcIixcclxuICAgICAgd2lkdGg6IFwiNTZweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcInVuc2V0XCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxcHhcIixcclxuICAgIH0sXHJcbiAgICBcIiYkY2FyZEhlYWRlclN0YXRzJGNhcmRIZWFkZXJJY29uXCI6IHtcclxuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlclBsYWluOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gIH0sXHJcbiAgY2FyZEhlYWRlclN0YXRzOiB7XHJcbiAgICBcIiYgJGNhcmRIZWFkZXJJY29uXCI6IHtcclxuICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGgxLCYgaDIsJiBoMywmIGg0LCYgaDUsJiBoNlwiOiB7XHJcbiAgICAgIG1hcmdpbjogXCIwICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkSGVhZGVySWNvbjoge1xyXG4gICAgXCImJHdhcm5pbmdDYXJkSGVhZGVyLCYkc3VjY2Vzc0NhcmRIZWFkZXIsJiRkYW5nZXJDYXJkSGVhZGVyLCYkaW5mb0NhcmRIZWFkZXIsJiRwcmltYXJ5Q2FyZEhlYWRlciwmJHJvc2VDYXJkSGVhZGVyLCYkZGFya0NhcmRIZWFkZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gICAgXCImIGksJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICB3aWR0aDogXCIzM3B4XCIsXHJcbiAgICAgIGhlaWdodDogXCIzM3B4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIzM3B4XCIsXHJcbiAgICB9LFxyXG4gICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMzcHhcIixcclxuICAgICAgbWFyZ2luOiBcIjVweCA0cHggMHB4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2FybmluZ0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4ud2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXI6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgXCImOm5vdCgkY2FyZEhlYWRlckljb24pXCI6IHtcclxuICAgICAgLi4uc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcjoge1xyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBcIiY6bm90KCRjYXJkSGVhZGVySWNvbilcIjoge1xyXG4gICAgICAuLi5kYW5nZXJDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGluZm9DYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmluZm9DYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnByaW1hcnlDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJvc2VDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLnJvc2VDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRhcmtDYXJkSGVhZGVyOiB7XHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIFwiJjpub3QoJGNhcmRIZWFkZXJJY29uKVwiOiB7XHJcbiAgICAgIC4uLmRhcmtDYXJkSGVhZGVyLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FyZEhlYWRlclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBoZXhUb1JnYixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBjYXJkU3R5bGUgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgYm9yZGVyOiBcIjBcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIzMHB4XCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxyXG4gICAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgIG1pbldpZHRoOiBcIjBcIixcclxuICAgIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIixcclxuICAgIGZvbnRTaXplOiBcIi44NzVyZW1cIixcclxuICB9LFxyXG4gIGNhcmRQbGFpbjoge1xyXG4gICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICB9LFxyXG4gIGNhcmRQcm9maWxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIH0sXHJcbiAgY2FyZENoYXJ0OiB7XHJcbiAgICBcIiYgcFwiOiB7XHJcbiAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgcGFkZGluZ1RvcDogXCIwcHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcmRTdHlsZTtcclxuIiwiaW1wb3J0IHtcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGdyYXlDb2xvcixcclxuICBkZWZhdWx0Rm9udCxcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBjdXN0b21JbnB1dFN0eWxlID0ge1xyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBcIiY6YmVmb3JlXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50ICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB1bmRlcmxpbmU6IHtcclxuICAgIFwiJjpob3Zlcjpub3QoJGRpc2FibGVkKTpiZWZvcmUsJjpiZWZvcmVcIjoge1xyXG4gICAgICBib3JkZXJDb2xvcjogZ3JheUNvbG9yWzRdICsgXCIgIWltcG9ydGFudFwiLFxyXG4gICAgICBib3JkZXJXaWR0aDogXCIxcHggIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICAgIFwiJjphZnRlclwiOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdW5kZXJsaW5lRXJyb3I6IHtcclxuICAgIFwiJjphZnRlclwiOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB1bmRlcmxpbmVTdWNjZXNzOiB7XHJcbiAgICBcIiY6YWZ0ZXJcIjoge1xyXG4gICAgICBib3JkZXJDb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxhYmVsUm9vdDoge1xyXG4gICAgLi4uZGVmYXVsdEZvbnQsXHJcbiAgICBjb2xvcjogZ3JheUNvbG9yWzNdICsgXCIgIWltcG9ydGFudFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1N1wiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCJ1bnNldFwiLFxyXG4gIH0sXHJcbiAgbGFiZWxSb290RXJyb3I6IHtcclxuICAgIGNvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICB9LFxyXG4gIGxhYmVsUm9vdFN1Y2Nlc3M6IHtcclxuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgfSxcclxuICBmZWVkYmFjazoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCIxOHB4XCIsXHJcbiAgICByaWdodDogXCIwXCIsXHJcbiAgICB6SW5kZXg6IFwiMlwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgd2lkdGg6IFwiMjRweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjI0cHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgbWFyZ2luVG9wOiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMTZweFwiLFxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxyXG4gICAgbWFyZ2luOiBcIjI3cHggMCAwIDBcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBcInVuc2V0XCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUlucHV0U3R5bGU7XHJcbiIsImltcG9ydCB7XHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgY29udGFpbmVyLFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgYmxvY2s6IHtcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIHBhZGRpbmc6IFwiMTVweFwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgfSxcclxuICBsZWZ0OiB7XHJcbiAgICBmbG9hdDogXCJsZWZ0IWltcG9ydGFudFwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gIH0sXHJcbiAgcmlnaHQ6IHtcclxuICAgIHBhZGRpbmc6IFwiMTVweCAwXCIsXHJcbiAgICBtYXJnaW46IFwiMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgZmxvYXQ6IFwicmlnaHQhaW1wb3J0YW50XCIsXHJcbiAgfSxcclxuICBmb290ZXI6IHtcclxuICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiICsgZ3JheUNvbG9yWzExXSxcclxuICAgIHBhZGRpbmc6IFwiMTVweCAwXCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICB9LFxyXG4gIGNvbnRhaW5lcixcclxuICBhOiB7XHJcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yLFxyXG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwiMFwiLFxyXG4gIH0sXHJcbiAgaW5saW5lQmxvY2s6IHtcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBwYWRkaW5nOiBcIjBweFwiLFxyXG4gICAgd2lkdGg6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGRlZmF1bHRGb250LFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuaW1wb3J0IGRyb3Bkb3duU3R5bGUgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9kcm9wZG93blN0eWxlLmpzXCI7XHJcblxyXG5jb25zdCBoZWFkZXJMaW5rc1N0eWxlID0gKHRoZW1lKSA9PiAoe1xyXG4gIC4uLmRyb3Bkb3duU3R5bGUodGhlbWUpLFxyXG4gIHNlYXJjaDoge1xyXG4gICAgXCImID4gZGl2XCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgZmxvYXQ6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMXB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMCFpbXBvcnRhbnRcIixcclxuICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXHJcbiAgICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua1RleHQ6IHtcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIG1hcmdpbjogXCIwcHhcIixcclxuICB9LFxyXG4gIGJ1dHRvbkxpbms6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4IDBcIixcclxuICAgICAgd2lkdGg6IFwiLXdlYmtpdC1maWxsLWF2YWlsYWJsZVwiLFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIyNHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB0b3A6IFwiLTUwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCIyMnB4XCIsXHJcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFyZ2luOiB7XHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgfSxcclxuICBub3RpZmljYXRpb25zOiB7XHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogXCIycHhcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIiArIHdoaXRlQ29sb3IsXHJcbiAgICAgIHJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCI5cHhcIixcclxuICAgICAgYmFja2dyb3VuZDogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBtaW5XaWR0aDogXCIxNnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxNnB4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxNnB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYW5hZ2VyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG4gIHNlYXJjaFdyYXBwZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCIsXHJcbiAgICB9LFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxpbmtzU3R5bGU7XHJcbiIsImltcG9ydCB7XHJcbiAgY29udGFpbmVyLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBkZWZhdWx0Qm94U2hhZG93LFxyXG4gIGluZm9Db2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuXHJcbmNvbnN0IGhlYWRlclN0eWxlID0gKCkgPT4gKHtcclxuICBhcHBCYXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCIwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgekluZGV4OiBcIjEwMjlcIixcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbN10sXHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcclxuICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIC4uLmNvbnRhaW5lcixcclxuICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXHJcbiAgfSxcclxuICBmbGV4OiB7XHJcbiAgICBmbGV4OiAxLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIC4uLmRlZmF1bHRGb250LFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCJ1bnNldFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxOHB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcclxuICAgIG1hcmdpbjogXCIwXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhcHBSZXNwb25zaXZlOiB7XHJcbiAgICB0b3A6IFwiOHB4XCIsXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvdyxcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAuLi5kZWZhdWx0Qm94U2hhZG93LFxyXG4gIH0sXHJcbiAgc3VjY2Vzczoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIC4uLmRlZmF1bHRCb3hTaGFkb3csXHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvdyxcclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4uZGVmYXVsdEJveFNoYWRvdyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGRlZmF1bHRGb250LFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuaW1wb3J0IGRyb3Bkb3duU3R5bGUgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9kcm9wZG93blN0eWxlLmpzXCI7XHJcblxyXG5jb25zdCBoZWFkZXJMaW5rc1N0eWxlID0gKHRoZW1lKSA9PiAoe1xyXG4gIC4uLmRyb3Bkb3duU3R5bGUodGhlbWUpLFxyXG4gIHNlYXJjaDoge1xyXG4gICAgXCImID4gZGl2XCI6IHtcclxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgZmxvYXQ6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHBhZGRpbmdUb3A6IFwiMXB4XCIsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMXB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMCFpbXBvcnRhbnRcIixcclxuICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCI0MHB4XCIsXHJcbiAgICAgIFwiJiBpbnB1dFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua1RleHQ6IHtcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIG1hcmdpbjogXCIwcHhcIixcclxuICB9LFxyXG4gIGJ1dHRvbkxpbms6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICBtYXJnaW46IFwiMTBweCAxNXB4IDBcIixcclxuICAgICAgd2lkdGg6IFwiLXdlYmtpdC1maWxsLWF2YWlsYWJsZVwiLFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIyNHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTVweFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB0b3A6IFwiLTUwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCIyMnB4XCIsXHJcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWFyZ2luOiB7XHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgfSxcclxuICBub3RpZmljYXRpb25zOiB7XHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHRvcDogXCIycHhcIixcclxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIiArIHdoaXRlQ29sb3IsXHJcbiAgICAgIHJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICBmb250U2l6ZTogXCI5cHhcIixcclxuICAgICAgYmFja2dyb3VuZDogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBtaW5XaWR0aDogXCIxNnB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxNnB4XCIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxNnB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIH0sXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI4cHhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYW5hZ2VyOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICB9LFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG4gIHNlYXJjaFdyYXBwZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCIsXHJcbiAgICB9LFxyXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlckxpbmtzU3R5bGU7XHJcbiIsImltcG9ydCB7XHJcbiAgZHJhd2VyV2lkdGgsXHJcbiAgdHJhbnNpdGlvbixcclxuICBib3hTaGFkb3csXHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIHByaW1hcnlCb3hTaGFkb3csXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICBoZXhUb1JnYixcclxufSBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkLmpzXCI7XHJcblxyXG5jb25zdCBzaWRlYmFyU3R5bGUgPSAodGhlbWUpID0+ICh7XHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgdG9wOiBcIjBcIixcclxuICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICBsZWZ0OiBcIjBcIixcclxuICAgIHpJbmRleDogXCIxXCIsXHJcbiAgICAuLi5ib3hTaGFkb3csXHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgLi4uYm94U2hhZG93LFxyXG4gICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgIGxlZnQ6IFwiYXV0b1wiLFxyXG4gICAgICB6SW5kZXg6IFwiMTAzMlwiLFxyXG4gICAgICB2aXNpYmlsaXR5OiBcInZpc2libGVcIixcclxuICAgICAgb3ZlcmZsb3dZOiBcInZpc2libGVcIixcclxuICAgICAgYm9yZGVyVG9wOiBcIm5vbmVcIixcclxuICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgcGFkZGluZ1JpZ2h0OiBcIjBweFwiLFxyXG4gICAgICBwYWRkaW5nTGVmdDogXCIwXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7ZHJhd2VyV2lkdGh9cHgsIDAsIDApYCxcclxuICAgICAgLi4udHJhbnNpdGlvbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJQYXBlclJUTDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKFwibWRcIildOiB7XHJcbiAgICAgIGxlZnQ6IFwiYXV0byAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHJpZ2h0OiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgfSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIGxlZnQ6IFwiMCAgIWltcG9ydGFudFwiLFxyXG4gICAgICByaWdodDogXCJhdXRvICFpbXBvcnRhbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZzogXCIxNXB4IDE1cHhcIixcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICBcIiY6YWZ0ZXJcIjoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIGJvdHRvbTogXCIwXCIsXHJcblxyXG4gICAgICBoZWlnaHQ6IFwiMXB4XCIsXHJcbiAgICAgIHJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMzBweClcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoXCIgKyBoZXhUb1JnYihncmF5Q29sb3JbNl0pICsgXCIsIDAuMylcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvTGluazoge1xyXG4gICAgLi4uZGVmYXVsdEZvbnQsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgZm9udFNpemU6IFwiMThweFwiLFxyXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgXCImLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvTGlua1JUTDoge1xyXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgfSxcclxuICBsb2dvSW1hZ2U6IHtcclxuICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICBtYXhIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiBcIjM1cHhcIixcclxuICAgIHRvcDogXCIyMnB4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgekluZGV4OiBcIjFcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gICAgbGVmdDogXCIwXCIsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBjZW50ZXJcIixcclxuICAgIFwiJjphZnRlclwiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIHpJbmRleDogXCIzXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgY29udGVudDogJ1wiXCInLFxyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrQ29sb3IsXHJcbiAgICAgIG9wYWNpdHk6IFwiLjhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFwiMFwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIwXCIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBcIjBcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwXCIsXHJcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxyXG4gICAgcG9zaXRpb246IFwidW5zZXRcIixcclxuICB9LFxyXG4gIGl0ZW06IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1cywmOnZpc2l0ZWQsJlwiOiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGl0ZW1MaW5rOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAzMDBtcyBsaW5lYXJcIixcclxuICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4XCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIC4uLmRlZmF1bHRGb250LFxyXG4gIH0sXHJcbiAgaXRlbUljb246IHtcclxuICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIyNHB4XCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcclxuICAgIGZsb2F0OiBcImxlZnRcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2Iod2hpdGVDb2xvcikgKyBcIiwgMC44KVwiLFxyXG4gIH0sXHJcbiAgaXRlbUljb25SVEw6IHtcclxuICAgIG1hcmdpblJpZ2h0OiBcIjNweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIxNXB4XCIsXHJcbiAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gIH0sXHJcbiAgaXRlbVRleHQ6IHtcclxuICAgIC4uLmRlZmF1bHRGb250LFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgfSxcclxuICBpdGVtVGV4dFJUTDoge1xyXG4gICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcbiAgfSxcclxuICB3aGl0ZUZvbnQ6IHtcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gIH0sXHJcbiAgcHVycGxlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgIC4uLnByaW1hcnlCb3hTaGFkb3csXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgICAuLi5wcmltYXJ5Qm94U2hhZG93LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJsdWU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsLjIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICAgIFwiLC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdyZWVuOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICBcIiwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLC4yKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwuMilcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBvcmFuZ2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsLjIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLC4yKVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsLjI4KSwgMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwuMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLC4xMiksIDAgN3B4IDhweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsLjIpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2hpdGU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGVDb2xvcixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDEycHggMjBweCAtMTBweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2hpdGVDb2xvcikgK1xyXG4gICAgICBcIiwuMjgpLCAwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgXCIsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdoaXRlQ29sb3IpICtcclxuICAgICAgXCIsLjIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxMnB4IDIwcHggLTEwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2hpdGVDb2xvcikgK1xyXG4gICAgICAgIFwiLC4yOCksIDAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsLjEyKSwgMCA3cHggOHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2hpdGVDb2xvcikgK1xyXG4gICAgICAgIFwiLC4yKVwiLFxyXG4gICAgfSxcclxuICAgIFwiJiAkaXRlbVRleHRcIjoge1xyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzhdLFxyXG4gICAgfSxcclxuICAgIFwiJiAkaXRlbUljb25cIjoge1xyXG4gICAgICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoZ3JheUNvbG9yWzhdKSArIFwiLCAwLjgpXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2lkZWJhcldyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDc1cHgpXCIsXHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIyNjBweFwiLFxyXG4gICAgekluZGV4OiBcIjRcIixcclxuICAgIG92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgfSxcclxuICBhY3RpdmVQcm86IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGJvdHRvbTogXCIxM3B4XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhclN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIHByaW1hcnlDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIHByaW1hcnlCb3hTaGFkb3csXHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgYmxhY2tDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbn0gZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC5qc1wiO1xyXG5cclxuY29uc3QgZHJvcGRvd25TdHlsZSA9ICh0aGVtZSkgPT4gKHtcclxuICBidXR0b25MaW5rOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgbWFyZ2luTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgY29sb3I6IGdyYXlDb2xvcls5XSxcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMTVweFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtUZXh0OiB7XHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgLi4uZGVmYXVsdEZvbnQsXHJcbiAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgfSxcclxuICBwb3BwZXJDbG9zZToge1xyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgfSxcclxuICBwb3BwZXJSZXNwb25zaXZlOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICB6SW5kZXg6IFwiMTY0MFwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWNcIixcclxuICAgICAgZmxvYXQ6IFwibm9uZVwiLFxyXG4gICAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgICBXZWJraXRCb3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICBjb2xvcjogXCJibGFja1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBvcHBlck5hdjoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgcG9zaXRpb246IFwic3RhdGljICFpbXBvcnRhbnRcIixcclxuICAgICAgbGVmdDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHRvcDogXCJ1bnNldCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgd2lsbENoYW5nZTogXCJ1bnNldCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIFwiJiA+IGRpdlwiOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiMHJlbVwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjByZW1cIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMHB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnQgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIFwiJiB1bCBsaVwiOiB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGVDb2xvciArIFwiICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMCFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJoc2xhKDAsMCUsNzglLC4yKVwiLFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyb3Bkb3duOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMnB4IDVweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjI2KVwiLFxyXG4gICAgdG9wOiBcIjEwMCVcIixcclxuICAgIHpJbmRleDogXCIxMDAwXCIsXHJcbiAgICBtaW5XaWR0aDogXCIxNjBweFwiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgbWFyZ2luOiBcIjJweCAwIDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcclxuICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCIsXHJcbiAgfSxcclxuICBkcm9wZG93bkl0ZW06IHtcclxuICAgIC4uLmRlZmF1bHRGb250LFxyXG4gICAgZm9udFNpemU6IFwiMTNweFwiLFxyXG4gICAgcGFkZGluZzogXCIxMHB4IDIwcHhcIixcclxuICAgIG1hcmdpbjogXCIwIDVweFwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjJweFwiLFxyXG4gICAgV2Via2l0VHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXHJcbiAgICBNb3pUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcclxuICAgIE9UcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcclxuICAgIE1zVHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgbGluZWFyXCIsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIGNsZWFyOiBcImJvdGhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbOF0sXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgaGVpZ2h0OiBcInVuc2V0XCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwidW5zZXRcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgLi4ucHJpbWFyeUJveFNoYWRvdyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93blN0eWxlO1xyXG4iLCJpbXBvcnQge1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG59IGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQuanNcIjtcclxuXHJcbmNvbnN0IGFwcFN0eWxlID0gKHRoZW1lKSA9PiAoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICB0b3A6IFwiMFwiLFxyXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgfSxcclxuICBtYWluUGFuZWw6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcIm1kXCIpXToge1xyXG4gICAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIH0sXHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgIC4uLnRyYW5zaXRpb24sXHJcbiAgICBtYXhIZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgb3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG1hcmdpblRvcDogXCI3MHB4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjMwcHggMTVweFwiLFxyXG4gICAgbWluSGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMjNweClcIixcclxuICB9LFxyXG4gIGNvbnRhaW5lcixcclxuICBtYXA6IHtcclxuICAgIG1hcmdpblRvcDogXCI3MHB4XCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBTdHlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9jYXJkU3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcGxhaW4sIHByb2ZpbGUsIGNoYXJ0LCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZF06IHRydWUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkUGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRQcm9maWxlXTogcHJvZmlsZSxcclxuICAgIFtjbGFzc2VzLmNhcmRDaGFydF06IGNoYXJ0LFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZENsYXNzZXN9IHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBwcm9maWxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGFydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRBdmF0YXJTdHlsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEF2YXRhcihwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBwbGFpbiwgcHJvZmlsZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2FyZEF2YXRhckNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRBdmF0YXJdOiB0cnVlLFxyXG4gICAgW2NsYXNzZXMuY2FyZEF2YXRhclByb2ZpbGVdOiBwcm9maWxlLFxyXG4gICAgW2NsYXNzZXMuY2FyZEF2YXRhclBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQXZhdGFyQ2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkQXZhdGFyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRCb2R5U3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRCb2R5KHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIHBsYWluLCBwcm9maWxlLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkQm9keUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5XTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5UGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRCb2R5UHJvZmlsZV06IHByb2ZpbGUsXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkQm9keUNsYXNzZXN9IHsuLi5yZXN0fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQ2FyZEJvZHkucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRGb290ZXJTdHlsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEZvb3Rlcihwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBwbGFpbiwgcHJvZmlsZSwgc3RhdHMsIGNoYXJ0LCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkRm9vdGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZEZvb3Rlcl06IHRydWUsXHJcbiAgICBbY2xhc3Nlcy5jYXJkRm9vdGVyUGxhaW5dOiBwbGFpbixcclxuICAgIFtjbGFzc2VzLmNhcmRGb290ZXJQcm9maWxlXTogcHJvZmlsZSxcclxuICAgIFtjbGFzc2VzLmNhcmRGb290ZXJTdGF0c106IHN0YXRzLFxyXG4gICAgW2NsYXNzZXMuY2FyZEZvb3RlckNoYXJ0XTogY2hhcnQsXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lICE9PSB1bmRlZmluZWQsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkRm9vdGVyQ2xhc3Nlc30gey4uLnJlc3R9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5DYXJkRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHByb2ZpbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGFydDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2NhcmRIZWFkZXJTdHlsZS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBjb2xvciwgcGxhaW4sIHN0YXRzLCBpY29uLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjYXJkSGVhZGVyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlcl06IHRydWUsXHJcbiAgICBbY2xhc3Nlc1tjb2xvciArIFwiQ2FyZEhlYWRlclwiXV06IGNvbG9yLFxyXG4gICAgW2NsYXNzZXMuY2FyZEhlYWRlclBsYWluXTogcGxhaW4sXHJcbiAgICBbY2xhc3Nlcy5jYXJkSGVhZGVyU3RhdHNdOiBzdGF0cyxcclxuICAgIFtjbGFzc2VzLmNhcmRIZWFkZXJJY29uXTogaWNvbixcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWUgIT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRIZWFkZXJDbGFzc2VzfSB7Li4ucmVzdH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkNhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFwid2FybmluZ1wiLFxyXG4gICAgXCJzdWNjZXNzXCIsXHJcbiAgICBcImRhbmdlclwiLFxyXG4gICAgXCJpbmZvXCIsXHJcbiAgICBcInByaW1hcnlcIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJkYXJrXCIsXHJcbiAgXSksXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIHN0YXRzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBpY29uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvYnV0dG9uU3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yLFxyXG4gICAgcm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGRpc2FibGVkLFxyXG4gICAgc2ltcGxlLFxyXG4gICAgc2l6ZSxcclxuICAgIGJsb2NrLFxyXG4gICAgbGluayxcclxuICAgIGp1c3RJY29uLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbXVpQ2xhc3NlcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuYnV0dG9uXTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcclxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxyXG4gICAgW2NsYXNzZXMucm91bmRdOiByb3VuZCxcclxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXHJcbiAgICBbY2xhc3Nlcy5zaW1wbGVdOiBzaW1wbGUsXHJcbiAgICBbY2xhc3Nlcy5ibG9ja106IGJsb2NrLFxyXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXHJcbiAgICBbY2xhc3Nlcy5qdXN0SWNvbl06IGp1c3RJY29uLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiB7Li4ucmVzdH0gY2xhc3Nlcz17eyAuLi5tdWlDbGFzc2VzLCByb290OiBidG5DbGFzc2VzIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5SZWd1bGFyQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFwicHJpbWFyeVwiLFxyXG4gICAgXCJpbmZvXCIsXHJcbiAgICBcInN1Y2Nlc3NcIixcclxuICAgIFwid2FybmluZ1wiLFxyXG4gICAgXCJkYW5nZXJcIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJ3aGl0ZVwiLFxyXG4gICAgXCJ0cmFuc3BhcmVudFwiLFxyXG4gIF0pLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcImxnXCJdKSxcclxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxyXG4gIGp1c3RJY29uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLy8gdXNlIHRoaXMgdG8gcGFzcyB0aGUgY2xhc3NlcyBwcm9wcyBmcm9tIE1hdGVyaWFsLVVJXHJcbiAgbXVpQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IENsZWFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXJcIjtcclxuaW1wb3J0IENoZWNrIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2tcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2N1c3RvbUlucHV0U3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUlucHV0KHByb3BzKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7XHJcbiAgICBmb3JtQ29udHJvbFByb3BzLFxyXG4gICAgbGFiZWxUZXh0LFxyXG4gICAgaWQsXHJcbiAgICBsYWJlbFByb3BzLFxyXG4gICAgaW5wdXRQcm9wcyxcclxuICAgIGVycm9yLFxyXG4gICAgc3VjY2VzcyxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGxhYmVsQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW1wiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RFcnJvcl06IGVycm9yLFxyXG4gICAgW1wiIFwiICsgY2xhc3Nlcy5sYWJlbFJvb3RTdWNjZXNzXTogc3VjY2VzcyAmJiAhZXJyb3IsXHJcbiAgfSk7XHJcbiAgY29uc3QgdW5kZXJsaW5lQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMudW5kZXJsaW5lRXJyb3JdOiBlcnJvcixcclxuICAgIFtjbGFzc2VzLnVuZGVybGluZVN1Y2Nlc3NdOiBzdWNjZXNzICYmICFlcnJvcixcclxuICAgIFtjbGFzc2VzLnVuZGVybGluZV06IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgbWFyZ2luVG9wID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5tYXJnaW5Ub3BdOiBsYWJlbFRleHQgPT09IHVuZGVmaW5lZCxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250cm9sXHJcbiAgICAgIHsuLi5mb3JtQ29udHJvbFByb3BzfVxyXG4gICAgICBjbGFzc05hbWU9e2Zvcm1Db250cm9sUHJvcHMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc2VzLmZvcm1Db250cm9sfVxyXG4gICAgPlxyXG4gICAgICB7bGFiZWxUZXh0ICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgPElucHV0TGFiZWxcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbFJvb3QgKyBsYWJlbENsYXNzZXN9XHJcbiAgICAgICAgICBodG1sRm9yPXtpZH1cclxuICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsYWJlbFRleHR9XHJcbiAgICAgICAgPC9JbnB1dExhYmVsPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcm9vdDogbWFyZ2luVG9wLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGNsYXNzZXMuZGlzYWJsZWQsXHJcbiAgICAgICAgICB1bmRlcmxpbmU6IHVuZGVybGluZUNsYXNzZXMsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvciA/IChcclxuICAgICAgICA8Q2xlYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWRiYWNrICsgXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdEVycm9yfSAvPlxyXG4gICAgICApIDogc3VjY2VzcyA/IChcclxuICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWRiYWNrICsgXCIgXCIgKyBjbGFzc2VzLmxhYmVsUm9vdFN1Y2Nlc3N9IC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9Gb3JtQ29udHJvbD5cclxuICApO1xyXG59XHJcblxyXG5DdXN0b21JbnB1dC5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWxUZXh0OiBQcm9wVHlwZXMubm9kZSxcclxuICBsYWJlbFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgZm9ybUNvbnRyb2xQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc3VjY2VzczogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcbiIsIi8qZXNsaW50LWRpc2FibGUqL1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IGltYWdpbmUxIGZyb20gXCJhc3NldHMvaW1nL3NpZGViYXItMS5qcGdcIjtcclxuaW1wb3J0IGltYWdpbmUyIGZyb20gXCJhc3NldHMvaW1nL3NpZGViYXItMi5qcGdcIjtcclxuaW1wb3J0IGltYWdpbmUzIGZyb20gXCJhc3NldHMvaW1nL3NpZGViYXItMy5qcGdcIjtcclxuaW1wb3J0IGltYWdpbmU0IGZyb20gXCJhc3NldHMvaW1nL3NpZGViYXItNC5qcGdcIjtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpeGVkUGx1Z2luKHByb3BzKSB7XHJcbiAgY29uc3QgW2NsYXNzZXMsIHNldENsYXNzZXNdID0gUmVhY3QudXNlU3RhdGUoXCJkcm9wZG93biBzaG93XCIpO1xyXG4gIGNvbnN0IFtiZ19jaGVja2VkLCBzZXRCZ19jaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtiZ0ltYWdlLCBzZXRCZ0ltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLmJnSW1hZ2UpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgcHJvcHMuaGFuZGxlRml4ZWRDbGljaygpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiZml4ZWQtcGx1Z2luXCIsIHtcclxuICAgICAgICBcInJ0bC1maXhlZC1wbHVnaW5cIjogcHJvcHMucnRsQWN0aXZlLFxyXG4gICAgICB9KX1cclxuICAgID5cclxuICAgICAgPGRpdiBpZD1cImZpeGVkUGx1Z2luQ2xhc3Nlc1wiIGNsYXNzTmFtZT17cHJvcHMuZml4ZWRDbGFzc2VzfT5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS0yeFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5TSURFQkFSIEZJTFRFUlM8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFkanVzdG1lbnRzLWxpbmVcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic3dpdGNoLXRyaWdnZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5iZ0NvbG9yID09PSBcIndoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWRnZSBmaWx0ZXIgYmFkZ2Utd2hpdGUgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiYWRnZSBmaWx0ZXIgYmFkZ2Utd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVDb2xvckNsaWNrKFwid2hpdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5iZ0NvbG9yID09PSBcInB1cnBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFkZ2UgZmlsdGVyIGJhZGdlLXB1cnBsZSBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJhZGdlIGZpbHRlciBiYWRnZS1wdXJwbGVcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtY29sb3I9XCJwdXJwbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlQ29sb3JDbGljayhcInB1cnBsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJnQ29sb3IgPT09IFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFkZ2UgZmlsdGVyIGJhZGdlLWJsdWUgYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiYWRnZSBmaWx0ZXIgYmFkZ2UtYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZGF0YS1jb2xvcj1cImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlQ29sb3JDbGljayhcImJsdWVcIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5iZ0NvbG9yID09PSBcImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWRnZSBmaWx0ZXIgYmFkZ2UtZ3JlZW4gYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJiYWRnZSBmaWx0ZXIgYmFkZ2UtZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtY29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVDb2xvckNsaWNrKFwiZ3JlZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5iZ0NvbG9yID09PSBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFkZ2UgZmlsdGVyIGJhZGdlLXJlZCBhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcImJhZGdlIGZpbHRlciBiYWRnZS1yZWRcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGFuZGxlQ29sb3JDbGljayhcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJnQ29sb3IgPT09IFwib3JhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWRnZSBmaWx0ZXIgYmFkZ2Utb3JhbmdlIGFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYmFkZ2UgZmlsdGVyIGJhZGdlLW9yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZGF0YS1jb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVDb2xvckNsaWNrKFwib3JhbmdlXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj5JbWFnZXM8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YmdJbWFnZSA9PT0gaW1hZ2luZTEgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWhvbGRlciBzd2l0Y2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QmdJbWFnZShpbWFnaW5lMSk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVJbWFnZUNsaWNrKGltYWdpbmUxKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdpbmUxfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YmdJbWFnZSA9PT0gaW1hZ2luZTIgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWhvbGRlciBzd2l0Y2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QmdJbWFnZShpbWFnaW5lMik7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVJbWFnZUNsaWNrKGltYWdpbmUyKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdpbmUyfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YmdJbWFnZSA9PT0gaW1hZ2luZTMgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWhvbGRlciBzd2l0Y2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QmdJbWFnZShpbWFnaW5lMyk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVJbWFnZUNsaWNrKGltYWdpbmUzKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdpbmUzfSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17YmdJbWFnZSA9PT0gaW1hZ2luZTQgPyBcImFjdGl2ZVwiIDogXCJcIn0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWhvbGRlciBzd2l0Y2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QmdJbWFnZShpbWFnaW5lNCk7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5oYW5kbGVJbWFnZUNsaWNrKGltYWdpbmU0KTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdpbmU0fSBhbHQ9XCIuLi5cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbS9wcm9kdWN0L25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQ/cmVmPW5qc21kLWZpeGVkLXBsdWdpblwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRG93bmxvYWQgZnJlZSFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC1wcm8/cmVmPW5qc21kLWZpeGVkLXBsdWdpblwiXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR2V0IFBSTyB2ZXJzaW9uXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi9uZXh0anMvb3ZlcnZpZXcvbWF0ZXJpYWwtZGFzaGJvYXJkP3JlZj1uanNtZC1maXhlZC1wbHVnaW5cIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEb2N1bWVudGF0aW9uXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhZGp1c3RtZW50cy1saW5lXCIgLz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkZpeGVkUGx1Z2luLnByb3BUeXBlcyA9IHtcclxuICBiZ0ltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGhhbmRsZUZpeGVkQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZml4ZWRDbGFzc2VzOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGJnQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcInB1cnBsZVwiLFxyXG4gICAgXCJibHVlXCIsXHJcbiAgICBcImdyZWVuXCIsXHJcbiAgICBcIm9yYW5nZVwiLFxyXG4gICAgXCJyZWRcIixcclxuICBdKSxcclxuICBoYW5kbGVDb2xvckNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBoYW5kbGVJbWFnZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIiwiLyplc2xpbnQtZGlzYWJsZSovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9jb21wb25lbnRzL2Zvb3RlclN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PlxyXG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9PlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmlubGluZUJsb2NrfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmVCbG9ja30+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb21wYW55XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cclxuICAgICAgICAgICAgICAgIENvbXBhbnlcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuaW5saW5lQmxvY2t9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cclxuICAgICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmxpbmVCbG9ja30+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNibG9nXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cclxuICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0fT5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAmY29weTsgezE5MDAgKyBuZXcgRGF0ZSgpLmdldFllYXIoKX17XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20/cmVmPW5qc21kLWZvb3RlclwiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENyZWF0aXZlIFRpbVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICwgbWFkZSB3aXRoIGxvdmUgZm9yIGEgYmV0dGVyIHdlYlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgbWFyZ2luOiBcIjAgLTE1cHggIWltcG9ydGFudFwiLFxyXG4gICAgd2lkdGg6IFwidW5zZXRcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbnRhaW5lciB7Li4ucmVzdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG5cclxuR3JpZENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIHBhZGRpbmc6IFwiMCAxNXB4ICFpbXBvcnRhbnRcIixcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZEl0ZW0ocHJvcHMpIHtcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBpdGVtIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5HcmlkSXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBIb29rXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSB3aXRoIHVuZGVmaW5lZCB3aWR0aC9oZWlnaHQgc28gc2VydmVyIGFuZCBjbGllbnQgcmVuZGVycyBtYXRjaFxyXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9qb3Nod2NvbWVhdS5jb20vcmVhY3QvdGhlLXBlcmlscy1vZi1yZWh5ZHJhdGlvbi9cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBIYW5kbGVyIHRvIGNhbGwgb24gd2luZG93IHJlc2l6ZVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICAvLyBTZXQgd2luZG93IHdpZHRoL2hlaWdodCB0byBzdGF0ZVxyXG4gICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuXHJcbiAgICAvLyBDYWxsIGhhbmRsZXIgcmlnaHQgYXdheSBzbyBzdGF0ZSBnZXRzIHVwZGF0ZWQgd2l0aCBpbml0aWFsIHdpbmRvdyBzaXplXHJcbiAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcblxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFBvcHBlcnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiY29tcG9uZW50cy9Ib29rcy91c2VXaW5kb3dTaXplLmpzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXJMaW5rc1N0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbk5hdmJhckxpbmtzKCkge1xyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbk5vdGlmaWNhdGlvbiwgc2V0T3Blbk5vdGlmaWNhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3BlblByb2ZpbGUsIHNldE9wZW5Qcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTm90aWZpY2F0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAob3Blbk5vdGlmaWNhdGlvbiAmJiBvcGVuTm90aWZpY2F0aW9uLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgc2V0T3Blbk5vdGlmaWNhdGlvbihudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW5Ob3RpZmljYXRpb24oZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU5vdGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5Ob3RpZmljYXRpb24obnVsbCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbGlja1Byb2ZpbGUgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChvcGVuUHJvZmlsZSAmJiBvcGVuUHJvZmlsZS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgIHNldE9wZW5Qcm9maWxlKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T3BlblByb2ZpbGUoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUHJvZmlsZShudWxsKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hXcmFwcGVyfT5cclxuICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm1hcmdpbiArIFwiIFwiICsgY2xhc3Nlcy5zZWFyY2gsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgaW5wdXRQcm9wczoge1xyXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlNlYXJjaFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIGFyaWEtbGFiZWw9XCJlZGl0XCIganVzdEljb24gcm91bmQ+XHJcbiAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9e3NpemUud2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XHJcbiAgICAgICAganVzdEljb249e3NpemUud2lkdGggPiA5NTl9XHJcbiAgICAgICAgc2ltcGxlPXshKHNpemUud2lkdGggPiA5NTkpfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJEYXNoYm9hcmRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxyXG4gICAgICA+XHJcbiAgICAgICAgPERhc2hib2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbnN9IC8+XHJcbiAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMubGlua1RleHR9PkRhc2hib2FyZDwvcD5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1hbmFnZXJ9PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbG9yPXtzaXplLndpZHRoID4gOTU5ID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxyXG4gICAgICAgICAganVzdEljb249e3NpemUud2lkdGggPiA5NTl9XHJcbiAgICAgICAgICBzaW1wbGU9eyEoc2l6ZS53aWR0aCA+IDk1OSl9XHJcbiAgICAgICAgICBhcmlhLW93bnM9e29wZW5Ob3RpZmljYXRpb24gPyBcIm5vdGlmaWNhdGlvbi1tZW51LWxpc3QtZ3Jvd1wiIDogbnVsbH1cclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrTm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbnMgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLm5vdGlmaWNhdGlvbnN9PjU8L3NwYW4+XHJcbiAgICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgPHAgb25DbGljaz17aGFuZGxlQ2xvc2VOb3RpZmljYXRpb259IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+XHJcbiAgICAgICAgICAgICAgTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxQb3BwZXJzXHJcbiAgICAgICAgICBvcGVuPXtCb29sZWFuKG9wZW5Ob3RpZmljYXRpb24pfVxyXG4gICAgICAgICAgYW5jaG9yRWw9e29wZW5Ob3RpZmljYXRpb259XHJcbiAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICBjbGFzc05hbWVzKHsgW2NsYXNzZXMucG9wcGVyQ2xvc2VdOiAhb3Blbk5vdGlmaWNhdGlvbiB9KSArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wb3BwZXJOYXZcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgaWQ9XCJub3RpZmljYXRpb24tbWVudS1saXN0LWdyb3dcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudCA9PT0gXCJib3R0b21cIiA/IFwiY2VudGVyIHRvcFwiIDogXCJjZW50ZXIgYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQYXBlcj5cclxuICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2VOb3RpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUxpc3Qgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBNaWtlIEpvaG4gcmVzcG9uZGVkIHRvIHlvdXIgZW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VOb3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBoYXZlIDUgbmV3IHRhc2tzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTm90aWZpY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3V7XCInXCJ9cmUgbm93IGZyaWVuZCB3aXRoIEFuZHJld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZU5vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQW5vdGhlciBOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VOb3RpZmljYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFub3RoZXIgT25lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9Hcm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1BvcHBlcnM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYW5hZ2VyfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj17c2l6ZS53aWR0aCA+IDk1OSA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cclxuICAgICAgICAgIGp1c3RJY29uPXtzaXplLndpZHRoID4gOTU5fVxyXG4gICAgICAgICAgc2ltcGxlPXshKHNpemUud2lkdGggPiA5NTkpfVxyXG4gICAgICAgICAgYXJpYS1vd25zPXtvcGVuUHJvZmlsZSA/IFwicHJvZmlsZS1tZW51LWxpc3QtZ3Jvd1wiIDogbnVsbH1cclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrUHJvZmlsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxQZXJzb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxyXG4gICAgICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPVwiY3NzXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+UHJvZmlsZTwvcD5cclxuICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxQb3BwZXJzXHJcbiAgICAgICAgICBvcGVuPXtCb29sZWFuKG9wZW5Qcm9maWxlKX1cclxuICAgICAgICAgIGFuY2hvckVsPXtvcGVuUHJvZmlsZX1cclxuICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMoeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuUHJvZmlsZSB9KSArXHJcbiAgICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgICAgY2xhc3Nlcy5wb3BwZXJOYXZcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxyXG4gICAgICAgICAgICA8R3Jvd1xyXG4gICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgaWQ9XCJwcm9maWxlLW1lbnUtbGlzdC1ncm93XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51TGlzdCByb2xlPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRyb3Bkb3duSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIGxpZ2h0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZVByb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3Jvdz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Qb3BwZXJzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBNZW51IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEFkbWluTmF2YmFyTGlua3MgZnJvbSBcIi4vQWRtaW5OYXZiYXJMaW5rcy5qc1wiO1xyXG5pbXBvcnQgUlRMTmF2YmFyTGlua3MgZnJvbSBcIi4vUlRMTmF2YmFyTGlua3MuanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvaGVhZGVyU3R5bGUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIC8vIHVzZWQgZm9yIGNoZWNraW5nIGN1cnJlbnQgcm91dGVcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjcmVhdGUgc3R5bGVzIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgZnVuY3Rpb24gbWFrZUJyYW5kKCkge1xyXG4gICAgdmFyIG5hbWUgPSBcIk5leHRKUyBNYXRlcmlhbCBEYXNoYm9hcmRcIjtcclxuICAgIHByb3BzLnJvdXRlcy5tYXAoKHByb3ApID0+IHtcclxuICAgICAgaWYgKHJvdXRlci5yb3V0ZS5pbmRleE9mKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKSAhPT0gLTEpIHtcclxuICAgICAgICBuYW1lID0gcHJvcHMucnRsQWN0aXZlID8gcHJvcC5ydGxOYW1lIDogcHJvcC5uYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmFtZTtcclxuICB9XHJcbiAgY29uc3QgeyBjb2xvciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYXBwQmFyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW1wiIFwiICsgY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBjbGFzc05hbWU9e2NsYXNzZXMuYXBwQmFyICsgYXBwQmFyQ2xhc3Nlc30+XHJcbiAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxyXG4gICAgICAgICAgey8qIEhlcmUgd2UgY3JlYXRlIG5hdmJhciBicmFuZCwgYmFzZWQgb24gcm91dGUgbmFtZSAqL31cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0cmFuc3BhcmVudFwiIGhyZWY9XCIjXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAge21ha2VCcmFuZCgpfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIHtwcm9wcy5ydGxBY3RpdmUgPyA8UlRMTmF2YmFyTGlua3MgLz4gOiA8QWRtaW5OYXZiYXJMaW5rcyAvPn1cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgPC9Ub29sYmFyPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcInByaW1hcnlcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIl0pLFxyXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaGFuZGxlRHJhd2VyVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCI7XHJcbmltcG9ydCBHcm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IFBvcHBlcnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IFBlcnNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1BlcnNvblwiO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgQ3VzdG9tSW5wdXQgZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tSW5wdXQvQ3VzdG9tSW5wdXQuanNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qc1wiO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiY29tcG9uZW50cy9Ib29rcy91c2VXaW5kb3dTaXplLmpzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJhc3NldHMvanNzL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvY29tcG9uZW50cy9ydGxIZWFkZXJMaW5rc1N0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSVExOYXZiYXJMaW5rcygpIHtcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAob3BlbiAmJiBvcGVuLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgc2V0T3BlbihudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW4oZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hXcmFwcGVyfT5cclxuICAgICAgICA8Q3VzdG9tSW5wdXRcclxuICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLm1hcmdpbiArIFwiIFwiICsgY2xhc3Nlcy5zZWFyY2gsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLYrNiz2KrYrNmILi4uXCIsXHJcbiAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcclxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uIGNvbG9yPVwid2hpdGVcIiBhcmlhLWxhYmVsPVwiZWRpdFwiIGp1c3RJY29uIHJvdW5kPlxyXG4gICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbG9yPXtzaXplLndpZHRoID4gOTU5ID8gXCJ0cmFuc3BhcmVudFwiIDogXCJ3aGl0ZVwifVxyXG4gICAgICAgIGp1c3RJY29uPXtzaXplLndpZHRoID4gOTU5fVxyXG4gICAgICAgIHNpbXBsZT17IShzaXplLndpZHRoID4gOTU5KX1cclxuICAgICAgICBhcmlhLWxhYmVsPVwiRGFzaGJvYXJkXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uTGlua31cclxuICAgICAgPlxyXG4gICAgICAgIDxEYXNoYm9hcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25zfSAvPlxyXG4gICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT7YotmF2KfYsdmH2Kc8L3A+XHJcbiAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYW5hZ2VyfT5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj17c2l6ZS53aWR0aCA+IDk1OSA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cclxuICAgICAgICAgIGp1c3RJY29uPXtzaXplLndpZHRoID4gOTU5fVxyXG4gICAgICAgICAgc2ltcGxlPXshKHNpemUud2lkdGggPiA5NTkpfVxyXG4gICAgICAgICAgYXJpYS1vd25zPXtvcGVuID8gXCJtZW51LWxpc3QtZ3Jvd1wiIDogbnVsbH1cclxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOb3RpZmljYXRpb25zIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ub3RpZmljYXRpb25zfT7btTwvc3Bhbj5cclxuICAgICAgICAgIDxIaWRkZW4gbWRVcCBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+XHJcbiAgICAgICAgICAgICAg2KfYudmE2KfZhuKAjNmH2KdcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9IaWRkZW4+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPFBvcHBlcnNcclxuICAgICAgICAgIG9wZW49e0Jvb2xlYW4ob3Blbil9XHJcbiAgICAgICAgICBhbmNob3JFbD17b3Blbn1cclxuICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZXMoeyBbY2xhc3Nlcy5wb3BwZXJDbG9zZV06ICFvcGVuIH0pICtcclxuICAgICAgICAgICAgXCIgXCIgK1xyXG4gICAgICAgICAgICBjbGFzc2VzLnBvcHBlck5hdlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxHcm93XHJcbiAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cclxuICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UGFwZXI+XHJcbiAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcm9wZG93bkl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg2YXYrdmF2K/Ysdi22Kcg2KjZhyDYp9uM2YXbjNmEINi02YXYpyDZvtin2LPYriDYr9in2K9cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINi02YXYpyDbtSDZiNi424zZgdmHINis2K/bjNivINiv2KfYsduM2K9cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINin2LIg2K3Yp9mE2Kcg2LTZhdinINio2Kcg2LnZhNuM2LHYttinINiv2YjYs9iqINmH2LPYqtuM2K9cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINin2LnZhNin2YYg2K/bjNqv2LFcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJvcGRvd25JdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgINin2LnZhNin2YYg2K/bjNqv2LFcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvUG9wcGVycz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj17c2l6ZS53aWR0aCA+IDk1OSA/IFwidHJhbnNwYXJlbnRcIiA6IFwid2hpdGVcIn1cclxuICAgICAgICBqdXN0SWNvbj17c2l6ZS53aWR0aCA+IDk1OX1cclxuICAgICAgICBzaW1wbGU9eyEoc2l6ZS53aWR0aCA+IDk1OSl9XHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlBlcnNvblwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9XHJcbiAgICAgID5cclxuICAgICAgICA8UGVyc29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uc30gLz5cclxuICAgICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rVGV4dH0+2K3Ys9in2Kgg2qnYp9ix2KjYsduMPC9wPlxyXG4gICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLyplc2xpbnQtZGlzYWJsZSovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiO1xyXG5pbXBvcnQgSGlkZGVuIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiO1xyXG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIjtcclxuaW1wb3J0IEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIjtcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBBZG1pbk5hdmJhckxpbmtzIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvQWRtaW5OYXZiYXJMaW5rcy5qc1wiO1xyXG5pbXBvcnQgUlRMTmF2YmFyTGlua3MgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9SVExOYXZiYXJMaW5rcy5qc1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiYXNzZXRzL2pzcy9uZXh0anMtbWF0ZXJpYWwtZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZWJhclN0eWxlLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKHByb3BzKSB7XHJcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgY3VycmVudCByb3V0ZVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNyZWF0ZXMgc3R5bGVzIGZvciB0aGlzIGNvbXBvbmVudFxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy8gdmVyaWZpZXMgaWYgcm91dGVOYW1lIGlzIHRoZSBvbmUgYWN0aXZlIChpbiBicm93c2VyIGlucHV0KVxyXG4gIGZ1bmN0aW9uIGFjdGl2ZVJvdXRlKHJvdXRlTmFtZSkge1xyXG4gICAgcmV0dXJuIHJvdXRlci5yb3V0ZS5pbmRleE9mKHJvdXRlTmFtZSkgPiAtMSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbiAgY29uc3QgeyBjb2xvciwgbG9nbywgaW1hZ2UsIGxvZ29UZXh0LCByb3V0ZXMgfSA9IHByb3BzO1xyXG4gIHZhciBsaW5rcyA9IChcclxuICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAge3JvdXRlcy5tYXAoKHByb3AsIGtleSkgPT4ge1xyXG4gICAgICAgIHZhciBhY3RpdmVQcm8gPSBcIiBcIjtcclxuICAgICAgICB2YXIgbGlzdEl0ZW1DbGFzc2VzO1xyXG4gICAgICAgIGlmIChwcm9wLnBhdGggPT09IFwiL3VwZ3JhZGUtdG8tcHJvXCIpIHtcclxuICAgICAgICAgIGFjdGl2ZVBybyA9IGNsYXNzZXMuYWN0aXZlUHJvICsgXCIgXCI7XHJcbiAgICAgICAgICBsaXN0SXRlbUNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgW1wiIFwiICsgY2xhc3Nlc1tjb2xvcl1dOiB0cnVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxpc3RJdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzW2NvbG9yXV06IGFjdGl2ZVJvdXRlKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3aGl0ZUZvbnRDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICBbXCIgXCIgKyBjbGFzc2VzLndoaXRlRm9udF06XHJcbiAgICAgICAgICAgIGFjdGl2ZVJvdXRlKHByb3AubGF5b3V0ICsgcHJvcC5wYXRoKSB8fFxyXG4gICAgICAgICAgICBwcm9wLnBhdGggPT09IFwiL3VwZ3JhZGUtdG8tcHJvXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb3AubGF5b3V0ICsgcHJvcC5wYXRofSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YWN0aXZlUHJvICsgY2xhc3Nlcy5pdGVtfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtTGluayArIGxpc3RJdGVtQ2xhc3Nlc30+XHJcbiAgICAgICAgICAgICAgICB7dHlwZW9mIHByb3AuaWNvbiA9PT0gXCJzdHJpbmdcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5pdGVtSWNvbiwgd2hpdGVGb250Q2xhc3Nlcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgW2NsYXNzZXMuaXRlbUljb25SVExdOiBwcm9wcy5ydGxBY3RpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8cHJvcC5pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuaXRlbUljb24sIHdoaXRlRm9udENsYXNzZXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLml0ZW1JY29uUlRMXTogcHJvcHMucnRsQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvcHMucnRsQWN0aXZlID8gcHJvcC5ydGxOYW1lIDogcHJvcC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5pdGVtVGV4dCwgd2hpdGVGb250Q2xhc3Nlcywge1xyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzc2VzLml0ZW1UZXh0UlRMXTogcHJvcHMucnRsQWN0aXZlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVR5cG9ncmFwaHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvTGlzdD5cclxuICApO1xyXG4gIHZhciBicmFuZCA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tP3JlZj1uanNtZC1zaWRlYmFyXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5sb2dvTGluaywge1xyXG4gICAgICAgICAgW2NsYXNzZXMubG9nb0xpbmtSVExdOiBwcm9wcy5ydGxBY3RpdmUsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29JbWFnZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2xvZ29UZXh0fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgIGFuY2hvcj17cHJvcHMucnRsQWN0aXZlID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCJ9XHJcbiAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xhc3NOYW1lcyhjbGFzc2VzLmRyYXdlclBhcGVyLCB7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyUGFwZXJSVExdOiBwcm9wcy5ydGxBY3RpdmUsXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xvc2U9e3Byb3BzLmhhbmRsZURyYXdlclRvZ2dsZX1cclxuICAgICAgICAgIE1vZGFsUHJvcHM9e3tcclxuICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JyYW5kfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhcldyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7cHJvcHMucnRsQWN0aXZlID8gPFJUTE5hdmJhckxpbmtzIC8+IDogPEFkbWluTmF2YmFyTGlua3MgLz59XHJcbiAgICAgICAgICAgIHtsaW5rc31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2ltYWdlICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgaW1hZ2UgKyBcIilcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDwvSGlkZGVuPlxyXG4gICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIGFuY2hvcj17cHJvcHMucnRsQWN0aXZlID8gXCJyaWdodFwiIDogXCJsZWZ0XCJ9XHJcbiAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgICAgIG9wZW5cclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcGFwZXI6IGNsYXNzTmFtZXMoY2xhc3Nlcy5kcmF3ZXJQYXBlciwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmRyYXdlclBhcGVyUlRMXTogcHJvcHMucnRsQWN0aXZlLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JyYW5kfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2lkZWJhcldyYXBwZXJ9PntsaW5rc308L2Rpdj5cclxuICAgICAgICAgIHtpbWFnZSAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGltYWdlICsgXCIpXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8L0hpZGRlbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblNpZGViYXIucHJvcFR5cGVzID0ge1xyXG4gIHJ0bEFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaGFuZGxlRHJhd2VyVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBiZ0NvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgXCJ3aGl0ZVwiLFxyXG4gICAgXCJwdXJwbGVcIixcclxuICAgIFwiYmx1ZVwiLFxyXG4gICAgXCJncmVlblwiLFxyXG4gICAgXCJvcmFuZ2VcIixcclxuICAgIFwicmVkXCIsXHJcbiAgXSksXHJcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsb2dvVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBjcmVhdGVzIGEgYmVhdXRpZnVsIHNjcm9sbGJhclxyXG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tIFwicGVyZmVjdC1zY3JvbGxiYXJcIjtcclxuaW1wb3J0IFwicGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzc1wiO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvTmF2YmFyLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIuanNcIjtcclxuaW1wb3J0IEZpeGVkUGx1Z2luIGZyb20gXCJjb21wb25lbnRzL0ZpeGVkUGx1Z2luL0ZpeGVkUGx1Z2luLmpzXCI7XHJcblxyXG5pbXBvcnQgcm91dGVzIGZyb20gXCJyb3V0ZXMuanNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcImFzc2V0cy9qc3MvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZC9sYXlvdXRzL2FkbWluU3R5bGUuanNcIjtcclxuXHJcbmltcG9ydCBiZ0ltYWdlIGZyb20gXCJhc3NldHMvaW1nL3NpZGViYXItMi5qcGdcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcImFzc2V0cy9pbWcvcmVhY3Rsb2dvLnBuZ1wiO1xyXG5cclxubGV0IHBzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgLy8gdXNlZCBmb3IgY2hlY2tpbmcgY3VycmVudCByb3V0ZVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIHN0eWxlc1xyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy8gcmVmIHRvIGhlbHAgdXMgaW5pdGlhbGl6ZSBQZXJmZWN0U2Nyb2xsYmFyIG9uIHdpbmRvd3MgZGV2aWNlc1xyXG4gIGNvbnN0IG1haW5QYW5lbCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIC8vIHN0YXRlcyBhbmQgZnVuY3Rpb25zXHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShiZ0ltYWdlKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IFJlYWN0LnVzZVN0YXRlKFwid2hpdGVcIik7XHJcbiAgY29uc3QgW2ZpeGVkQ2xhc3Nlcywgc2V0Rml4ZWRDbGFzc2VzXSA9IFJlYWN0LnVzZVN0YXRlKFwiZHJvcGRvd24gc2hvd1wiKTtcclxuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VDbGljayA9IChpbWFnZSkgPT4ge1xyXG4gICAgc2V0SW1hZ2UoaW1hZ2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ29sb3JDbGljayA9IChjb2xvcikgPT4ge1xyXG4gICAgc2V0Q29sb3IoY29sb3IpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRml4ZWRDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChmaXhlZENsYXNzZXMgPT09IFwiZHJvcGRvd25cIikge1xyXG4gICAgICBzZXRGaXhlZENsYXNzZXMoXCJkcm9wZG93biBzaG93XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0Rml4ZWRDbGFzc2VzKFwiZHJvcGRvd25cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmF3ZXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcclxuICB9O1xyXG4gIGNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvYWRtaW4vbWFwc1wiO1xyXG4gIH07XHJcbiAgY29uc3QgcmVzaXplRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gOTYwKSB7XHJcbiAgICAgIHNldE1vYmlsZU9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gaW5pdGlhbGl6ZSBhbmQgZGVzdHJveSB0aGUgUGVyZmVjdFNjcm9sbGJhciBwbHVnaW5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpID4gLTEpIHtcclxuICAgICAgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihtYWluUGFuZWwuY3VycmVudCwge1xyXG4gICAgICAgIHN1cHByZXNzU2Nyb2xsWDogdHJ1ZSxcclxuICAgICAgICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVGdW5jdGlvbik7XHJcbiAgICAvLyBTcGVjaWZ5IGhvdyB0byBjbGVhbiB1cCBhZnRlciB0aGlzIGVmZmVjdDpcclxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoXCJXaW5cIikgPiAtMSkge1xyXG4gICAgICAgIHBzLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVGdW5jdGlvbik7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUGFuZWxdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgcm91dGVzPXtyb3V0ZXN9XHJcbiAgICAgICAgbG9nb1RleHQ9e1wiQ3JlYXRpdmUgVGltXCJ9XHJcbiAgICAgICAgbG9nbz17bG9nb31cclxuICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgaGFuZGxlRHJhd2VyVG9nZ2xlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cclxuICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW5QYW5lbH0gcmVmPXttYWluUGFuZWx9PlxyXG4gICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgIHJvdXRlcz17cm91dGVzfVxyXG4gICAgICAgICAgaGFuZGxlRHJhd2VyVG9nZ2xlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XHJcbiAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBPbiB0aGUgL21hcHMgcm91dGUgd2Ugd2FudCB0aGUgbWFwIHRvIGJlIG9uIGZ1bGwgc2NyZWVuIC0gdGhpcyBpcyBub3QgcG9zc2libGUgaWYgdGhlIGNvbnRlbnQgYW5kIGNvbmF0aW5lciBjbGFzc2VzIGFyZSBwcmVzZW50IGJlY2F1c2UgdGhleSBoYXZlIHNvbWUgcGFkZGluZ3Mgd2hpY2ggd291bGQgbWFrZSB0aGUgbWFwIHNtYWxsZXIgKi99XHJcbiAgICAgICAge2dldFJvdXRlKCkgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFwfT57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Z2V0Um91dGUoKSA/IDxGb290ZXIgLz4gOiBudWxsfVxyXG4gICAgICAgIDxGaXhlZFBsdWdpblxyXG4gICAgICAgICAgaGFuZGxlSW1hZ2VDbGljaz17aGFuZGxlSW1hZ2VDbGlja31cclxuICAgICAgICAgIGhhbmRsZUNvbG9yQ2xpY2s9e2hhbmRsZUNvbG9yQ2xpY2t9XHJcbiAgICAgICAgICBiZ0NvbG9yPXtjb2xvcn1cclxuICAgICAgICAgIGJnSW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgaGFuZGxlRml4ZWRDbGljaz17aGFuZGxlRml4ZWRDbGlja31cclxuICAgICAgICAgIGZpeGVkQ2xhc3Nlcz17Zml4ZWRDbGFzc2VzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChcbiAgICAgICAgICBhZGRMb2NhbGUoZGVsQmFzZVBhdGgocGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUpLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgICAgICBoYXNCYXNlUGF0aChyZXNvbHZlZEFzKSA/IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICAgICAgKS5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUocmVzb2x2ZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fCAob3B0aW9ucy5zY3JvbGwgPyB7IHg6IDAsIHk6IDAgfSA6IG51bGwpXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW5cbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIG5ld1VybCA9IGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhub3JtYWxpemVMb2NhbGVQYXRoKGFzUGF0aCwgbG9jYWxlcykucGF0aG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgY29uc3QgZnNQYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSxcbiAgICAgICAgICBsb2NhbGVzXG4gICAgICAgICkucGF0aG5hbWVcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuLy8gbGF5b3V0IGZvciB0aGlzIHBhZ2VcclxuaW1wb3J0IEFkbWluIGZyb20gXCJsYXlvdXRzL0FkbWluLmpzXCI7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSBcImNvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qc1wiO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanNcIjtcclxuaW1wb3J0IEN1c3RvbUlucHV0IGZyb20gXCJjb21wb25lbnRzL0N1c3RvbUlucHV0L0N1c3RvbUlucHV0LmpzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkLmpzXCI7XHJcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEhlYWRlci5qc1wiO1xyXG5pbXBvcnQgQ2FyZEF2YXRhciBmcm9tIFwiY29tcG9uZW50cy9DYXJkL0NhcmRBdmF0YXIuanNcIjtcclxuaW1wb3J0IENhcmRCb2R5IGZyb20gXCJjb21wb25lbnRzL0NhcmQvQ2FyZEJvZHkuanNcIjtcclxuaW1wb3J0IENhcmRGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLmpzXCI7XHJcblxyXG5pbXBvcnQgYXZhdGFyIGZyb20gXCJhc3NldHMvaW1nL2ZhY2VzL21hcmMuanBnXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZENhdGVnb3J5V2hpdGU6IHtcclxuICAgIGNvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsLjYyKVwiLFxyXG4gICAgbWFyZ2luOiBcIjBcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gIH0sXHJcbiAgY2FyZFRpdGxlV2hpdGU6IHtcclxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcclxuICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcclxuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkVGl0bGVXaGl0ZX0+RWRpdCBQcm9maWxlPC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENhdGVnb3J5V2hpdGV9PkNvbXBsZXRlIHlvdXIgcHJvZmlsZTwvcD5cclxuICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs1fT5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiQ29tcGFueSAoZGlzYWJsZWQpXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbXBhbnktZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3QtbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxDdXN0b21JbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0LW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiQ2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiQ291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiUG9zdGFsIENvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicG9zdGFsLWNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIHN0eWxlPXt7IGNvbG9yOiBcIiNBQUFBQUFcIiB9fT5BYm91dCBtZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0PVwiTGFtYm9yZ2hpbmkgTWVyY3ksIFlvdXIgY2hpY2sgc2hlIHNvIHRoaXJzdHksIEknbSBpbiB0aGF0IHR3byBzZWF0IExhbWJvLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhYm91dC1tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93czogNSxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+VXBkYXRlIFByb2ZpbGU8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICA8Q2FyZCBwcm9maWxlPlxyXG4gICAgICAgICAgICA8Q2FyZEF2YXRhciBwcm9maWxlPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcGFibG9cIiBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXJ9IGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0NhcmRBdmF0YXI+XHJcbiAgICAgICAgICAgIDxDYXJkQm9keSBwcm9maWxlPlxyXG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENhdGVnb3J5fT5DRU8gLyBDTy1GT1VOREVSPC9oNj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRUaXRsZX0+QWxlYyBUaG9tcHNvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgIERvbntcIidcIn10IGJlIHNjYXJlZCBvZiB0aGUgdHJ1dGggYmVjYXVzZSB3ZSBuZWVkIHRvIHJlc3RhcnQgdGhlXHJcbiAgICAgICAgICAgICAgICBodW1hbiBmb3VuZGF0aW9uIGluIHRydXRoIEFuZCBJIGxvdmUgeW91IGxpa2UgS2FueWUgbG92ZXMgS2FueWVcclxuICAgICAgICAgICAgICAgIEkgbG92ZSBSaWNrIE93ZW5z4oCZIGJlZCBkZXNpZ24gYnV0IHRoZSBiYWNrIGlzLi4uXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgcm91bmQ+XHJcbiAgICAgICAgICAgICAgICBGb2xsb3dcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5Vc2VyUHJvZmlsZS5sYXlvdXQgPSBBZG1pbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlO1xyXG4iLCIvKiFcclxuXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qICogTmV4dEpTIE1hdGVyaWFsIERhc2hib2FyZCB2MS4xLjAgYmFzZWQgb24gTWF0ZXJpYWwgRGFzaGJvYXJkIFJlYWN0IHYxLjkuMFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWRhc2hib2FyZFxyXG4qIENvcHlyaWdodCAyMDIxIENyZWF0aXZlIFRpbSAoaHR0cHM6Ly93d3cuY3JlYXRpdmUtdGltLmNvbSlcclxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1kYXNoYm9hcmQvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZClcclxuXHJcbiogQ29kZWQgYnkgQ3JlYXRpdmUgVGltXHJcblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG4qL1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uXCI7XHJcbmltcG9ydCBMaWJyYXJ5Qm9va3MgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5Qm9va3NcIjtcclxuaW1wb3J0IEJ1YmJsZUNoYXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIjtcclxuaW1wb3J0IExvY2F0aW9uT24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCI7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgVW5hcmNoaXZlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCI7XHJcbmltcG9ydCBMYW5ndWFnZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlXCI7XHJcblxyXG5jb25zdCBkYXNoYm9hcmRSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogXCIvZGFzaGJvYXJkXCIsXHJcbiAgICBuYW1lOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgcnRsTmFtZTogXCLZhNmI2K3YqSDYp9mE2YLZitin2K/YqVwiLFxyXG4gICAgaWNvbjogRGFzaGJvYXJkLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3VzZXItcHJvZmlsZVwiLFxyXG4gICAgbmFtZTogXCJVc2VyIFByb2ZpbGVcIixcclxuICAgIHJ0bE5hbWU6IFwi2YXZhNmBINiq2LnYsdmK2YHZiiDZhNmE2YXYs9iq2K7Yr9mFXCIsXHJcbiAgICBpY29uOiBQZXJzb24sXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvdGFibGUtbGlzdFwiLFxyXG4gICAgbmFtZTogXCJUYWJsZSBMaXN0XCIsXHJcbiAgICBydGxOYW1lOiBcItmC2KfYptmF2Kkg2KfZhNis2K/ZiNmEXCIsXHJcbiAgICBpY29uOiBcImNvbnRlbnRfcGFzdGVcIixcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi90eXBvZ3JhcGh5XCIsXHJcbiAgICBuYW1lOiBcIlR5cG9ncmFwaHlcIixcclxuICAgIHJ0bE5hbWU6IFwi2LfYqNin2LnYqVwiLFxyXG4gICAgaWNvbjogTGlicmFyeUJvb2tzLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL2ljb25zXCIsXHJcbiAgICBuYW1lOiBcIkljb25zXCIsXHJcbiAgICBydGxOYW1lOiBcItin2YTYsdmF2YjYslwiLFxyXG4gICAgaWNvbjogQnViYmxlQ2hhcnQsXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbWFwc1wiLFxyXG4gICAgbmFtZTogXCJNYXBzXCIsXHJcbiAgICBydGxOYW1lOiBcItiu2LHYp9im2LdcIixcclxuICAgIGljb246IExvY2F0aW9uT24sXHJcblxyXG4gICAgbGF5b3V0OiBcIi9hZG1pblwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogXCIvbm90aWZpY2F0aW9uc1wiLFxyXG4gICAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgICBydGxOYW1lOiBcItil2K7Yt9in2LHYp9iqXCIsXHJcbiAgICBpY29uOiBOb3RpZmljYXRpb25zLFxyXG5cclxuICAgIGxheW91dDogXCIvYWRtaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6IFwiL3J0bC1wYWdlXCIsXHJcbiAgICBuYW1lOiBcIlJUTCBTdXBwb3J0XCIsXHJcbiAgICBydGxOYW1lOiBcItm+2LTYqtuM2KjYp9mG24wg2KfYsiDYsdin2LPYqiDYqNmHINqG2b5cIixcclxuICAgIGljb246IExhbmd1YWdlLFxyXG5cclxuICAgIGxheW91dDogXCIvcnRsXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiBcIi91cGdyYWRlLXRvLXByb1wiLFxyXG4gICAgbmFtZTogXCJVcGdyYWRlIFRvIFBST1wiLFxyXG4gICAgcnRsTmFtZTogXCLYp9mE2KrYt9mI2LEg2YTZhNin2K3Yqtix2KfZgdmK2KlcIixcclxuICAgIGljb246IFVuYXJjaGl2ZSxcclxuXHJcbiAgICBsYXlvdXQ6IFwiL2FkbWluXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hib2FyZFJvdXRlcztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQnViYmxlQ2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DbGVhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYW5ndWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUJvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJzb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVW5hcmNoaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGVyZmVjdC1zY3JvbGxiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==