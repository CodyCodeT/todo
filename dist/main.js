/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Roboto', sans-serif;
    background-color: #c1c1c1;
}
#container {
    display: grid;
    grid-template-rows: 200px auto;
    grid-template-columns: 250px auto;
    width: 100%;
    height: 100vh;
}
#sidebar {
    position: fixed;
    width: 250px;
    height: 100%;
    /* height: calc(100%-50px); */
    background: linear-gradient(#ffffff, white 40px) ;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 80px;
    overflow-y: scroll;
    
}
#header {
    height: 200px;
    width: 100%;
    grid-area: 1 / 2 / 3 / 3;
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: left;
    align-items: center;
}
#newtodo {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #02d0b1;
    color: #ffffff;
    font-size: 30px;
    border: none;
    &:hover {
        cursor: pointer;
        background: #02a88f;
    }
}
#todos {
    grid-area: 1 / 2 / 3 / 3;
    padding: 20px;
    height: 200%;
    overflow-y: scroll;
    background-image: linear-gradient(to bottom, #ffffff, #000000);
}
#newproject {
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 50px;
    width: 250px;
    background: white;
    color: #707070;
    font-size: 20px;
    border: none;
    &:hover {
        cursor: pointer;
    }
}
#formcontainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.todobox {
    width: 450px;
    height: 300px;
    padding: 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
    background-color: #c1c1c1;
}
.sidebarelement {
    background: none;
    border: none;
    margin-bottom: 15px;
    text-align: left;
    padding: 5px;

    &:hover {
        cursor: pointer;
        background: #dadada;
    }
}
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-thumb {
    background: #888;
}
::-webkit-scrollbar-thumb:hover {
    background: #555;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,iCAAiC;IACjC,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC,WAAW;IACX,aAAa;AACjB;AACA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,iDAAiD;IACjD,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;;AAEtB;AACA;IACI,aAAa;IACb,WAAW;IACX,wBAAwB;IACxB,aAAa;IACb,gCAAgC;IAChC,2CAA2C;IAC3C,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,eAAe;IACf,YAAY;IACZ;QACI,eAAe;QACf,mBAAmB;IACvB;AACJ;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,8DAA8D;AAClE;AACA;IACI,eAAe;IACf,WAAW;IACX,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,YAAY;IACZ;QACI,eAAe;IACnB;AACJ;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;AACd;AACA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;AAC7B;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;;IAEZ;QACI,eAAe;QACf,mBAAmB;IACvB;AACJ;AACA;IACI,WAAW;AACf;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    font-family: 'Roboto', sans-serif;\n    background-color: #c1c1c1;\n}\n#container {\n    display: grid;\n    grid-template-rows: 200px auto;\n    grid-template-columns: 250px auto;\n    width: 100%;\n    height: 100vh;\n}\n#sidebar {\n    position: fixed;\n    width: 250px;\n    height: 100%;\n    /* height: calc(100%-50px); */\n    background: linear-gradient(#ffffff, white 40px) ;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    padding-bottom: 80px;\n    overflow-y: scroll;\n    \n}\n#header {\n    height: 200px;\n    width: 100%;\n    grid-area: 1 / 2 / 3 / 3;\n    padding: 20px;\n    border-bottom: 1px solid #e0e0e0;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: left;\n    align-items: center;\n}\n#newtodo {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background: #02d0b1;\n    color: #ffffff;\n    font-size: 30px;\n    border: none;\n    &:hover {\n        cursor: pointer;\n        background: #02a88f;\n    }\n}\n#todos {\n    grid-area: 1 / 2 / 3 / 3;\n    padding: 20px;\n    height: 200%;\n    overflow-y: scroll;\n    background-image: linear-gradient(to bottom, #ffffff, #000000);\n}\n#newproject {\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    height: 50px;\n    width: 250px;\n    background: white;\n    color: #707070;\n    font-size: 20px;\n    border: none;\n    &:hover {\n        cursor: pointer;\n    }\n}\n#formcontainer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n.todobox {\n    width: 450px;\n    height: 300px;\n    padding: 15px;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 15px;\n    background-color: #c1c1c1;\n}\n.sidebarelement {\n    background: none;\n    border: none;\n    margin-bottom: 15px;\n    text-align: left;\n    padding: 5px;\n\n    &:hover {\n        cursor: pointer;\n        background: #dadada;\n    }\n}\n::-webkit-scrollbar {\n    width: 10px;\n}\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayAll.js":
/*!***************************!*\
  !*** ./src/displayAll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAll)
/* harmony export */ });
/* harmony import */ var _todoLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLoader */ "./src/todoLoader.js");


function displayAll(projectListArray) {
    const todos = document.querySelector('#todos')
    todos.innerHTML = ''
    for (let i = 0; i < projectListArray.length; i++) {
            (0,_todoLoader__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray, i)
    }
}//project list array stores a list of todos from the extension .todos
//I need to generate all the todos by looping through the length of the todo list
//projectListArray[i]>todos[j]>1,2,3

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _sidebarInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarInterface */ "./src/sidebarInterface.js");
/* harmony import */ var _todoLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLoader */ "./src/todoLoader.js");



function initialize(projectListArray) {
  const container = document.querySelector("#container");
  const sidebar = document.createElement("div");
  const newTodo = document.createElement("button");
  const todos = document.createElement("div");
  const newProject = document.createElement("button");
  todos.id = "todos";
  newTodo.id = "newtodo";
  sidebar.id = "sidebar";
  newProject.id = "newproject";
  newTodo.textContent = "+";
  newProject.textContent = "New Project +";
  newTodo.title = "Add a new Todo";
  container.appendChild(todos);
  container.appendChild(newTodo);
  container.appendChild(sidebar);
  container.appendChild(newProject);
  (0,_sidebarInterface__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray);
  todos.innerHTML = ''
  ;(0,_todoLoader__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray, 0);
}


/***/ }),

/***/ "./src/projectCreate.js":
/*!******************************!*\
  !*** ./src/projectCreate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreate)
/* harmony export */ });
function projectCreate(name, projectListArray) {
    projectListArray.push({ name: name, todos: [] });
    console.table(projectListArray);
}
//here we create an array to store todo's in a project


/***/ }),

/***/ "./src/projectInterface.js":
/*!*********************************!*\
  !*** ./src/projectInterface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectInterface)
/* harmony export */ });
/* harmony import */ var _projectCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreate */ "./src/projectCreate.js");
/* harmony import */ var _sidebarInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarInterface */ "./src/sidebarInterface.js");



function projectInterface(projectListArray) {
  const container = document.querySelector("#formcontainer");
  const form = document.createElement("form");
  const projectName = document.createElement("input");
  const submit = document.createElement("button");
  const sidebar = document.querySelector('#sidebar')
  
  container.style.display = 'flex'
  
  submit.textContent = "Submit";
  projectName.placeholder = "New Project Name";
  
  container.appendChild(form);
  form.appendChild(projectName);
  form.appendChild(submit);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    (0,_projectCreate__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName.value, projectListArray);
    const newProjectButton = document.querySelector('#newproject')
    const newTodoButton = document.querySelector('#newtodo')
    newProjectButton.disabled = false
    newTodoButton.disabled = false
    container.style.display = 'none'
    container.innerHTML = ''
    sidebar.innerHTML = ''
    ;(0,_sidebarInterface__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray);
  });
}


/***/ }),

/***/ "./src/sidebarInterface.js":
/*!*********************************!*\
  !*** ./src/sidebarInterface.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sidebarInterface)
/* harmony export */ });
/* harmony import */ var _todoLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLoader */ "./src/todoLoader.js");
/* harmony import */ var _displayAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAll */ "./src/displayAll.js");



function sidebarInterface(projectListArray) {
  const sidebar = document.querySelector("#sidebar");
  const showAll = document.createElement('button')
  const todos = document.querySelector('#todos')
  showAll.textContent = 'All'
  showAll.classList = 'sidebarelement'

  sidebar.appendChild(showAll)

//create elements for the projects in the sidebar
let previouslySelected = null

  for (let i = 0; i < projectListArray.length; i++) {
    const element = document.createElement("button");
    element.addEventListener("click", (e) => {
      todos.innerHTML = ''
      ;(0,_todoLoader__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray, i)

      element.value = i

      e.target.id = 'selected'
      if (showAll.id === 'selected') {
        previouslySelected = showAll;
      }
      
      if (previouslySelected) {
        previouslySelected.removeAttribute('id')
      }

      previouslySelected = e.target

    });
    showAll.addEventListener('click', (e) => {
      (0,_displayAll__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray);
      e.target.id = 'selected'
      // previouslySelected = e.target
      if (previouslySelected) {
        previouslySelected.removeAttribute('id')
      }
    }) 


    element.textContent = `${projectListArray[i].name}`;
    element.classList = "sidebarelement";
    sidebar.appendChild(element);
  }
}


/***/ }),

/***/ "./src/todoFactory.js":
/*!****************************!*\
  !*** ./src/todoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoFactory)
/* harmony export */ });

function todoFactory(title, description, dueDate, priority, projectNo, projectListArray) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    projectListArray[`${projectNo}`].todos.push(this);
    console.table(projectListArray[`${projectNo}`].todos);
};

//need to define defaultProject at index.js and somehow get the value to have permanance


/***/ }),

/***/ "./src/todoInterface.js":
/*!******************************!*\
  !*** ./src/todoInterface.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory.js */ "./src/todoFactory.js");
/* harmony import */ var _todoLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoLoader.js */ "./src/todoLoader.js");



function toDo(projectListArray) {
  const title = document.createElement("input");
  const container = document.querySelector("#formcontainer");
  const description = document.createElement("input");
  const dueDate = document.createElement("input");
  const priority = document.createElement("select");
  const submit = document.createElement("button");
  const todoForm = document.createElement("form");
  const projectList = document.createElement("select");
  const todos = document.querySelector("#todos");

  container.style.display = "flex";

  title.placeholder = "Title";
  description.placeholder = "Description";
  dueDate.placeholder = "Due Date";
  priority.placeholder = "Priority";
  submit.textContent = "Submit";

  const selectedProject = document.querySelector("#selected");
  const firstOption = document.createElement("option");
  if (selectedProject != null && selectedProject.textContent != 'All') {
    firstOption.textContent = selectedProject.textContent;
    firstOption.value = selectedProject.value;
    projectList.appendChild(firstOption);
  }

//priorities are handled here

  const highPriority = document.createElement("option");
  highPriority.textContent = "High Priority";
  highPriority.value = 2
  const normalPriority = document.createElement("option");
  normalPriority.textContent = "Normal Priority";
  normalPriority.value = 1
  normalPriority.selected = true
  const lowPriority = document.createElement("option");
  lowPriority.textContent = "Low Priority";
  lowPriority.value = 0

  for (let i = 0; i < projectListArray.length; i++) {
    var option = document.createElement("option");
    projectList.appendChild(option);
    option.text = projectListArray[i].name;
    option.value = [i];
  }

  todoForm.appendChild(title);
  todoForm.appendChild(description);
  todoForm.appendChild(dueDate);

  todoForm.appendChild(priority);
  priority.appendChild(highPriority);
  priority.appendChild(normalPriority);
  priority.appendChild(lowPriority);

  todoForm.appendChild(projectList);
  todoForm.appendChild(submit);
  container.appendChild(todoForm);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const createTodo = new _todoFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      projectList.value,
      projectListArray
    );

    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      if (e.key === 'Escape' && newTodoButton.disabled == true) {
        (0,_todoLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray, selectedProject)
        console.log('object');
      } else { 
        return
      }
    })
    
    todos.innerHTML = "";
    (0,_todoLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray, projectList.value);
    container.style.display = "none";
    const newTodoButton = document.querySelector("#newtodo");
    const newProjectButton = document.querySelector("#newproject");
    newTodoButton.disabled = false;
    newProjectButton.disabled = false;
    container.innerHTML = "";
  });


}



/***/ }),

/***/ "./src/todoLoader.js":
/*!***************************!*\
  !*** ./src/todoLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoLoader)
/* harmony export */ });
/* harmony import */ var _todoSorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoSorter */ "./src/todoSorter.js");
/* harmony import */ var _displayAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAll */ "./src/displayAll.js");


function todoLoader(projectListArray, i) {
  const todos = document.querySelector("#todos");
  const selected = document.querySelector("#selected");
  

  (0,_todoSorter__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray);

  for (let j = 0; j < projectListArray[i].todos.length; j++) {
    const todoBox = document.createElement("div");
    todoBox.classList = "todobox";
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const deleteTodo = document.createElement("button");

    deleteTodo.textContent = "Delete";
    title.textContent = `${projectListArray[i].todos[j].title}`;
    description.textContent = `${projectListArray[i].todos[j].description}`;
    dueDate.textContent = `${projectListArray[i].todos[j].dueDate}`;

    deleteTodo.addEventListener("click", () => {
      projectListArray[i].todos.splice(j, 1);
      todos.innerHTML = "";
      console.log(selected.textContent);
      if (selected != null && selected.textContent === "All") {
        (0,_displayAll__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray);
      } else {
        todoLoader(projectListArray, i);
      }
    });

    todos.appendChild(todoBox);
    todoBox.appendChild(title);
    todoBox.appendChild(description);
    todoBox.appendChild(dueDate);
    todoBox.appendChild(deleteTodo);
  }
}


/***/ }),

/***/ "./src/todoSorter.js":
/*!***************************!*\
  !*** ./src/todoSorter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortTodos)
/* harmony export */ });
function sortTodos(projectListArray) {
    for (let i = 0; i < projectListArray.length; i++) {
        projectListArray[i].todos.sort((a, b) => b.priority - a.priority);
        
    }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize.js */ "./src/initialize.js");
/* harmony import */ var _todoInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoInterface.js */ "./src/todoInterface.js");
/* harmony import */ var _projectInterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectInterface.js */ "./src/projectInterface.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





var projectListArray = [{ name: "default", todos: [] }];
//title, description, dueDate, priority

(0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray);

const newTodoForm = document.querySelector("#newtodo");
newTodoForm.addEventListener("click", function () {
  (0,_todoInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"])(projectListArray);
  newTodoForm.disabled = true
  newProject.disabled = true
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && newTodoForm.disabled == true) {
      const form = document.querySelector('#formcontainer')
      form.innerHTML = ''
      form.style.display = 'none'
      newTodoForm.disabled = false
      newProject.disabled = false
    } else { 
      return
    }
  })
});
const newProject = document.querySelector("#newproject");
newProject.addEventListener("click", function () {
  (0,_projectInterface_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectListArray);
  newTodoForm.disabled = true
  newProject.disabled = true
  document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && newProject.disabled == true) {
    const form = document.querySelector('#formcontainer')
    form.innerHTML = ''
    form.style.display = 'none'
    newTodoForm.disabled = false
    newProject.disabled = false
  } else { 
    return
  }
})
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNIO0FBQ2U7QUFDdkI7O0FBRTlCLDBCQUEwQiw0QkFBNEI7QUFDdEQ7O0FBRUEsMERBQVU7O0FBRVY7QUFDQTtBQUNBLEVBQUUsNkRBQUk7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLEVBQUUsZ0VBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZGlzcGxheUFsbC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0Q3JlYXRlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdEludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NpZGViYXJJbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvTG9hZGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb1NvcnRlci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG59XG4jY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAwcHggYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbiNzaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJS01MHB4KTsgKi9cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgd2hpdGUgNDBweCkgO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBcbn1cbiNoZWFkZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI25ld3RvZG8ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMDJkMGIxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAyYTg4ZjtcbiAgICB9XG59XG4jdG9kb3Mge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMjAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgIzAwMDAwMCk7XG59XG4jbmV3cHJvamVjdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4jZm9ybWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDE7XG59XG4udG9kb2JveCB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xufVxuLnNpZGViYXJlbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2RhZGFkYTtcbiAgICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICM4ODg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGlEQUFpRDtJQUNqRCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQywyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7QUFDSjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDhEQUE4RDtBQUNsRTtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1o7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTs7SUFFWjtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7QUFDSjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xcbn1cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4jc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogY2FsYygxMDAlLTUwcHgpOyAqL1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgd2hpdGUgNDBweCkgO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBcXG59XFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNuZXd0b2RvIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIHJpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6ICMwMmQwYjE7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDJhODhmO1xcbiAgICB9XFxufVxcbiN0b2RvcyB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAyMDAlO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYsICMwMDAwMDApO1xcbn1cXG4jbmV3cHJvamVjdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbiNmb3JtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi50b2RvYm94IHtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xcbn1cXG4uc2lkZWJhcmVsZW1lbnQge1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGFkYWRhO1xcbiAgICB9XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6ICM4ODg7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRvZG9Mb2FkZXIgZnJvbSBcIi4vdG9kb0xvYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QWxsKHByb2plY3RMaXN0QXJyYXkpIHtcbiAgICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpXG4gICAgdG9kb3MuaW5uZXJIVE1MID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRvZG9Mb2FkZXIocHJvamVjdExpc3RBcnJheSwgaSlcbiAgICB9XG59Ly9wcm9qZWN0IGxpc3QgYXJyYXkgc3RvcmVzIGEgbGlzdCBvZiB0b2RvcyBmcm9tIHRoZSBleHRlbnNpb24gLnRvZG9zXG4vL0kgbmVlZCB0byBnZW5lcmF0ZSBhbGwgdGhlIHRvZG9zIGJ5IGxvb3BpbmcgdGhyb3VnaCB0aGUgbGVuZ3RoIG9mIHRoZSB0b2RvIGxpc3Rcbi8vcHJvamVjdExpc3RBcnJheVtpXT50b2Rvc1tqXT4xLDIsMyIsImltcG9ydCBzaWRlYmFySW50ZXJmYWNlIGZyb20gXCIuL3NpZGViYXJJbnRlcmZhY2VcIjtcbmltcG9ydCB0b2RvTG9hZGVyIGZyb20gXCIuL3RvZG9Mb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZShwcm9qZWN0TGlzdEFycmF5KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZG9zLmlkID0gXCJ0b2Rvc1wiO1xuICBuZXdUb2RvLmlkID0gXCJuZXd0b2RvXCI7XG4gIHNpZGViYXIuaWQgPSBcInNpZGViYXJcIjtcbiAgbmV3UHJvamVjdC5pZCA9IFwibmV3cHJvamVjdFwiO1xuICBuZXdUb2RvLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0ICtcIjtcbiAgbmV3VG9kby50aXRsZSA9IFwiQWRkIGEgbmV3IFRvZG9cIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbiAgc2lkZWJhckludGVyZmFjZShwcm9qZWN0TGlzdEFycmF5KTtcbiAgdG9kb3MuaW5uZXJIVE1MID0gJydcbiAgdG9kb0xvYWRlcihwcm9qZWN0TGlzdEFycmF5LCAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RDcmVhdGUobmFtZSwgcHJvamVjdExpc3RBcnJheSkge1xuICAgIHByb2plY3RMaXN0QXJyYXkucHVzaCh7IG5hbWU6IG5hbWUsIHRvZG9zOiBbXSB9KTtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RMaXN0QXJyYXkpO1xufVxuLy9oZXJlIHdlIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0b2RvJ3MgaW4gYSBwcm9qZWN0XG4iLCJpbXBvcnQgcHJvamVjdENyZWF0ZSBmcm9tIFwiLi9wcm9qZWN0Q3JlYXRlXCI7XG5pbXBvcnQgc2lkZWJhckludGVyZmFjZSBmcm9tIFwiLi9zaWRlYmFySW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RJbnRlcmZhY2UocHJvamVjdExpc3RBcnJheSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1jb250YWluZXJcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpXG4gIFxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICBcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgcHJvamVjdE5hbWUucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0IE5hbWVcIjtcbiAgXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RDcmVhdGUocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RMaXN0QXJyYXkpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3cHJvamVjdCcpXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXd0b2RvJylcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICBuZXdUb2RvQnV0dG9uLmRpc2FibGVkID0gZmFsc2VcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuICAgIHNpZGViYXIuaW5uZXJIVE1MID0gJydcbiAgICBzaWRlYmFySW50ZXJmYWNlKHByb2plY3RMaXN0QXJyYXkpO1xuICB9KTtcbn1cbiIsImltcG9ydCB0b2RvTG9hZGVyIGZyb20gXCIuL3RvZG9Mb2FkZXJcIjtcbmltcG9ydCBkaXNwbGF5QWxsIGZyb20gXCIuL2Rpc3BsYXlBbGxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhckludGVyZmFjZShwcm9qZWN0TGlzdEFycmF5KSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gIGNvbnN0IHNob3dBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBjb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpXG4gIHNob3dBbGwudGV4dENvbnRlbnQgPSAnQWxsJ1xuICBzaG93QWxsLmNsYXNzTGlzdCA9ICdzaWRlYmFyZWxlbWVudCdcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNob3dBbGwpXG5cbi8vY3JlYXRlIGVsZW1lbnRzIGZvciB0aGUgcHJvamVjdHMgaW4gdGhlIHNpZGViYXJcbmxldCBwcmV2aW91c2x5U2VsZWN0ZWQgPSBudWxsXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHRvZG9zLmlubmVySFRNTCA9ICcnXG4gICAgICB0b2RvTG9hZGVyKHByb2plY3RMaXN0QXJyYXksIGkpXG5cbiAgICAgIGVsZW1lbnQudmFsdWUgPSBpXG5cbiAgICAgIGUudGFyZ2V0LmlkID0gJ3NlbGVjdGVkJ1xuICAgICAgaWYgKHNob3dBbGwuaWQgPT09ICdzZWxlY3RlZCcpIHtcbiAgICAgICAgcHJldmlvdXNseVNlbGVjdGVkID0gc2hvd0FsbDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHByZXZpb3VzbHlTZWxlY3RlZCkge1xuICAgICAgICBwcmV2aW91c2x5U2VsZWN0ZWQucmVtb3ZlQXR0cmlidXRlKCdpZCcpXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzbHlTZWxlY3RlZCA9IGUudGFyZ2V0XG5cbiAgICB9KTtcbiAgICBzaG93QWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGRpc3BsYXlBbGwocHJvamVjdExpc3RBcnJheSk7XG4gICAgICBlLnRhcmdldC5pZCA9ICdzZWxlY3RlZCdcbiAgICAgIC8vIHByZXZpb3VzbHlTZWxlY3RlZCA9IGUudGFyZ2V0XG4gICAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkKSB7XG4gICAgICAgIHByZXZpb3VzbHlTZWxlY3RlZC5yZW1vdmVBdHRyaWJ1dGUoJ2lkJylcbiAgICAgIH1cbiAgICB9KSBcblxuXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke3Byb2plY3RMaXN0QXJyYXlbaV0ubmFtZX1gO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0ID0gXCJzaWRlYmFyZWxlbWVudFwiO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdE5vLCBwcm9qZWN0TGlzdEFycmF5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHByb2plY3RMaXN0QXJyYXlbYCR7cHJvamVjdE5vfWBdLnRvZG9zLnB1c2godGhpcyk7XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdEFycmF5W2Ake3Byb2plY3ROb31gXS50b2Rvcyk7XG59O1xuXG4vL25lZWQgdG8gZGVmaW5lIGRlZmF1bHRQcm9qZWN0IGF0IGluZGV4LmpzIGFuZCBzb21laG93IGdldCB0aGUgdmFsdWUgdG8gaGF2ZSBwZXJtYW5hbmNlXG4iLCJpbXBvcnQgdG9kb0ZhY3RvcnkgZnJvbSBcIi4vdG9kb0ZhY3RvcnkuanNcIjtcbmltcG9ydCB0b2RvTG9hZGVyIGZyb20gXCIuL3RvZG9Mb2FkZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Ebyhwcm9qZWN0TGlzdEFycmF5KSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1jb250YWluZXJcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG9zXCIpO1xuXG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICBkdWVEYXRlLnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xuICBwcmlvcml0eS5wbGFjZWhvbGRlciA9IFwiUHJpb3JpdHlcIjtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkXCIpO1xuICBjb25zdCBmaXJzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGlmIChzZWxlY3RlZFByb2plY3QgIT0gbnVsbCAmJiBzZWxlY3RlZFByb2plY3QudGV4dENvbnRlbnQgIT0gJ0FsbCcpIHtcbiAgICBmaXJzdE9wdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC50ZXh0Q29udGVudDtcbiAgICBmaXJzdE9wdGlvbi52YWx1ZSA9IHNlbGVjdGVkUHJvamVjdC52YWx1ZTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChmaXJzdE9wdGlvbik7XG4gIH1cblxuLy9wcmlvcml0aWVzIGFyZSBoYW5kbGVkIGhlcmVcblxuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2ggUHJpb3JpdHlcIjtcbiAgaGlnaFByaW9yaXR5LnZhbHVlID0gMlxuICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG5vcm1hbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJOb3JtYWwgUHJpb3JpdHlcIjtcbiAgbm9ybWFsUHJpb3JpdHkudmFsdWUgPSAxXG4gIG5vcm1hbFByaW9yaXR5LnNlbGVjdGVkID0gdHJ1ZVxuICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3cgUHJpb3JpdHlcIjtcbiAgbG93UHJpb3JpdHkudmFsdWUgPSAwXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBvcHRpb24udGV4dCA9IHByb2plY3RMaXN0QXJyYXlbaV0ubmFtZTtcbiAgICBvcHRpb24udmFsdWUgPSBbaV07XG4gIH1cblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChub3JtYWxQcmlvcml0eSk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gbmV3IHRvZG9GYWN0b3J5KFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgIHByb2plY3RMaXN0LnZhbHVlLFxuICAgICAgcHJvamVjdExpc3RBcnJheVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUua2V5KTtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgbmV3VG9kb0J1dHRvbi5kaXNhYmxlZCA9PSB0cnVlKSB7XG4gICAgICAgIHRvZG9Mb2FkZXIocHJvamVjdExpc3RBcnJheSwgc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgICBjb25zb2xlLmxvZygnb2JqZWN0Jyk7XG4gICAgICB9IGVsc2UgeyBcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICB0b2Rvcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvZG9Mb2FkZXIocHJvamVjdExpc3RBcnJheSwgcHJvamVjdExpc3QudmFsdWUpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dG9kb1wiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdwcm9qZWN0XCIpO1xuICAgIG5ld1RvZG9CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH0pO1xuXG5cbn1cblxuIiwiaW1wb3J0IHRvZG9Tb3J0ZXIgZnJvbSBcIi4vdG9kb1NvcnRlclwiO1xuaW1wb3J0IGRpc3BsYXlBbGwgZnJvbSBcIi4vZGlzcGxheUFsbFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb0xvYWRlcihwcm9qZWN0TGlzdEFycmF5LCBpKSB7XG4gIGNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGVkXCIpO1xuICBcblxuICB0b2RvU29ydGVyKHByb2plY3RMaXN0QXJyYXkpO1xuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdExpc3RBcnJheVtpXS50b2Rvcy5sZW5ndGg7IGorKykge1xuICAgIGNvbnN0IHRvZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZG9Cb3guY2xhc3NMaXN0ID0gXCJ0b2RvYm94XCI7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBkZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RMaXN0QXJyYXlbaV0udG9kb3Nbal0udGl0bGV9YDtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3RMaXN0QXJyYXlbaV0udG9kb3Nbal0uZGVzY3JpcHRpb259YDtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdExpc3RBcnJheVtpXS50b2Rvc1tqXS5kdWVEYXRlfWA7XG5cbiAgICBkZWxldGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBwcm9qZWN0TGlzdEFycmF5W2ldLnRvZG9zLnNwbGljZShqLCAxKTtcbiAgICAgIHRvZG9zLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZC50ZXh0Q29udGVudCk7XG4gICAgICBpZiAoc2VsZWN0ZWQgIT0gbnVsbCAmJiBzZWxlY3RlZC50ZXh0Q29udGVudCA9PT0gXCJBbGxcIikge1xuICAgICAgICBkaXNwbGF5QWxsKHByb2plY3RMaXN0QXJyYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0xvYWRlcihwcm9qZWN0TGlzdEFycmF5LCBpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRvZG9zLmFwcGVuZENoaWxkKHRvZG9Cb3gpO1xuICAgIHRvZG9Cb3guYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRvZG9Cb3guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHRvZG9Cb3guYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgdG9kb0JveC5hcHBlbmRDaGlsZChkZWxldGVUb2RvKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydFRvZG9zKHByb2plY3RMaXN0QXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJvamVjdExpc3RBcnJheVtpXS50b2Rvcy5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gICAgICAgIFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbGl6ZSBmcm9tIFwiLi9pbml0aWFsaXplLmpzXCI7XG5pbXBvcnQgdG9EbyBmcm9tIFwiLi90b2RvSW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgcHJvamVjdEludGVyZmFjZSBmcm9tIFwiLi9wcm9qZWN0SW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuXG52YXIgcHJvamVjdExpc3RBcnJheSA9IFt7IG5hbWU6IFwiZGVmYXVsdFwiLCB0b2RvczogW10gfV07XG4vL3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHlcblxuaW5pdGlhbGl6ZShwcm9qZWN0TGlzdEFycmF5KTtcblxuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3RvZG9cIik7XG5uZXdUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICB0b0RvKHByb2plY3RMaXN0QXJyYXkpO1xuICBuZXdUb2RvRm9ybS5kaXNhYmxlZCA9IHRydWVcbiAgbmV3UHJvamVjdC5kaXNhYmxlZCA9IHRydWVcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBuZXdUb2RvRm9ybS5kaXNhYmxlZCA9PSB0cnVlKSB7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1jb250YWluZXInKVxuICAgICAgZm9ybS5pbm5lckhUTUwgPSAnJ1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBuZXdUb2RvRm9ybS5kaXNhYmxlZCA9IGZhbHNlXG4gICAgICBuZXdQcm9qZWN0LmRpc2FibGVkID0gZmFsc2VcbiAgICB9IGVsc2UgeyBcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfSlcbn0pO1xuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKTtcbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcHJvamVjdEludGVyZmFjZShwcm9qZWN0TGlzdEFycmF5KTtcbiAgbmV3VG9kb0Zvcm0uZGlzYWJsZWQgPSB0cnVlXG4gIG5ld1Byb2plY3QuZGlzYWJsZWQgPSB0cnVlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIG5ld1Byb2plY3QuZGlzYWJsZWQgPT0gdHJ1ZSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybWNvbnRhaW5lcicpXG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJ1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIG5ld1RvZG9Gb3JtLmRpc2FibGVkID0gZmFsc2VcbiAgICBuZXdQcm9qZWN0LmRpc2FibGVkID0gZmFsc2VcbiAgfSBlbHNlIHsgXG4gICAgcmV0dXJuXG4gIH1cbn0pXG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==