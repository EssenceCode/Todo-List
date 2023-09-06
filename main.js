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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --project-width: 120px;
    --project-height: 50px;
    --project-border-width: 2px;
    --button-hover-border-color: rgb(0, 128, 0);
    --button-hover-background-color: rgb(0, 128, 0);
    --button-hover-color: rgb(255,255,255);

   

    --todo-buttons-width: 50px;
    --todo-buttons-height: 25px;
}
* {
    padding: 0;
    margin: 0;
}

input,
textarea,
select,
button { --project-add-width: 100px;
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.content {
  
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.header-container {
   padding: 25px;
    background: green;
    /* margin-bottom: 25px; */

}

.project-wrapper {
    height: 100vh;
    background-color: aliceblue;
    display: grid;
    /* grid-template-columns: 1fr; */
    grid-column: 1;
    grid-row: 1 / 4;
    place-items: center;
    /* gap: 20px; */
}

.project-container {
    display: grid;
    /* grid-template-rows: repeat(auto-fit,minmax(25px, 1fr)); */
    gap: 10px;
}

.sidebar {

    grid-column: 1;
    display: grid;
    margin-top: 10px;
    gap: 20px;

}

.project {
    width: var(--project-width);
    height: var(--project-height);
    border-radius: 5px;
    border: 2px solid blue;
    background: white;
    color: black;  

}

.project:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.project-add, .project-delete {
    border-radius: 5px;
    border: 2px solid blue;
    background: white;
    color: black;
}

.project-add:active, .project-delete:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}


.form {
    
    display: none;
}

.form-update {
    display: none;
}

.todo-container {
    grid-column: 2;

    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); */
    gap: 5px;
}

.form {
    display: none;
}

.show-form {
    display: grid;
    place-content: center;
    
}

.todo-form, .todo-update-form {
    display: grid;
    place-content: center;
    background: aliceblue;
    height: 200px;
    width: 250px;
    gap: 2px;
}

.todo-card {
    background-color: aliceblue;
    display: flex;
    justify-content: space-around;
}
.todo-buttons {
    display: flex;
    gap: 5px;
}

.todo-date, .todo-buttons {
    margin: 6px 5px;
}

.edit-todo, .del-todo, .update-todo {
    width: var(--todo-buttons-width);
    height: var(--todo-buttons-height);
    border-radius: 5px;
    border: 1px solid blue;
    background: white;
}

.edit-todo:active, .del-todo:active, .update-todo:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.add-todo {
   
    width: 150px;
    height: 25px;
    border-radius: 25px;
    border: 0;
}

.add-todo:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.add-todo > span {
    position: absolute;
}

.add-todo > span::before {
    position: relative;
}

.add-todo > span::before {
    content: 'add todo';
    top: -10px;
    left: -30px;
    font-size: 1rem;
    text-align: center;
}

.low-priority {
    border-left: 10px solid green;
}
.medium-priority {
    border-left: 10px solid yellow;
}
.high-priority {
    border-left: 10px solid red;
}


.submit-todo {
    width: var(--todo-buttons-width);
    height: var(--todo-buttons-height);
    border-radius: 5px;
    border: 1px solid blue;
    background: white;

    justify-self: center;
}

.submit-todo:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,2BAA2B;IAC3B,2CAA2C;IAC3C,+CAA+C;IAC/C,sCAAsC;;;;IAItC,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;SAGS,0BAA0B;EACjC,YAAY;EACZ,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;;AAGA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;GACG,aAAa;IACZ,iBAAiB;IACjB,yBAAyB;;AAE7B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;AACb;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,SAAS;;AAEb;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;;AAGA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;;IAEd,aAAa;IACb,iEAAiE;IACjE,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;;IAEjB,oBAAoB;AACxB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC","sourcesContent":[":root {\n    --project-width: 120px;\n    --project-height: 50px;\n    --project-border-width: 2px;\n    --button-hover-border-color: rgb(0, 128, 0);\n    --button-hover-background-color: rgb(0, 128, 0);\n    --button-hover-color: rgb(255,255,255);\n\n   \n\n    --todo-buttons-width: 50px;\n    --todo-buttons-height: 25px;\n}\n* {\n    padding: 0;\n    margin: 0;\n}\n\ninput,\ntextarea,\nselect,\nbutton { --project-add-width: 100px;\n  width: 150px;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n\n.content {\n  \n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.header-container {\n   padding: 25px;\n    background: green;\n    /* margin-bottom: 25px; */\n\n}\n\n.project-wrapper {\n    height: 100vh;\n    background-color: aliceblue;\n    display: grid;\n    /* grid-template-columns: 1fr; */\n    grid-column: 1;\n    grid-row: 1 / 4;\n    place-items: center;\n    /* gap: 20px; */\n}\n\n.project-container {\n    display: grid;\n    /* grid-template-rows: repeat(auto-fit,minmax(25px, 1fr)); */\n    gap: 10px;\n}\n\n.sidebar {\n\n    grid-column: 1;\n    display: grid;\n    margin-top: 10px;\n    gap: 20px;\n\n}\n\n.project {\n    width: var(--project-width);\n    height: var(--project-height);\n    border-radius: 5px;\n    border: 2px solid blue;\n    background: white;\n    color: black;  \n\n}\n\n.project:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.project-add, .project-delete {\n    border-radius: 5px;\n    border: 2px solid blue;\n    background: white;\n    color: black;\n}\n\n.project-add:active, .project-delete:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n\n.form {\n    \n    display: none;\n}\n\n.form-update {\n    display: none;\n}\n\n.todo-container {\n    grid-column: 2;\n\n    display: grid;\n    /* grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); */\n    gap: 5px;\n}\n\n.form {\n    display: none;\n}\n\n.show-form {\n    display: grid;\n    place-content: center;\n    \n}\n\n.todo-form, .todo-update-form {\n    display: grid;\n    place-content: center;\n    background: aliceblue;\n    height: 200px;\n    width: 250px;\n    gap: 2px;\n}\n\n.todo-card {\n    background-color: aliceblue;\n    display: flex;\n    justify-content: space-around;\n}\n.todo-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n.todo-date, .todo-buttons {\n    margin: 6px 5px;\n}\n\n.edit-todo, .del-todo, .update-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px solid blue;\n    background: white;\n}\n\n.edit-todo:active, .del-todo:active, .update-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo {\n   \n    width: 150px;\n    height: 25px;\n    border-radius: 25px;\n    border: 0;\n}\n\n.add-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo > span {\n    position: absolute;\n}\n\n.add-todo > span::before {\n    position: relative;\n}\n\n.add-todo > span::before {\n    content: 'add todo';\n    top: -10px;\n    left: -30px;\n    font-size: 1rem;\n    text-align: center;\n}\n\n.low-priority {\n    border-left: 10px solid green;\n}\n.medium-priority {\n    border-left: 10px solid yellow;\n}\n.high-priority {\n    border-left: 10px solid red;\n}\n\n\n.submit-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px solid blue;\n    background: white;\n\n    justify-self: center;\n}\n\n.submit-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}"],"sourceRoot":""}]);
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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectArrayCreate: () => (/* binding */ ProjectArrayCreate),
/* harmony export */   "default": () => (/* binding */ CreateProjects)
/* harmony export */ });
/* harmony import */ var _project_push_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/push-project */ "./src/project/push-project.js");
/* harmony import */ var _project_push_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/push-todo */ "./src/project/push-todo.js");
/* harmony import */ var _project_del_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/del-project */ "./src/project/del-project.js");
/* harmony import */ var _project_del_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/del-todo */ "./src/project/del-todo.js");





function CreateProjects(title) { 
    const todoArray = [];
    const Title = title 

 
    const todoList = todoArray  
   
    return Object.assign(
        {},
       
        { Title },
        { todoList },
        (0,_project_push_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoArray),
        (0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(todoList),
      
        )
}

function ProjectArrayCreate(title) {
   
    const projectArray = []
    const Projects = projectArray

    const addLocalStorage = (arr) => {
        // projectArray.push(arr)
        // console.log(arr)
        // console.log(projectArray)
        // console.log(Projects)
        // console.log(projectManager)
        arr.forEach(val => projectArray.push(Object.assign({}, val)));
    }

    return Object.assign(
        {},
        {title},
        { Projects },
        { addLocalStorage },
        (0,_project_push_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray),
        (0,_project_del_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projectArray)
    )
    
}





/***/ }),

/***/ "./src/project/del-project.js":
/*!************************************!*\
  !*** ./src/project/del-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteProject)
/* harmony export */ });
function DeleteProject(obj) {
    return {
        removeProject: (index) => obj.splice(index, 1)
    }
}

/***/ }),

/***/ "./src/project/del-todo.js":
/*!*********************************!*\
  !*** ./src/project/del-todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteTodo)
/* harmony export */ });
function DeleteTodo(obj) {
    return {
        removeTodo: (index) => obj.splice(index, 1)
    }
}

/***/ }),

/***/ "./src/project/push-project.js":
/*!*************************************!*\
  !*** ./src/project/push-project.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PushProject)
/* harmony export */ });

function PushProject(obj) {
  
    return {
        addProject: (arr) => {
            // console.log(projectManager.addProject())    
            return obj.push(arr)
        }
    }
}

/***/ }),

/***/ "./src/project/push-todo.js":
/*!**********************************!*\
  !*** ./src/project/push-todo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PushTodo)
/* harmony export */ });
function PushTodo(obj) {
    return {
        addTodo: (arr) => obj.push(arr),
        
    }
}

/***/ }),

/***/ "./src/storage-project.js":
/*!********************************!*\
  !*** ./src/storage-project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ storeProject)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.js");


function storeProject() {

    localStorage.setItem("ProjectArray", JSON.stringify(_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects));
   
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateTodo)
/* harmony export */ });
function CreateTodo(title, description, dueDate, priority) {
    let Title = title;
    let Description = description;
    let DueDate = dueDate;
    let Priority = priority;
   

    const UpdateTodo = (title,description,dueDate,priority,note) => {
        Title = title;
        Description = description;
        DueDate = dueDate;
        Priority = priority;
       
    }

    return {
        Title,
        Description,
        DueDate,
        Priority,
      
        UpdateTodo
        
    }
}



/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ View),
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _view_project_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/project-form.js */ "./src/view/project-form.js");
/* harmony import */ var _view_project_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/project-render.js */ "./src/view/project-render.js");
/* harmony import */ var _view_project_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/project-event.js */ "./src/view/project-event.js");
/* harmony import */ var _view_project_title_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/project-title-render.js */ "./src/view/project-title-render.js");
/* harmony import */ var _view_project_delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/project-delete.js */ "./src/view/project-delete.js");
/* harmony import */ var _view_todo_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/todo-form.js */ "./src/view/todo-form.js");
/* harmony import */ var _view_todo_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/todo-render.js */ "./src/view/todo-render.js");
/* harmony import */ var _view_todo_edit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/todo-edit.js */ "./src/view/todo-edit.js");
/* harmony import */ var _view_todo_delete_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/todo-delete.js */ "./src/view/todo-delete.js");
/* harmony import */ var _view_todo_form_button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/todo-form-button.js */ "./src/view/todo-form-button.js");











function View() {

    return {
        ProjectForm: _view_project_form_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        ProjectRender: _view_project_render_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        ProjectEvent: _view_project_event_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        ProjectTitleRender: _view_project_title_render_js__WEBPACK_IMPORTED_MODULE_4__["default"],        
        ProjectDelete: _view_project_delete_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        TodoForm: _view_todo_form_js__WEBPACK_IMPORTED_MODULE_6__["default"],
        TodoRender: _view_todo_render_js__WEBPACK_IMPORTED_MODULE_7__["default"],
        EditTodo: _view_todo_edit_js__WEBPACK_IMPORTED_MODULE_8__["default"],
        DelTodo: _view_todo_delete_js__WEBPACK_IMPORTED_MODULE_9__["default"],
        TodoFormButton: _view_todo_form_button_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    }
}

const projectManager = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.ProjectArrayCreate)('ProjectManager');



const defaultProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])('default')


projectManager.addProject(defaultProject)

// console.log(projectManager.Projects)





/***/ }),

/***/ "./src/view/get-set-project-id.js":
/*!****************************************!*\
  !*** ./src/view/get-set-project-id.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectId: () => (/* binding */ getProjectId),
/* harmony export */   setProjectId: () => (/* binding */ setProjectId)
/* harmony export */ });
let projectID = null;

function setProjectId(newVal) {
    projectID = newVal;

    return projectID;
}

function getProjectId() {
    // console.log(projectID)
    return Number(projectID);
}


/***/ }),

/***/ "./src/view/get-set-todo-id.js":
/*!*************************************!*\
  !*** ./src/view/get-set-todo-id.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodoId: () => (/* binding */ getTodoId),
/* harmony export */   setTodoId: () => (/* binding */ setTodoId)
/* harmony export */ });
let todoID = null;

function setTodoId(newVal) {
    todoID = newVal
    return todoID
}

function getTodoId() {
    return Number(todoID);
}


/***/ }),

/***/ "./src/view/project-delete.js":
/*!************************************!*\
  !*** ./src/view/project-delete.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectDelete)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");




function ProjectDelete() {
    const project = document.querySelector('.project-container');
    const todo = document.querySelector('.todo-container')
    const title = document.querySelector('.project-title')
    const button = document.querySelector('.add-todo-button')
    const container = document.querySelector('.sidebar');
    const projectDel = document.createElement('button');
    projectDel.classList.add('project-delete')
    projectDel.textContent = 'Delete Project';

    projectDel.addEventListener('click', (e) => {

        if((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)() === 0) return;  
        _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.removeProject((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)())        
        project.childNodes[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].remove()
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_2__["default"])()
        
        todo.textContent = ''
        title.textContent = ''
        button.textContent = ''


    })

    container.appendChild(projectDel)

}


/***/ }),

/***/ "./src/view/project-event.js":
/*!***********************************!*\
  !*** ./src/view/project-event.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectEvent)
/* harmony export */ });
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _project_title_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-title-render */ "./src/view/project-title-render.js");
/* harmony import */ var _todo_form_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-form-button */ "./src/view/todo-form-button.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");










function ProjectEvent() {
    const project = document.querySelectorAll('.project')
    const buttonContainer = document.querySelector('.add-todo-button')
    
    const title = document.querySelector('.project-title')
    project.forEach(val => val.addEventListener('click', (e) => {
        let project = e.target
        let nodeId = project.getAttribute('project')
        title.textContent = ''
        buttonContainer.textContent = ''
        ;(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(nodeId)
       
        console.log(project)
        ;(0,_project_title_render__WEBPACK_IMPORTED_MODULE_1__["default"])()
        ;(0,_todo_form_button__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
        
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_5__["default"])()

       
        
    }))
  
    
   
}


/***/ }),

/***/ "./src/view/project-form-button.js":
/*!*****************************************!*\
  !*** ./src/view/project-form-button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectSubmit)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _project_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-render */ "./src/view/project-render.js");
/* harmony import */ var _project_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-event */ "./src/view/project-event.js");
/* harmony import */ var _project_title_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-title-render */ "./src/view/project-title-render.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");







function ProjectSubmit(input) {
    const container = document.querySelector('.sidebar');
    const todo = document.querySelector('.todo-container')
    
    const projectTitle = document.querySelector('.project-title');

    const button = document.createElement('button');
    button.classList.add('project-add')
    button.textContent= 'Add Project'
    button.addEventListener('click', (e) => {
        projectTitle.textContent = ''
        todo.textContent = ''

        const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
        _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(project)
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_5__["default"])()
        ;(0,_project_render__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,_project_event__WEBPACK_IMPORTED_MODULE_3__["default"])()
        ;(0,_project_title_render__WEBPACK_IMPORTED_MODULE_4__["default"])()
        
        // console.log(projectManager)
        // console.log(projectManager.hasOwnProperty('addProject'))
        input.value = ''
    })
    container.appendChild(button);

}


/***/ }),

/***/ "./src/view/project-form.js":
/*!**********************************!*\
  !*** ./src/view/project-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectForm)
/* harmony export */ });
/* harmony import */ var _project_form_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-form-button */ "./src/view/project-form-button.js");


function ProjectForm() {
    const container = document.querySelector('.sidebar');

    const input = document.createElement('input');
    input.classList.add('project-input')
    input.setAttribute('type', 'text');

    
    container.appendChild(input);
    (0,_project_form_button__WEBPACK_IMPORTED_MODULE_0__["default"])(input) 
   

}


/***/ }),

/***/ "./src/view/project-render.js":
/*!************************************!*\
  !*** ./src/view/project-render.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectRender)
/* harmony export */ });
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view.js");



function ProjectRender() {
    const content = document.querySelector('.project-container')
    const userData = JSON.parse(localStorage.getItem("ProjectArray"))
    content.textContent = ''

    if(!localStorage.getItem("ProjectArray")) {
        
        for (let i = 0; i < _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects.length; i++) {
        (0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(i)   
        const project = document.createElement('button');    
       
        project.setAttribute('project',i);
        project.classList.add('project');
        
        project.textContent = _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[i].Title;
    
       
        content.appendChild(project)    
        
        console.log(userData)
    }
} else {
    for (let i = 0; i < userData.length; i++) {
        (0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(i)   
        const project = document.createElement('button');    
       
        project.setAttribute('project',i);
        project.classList.add('project');
        
        project.textContent = userData[i].Title;
    
       
        content.appendChild(project)    
        
        console.log(userData)
    }
}
    
}

/***/ }),

/***/ "./src/view/project-title-render.js":
/*!******************************************!*\
  !*** ./src/view/project-title-render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectTitleRender)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");


function ProjectTitleRender() {
   const userData = JSON.parse(localStorage.getItem("ProjectArray"))

   if(!localStorage.getItem("ProjectArray")) {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = `${_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].Title}`

    content.appendChild(title)
   } else {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].Title
    content.appendChild(title)
   }

}

/***/ }),

/***/ "./src/view/todo-delete.js":
/*!*********************************!*\
  !*** ./src/view/todo-delete.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DelTodo)
/* harmony export */ });
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");









function DelTodo() {
    const button = document.querySelectorAll('.del-todo');
    
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute('todo');
        (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
        _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].removeTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.getTodoId)())
        parent.remove()
        
        console.log((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.getTodoId)())
        console.log(id)
        
        console.log(_view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].todoList)
        
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])() 
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
        DelTodo()

    }))

}


/***/ }),

/***/ "./src/view/todo-edit.js":
/*!*******************************!*\
  !*** ./src/view/todo-edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditTodo)
/* harmony export */ });
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* harmony import */ var _update_todo_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-todo-form */ "./src/view/update-todo-form.js");





function EditTodo() {
    const form = document.querySelector('.form-update');
    const button = document.querySelectorAll('.edit-todo');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        ;(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
        // console.log(parent)
        // console.log(Number(id))

        form.textContent = ''
        ;(0,_update_todo_form__WEBPACK_IMPORTED_MODULE_1__["default"])()
        form.classList.toggle('show-form')

    }))
}


/***/ }),

/***/ "./src/view/todo-form-button.js":
/*!**************************************!*\
  !*** ./src/view/todo-form-button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoFormButton)
/* harmony export */ });
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-form */ "./src/view/todo-form.js");


function TodoFormButton() {
    const container = document.querySelector('.add-todo-button');
    const form = document.querySelector('.form');
    const button = document.createElement('button');
    const span = document.createElement('span');
    button.classList.add('add-todo');
    // button.textContent = 'Add Todo'
    
    button.appendChild(span)
    button.addEventListener('click', (e) => {
        form.textContent = ''
        ;(0,_todo_form__WEBPACK_IMPORTED_MODULE_0__["default"])()
        form.classList.toggle('show-form')
        
    })

    container.appendChild(button)
}


/***/ }),

/***/ "./src/view/todo-form.js":
/*!*******************************!*\
  !*** ./src/view/todo-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoForm)
/* harmony export */ });
/* harmony import */ var _todo_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-submit */ "./src/view/todo-submit.js");



function TodoForm() {
    
    const formContainer = document.querySelector('.form')
    const form = document.createElement('form')
    form.classList.add('todo-form')


    const inputArray = [
        {
            label: 'Title',
            placeholder: 'title',
            type: 'text',
        },
        {
            label: 'Description',
            placeholder: 'description',
            type: 'text',
        },
        {
            label: 'Date',
            placeholder: '',
            type: 'date',
        },
    ]
   
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');
       
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
       

        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
       


        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
      


        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
     

        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
       



        

    
        form.appendChild(label)

        form.appendChild(input)
        
    }

   
    const button = document.createElement('button');
    button.classList.add('submit-todo')
    button.textContent = 'Submit'

    button.addEventListener('click', (e) => {
        e.preventDefault()
        ;(0,_todo_submit__WEBPACK_IMPORTED_MODULE_0__["default"])()
        formContainer.classList.toggle('show-form')
       
        
    })

    const inputPriority = document.createElement('select');
    const labelPriority = document.createElement('label')
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", 'Priority')
    
  
    // chooses for priority
    const priorityArr = [
        {
            value: 'green',
            text: 'low',
        },
        {
            value: 'yellow',
            text: 'medium',
        },
        {
            value: 'red',
            text: 'high',
        },
    ];
    // loop the choose to put in the select element
    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i].value;
        option.text = priorityArr[i].text;

        
        inputPriority.appendChild(option);
    }


    form.appendChild(labelPriority)
    form.appendChild(inputPriority)

    form.appendChild(button)

    formContainer.appendChild(form)
        
   

}


/***/ }),

/***/ "./src/view/todo-render.js":
/*!*********************************!*\
  !*** ./src/view/todo-render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoRender)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");





function TodoRender() {
    const container = document.querySelector('.todo-container')
    const userData = JSON.parse(localStorage.getItem("ProjectArray"))
   
    container.textContent = ''
    if(!localStorage.getItem("ProjectArray")) {
        for (let i = 0; i < _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList.length; i++) {
            (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.setTodoId)(i)
           
            const todo = document.createElement('div');
           
            const task = document.createElement('div');
            
            const taskTitle = document.createElement('div');
            const taskDetails = document.createElement('div');
            const taskColor = document.createElement('span')
            
            const title = document.createElement('div');
            const description = document.createElement('div');
            const dueDate = document.createElement('div');
          
    
            todo.classList.add('todo-card', i)
            todo.setAttribute('todo', i);
            task.classList.add('todo-title-description')
            taskColor.setAttribute('taskColor', i)
    
            title.classList.add('todo-title');
            description.classList.add('todo-description');
            dueDate.classList.add('todo-date');
              
    
            title.textContent = `${_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Title}`;
            description.textContent = `${_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Description}`;
            dueDate.textContent = `${_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].DueDate}`;
            taskColor.style.borderLeft = `10px solid ${_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Priority}`;
           
    
    
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-todo');
            editBtn.textContent = 'Edit';
    
            const delBtn = document.createElement('button');
            delBtn.classList.add('del-todo');
            delBtn.textContent = 'Del'
            
            taskTitle.appendChild(title)
            taskDetails.appendChild(description)
            
            todo.appendChild(taskColor)
            task.appendChild(taskTitle)
            task.appendChild(taskDetails)
    
    
            todo.appendChild(task)
            todo.appendChild(dueDate)
          
            
            todo.appendChild(editBtn)
            todo.appendChild(delBtn)
    
           
            container.appendChild(todo)
       
        }

    } else {
        for (let i = 0; i < userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList.length; i++) {
            (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.setTodoId)(i)
           
            const todo = document.createElement('div');
           
            const task = document.createElement('div');
            
            const taskTitle = document.createElement('div');
            const taskDetails = document.createElement('div');
            const taskColor = document.createElement('span')
            
            const title = document.createElement('div');
            const description = document.createElement('div');
            const dueDate = document.createElement('div');
          
    
            todo.classList.add('todo-card', i)
            todo.setAttribute('todo', i);
            task.classList.add('todo-title-description')
            taskColor.setAttribute('taskColor', i)
    
            title.classList.add('todo-title');
            description.classList.add('todo-description');
            dueDate.classList.add('todo-date');
              
    
            title.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Title}`;
            description.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Description}`;
            dueDate.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].DueDate}`;
            taskColor.style.borderLeft = `10px solid ${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Priority}`;
           
    
    
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-todo');
            editBtn.textContent = 'Edit';
    
            const delBtn = document.createElement('button');
            delBtn.classList.add('del-todo');
            delBtn.textContent = 'Del'
            
            taskTitle.appendChild(title)
            taskDetails.appendChild(description)
            
            todo.appendChild(taskColor)
            task.appendChild(taskTitle)
            task.appendChild(taskDetails)
    
    
            todo.appendChild(task)
            todo.appendChild(dueDate)
          
            
            todo.appendChild(editBtn)
            todo.appendChild(delBtn)
    
           
            container.appendChild(todo)
       
        }

    }
}


/***/ }),

/***/ "./src/view/todo-submit.js":
/*!*********************************!*\
  !*** ./src/view/todo-submit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoSubmit)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo */ "./src/todo.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");









function TodoSubmit() {
    const title = document.getElementById('Title')
    const description = document.getElementById('Description')
    const date = document.getElementById('Date')
    const priority = document.getElementById('Priority')
    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(
        title.value, 
        description.value, 
        date.value, 
        priority.value, 
        );
        _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].addTodo(todo)
        
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])() 
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_5__["default"])()
        
      
       
}

/***/ }),

/***/ "./src/view/update-todo-form.js":
/*!**************************************!*\
  !*** ./src/view/update-todo-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateTodo)
/* harmony export */ });
/* harmony import */ var _update_todo_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-todo-submit */ "./src/view/update-todo-submit.js");


function UpdateTodo() {
        
    const formContainer = document.querySelector('.form-update');
    const form = document.createElement('form')
    form.classList.add('todo-update-form')

    // const inputTitle = document.createElement('input');
    // const inputDescription= document.createElement('input');
    // const inputDate = document.createElement('input');
    // const inputPriority = document.createElement('select');

    const inputArray = [
        {
            label: 'TitleUpdate',
            placeholder: 'title',
            type: 'text',
        },
        {
            label: 'DescriptionUpdate',
            placeholder: 'description',
            type: 'text',
        },
        {
            label: 'DateUpdate',
            placeholder: '',
            type: 'date',
        },
    ]

     
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');
       
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
       

        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
       


        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
      


        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
     

        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
       
    
        form.appendChild(label)
        form.appendChild(input)
    }

   

    const button = document.createElement('button');
    button.classList.add('update-todo')
    button.textContent = 'Update'

    button.addEventListener('click', (e) => {
        e.preventDefault()
        ;(0,_update_todo_submit__WEBPACK_IMPORTED_MODULE_0__["default"])()
        formContainer.classList.toggle('show-form')
    })


    // inputTitle.setAttribute('type', 'text')
    // inputDescription.setAttribute('type', 'text')
    // inputDate.setAttribute('type', 'date')
    // inputPriority.setAttribute('type', 'text')
    
  
    // inputTitle.setAttribute("placeholder", 'title')
    // inputDescription.setAttribute("placeholder", 'description')  
    // inputPriority.setAttribute("placeholder", 'priority')  
    
    const inputPriority = document.createElement('select');
    const labelPriority = document.createElement('label')
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", 'PriorityUpdate')

    // chooses for priority
    const priorityArr = [
        {
            value: 'green',
            text: 'low',
        },
        {
            value: 'yellow',
            text: 'medium',
        },
        {
            value: 'red',
            text: 'high',
        },
    ];
    // loop the choose to put in the select element
    // for(let i = 0; i < priorityArr.length; i++) {
    //     const option = document.createElement("option");
    //     option.value = priorityArr[i].value;
    //     option.text = priorityArr[i].text;

        
    //     inputPriority.appendChild(option);
    // }

    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i].value;
        option.text = priorityArr[i].text;

        
        inputPriority.appendChild(option);
    }



    form.appendChild(labelPriority)
    form.appendChild(inputPriority)

    form.appendChild(button)

    formContainer.appendChild(form)
        


        
   

}

/***/ }),

/***/ "./src/view/update-todo-submit.js":
/*!****************************************!*\
  !*** ./src/view/update-todo-submit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoUpdateSubmit)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");







function TodoUpdateSubmit() {
    const inputTitle = document.getElementById('TitleUpdate')
    const inputDescription = document.getElementById('DescriptionUpdate')
    const inputDate = document.getElementById('DateUpdate')
    const inputPriority = document.getElementById('PriorityUpdate')
   
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)()].Title = inputTitle.value, 
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)()].Description = inputDescription.value,              
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)()].DueDate = inputDate.value,              
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)()].Priority = inputPriority.value,               
                   
    console.log(_view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList)
    ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])() 
 
    ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_5__["default"])()
    
      
       
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
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ "./src/view.js");
/* harmony import */ var _storage_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-project.js */ "./src/storage-project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
 



// storeProject()

(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectForm()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectRender()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectEvent()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectTitleRender()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectDelete()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().TodoRender()
;(0,_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])().TodoFormButton()


window.addEventListener('load', (e) => {
    if(localStorage.getItem("ProjectArray") !== null) {
 
    _view_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.addLocalStorage(JSON.parse(localStorage.getItem("ProjectArray")))
    console.log(_view_js__WEBPACK_IMPORTED_MODULE_0__.projectManager)
    // console.log(projectManager.hasOwnProperty('addProject'))
    }
 })


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksUUFBUSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsaUNBQWlDLDZCQUE2Qiw2QkFBNkIsa0NBQWtDLGtEQUFrRCxzREFBc0QsNkNBQTZDLDBDQUEwQyxrQ0FBa0MsR0FBRyxLQUFLLGlCQUFpQixnQkFBZ0IsR0FBRyx5Q0FBeUMsMkJBQTJCLGlCQUFpQixlQUFlLGNBQWMsMkJBQTJCLEdBQUcsZ0JBQWdCLHdCQUF3QixxQ0FBcUMsR0FBRyx1QkFBdUIsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsT0FBTyxzQkFBc0Isb0JBQW9CLGtDQUFrQyxvQkFBb0IscUNBQXFDLHVCQUF1QixzQkFBc0IsMEJBQTBCLG9CQUFvQixLQUFLLHdCQUF3QixvQkFBb0IsaUVBQWlFLGtCQUFrQixHQUFHLGNBQWMsdUJBQXVCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLEtBQUssY0FBYyxrQ0FBa0Msb0NBQW9DLHlCQUF5Qiw2QkFBNkIsd0JBQXdCLHFCQUFxQixLQUFLLHFCQUFxQiwrQ0FBK0MscURBQXFELHVEQUF1RCx1Q0FBdUMsR0FBRyxtQ0FBbUMseUJBQXlCLDZCQUE2Qix3QkFBd0IsbUJBQW1CLEdBQUcsaURBQWlELCtDQUErQyxxREFBcUQsdURBQXVELHVDQUF1QyxHQUFHLGFBQWEsMEJBQTBCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLHFCQUFxQixxQkFBcUIsc0JBQXNCLHNFQUFzRSxpQkFBaUIsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsNEJBQTRCLFNBQVMsbUNBQW1DLG9CQUFvQiw0QkFBNEIsNEJBQTRCLG9CQUFvQixtQkFBbUIsZUFBZSxHQUFHLGdCQUFnQixrQ0FBa0Msb0JBQW9CLG9DQUFvQyxHQUFHLGlCQUFpQixvQkFBb0IsZUFBZSxHQUFHLCtCQUErQixzQkFBc0IsR0FBRyx5Q0FBeUMsdUNBQXVDLHlDQUF5Qyx5QkFBeUIsNkJBQTZCLHdCQUF3QixHQUFHLDhEQUE4RCwrQ0FBK0MscURBQXFELHVEQUF1RCx1Q0FBdUMsR0FBRyxlQUFlLHdCQUF3QixtQkFBbUIsMEJBQTBCLGdCQUFnQixHQUFHLHNCQUFzQiwrQ0FBK0MscURBQXFELHVEQUF1RCx1Q0FBdUMsR0FBRyxzQkFBc0IseUJBQXlCLEdBQUcsOEJBQThCLHlCQUF5QixHQUFHLDhCQUE4QiwwQkFBMEIsaUJBQWlCLGtCQUFrQixzQkFBc0IseUJBQXlCLEdBQUcsbUJBQW1CLG9DQUFvQyxHQUFHLG9CQUFvQixxQ0FBcUMsR0FBRyxrQkFBa0Isa0NBQWtDLEdBQUcsb0JBQW9CLHVDQUF1Qyx5Q0FBeUMseUJBQXlCLDZCQUE2Qix3QkFBd0IsNkJBQTZCLEdBQUcseUJBQXlCLCtDQUErQyxxREFBcUQsdURBQXVELHVDQUF1QyxHQUFHLG1CQUFtQjtBQUMzL0w7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNyTzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmlEO0FBQ047QUFDTztBQUNOOztBQUU3QjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVLE9BQU87QUFDakIsVUFBVSxVQUFVO0FBQ3BCLFFBQVEsOERBQVE7QUFDaEIsUUFBUSw2REFBVTtBQUNsQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFNBQVMsTUFBTTtBQUNmLFVBQVUsVUFBVTtBQUNwQixVQUFVLGlCQUFpQjtBQUMzQixRQUFRLGlFQUFXO0FBQ25CLFFBQVEsZ0VBQWE7QUFDckI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNMd0M7O0FBRXpCOztBQUVmLHdEQUF3RCxpREFBYztBQUN0RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ5RDtBQUNSO0FBQ0k7QUFDRjtBQUNhO0FBQ1g7QUFDVjtBQUNJO0FBQ0o7QUFDQztBQUNZO0FBQ3pDOztBQUVmO0FBQ0EsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixvQkFBb0I7QUFDcEIsMEJBQTBCO0FBQzFCLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCO0FBQ0E7O0FBRU8sdUJBQXVCLCtEQUFrQjs7OztBQUloRCx1QkFBdUIsdURBQU87OztBQUc5Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1R5QztBQUNXO0FBQ047O0FBRS9CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLGlFQUFZO0FBQ3ZCLFFBQVEsaURBQWMsZUFBZSxpRUFBWTtBQUNqRCwyQkFBMkIsaUVBQVk7QUFDdkMsUUFBUSw2REFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJtRDtBQUNBO0FBQ0k7QUFDUjtBQUNUO0FBQ0o7QUFDQzs7OztBQUlwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQVk7QUFDcEI7QUFDQTtBQUNBLFFBQVEsa0VBQWtCO0FBQzFCLFFBQVEsOERBQWM7QUFDdEIsUUFBUSx5REFBVTtBQUNsQjtBQUNBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQixRQUFRLHlEQUFPOztBQUVmO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDaUM7QUFDUTtBQUNJO0FBQ0Y7QUFDYTtBQUNWOztBQUUvQjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isb0RBQU87QUFDL0IsUUFBUSxpREFBYztBQUN0QixRQUFRLDZEQUFZO0FBQ3BCLFFBQVEsNERBQWE7QUFDckIsUUFBUSwyREFBWTtBQUNwQixRQUFRLGtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDa0Q7O0FBRW5DO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RvRDtBQUNYOztBQUUxQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksaURBQWMsa0JBQWtCO0FBQzVELFFBQVEsaUVBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Ysb0JBQW9CLHFCQUFxQjtBQUN6QyxRQUFRLGlFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDd0M7QUFDVztBQUNwQztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBYyxVQUFVLGlFQUFZLFVBQVU7O0FBRXpFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUMsaUVBQVk7QUFDN0M7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEM7QUFDTDtBQUNVO0FBQ0w7O0FBRVA7QUFDSjs7O0FBR3BCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVM7QUFDakIsUUFBUSxpREFBYyxVQUFVLGlFQUFZLGVBQWUsMkRBQVM7QUFDcEU7QUFDQTtBQUNBLG9CQUFvQiwyREFBUztBQUM3QjtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFjLFVBQVUsaUVBQVk7QUFDeEQ7QUFDQSxRQUFRLHlEQUFVO0FBQ2xCLFFBQVEsdURBQVE7QUFDaEI7O0FBRUEsS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QjhDOzs7QUFHRjs7QUFFN0I7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBUztBQUNqQjtBQUNBOztBQUVBO0FBQ0EsUUFBUSw4REFBVTtBQUNsQjs7QUFFQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQm1DOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBUTtBQUNoQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdUM7O0FBRXhCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SHlDO0FBQ1c7QUFDTjs7O0FBRy9CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixJQUFJLGlEQUFjLFVBQVUsaUVBQVkscUJBQXFCO0FBQ3JGLFlBQVksMkRBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlEQUFjLFVBQVUsaUVBQVksc0JBQXNCO0FBQzdGLHlDQUF5QyxpREFBYyxVQUFVLGlFQUFZLDRCQUE0QjtBQUN6RyxxQ0FBcUMsaURBQWMsVUFBVSxpRUFBWSx3QkFBd0I7QUFDakcsdURBQXVELGlEQUFjLFVBQVUsaUVBQVkseUJBQXlCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ04sd0JBQXdCLGFBQWEsaUVBQVkscUJBQXFCO0FBQ3RFLFlBQVksMkRBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsaUVBQVksc0JBQXNCO0FBQzlFLHlDQUF5QyxTQUFTLGlFQUFZLDRCQUE0QjtBQUMxRixxQ0FBcUMsU0FBUyxpRUFBWSx3QkFBd0I7QUFDbEYsdURBQXVELFNBQVMsaUVBQVkseUJBQXlCO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2STBCO0FBQ2U7QUFDVztBQUNiO0FBQ0o7QUFDQzs7OztBQUlyQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFjLFVBQVUsaUVBQVk7QUFDNUM7QUFDQSxRQUFRLHlEQUFVO0FBQ2xCLFFBQVEsdURBQVE7QUFDaEIsUUFBUSx5REFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Qm9EOztBQUVyQztBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0VBQWdCO0FBQ3hCO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0l5QztBQUNXO0FBQ047QUFDUDtBQUNKO0FBQ0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWMsVUFBVSxpRUFBWSxhQUFhLDJEQUFTO0FBQzlELElBQUksaURBQWMsVUFBVSxpRUFBWSxhQUFhLDJEQUFTO0FBQzlELElBQUksaURBQWMsVUFBVSxpRUFBWSxhQUFhLDJEQUFTO0FBQzlELElBQUksaURBQWMsVUFBVSxpRUFBWSxhQUFhLDJEQUFTO0FBQzlEO0FBQ0EsZ0JBQWdCLGlEQUFjLFVBQVUsaUVBQVk7QUFDcEQsSUFBSSx5REFBVTtBQUNkO0FBQ0EsSUFBSSx1REFBUTtBQUNaLElBQUkseURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E4QztBQUNFO0FBQzVCOztBQUVwQjs7QUFFQSxvREFBSTtBQUNKLHFEQUFJO0FBQ0oscURBQUk7QUFDSixxREFBSTtBQUNKLHFEQUFJO0FBQ0oscURBQUk7QUFDSixxREFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBYztBQUNsQixnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQTtBQUNBLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvcHVzaC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0L3B1c2gtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2dldC1zZXQtcHJvamVjdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9nZXQtc2V0LXRvZG8taWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWZvcm0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXRpdGxlLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1mb3JtLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlLXRvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGUtdG9kby1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1wcm9qZWN0LXdpZHRoOiAxMjBweDtcbiAgICAtLXByb2plY3QtaGVpZ2h0OiA1MHB4O1xuICAgIC0tcHJvamVjdC1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IHJnYigwLCAxMjgsIDApO1xuICAgIC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDApO1xuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuXG4gICBcblxuICAgIC0tdG9kby1idXR0b25zLXdpZHRoOiA1MHB4O1xuICAgIC0tdG9kby1idXR0b25zLWhlaWdodDogMjVweDtcbn1cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuYnV0dG9uIHsgLS1wcm9qZWN0LWFkZC13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi5jb250ZW50IHtcbiAgXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgIHBhZGRpbmc6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjVweDsgKi9cblxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAqL1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxIC8gNDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIC8qIGdhcDogMjBweDsgKi9cbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgyNXB4LCAxZnIpKTsgKi9cbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaWRlYmFyIHtcblxuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBnYXA6IDIwcHg7XG5cbn1cblxuLnByb2plY3Qge1xuICAgIHdpZHRoOiB2YXIoLS1wcm9qZWN0LXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLXByb2plY3QtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7ICBcblxufVxuXG4ucHJvamVjdDphY3RpdmUge1xuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWFkZCwgLnByb2plY3QtZGVsZXRlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5wcm9qZWN0LWFkZDphY3RpdmUsIC5wcm9qZWN0LWRlbGV0ZTphY3RpdmUge1xuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG5cblxuLmZvcm0ge1xuICAgIFxuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLXVwZGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsMWZyKSk7ICovXG4gICAgZ2FwOiA1cHg7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdy1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLnRvZG8tZm9ybSwgLnRvZG8tdXBkYXRlLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBnYXA6IDJweDtcbn1cblxuLnRvZG8tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4udG9kby1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4udG9kby1kYXRlLCAudG9kby1idXR0b25zIHtcbiAgICBtYXJnaW46IDZweCA1cHg7XG59XG5cbi5lZGl0LXRvZG8sIC5kZWwtdG9kbywgLnVwZGF0ZS10b2RvIHtcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZWRpdC10b2RvOmFjdGl2ZSwgLmRlbC10b2RvOmFjdGl2ZSwgLnVwZGF0ZS10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLmFkZC10b2RvIHtcbiAgIFxuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5hZGQtdG9kbzphY3RpdmUge1xuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG5cbi5hZGQtdG9kbyA+IHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZGQtdG9kbyA+IHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogJ2FkZCB0b2RvJztcbiAgICB0b3A6IC0xMHB4O1xuICAgIGxlZnQ6IC0zMHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb3ctcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGdyZWVuO1xufVxuLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgeWVsbG93O1xufVxuLmhpZ2gtcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcbn1cblxuXG4uc3VibWl0LXRvZG8ge1xuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnN1Ym1pdC10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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O1xcbiAgICAtLXByb2plY3QtaGVpZ2h0OiA1MHB4O1xcbiAgICAtLXByb2plY3QtYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDApO1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcXG5cXG4gICBcXG5cXG4gICAgLS10b2RvLWJ1dHRvbnMtd2lkdGg6IDUwcHg7XFxuICAgIC0tdG9kby1idXR0b25zLWhlaWdodDogMjVweDtcXG59XFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmJ1dHRvbiB7IC0tcHJvamVjdC1hZGQtd2lkdGg6IDEwMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICBwYWRkaW5nOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMjVweDsgKi9cXG5cXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICovXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGdhcDogMjBweDsgKi9cXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDI1cHgsIDFmcikpOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICB3aWR0aDogdmFyKC0tcHJvamVjdC13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7ICBcXG5cXG59XFxuXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtYWRkLCAucHJvamVjdC1kZWxldGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWFkZDphY3RpdmUsIC5wcm9qZWN0LWRlbGV0ZTphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG5cXG4uZm9ybSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS11cGRhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTUwcHgsMWZyKSk7ICovXFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udG9kby1mb3JtLCAudG9kby11cGRhdGUtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4udG9kby1jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnRvZG8tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1kYXRlLCAudG9kby1idXR0b25zIHtcXG4gICAgbWFyZ2luOiA2cHggNXB4O1xcbn1cXG5cXG4uZWRpdC10b2RvLCAuZGVsLXRvZG8sIC51cGRhdGUtdG9kbyB7XFxuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uZWRpdC10b2RvOmFjdGl2ZSwgLmRlbC10b2RvOmFjdGl2ZSwgLnVwZGF0ZS10b2RvOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICAgXFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5hZGQtdG9kbzphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRvZG8gPiBzcGFuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hZGQtdG9kbyA+IHNwYW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICdhZGQgdG9kbyc7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGxlZnQ6IC0zMHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGdyZWVuO1xcbn1cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgeWVsbG93O1xcbn1cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHJlZDtcXG59XFxuXFxuXFxuLnN1Ym1pdC10b2RvIHtcXG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LXRvZG86YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQdXNoUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0L3B1c2gtcHJvamVjdFwiO1xuaW1wb3J0IFB1c2hUb2RvIGZyb20gXCIuL3Byb2plY3QvcHVzaC10b2RvXCI7XG5pbXBvcnQgRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0L2RlbC1wcm9qZWN0XCI7XG5pbXBvcnQgRGVsZXRlVG9kbyBmcm9tIFwiLi9wcm9qZWN0L2RlbC10b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3RzKHRpdGxlKSB7IFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuICAgIGNvbnN0IFRpdGxlID0gdGl0bGUgXG5cbiBcbiAgICBjb25zdCB0b2RvTGlzdCA9IHRvZG9BcnJheSAgXG4gICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgXG4gICAgICAgIHsgVGl0bGUgfSxcbiAgICAgICAgeyB0b2RvTGlzdCB9LFxuICAgICAgICBQdXNoVG9kbyh0b2RvQXJyYXkpLFxuICAgICAgICBEZWxldGVUb2RvKHRvZG9MaXN0KSxcbiAgICAgIFxuICAgICAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0QXJyYXlDcmVhdGUodGl0bGUpIHtcbiAgIFxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdXG4gICAgY29uc3QgUHJvamVjdHMgPSBwcm9qZWN0QXJyYXlcblxuICAgIGNvbnN0IGFkZExvY2FsU3RvcmFnZSA9IChhcnIpID0+IHtcbiAgICAgICAgLy8gcHJvamVjdEFycmF5LnB1c2goYXJyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coUHJvamVjdHMpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyKVxuICAgICAgICBhcnIuZm9yRWFjaCh2YWwgPT4gcHJvamVjdEFycmF5LnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdmFsKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAge3RpdGxlfSxcbiAgICAgICAgeyBQcm9qZWN0cyB9LFxuICAgICAgICB7IGFkZExvY2FsU3RvcmFnZSB9LFxuICAgICAgICBQdXNoUHJvamVjdChwcm9qZWN0QXJyYXkpLFxuICAgICAgICBEZWxldGVQcm9qZWN0KHByb2plY3RBcnJheSlcbiAgICApXG4gICAgXG59XG5cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVByb2plY3Q6IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlVG9kbyhvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVUb2RvOiAoaW5kZXgpID0+IG9iai5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVzaFByb2plY3Qob2JqKSB7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3Q6IChhcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoKSkgICAgXG4gICAgICAgICAgICByZXR1cm4gb2JqLnB1c2goYXJyKVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1c2hUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG86IChhcnIpID0+IG9iai5wdXNoKGFyciksXG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuUHJvamVjdHMpKTtcbiAgIFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBsZXQgVGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IFByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICBcblxuICAgIGNvbnN0IFVwZGF0ZVRvZG8gPSAodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3RlKSA9PiB7XG4gICAgICAgIFRpdGxlID0gdGl0bGU7XG4gICAgICAgIERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIER1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIFRpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHksXG4gICAgICBcbiAgICAgICAgVXBkYXRlVG9kb1xuICAgICAgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBQcm9qZWN0LCB7UHJvamVjdEFycmF5Q3JlYXRlfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFByb2plY3RGb3JtIGZyb20gJy4vdmlldy9wcm9qZWN0LWZvcm0uanMnO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSAnLi92aWV3L3Byb2plY3QtcmVuZGVyLmpzJztcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSAnLi92aWV3L3Byb2plY3QtZXZlbnQuanMnO1xuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tICcuL3ZpZXcvcHJvamVjdC10aXRsZS1yZW5kZXIuanMnO1xuaW1wb3J0IFByb2plY3REZWxldGUgZnJvbSAnLi92aWV3L3Byb2plY3QtZGVsZXRlLmpzJztcbmltcG9ydCBUb2RvRm9ybSBmcm9tICcuL3ZpZXcvdG9kby1mb3JtLmpzJztcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gJy4vdmlldy90b2RvLXJlbmRlci5qcyc7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSAnLi92aWV3L3RvZG8tZWRpdC5qcyc7XG5pbXBvcnQgRGVsVG9kbyBmcm9tICcuL3ZpZXcvdG9kby1kZWxldGUuanMnO1xuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gJy4vdmlldy90b2RvLWZvcm0tYnV0dG9uLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBQcm9qZWN0Rm9ybSxcbiAgICAgICAgUHJvamVjdFJlbmRlcixcbiAgICAgICAgUHJvamVjdEV2ZW50LFxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIsICAgICAgICBcbiAgICAgICAgUHJvamVjdERlbGV0ZSxcbiAgICAgICAgVG9kb0Zvcm0sXG4gICAgICAgIFRvZG9SZW5kZXIsXG4gICAgICAgIEVkaXRUb2RvLFxuICAgICAgICBEZWxUb2RvLFxuICAgICAgICBUb2RvRm9ybUJ1dHRvbixcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9IFByb2plY3RBcnJheUNyZWF0ZSgnUHJvamVjdE1hbmFnZXInKTtcblxuXG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnZGVmYXVsdCcpXG5cblxucHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcblxuLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuUHJvamVjdHMpXG5cblxuXG4iLCJsZXQgcHJvamVjdElEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3RJZChuZXdWYWwpIHtcbiAgICBwcm9qZWN0SUQgPSBuZXdWYWw7XG5cbiAgICByZXR1cm4gcHJvamVjdElEO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdElkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJRClcbiAgICByZXR1cm4gTnVtYmVyKHByb2plY3RJRCk7XG59XG4iLCJsZXQgdG9kb0lEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvZG9JZChuZXdWYWwpIHtcbiAgICB0b2RvSUQgPSBuZXdWYWxcbiAgICByZXR1cm4gdG9kb0lEXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvSWQoKSB7XG4gICAgcmV0dXJuIE51bWJlcih0b2RvSUQpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERlbGV0ZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbicpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpXG4gICAgcHJvamVjdERlbC50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG5cbiAgICBwcm9qZWN0RGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBpZihnZXRQcm9qZWN0SWQoKSA9PT0gMCkgcmV0dXJuOyAgXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElkKCkpICAgICAgICBcbiAgICAgICAgcHJvamVjdC5jaGlsZE5vZGVzW2dldFByb2plY3RJZCgpXS5yZW1vdmUoKVxuICAgICAgICBzdG9yZVByb2plY3QoKVxuICAgICAgICBcbiAgICAgICAgdG9kby50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJydcblxuXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsKVxuXG59XG4iLCJpbXBvcnQgeyBzZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIlxuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmltcG9ydCBQcm9qZWN0VGl0bGVSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC10aXRsZS1yZW5kZXJcIlxuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gXCIuL3RvZG8tZm9ybS1idXR0b25cIlxuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIlxuaW1wb3J0IEVkaXRUb2RvIGZyb20gXCIuL3RvZG8tZWRpdFwiXG5pbXBvcnQgRGVsVG9kbyBmcm9tIFwiLi90b2RvLWRlbGV0ZVwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RXZlbnQoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tYnV0dG9uJylcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBwcm9qZWN0LmZvckVhY2godmFsID0+IHZhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXRcbiAgICAgICAgbGV0IG5vZGVJZCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKCdwcm9qZWN0JylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBidXR0b25Db250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBzZXRQcm9qZWN0SWQobm9kZUlkKVxuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIoKVxuICAgICAgICBUb2RvRm9ybUJ1dHRvbigpXG4gICAgICAgIFRvZG9SZW5kZXIoKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG5cbiAgICAgICBcbiAgICAgICAgXG4gICAgfSkpXG4gIFxuICAgIFxuICAgXG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC1yZW5kZXJcIjtcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSBcIi4vcHJvamVjdC1ldmVudFwiO1xuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXRpdGxlLXJlbmRlclwiO1xuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTdWJtaXQoaW5wdXQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0gJ0FkZCBQcm9qZWN0J1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICBzdG9yZVByb2plY3QoKVxuICAgICAgICBQcm9qZWN0UmVuZGVyKClcbiAgICAgICAgUHJvamVjdEV2ZW50KClcbiAgICAgICAgUHJvamVjdFRpdGxlUmVuZGVyKClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5oYXNPd25Qcm9wZXJ0eSgnYWRkUHJvamVjdCcpKVxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxufVxuIiwiaW1wb3J0IFByb2plY3RTdWJtaXQgZnJvbSBcIi4vcHJvamVjdC1mb3JtLWJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIFByb2plY3RTdWJtaXQoaW5wdXQpIFxuICAgXG5cbn1cbiIsImltcG9ydCB7IHNldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKVxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSlcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJydcblxuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRQcm9qZWN0SWQoaSkgICBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICBcbiAgICAgICBcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QnLGkpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tpXS5UaXRsZTtcbiAgICBcbiAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KSAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIH1cbn0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRQcm9qZWN0SWQoaSkgICBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICBcbiAgICAgICBcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QnLGkpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB1c2VyRGF0YVtpXS5UaXRsZTtcbiAgICBcbiAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KSAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIH1cbn1cbiAgICBcbn0iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCJcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0VGl0bGVSZW5kZXIoKSB7XG4gICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG5cbiAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0uVGl0bGV9YFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgIH0gZWxzZSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhW2dldFByb2plY3RJZCgpXS5UaXRsZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICB9XG5cbn0iLCJpbXBvcnQgeyBzZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5pbXBvcnQgeyBnZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcblxuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIjtcbmltcG9ydCBFZGl0VG9kbyBmcm9tIFwiLi90b2RvLWVkaXRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxUb2RvKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtdG9kbycpO1xuICAgIFxuICAgIGJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpZCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ3RvZG8nKTtcbiAgICAgICAgc2V0VG9kb0lkKGlkKVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0ucmVtb3ZlVG9kbyhnZXRUb2RvSWQoKSlcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhnZXRUb2RvSWQoKSlcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QpXG4gICAgICAgIFxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG5cbiAgICB9KSlcblxufVxuIiwiaW1wb3J0IHsgc2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5cblxuaW1wb3J0IFVwZGF0ZVRvZG8gZnJvbSBcIi4vdXBkYXRlLXRvZG8tZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0VG9kbygpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdXBkYXRlJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdG9kbycpO1xuICAgIGJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmdldEF0dHJpYnV0ZSgndG9kbycpXG4gICAgICAgIHNldFRvZG9JZChpZClcbiAgICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhOdW1iZXIoaWQpKVxuXG4gICAgICAgIGZvcm0udGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBVcGRhdGVUb2RvKClcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKVxuXG4gICAgfSkpXG59XG4iLCJpbXBvcnQgVG9kb0Zvcm0gZnJvbSBcIi4vdG9kby1mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9Gb3JtQnV0dG9uKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuICAgIC8vIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbydcbiAgICBcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3BhbilcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBmb3JtLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgVG9kb0Zvcm0oKVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuIiwiXG5pbXBvcnQgVG9kb1N1Ym1pdCBmcm9tIFwiLi90b2RvLXN1Ym1pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRm9ybSgpIHtcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG5cblxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgXVxuICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgIFxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgIFxuXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICBcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC10b2RvJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFRvZG9TdWJtaXQoKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpXG4gICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiXG4gICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnUHJpb3JpdHknKVxuICAgIFxuICBcbiAgICAvLyBjaG9vc2VzIGZvciBwcmlvcml0eVxuICAgIGNvbnN0IHByaW9yaXR5QXJyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ2dyZWVuJyxcbiAgICAgICAgICAgIHRleHQ6ICdsb3cnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ3llbGxvdycsXG4gICAgICAgICAgICB0ZXh0OiAnbWVkaXVtJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdyZWQnLFxuICAgICAgICAgICAgdGV4dDogJ2hpZ2gnLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgLy8gbG9vcCB0aGUgY2hvb3NlIHRvIHB1dCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJbaV0udmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlBcnJbaV0udGV4dDtcblxuICAgICAgICBcbiAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICBcbiAgIFxuXG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIjtcbmltcG9ydCB7IHNldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9SZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICBcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VG9kb0lkKGkpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnLCBpKVxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoJ3RvZG8nLCBpKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKCd0YXNrQ29sb3InLCBpKVxuICAgIFxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUnKTtcbiAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5UaXRsZX1gO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRHVlRGF0ZX1gO1xuICAgICAgICAgICAgdGFza0NvbG9yLnN0eWxlLmJvcmRlckxlZnQgPSBgMTBweCBzb2xpZCAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5Qcmlvcml0eX1gO1xuICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLXRvZG8nKTtcbiAgICAgICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9ICdEZWwnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZSgndG9kbycsIGkpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgIHRhc2tDb2xvci5zZXRBdHRyaWJ1dGUoJ3Rhc2tDb2xvcicsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtdG9kbycpO1xuICAgICAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbCdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFza0NvbG9yKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgVG9kb1JlbmRlciBmcm9tIFwiLi90b2RvLXJlbmRlclwiO1xuaW1wb3J0IEVkaXRUb2RvIGZyb20gXCIuL3RvZG8tZWRpdFwiO1xuaW1wb3J0IERlbFRvZG8gZnJvbSBcIi4vdG9kby1kZWxldGVcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9TdWJtaXQoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGl0bGUnKVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Rlc2NyaXB0aW9uJylcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0RhdGUnKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByaW9yaXR5JylcbiAgICBjb25zdCB0b2RvID0gVG9kbyhcbiAgICAgICAgdGl0bGUudmFsdWUsIFxuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSwgXG4gICAgICAgIGRhdGUudmFsdWUsIFxuICAgICAgICBwcmlvcml0eS52YWx1ZSwgXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS5hZGRUb2RvKHRvZG8pXG4gICAgICAgIFxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG59IiwiaW1wb3J0IFRvZG9VcGRhdGVTdWJtaXQgZnJvbSBcIi4vdXBkYXRlLXRvZG8tc3VibWl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVRvZG8oKSB7XG4gICAgICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS11cGRhdGUnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZS1mb3JtJylcblxuICAgIC8vIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIC8vIGNvbnN0IGlucHV0RGVzY3JpcHRpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAvLyBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG5cbiAgICBjb25zdCBpbnB1dEFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RpdGxlVXBkYXRlJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0Rlc2NyaXB0aW9uVXBkYXRlJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0RhdGVVcGRhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICB9LFxuICAgIF1cblxuICAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgXG5cbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgIFxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgXG4gICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgfVxuXG4gICBcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1cGRhdGUtdG9kbycpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSdcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBUb2RvVXBkYXRlU3VibWl0KClcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKVxuICAgIH0pXG5cblxuICAgIC8vIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIC8vIGlucHV0RGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIC8vIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgLy8gaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgXG4gIFxuICAgIC8vIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgJ3RpdGxlJylcbiAgICAvLyBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICdkZXNjcmlwdGlvbicpICBcbiAgICAvLyBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsICdwcmlvcml0eScpICBcbiAgICBcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiXG4gICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnUHJpb3JpdHlVcGRhdGUnKVxuXG4gICAgLy8gY2hvb3NlcyBmb3IgcHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eUFyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdncmVlbicsXG4gICAgICAgICAgICB0ZXh0OiAnbG93JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgdGV4dDogJ21lZGl1bScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAncmVkJyxcbiAgICAgICAgICAgIHRleHQ6ICdoaWdoJyxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIC8vIGxvb3AgdGhlIGNob29zZSB0byBwdXQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgLy8gICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyW2ldLnZhbHVlO1xuICAgIC8vICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5QXJyW2ldLnRleHQ7XG5cbiAgICAgICAgXG4gICAgLy8gICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAvLyB9XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJbaV0udmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlBcnJbaV0udGV4dDtcblxuICAgICAgICBcbiAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICAgIFxuXG5cbiAgICAgICAgXG4gICBcblxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgZ2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5pbXBvcnQgVG9kb1JlbmRlciBmcm9tIFwiLi90b2RvLXJlbmRlclwiO1xuaW1wb3J0IEVkaXRUb2RvIGZyb20gXCIuL3RvZG8tZWRpdFwiO1xuaW1wb3J0IERlbFRvZG8gZnJvbSBcIi4vdG9kby1kZWxldGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1VwZGF0ZVN1Ym1pdCgpIHtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1RpdGxlVXBkYXRlJylcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Rlc2NyaXB0aW9uVXBkYXRlJylcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGF0ZVVwZGF0ZScpXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcmlvcml0eVVwZGF0ZScpXG4gICBcbiAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLlRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZSwgXG4gICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2dldFRvZG9JZCgpXS5EZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWUsICAgICAgICAgICAgICBcbiAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLkR1ZURhdGUgPSBpbnB1dERhdGUudmFsdWUsICAgICAgICAgICAgICBcbiAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLlByaW9yaXR5ID0gaW5wdXRQcmlvcml0eS52YWx1ZSwgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QpXG4gICAgVG9kb1JlbmRlcigpIFxuIFxuICAgIEVkaXRUb2RvKClcbiAgICBEZWxUb2RvKClcbiAgICBcbiAgICAgIFxuICAgICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBWaWV3LCB7cHJvamVjdE1hbmFnZXJ9ZnJvbSAnLi92aWV3LmpzJzsgXG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gJy4vc3RvcmFnZS1wcm9qZWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbi8vIHN0b3JlUHJvamVjdCgpXG5cblZpZXcoKS5Qcm9qZWN0Rm9ybSgpXG5WaWV3KCkuUHJvamVjdFJlbmRlcigpXG5WaWV3KCkuUHJvamVjdEV2ZW50KClcblZpZXcoKS5Qcm9qZWN0VGl0bGVSZW5kZXIoKVxuVmlldygpLlByb2plY3REZWxldGUoKVxuVmlldygpLlRvZG9SZW5kZXIoKVxuVmlldygpLlRvZG9Gb3JtQnV0dG9uKClcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikgIT09IG51bGwpIHtcbiBcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRMb2NhbFN0b3JhZ2UoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkpXG4gICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIpXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuaGFzT3duUHJvcGVydHkoJ2FkZFByb2plY3QnKSlcbiAgICB9XG4gfSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9