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

if(!localStorage.getItem("ProjectArray")) {

    projectManager.addProject(defaultProject)
}

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
        console.log(_view__WEBPACK_IMPORTED_MODULE_0__.projectManager)
        console.log((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)())
        
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view */ "./src/view.js");











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
       
        
        console.log(Number(nodeId) === (0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.getProjectId)())
        console.log(_view__WEBPACK_IMPORTED_MODULE_6__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.getProjectId)()].todoList)
       
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
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");




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
        ;(0,_update_todo_form__WEBPACK_IMPORTED_MODULE_1__["default"])()
     
        form.textContent = ''
        form.classList.toggle('show-form')
        console.log(parent)

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
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");










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
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_3__["default"])()
        console.log(_view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].todoList)
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_4__["default"])() 
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_5__["default"])()
        ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_6__["default"])()
        
      
       
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
                   
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList
    

    ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])() 
    ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_5__["default"])()
    console.log('hello')
    
      
       
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
 



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
  
    }
 })


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ0E4Qzs7QUFFMUI7O0FBRXBCOztBQUVBLG9EQUFJO0FBQ0oscURBQUk7QUFDSixxREFBSTtBQUNKLHFEQUFJO0FBQ0oscURBQUk7QUFDSixxREFBSTtBQUNKLHFEQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCLGdCQUFnQixvREFBYztBQUM5QjtBQUNBO0FBQ0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9kZWwtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9kZWwtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9wdXNoLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvcHVzaC10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvZ2V0LXNldC1wcm9qZWN0LWlkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2dldC1zZXQtdG9kby1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWV2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtZm9ybS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtdGl0bGUtcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWZvcm0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLXN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGUtdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3VwZGF0ZS10b2RvLXN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByb2plY3Qtd2lkdGg6IDEyMHB4O1xuICAgIC0tcHJvamVjdC1oZWlnaHQ6IDUwcHg7XG4gICAgLS1wcm9qZWN0LWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XG4gICAgLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG5cbiAgIFxuXG4gICAgLS10b2RvLWJ1dHRvbnMtd2lkdGg6IDUwcHg7XG4gICAgLS10b2RvLWJ1dHRvbnMtaGVpZ2h0OiAyNXB4O1xufVxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5idXR0b24geyAtLXByb2plY3QtYWRkLXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLmNvbnRlbnQge1xuICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyNXB4OyAqL1xuXG59XG5cbi5wcm9qZWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICovXG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZ2FwOiAyMHB4OyAqL1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDI1cHgsIDFmcikpOyAqL1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNpZGViYXIge1xuXG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGdhcDogMjBweDtcblxufVxuXG4ucHJvamVjdCB7XG4gICAgd2lkdGg6IHZhcigtLXByb2plY3Qtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjazsgIFxuXG59XG5cbi5wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLnByb2plY3QtYWRkLCAucHJvamVjdC1kZWxldGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3QtYWRkOmFjdGl2ZSwgLnByb2plY3QtZGVsZXRlOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuXG4uZm9ybSB7XG4gICAgXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tdXBkYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwxZnIpKTsgKi9cbiAgICBnYXA6IDVweDtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93LWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4udG9kby1mb3JtLCAudG9kby11cGRhdGUtZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGdhcDogMnB4O1xufVxuXG4udG9kby1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi50b2RvLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi50b2RvLWRhdGUsIC50b2RvLWJ1dHRvbnMge1xuICAgIG1hcmdpbjogNnB4IDVweDtcbn1cblxuLmVkaXQtdG9kbywgLmRlbC10b2RvLCAudXBkYXRlLXRvZG8ge1xuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5lZGl0LXRvZG86YWN0aXZlLCAuZGVsLXRvZG86YWN0aXZlLCAudXBkYXRlLXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufVxuXG4uYWRkLXRvZG8ge1xuICAgXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmFkZC10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLmFkZC10b2RvID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnYWRkIHRvZG8nO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTMwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XG59XG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xufVxuXG5cbi5zdWJtaXQtdG9kbyB7XG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uc3VibWl0LXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJDQUEyQztJQUMzQywrQ0FBK0M7SUFDL0Msc0NBQXNDOzs7O0lBSXRDLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7OztTQUdTLDBCQUEwQjtFQUNqQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7R0FDRyxhQUFhO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGFBQWE7SUFDYixpRUFBaUU7SUFDakUsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7O0lBRWpCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJvamVjdC13aWR0aDogMTIwcHg7XFxuICAgIC0tcHJvamVjdC1oZWlnaHQ6IDUwcHg7XFxuICAgIC0tcHJvamVjdC1ib3JkZXItd2lkdGg6IDJweDtcXG4gICAgLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTI4LCAwKTtcXG4gICAgLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcblxcbiAgIFxcblxcbiAgICAtLXRvZG8tYnV0dG9ucy13aWR0aDogNTBweDtcXG4gICAgLS10b2RvLWJ1dHRvbnMtaGVpZ2h0OiAyNXB4O1xcbn1cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuYnV0dG9uIHsgLS1wcm9qZWN0LWFkZC13aWR0aDogMTAwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyNXB4OyAqL1xcblxcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgKi9cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiAyMHB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMjVweCwgMWZyKSk7ICovXFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcblxcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIHdpZHRoOiB2YXIoLS1wcm9qZWN0LXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjazsgIFxcblxcbn1cXG5cXG4ucHJvamVjdDphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQsIC5wcm9qZWN0LWRlbGV0ZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3QtYWRkOmFjdGl2ZSwgLnByb2plY3QtZGVsZXRlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcblxcbi5mb3JtIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLXVwZGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwxZnIpKTsgKi9cXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3ctZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi50b2RvLWZvcm0sIC50b2RvLXVwZGF0ZS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4udG9kby1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWRhdGUsIC50b2RvLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDZweCA1cHg7XFxufVxcblxcbi5lZGl0LXRvZG8sIC5kZWwtdG9kbywgLnVwZGF0ZS10b2RvIHtcXG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5lZGl0LXRvZG86YWN0aXZlLCAuZGVsLXRvZG86YWN0aXZlLCAudXBkYXRlLXRvZG86YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gICBcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmFkZC10b2RvOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5hZGQtdG9kbyA+IHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5hZGQtdG9kbyA+IHNwYW46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ2FkZCB0b2RvJztcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgbGVmdDogLTMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG4uc3VibWl0LXRvZG8ge1xcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtdG9kbzphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFB1c2hQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QvcHVzaC1wcm9qZWN0XCI7XG5pbXBvcnQgUHVzaFRvZG8gZnJvbSBcIi4vcHJvamVjdC9wdXNoLXRvZG9cIjtcbmltcG9ydCBEZWxldGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QvZGVsLXByb2plY3RcIjtcbmltcG9ydCBEZWxldGVUb2RvIGZyb20gXCIuL3Byb2plY3QvZGVsLXRvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdHModGl0bGUpIHsgXG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gICAgY29uc3QgVGl0bGUgPSB0aXRsZSBcblxuIFxuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0FycmF5ICBcbiAgIFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICBcbiAgICAgICAgeyBUaXRsZSB9LFxuICAgICAgICB7IHRvZG9MaXN0IH0sXG4gICAgICAgIFB1c2hUb2RvKHRvZG9BcnJheSksXG4gICAgICAgIERlbGV0ZVRvZG8odG9kb0xpc3QpLFxuICAgICAgXG4gICAgICAgIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RBcnJheUNyZWF0ZSh0aXRsZSkge1xuICAgXG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW11cbiAgICBjb25zdCBQcm9qZWN0cyA9IHByb2plY3RBcnJheVxuXG4gICAgY29uc3QgYWRkTG9jYWxTdG9yYWdlID0gKGFycikgPT4ge1xuICAgICAgICAvLyBwcm9qZWN0QXJyYXkucHVzaChhcnIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFycilcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhQcm9qZWN0cylcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIpXG4gICAgICAgIGFyci5mb3JFYWNoKHZhbCA9PiBwcm9qZWN0QXJyYXkucHVzaChPYmplY3QuYXNzaWduKHt9LCB2YWwpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7dGl0bGV9LFxuICAgICAgICB7IFByb2plY3RzIH0sXG4gICAgICAgIHsgYWRkTG9jYWxTdG9yYWdlIH0sXG4gICAgICAgIFB1c2hQcm9qZWN0KHByb2plY3RBcnJheSksXG4gICAgICAgIERlbGV0ZVByb2plY3QocHJvamVjdEFycmF5KVxuICAgIClcbiAgICBcbn1cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2plY3Qob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdDogKGluZGV4KSA9PiBvYmouc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVRvZG86IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXNoUHJvamVjdChvYmopIHtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkUHJvamVjdDogKGFycikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCgpKSAgICBcbiAgICAgICAgICAgIHJldHVybiBvYmoucHVzaChhcnIpXG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVzaFRvZG8ob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbzogKGFycikgPT4gb2JqLnB1c2goYXJyKSxcbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vdmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdG9yZVByb2plY3QoKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cykpO1xuICAgXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCBUaXRsZSA9IHRpdGxlO1xuICAgIGxldCBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBEdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgIFxuXG4gICAgY29uc3QgVXBkYXRlVG9kbyA9ICh0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGUpID0+IHtcbiAgICAgICAgVGl0bGUgPSB0aXRsZTtcbiAgICAgICAgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIFByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlLFxuICAgICAgICBQcmlvcml0eSxcbiAgICAgIFxuICAgICAgICBVcGRhdGVUb2RvXG4gICAgICAgIFxuICAgIH1cbn1cblxuIiwiaW1wb3J0IFByb2plY3QsIHtQcm9qZWN0QXJyYXlDcmVhdGV9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgUHJvamVjdEZvcm0gZnJvbSAnLi92aWV3L3Byb2plY3QtZm9ybS5qcyc7XG5pbXBvcnQgUHJvamVjdFJlbmRlciBmcm9tICcuL3ZpZXcvcHJvamVjdC1yZW5kZXIuanMnO1xuaW1wb3J0IFByb2plY3RFdmVudCBmcm9tICcuL3ZpZXcvcHJvamVjdC1ldmVudC5qcyc7XG5pbXBvcnQgUHJvamVjdFRpdGxlUmVuZGVyIGZyb20gJy4vdmlldy9wcm9qZWN0LXRpdGxlLXJlbmRlci5qcyc7XG5pbXBvcnQgUHJvamVjdERlbGV0ZSBmcm9tICcuL3ZpZXcvcHJvamVjdC1kZWxldGUuanMnO1xuaW1wb3J0IFRvZG9Gb3JtIGZyb20gJy4vdmlldy90b2RvLWZvcm0uanMnO1xuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSAnLi92aWV3L3RvZG8tcmVuZGVyLmpzJztcbmltcG9ydCBFZGl0VG9kbyBmcm9tICcuL3ZpZXcvdG9kby1lZGl0LmpzJztcbmltcG9ydCBEZWxUb2RvIGZyb20gJy4vdmlldy90b2RvLWRlbGV0ZS5qcyc7XG5pbXBvcnQgVG9kb0Zvcm1CdXR0b24gZnJvbSAnLi92aWV3L3RvZG8tZm9ybS1idXR0b24uanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldygpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIFByb2plY3RGb3JtLFxuICAgICAgICBQcm9qZWN0UmVuZGVyLFxuICAgICAgICBQcm9qZWN0RXZlbnQsXG4gICAgICAgIFByb2plY3RUaXRsZVJlbmRlciwgICAgICAgIFxuICAgICAgICBQcm9qZWN0RGVsZXRlLFxuICAgICAgICBUb2RvRm9ybSxcbiAgICAgICAgVG9kb1JlbmRlcixcbiAgICAgICAgRWRpdFRvZG8sXG4gICAgICAgIERlbFRvZG8sXG4gICAgICAgIFRvZG9Gb3JtQnV0dG9uLFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHByb2plY3RNYW5hZ2VyID0gUHJvamVjdEFycmF5Q3JlYXRlKCdQcm9qZWN0TWFuYWdlcicpO1xuXG5cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0KCdkZWZhdWx0JylcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG5cbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxufVxuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cylcblxuXG5cbiIsImxldCBwcm9qZWN0SUQgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdElkKG5ld1ZhbCkge1xuICAgIHByb2plY3RJRCA9IG5ld1ZhbDtcblxuICAgIHJldHVybiBwcm9qZWN0SUQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdElEKVxuICAgIHJldHVybiBOdW1iZXIocHJvamVjdElEKTtcbn1cbiIsImxldCB0b2RvSUQgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9kb0lkKG5ld1ZhbCkge1xuICAgIHRvZG9JRCA9IG5ld1ZhbFxuICAgIHJldHVybiB0b2RvSURcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvZG9JZCgpIHtcbiAgICByZXR1cm4gTnVtYmVyKHRvZG9JRCk7XG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIjtcbmltcG9ydCBzdG9yZVByb2plY3QgZnJvbSBcIi4uL3N0b3JhZ2UtcHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGVsZXRlKCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKTtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tYnV0dG9uJylcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHByb2plY3REZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0RGVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlJylcbiAgICBwcm9qZWN0RGVsLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcblxuICAgIHByb2plY3REZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmKGdldFByb2plY3RJZCgpID09PSAwKSByZXR1cm47ICBcbiAgICAgICAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChnZXRQcm9qZWN0SWQoKSkgICAgICAgIFxuICAgICAgICBwcm9qZWN0LmNoaWxkTm9kZXNbZ2V0UHJvamVjdElkKCldLnJlbW92ZSgpXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyKVxuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9qZWN0SWQoKSlcbiAgICAgICAgXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcnXG5cblxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbClcblxufVxuIiwiaW1wb3J0IHsgc2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5pbXBvcnQgUHJvamVjdFRpdGxlUmVuZGVyIGZyb20gXCIuL3Byb2plY3QtdGl0bGUtcmVuZGVyXCJcbmltcG9ydCBUb2RvRm9ybUJ1dHRvbiBmcm9tIFwiLi90b2RvLWZvcm0tYnV0dG9uXCJcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCJcbmltcG9ydCBFZGl0VG9kbyBmcm9tIFwiLi90b2RvLWVkaXRcIlxuaW1wb3J0IERlbFRvZG8gZnJvbSBcIi4vdG9kby1kZWxldGVcIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RXZlbnQoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8tYnV0dG9uJylcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBwcm9qZWN0LmZvckVhY2godmFsID0+IHZhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZS50YXJnZXRcbiAgICAgICAgbGV0IG5vZGVJZCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKCdwcm9qZWN0JylcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBidXR0b25Db250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBzZXRQcm9qZWN0SWQobm9kZUlkKVxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKG5vZGVJZCkgPT09IGdldFByb2plY3RJZCgpKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QpXG4gICAgICAgXG4gICAgICAgIFByb2plY3RUaXRsZVJlbmRlcigpXG4gICAgICAgIFRvZG9Gb3JtQnV0dG9uKClcbiAgICAgICAgVG9kb1JlbmRlcigpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgRWRpdFRvZG8oKVxuICAgICAgICBEZWxUb2RvKClcblxuICAgICAgIFxuICAgICAgICBcbiAgICB9KSlcbiAgXG4gICAgXG4gICBcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgUHJvamVjdFJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXJlbmRlclwiO1xuaW1wb3J0IFByb2plY3RFdmVudCBmcm9tIFwiLi9wcm9qZWN0LWV2ZW50XCI7XG5pbXBvcnQgUHJvamVjdFRpdGxlUmVuZGVyIGZyb20gXCIuL3Byb2plY3QtdGl0bGUtcmVuZGVyXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFN1Ym1pdChpbnB1dCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpXG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZCcpXG4gICAgYnV0dG9uLnRleHRDb250ZW50PSAnQWRkIFByb2plY3QnXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgdG9kby50ZXh0Q29udGVudCA9ICcnXG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICAgIFByb2plY3RSZW5kZXIoKVxuICAgICAgICBQcm9qZWN0RXZlbnQoKVxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIoKVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmhhc093blByb3BlcnR5KCdhZGRQcm9qZWN0JykpXG4gICAgICAgIGlucHV0LnZhbHVlID0gJydcbiAgICB9KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG59XG4iLCJpbXBvcnQgUHJvamVjdFN1Ym1pdCBmcm9tIFwiLi9wcm9qZWN0LWZvcm0tYnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbnB1dCcpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgUHJvamVjdFN1Ym1pdChpbnB1dCkgXG4gICBcblxufVxuIiwiaW1wb3J0IHsgc2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJylcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG5cbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpIHtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE1hbmFnZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2V0UHJvamVjdElkKGkpICAgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgICAgXG4gICAgICAgXG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdwcm9qZWN0JyxpKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbaV0uVGl0bGU7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgfVxufSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFByb2plY3RJZChpKSAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgIFxuICAgICAgIFxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgncHJvamVjdCcsaSk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHVzZXJEYXRhW2ldLlRpdGxlO1xuICAgIFxuICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgfVxufVxuICAgIFxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIlxuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RUaXRsZVJlbmRlcigpIHtcbiAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSlcblxuICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS5UaXRsZX1gXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLlRpdGxlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgIH1cblxufSIsImltcG9ydCB7IHNldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmltcG9ydCB7IGdldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuXG5pbXBvcnQgVG9kb1JlbmRlciBmcm9tIFwiLi90b2RvLXJlbmRlclwiO1xuaW1wb3J0IEVkaXRUb2RvIGZyb20gXCIuL3RvZG8tZWRpdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsVG9kbygpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRvZG8nKTtcbiAgICBcbiAgICBidXR0b24uZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCd0b2RvJyk7XG4gICAgICAgIHNldFRvZG9JZChpZClcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnJlbW92ZVRvZG8oZ2V0VG9kb0lkKCkpXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKVxuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhnZXRUb2RvSWQoKSlcbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QpXG4gICAgICAgIFxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG5cbiAgICB9KSlcblxufVxuIiwiaW1wb3J0IHsgc2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5pbXBvcnQgVXBkYXRlVG9kbyBmcm9tIFwiLi91cGRhdGUtdG9kby1mb3JtXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFRvZG8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXVwZGF0ZScpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8nKTtcbiAgICBidXR0b24uZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICBjb25zdCBpZCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ3RvZG8nKVxuICAgICAgICBzZXRUb2RvSWQoaWQpXG4gICAgICAgIFVwZGF0ZVRvZG8oKVxuICAgICBcbiAgICAgICAgZm9ybS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJylcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50KVxuXG4gICAgfSkpXG59XG4iLCJpbXBvcnQgVG9kb0Zvcm0gZnJvbSBcIi4vdG9kby1mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9Gb3JtQnV0dG9uKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kbycpO1xuICAgIC8vIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9kbydcbiAgICBcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3BhbilcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBmb3JtLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgVG9kb0Zvcm0oKVxuICAgICAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuIiwiXG5pbXBvcnQgVG9kb1N1Ym1pdCBmcm9tIFwiLi90b2RvLXN1Ym1pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRm9ybSgpIHtcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZm9ybScpXG5cblxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgXVxuICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgIFxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgIFxuXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICBcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC10b2RvJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0J1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFRvZG9TdWJtaXQoKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpXG4gICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiXG4gICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnUHJpb3JpdHknKVxuICAgIFxuICBcbiAgICAvLyBjaG9vc2VzIGZvciBwcmlvcml0eVxuICAgIGNvbnN0IHByaW9yaXR5QXJyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ2dyZWVuJyxcbiAgICAgICAgICAgIHRleHQ6ICdsb3cnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ3llbGxvdycsXG4gICAgICAgICAgICB0ZXh0OiAnbWVkaXVtJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdyZWQnLFxuICAgICAgICAgICAgdGV4dDogJ2hpZ2gnLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgLy8gbG9vcCB0aGUgY2hvb3NlIHRvIHB1dCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJbaV0udmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlBcnJbaV0udGV4dDtcblxuICAgICAgICBcbiAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICBcbiAgIFxuXG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIjtcbmltcG9ydCB7IHNldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9SZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICBcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VG9kb0lkKGkpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnLCBpKVxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoJ3RvZG8nLCBpKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKCd0YXNrQ29sb3InLCBpKVxuICAgIFxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUnKTtcbiAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5UaXRsZX1gO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRHVlRGF0ZX1gO1xuICAgICAgICAgICAgdGFza0NvbG9yLnN0eWxlLmJvcmRlckxlZnQgPSBgMTBweCBzb2xpZCAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5Qcmlvcml0eX1gO1xuICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLXRvZG8nKTtcbiAgICAgICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9ICdEZWwnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZSgndG9kbycsIGkpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgIHRhc2tDb2xvci5zZXRBdHRyaWJ1dGUoJ3Rhc2tDb2xvcicsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtdG9kbycpO1xuICAgICAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbCdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFza0NvbG9yKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCI7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSBcIi4vdG9kby1lZGl0XCI7XG5pbXBvcnQgRGVsVG9kbyBmcm9tIFwiLi90b2RvLWRlbGV0ZVwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1N1Ym1pdCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUaXRsZScpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJpb3JpdHknKVxuICAgIGNvbnN0IHRvZG8gPSBUb2RvKFxuICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgICAgZGF0ZS52YWx1ZSwgXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLCBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLmFkZFRvZG8odG9kbylcbiAgICAgICAgc3RvcmVQcm9qZWN0KClcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0KVxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG59IiwiaW1wb3J0IFRvZG9VcGRhdGVTdWJtaXQgZnJvbSBcIi4vdXBkYXRlLXRvZG8tc3VibWl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVRvZG8oKSB7XG4gICAgICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS11cGRhdGUnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZS1mb3JtJylcblxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGl0bGVVcGRhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb25VcGRhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZVVwZGF0ZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICBcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICBcblxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICBcbiAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICB9XG5cbiAgIFxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS10b2RvJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJ1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFRvZG9VcGRhdGVTdWJtaXQoKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctZm9ybScpXG4gICAgfSlcblxuICAgIFxuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCJcbiAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsICdQcmlvcml0eVVwZGF0ZScpXG5cbiAgICAvLyBjaG9vc2VzIGZvciBwcmlvcml0eVxuICAgIGNvbnN0IHByaW9yaXR5QXJyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ2dyZWVuJyxcbiAgICAgICAgICAgIHRleHQ6ICdsb3cnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ3llbGxvdycsXG4gICAgICAgICAgICB0ZXh0OiAnbWVkaXVtJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdyZWQnLFxuICAgICAgICAgICAgdGV4dDogJ2hpZ2gnLFxuICAgICAgICB9LFxuICAgIF07XG5cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eUFycltpXS52YWx1ZTtcbiAgICAgICAgb3B0aW9uLnRleHQgPSBwcmlvcml0eUFycltpXS50ZXh0O1xuXG4gICAgICAgIFxuICAgICAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfVxuXG5cblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgXG5cblxuICAgICAgICBcbiAgIFxuXG59IiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgeyBnZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCI7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSBcIi4vdG9kby1lZGl0XCI7XG5pbXBvcnQgRGVsVG9kbyBmcm9tIFwiLi90b2RvLWRlbGV0ZVwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvVXBkYXRlU3VibWl0KCkge1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVGl0bGVVcGRhdGUnKVxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVzY3JpcHRpb25VcGRhdGUnKVxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdEYXRlVXBkYXRlJylcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1ByaW9yaXR5VXBkYXRlJylcbiAgIFxuICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtnZXRUb2RvSWQoKV0uVGl0bGUgPSBpbnB1dFRpdGxlLnZhbHVlLCBcbiAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLkRlc2NyaXB0aW9uID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgICAgICAgICAgICAgIFxuICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtnZXRUb2RvSWQoKV0uRHVlRGF0ZSA9IGlucHV0RGF0ZS52YWx1ZSwgICAgICAgICAgICAgIFxuICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtnZXRUb2RvSWQoKV0uUHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5LnZhbHVlLCAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFxuICAgIFxuXG4gICAgVG9kb1JlbmRlcigpIFxuICAgIEVkaXRUb2RvKClcbiAgICBEZWxUb2RvKClcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuICAgIFxuICAgICAgXG4gICAgICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFZpZXcsIHtwcm9qZWN0TWFuYWdlcn1mcm9tICcuL3ZpZXcuanMnOyBcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuLy8gc3RvcmVQcm9qZWN0KClcblxuVmlldygpLlByb2plY3RGb3JtKClcblZpZXcoKS5Qcm9qZWN0UmVuZGVyKClcblZpZXcoKS5Qcm9qZWN0RXZlbnQoKVxuVmlldygpLlByb2plY3RUaXRsZVJlbmRlcigpXG5WaWV3KCkuUHJvamVjdERlbGV0ZSgpXG5WaWV3KCkuVG9kb1JlbmRlcigpXG5WaWV3KCkuVG9kb0Zvcm1CdXR0b24oKVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSAhPT0gbnVsbCkge1xuIFxuICAgIHByb2plY3RNYW5hZ2VyLmFkZExvY2FsU3RvcmFnZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlcilcbiAgXG4gICAgfVxuIH0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==