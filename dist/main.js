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

/* .form {
    display: none;
} */

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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,2BAA2B;IAC3B,2CAA2C;IAC3C,+CAA+C;IAC/C,sCAAsC;;;;IAItC,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;SAGS,0BAA0B;EACjC,YAAY;EACZ,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;;AAGA;;IAEI,aAAa;IACb,8BAA8B;AAClC;;AAEA;GACG,aAAa;IACZ,iBAAiB;IACjB,yBAAyB;;AAE7B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,aAAa;IACb,gCAAgC;IAChC,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;AACb;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,SAAS;;AAEb;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;;AAEhB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;;AAGA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;;IAEd,aAAa;IACb,iEAAiE;IACjE,QAAQ;AACZ;;AAEA;;GAEG;;AAEH;IACI,aAAa;IACb,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;;IAEI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;;IAEjB,oBAAoB;AACxB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC","sourcesContent":[":root {\n    --project-width: 120px;\n    --project-height: 50px;\n    --project-border-width: 2px;\n    --button-hover-border-color: rgb(0, 128, 0);\n    --button-hover-background-color: rgb(0, 128, 0);\n    --button-hover-color: rgb(255,255,255);\n\n   \n\n    --todo-buttons-width: 50px;\n    --todo-buttons-height: 25px;\n}\n* {\n    padding: 0;\n    margin: 0;\n}\n\ninput,\ntextarea,\nselect,\nbutton { --project-add-width: 100px;\n  width: 150px;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n\n.content {\n  \n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.header-container {\n   padding: 25px;\n    background: green;\n    /* margin-bottom: 25px; */\n\n}\n\n.project-wrapper {\n    height: 100vh;\n    background-color: aliceblue;\n    display: grid;\n    /* grid-template-columns: 1fr; */\n    grid-column: 1;\n    grid-row: 1 / 4;\n    place-items: center;\n    /* gap: 20px; */\n}\n\n.project-container {\n    display: grid;\n    /* grid-template-rows: repeat(auto-fit,minmax(25px, 1fr)); */\n    gap: 10px;\n}\n\n.sidebar {\n\n    grid-column: 1;\n    display: grid;\n    margin-top: 10px;\n    gap: 20px;\n\n}\n\n.project {\n    width: var(--project-width);\n    height: var(--project-height);\n    border-radius: 5px;\n    border: 2px solid blue;\n    background: white;\n    color: black;  \n\n}\n\n.project:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.project-add, .project-delete {\n    border-radius: 5px;\n    border: 2px solid blue;\n    background: white;\n    color: black;\n}\n\n.project-add:active, .project-delete:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n\n.form {\n    \n    display: none;\n}\n\n.form-update {\n    display: none;\n}\n\n.todo-container {\n    grid-column: 2;\n\n    display: grid;\n    /* grid-template-columns: repeat(auto-fill, minmax(150px,1fr)); */\n    gap: 5px;\n}\n\n/* .form {\n    display: none;\n} */\n\n.show-form {\n    display: grid;\n    place-content: center;\n    \n}\n\n.todo-form, .todo-update-form {\n    display: grid;\n    place-content: center;\n    background: aliceblue;\n    height: 200px;\n    width: 250px;\n    gap: 2px;\n}\n\n.todo-card {\n    background-color: aliceblue;\n    display: flex;\n    justify-content: space-around;\n}\n.todo-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n.todo-date, .todo-buttons {\n    margin: 6px 5px;\n}\n\n.edit-todo, .del-todo, .update-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px solid blue;\n    background: white;\n}\n\n.edit-todo:active, .del-todo:active, .update-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo {\n   \n    width: 150px;\n    height: 25px;\n    border-radius: 25px;\n    border: 0;\n}\n\n.add-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo > span {\n    position: absolute;\n}\n\n.add-todo > span::before {\n    position: relative;\n}\n\n.add-todo > span::before {\n    content: 'add todo';\n    top: -10px;\n    left: -30px;\n    font-size: 1rem;\n    text-align: center;\n}\n\n.low-priority {\n    border-left: 10px solid green;\n}\n.medium-priority {\n    border-left: 10px solid yellow;\n}\n.high-priority {\n    border-left: 10px solid red;\n}\n\n\n.submit-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px solid blue;\n    background: white;\n\n    justify-self: center;\n}\n\n.submit-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _project_update_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/update-todo */ "./src/project/update-todo.js");





// import addTodoMethods from "./project/add-todo-methods";
function CreateProjects(title) { 
    const todoArray = [];
    const Title = title 
 
    const todoList = todoArray  
    function addTodoMethods(arr) {
        return {
            addMethods: () => arr.forEach(val => todoArray.push((0,_project_update_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(),(0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])()))
        }
    }
    
 
    return Object.assign(
        {},
        { Title },
        { todoList },
        (0,_project_push_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList),
        (0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(todoList),
        (0,_project_update_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(todoList),
        // addTodoMethods(todoList)
        
      
        )
}

function ProjectArrayCreate(title) {
    const projectArray = []
    const Projects = projectArray

    const addLocalStorage = (arr) => {
        // console.log(arr)
        arr.forEach(val => projectArray.push(Object.assign(
            {},
            val,
            (0,_project_push_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(val.todoList), 
            (0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(val.todoList),
            (0,_project_update_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(val.todoList),
            // addTodoMethods(val.todoList),
            )));
    }

    return Object.assign(
        {},
        {title},
        { Projects },
        { addLocalStorage },
        (0,_project_push_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray),
        (0,_project_del_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projectArray),
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

/***/ "./src/project/update-todo.js":
/*!************************************!*\
  !*** ./src/project/update-todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateTodo)
/* harmony export */ });
function UpdateTodo(arr) {
    return {
        updateTodo: (index,title, description, dueDate, priority) => {
            arr[index].Title = title;
            arr[index].Description = description;
            arr[index].DueDate = dueDate;
            arr[index].Priority = priority;
        }
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
   


    return {
        Title,
        Description,
        DueDate,
        Priority,
      
     
        
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
       
       
    
        ;(0,_project_title_render__WEBPACK_IMPORTED_MODULE_1__["default"])()
        ;(0,_todo_form_button__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
        
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_4__["default"])()
        ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_5__["default"])()

      console.log(_view__WEBPACK_IMPORTED_MODULE_6__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.getProjectId)()].todoList)
       
        
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
        // console.log(typeof projectManager.addProject === 'function')
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
        
        // console.log(userData)
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
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");











function DelTodo() {
    const button = document.querySelectorAll('.del-todo');
    
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute('todo');
        (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
        _view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].removeTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.getTodoId)())
        parent.remove()
        console.log(_view__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].todoList)
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_5__["default"])()
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
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");





function EditTodo() {
    const form = document.querySelector('.form-update');
    
    const button = document.querySelectorAll('.edit-todo');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        form.textContent = ''
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        ;(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
       
        //
        console.log(id)
        console.log('hello')
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
        
   console.log('hello')

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
        console.log(todo)
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_3__["default"])()
        // console.log(projectManager.Projects[getProjectId()].todoList)
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
/* harmony export */   "default": () => (/* binding */ UpdateTodoForm)
/* harmony export */ });
/* harmony import */ var _update_todo_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-todo-submit */ "./src/view/update-todo-submit.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");



function UpdateTodoForm() {
        
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
   
    console.log('hello')

        


        
   

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
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");










function TodoUpdateSubmit() {
    const inputTitle = document.getElementById('TitleUpdate')
    const inputDescription = document.getElementById('DescriptionUpdate')
    const inputDate = document.getElementById('DateUpdate')
    const inputPriority = document.getElementById('PriorityUpdate')
   
    // projectManager.Projects[getProjectId()].todoList[getTodoId()].Title = inputTitle.value, 
    // projectManager.Projects[getProjectId()].todoList[getTodoId()].Description = inputDescription.value,              
    // projectManager.Projects[getProjectId()].todoList[getTodoId()].DueDate = inputDate.value,              
    // projectManager.Projects[getProjectId()].todoList[getTodoId()].Priority = inputPriority.value,               
    // projectManager.Projects[getProjectId()].todoList[getTodoId()].upda   
    _view__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].updateTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)(),inputTitle.value, inputDescription.value, inputDate.value, inputPriority.value)
    
    ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_6__["default"])()
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
    
   
    console.log(_view_js__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects)
  
    }
 })


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxnQkFBZ0IsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxRQUFRLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdB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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQThDOztBQUUxQjs7QUFFcEI7O0FBRUEsb0RBQUk7QUFDSixxREFBSTtBQUNKLHFEQUFJO0FBQ0oscURBQUk7QUFDSixxREFBSTtBQUNKLHFEQUFJO0FBQ0oscURBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWM7QUFDbEI7QUFDQTtBQUNBLGdCQUFnQixvREFBYztBQUM5QjtBQUNBO0FBQ0EsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9kZWwtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9kZWwtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC9wdXNoLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvcHVzaC10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0L3VwZGF0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvZ2V0LXNldC1wcm9qZWN0LWlkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2dldC1zZXQtdG9kby1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWV2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtZm9ybS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtdGl0bGUtcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZGVsZXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWZvcm0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3RvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLXN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGUtdG9kby1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3VwZGF0ZS10b2RvLXN1Ym1pdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLXByb2plY3Qtd2lkdGg6IDEyMHB4O1xuICAgIC0tcHJvamVjdC1oZWlnaHQ6IDUwcHg7XG4gICAgLS1wcm9qZWN0LWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XG4gICAgLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDEyOCwgMCk7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG5cbiAgIFxuXG4gICAgLS10b2RvLWJ1dHRvbnMtd2lkdGg6IDUwcHg7XG4gICAgLS10b2RvLWJ1dHRvbnMtaGVpZ2h0OiAyNXB4O1xufVxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3QsXG5idXR0b24geyAtLXByb2plY3QtYWRkLXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuLmNvbnRlbnQge1xuICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAyNXB4OyAqL1xuXG59XG5cbi5wcm9qZWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7ICovXG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZ2FwOiAyMHB4OyAqL1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDI1cHgsIDFmcikpOyAqL1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNpZGViYXIge1xuXG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGdhcDogMjBweDtcblxufVxuXG4ucHJvamVjdCB7XG4gICAgd2lkdGg6IHZhcigtLXByb2plY3Qtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjazsgIFxuXG59XG5cbi5wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLnByb2plY3QtYWRkLCAucHJvamVjdC1kZWxldGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnByb2plY3QtYWRkOmFjdGl2ZSwgLnByb2plY3QtZGVsZXRlOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuXG4uZm9ybSB7XG4gICAgXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tdXBkYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwxZnIpKTsgKi9cbiAgICBnYXA6IDVweDtcbn1cblxuLyogLmZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICovXG5cbi5zaG93LWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4udG9kby1mb3JtLCAudG9kby11cGRhdGUtZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGdhcDogMnB4O1xufVxuXG4udG9kby1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi50b2RvLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG59XG5cbi50b2RvLWRhdGUsIC50b2RvLWJ1dHRvbnMge1xuICAgIG1hcmdpbjogNnB4IDVweDtcbn1cblxuLmVkaXQtdG9kbywgLmRlbC10b2RvLCAudXBkYXRlLXRvZG8ge1xuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5lZGl0LXRvZG86YWN0aXZlLCAuZGVsLXRvZG86YWN0aXZlLCAudXBkYXRlLXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufVxuXG4uYWRkLXRvZG8ge1xuICAgXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmFkZC10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLmFkZC10b2RvID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnYWRkIHRvZG8nO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTMwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XG59XG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xufVxuXG5cbi5zdWJtaXQtdG9kbyB7XG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uc3VibWl0LXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJDQUEyQztJQUMzQywrQ0FBK0M7SUFDL0Msc0NBQXNDOzs7O0lBSXRDLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7OztTQUdTLDBCQUEwQjtFQUNqQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7R0FDRyxhQUFhO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztBQUNiOztBQUVBOztJQUVJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7O0FBR0E7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGFBQWE7SUFDYixpRUFBaUU7SUFDakUsUUFBUTtBQUNaOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjs7SUFFakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcm9qZWN0LXdpZHRoOiAxMjBweDtcXG4gICAgLS1wcm9qZWN0LWhlaWdodDogNTBweDtcXG4gICAgLS1wcm9qZWN0LWJvcmRlci13aWR0aDogMnB4O1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IHJnYigwLCAxMjgsIDApO1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCAwKTtcXG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XFxuXFxuICAgXFxuXFxuICAgIC0tdG9kby1idXR0b25zLXdpZHRoOiA1MHB4O1xcbiAgICAtLXRvZG8tYnV0dG9ucy1oZWlnaHQ6IDI1cHg7XFxufVxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCxcXG5idXR0b24geyAtLXByb2plY3QtYWRkLXdpZHRoOiAxMDBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgcGFkZGluZzogMjVweDtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDI1cHg7ICovXFxuXFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAqL1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICAvKiBnYXA6IDIwcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgyNXB4LCAxZnIpKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IHZhcigtLXByb2plY3Qtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXByb2plY3QtaGVpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrOyAgXFxuXFxufVxcblxcbi5wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWFkZCwgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQ6YWN0aXZlLCAucHJvamVjdC1kZWxldGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuXFxuLmZvcm0ge1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdXBkYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE1MHB4LDFmcikpOyAqL1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLyogLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gKi9cXG5cXG4uc2hvdy1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tZm9ybSwgLnRvZG8tdXBkYXRlLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi50b2RvLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnRvZG8tZGF0ZSwgLnRvZG8tYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogNnB4IDVweDtcXG59XFxuXFxuLmVkaXQtdG9kbywgLmRlbC10b2RvLCAudXBkYXRlLXRvZG8ge1xcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmVkaXQtdG9kbzphY3RpdmUsIC5kZWwtdG9kbzphY3RpdmUsIC51cGRhdGUtdG9kbzphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgIFxcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG4uYWRkLXRvZG86YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnYWRkIHRvZG8nO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBsZWZ0OiAtMzBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHllbGxvdztcXG59XFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi5zdWJtaXQtdG9kbyB7XFxuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcblxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC10b2RvOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUHVzaFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC9wdXNoLXByb2plY3RcIjtcbmltcG9ydCBQdXNoVG9kbyBmcm9tIFwiLi9wcm9qZWN0L3B1c2gtdG9kb1wiO1xuaW1wb3J0IERlbGV0ZVByb2plY3QgZnJvbSBcIi4vcHJvamVjdC9kZWwtcHJvamVjdFwiO1xuaW1wb3J0IERlbGV0ZVRvZG8gZnJvbSBcIi4vcHJvamVjdC9kZWwtdG9kb1wiO1xuaW1wb3J0IFVwZGF0ZVRvZG8gZnJvbSBcIi4vcHJvamVjdC91cGRhdGUtdG9kb1wiO1xuLy8gaW1wb3J0IGFkZFRvZG9NZXRob2RzIGZyb20gXCIuL3Byb2plY3QvYWRkLXRvZG8tbWV0aG9kc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdHModGl0bGUpIHsgXG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gICAgY29uc3QgVGl0bGUgPSB0aXRsZSBcbiBcbiAgICBjb25zdCB0b2RvTGlzdCA9IHRvZG9BcnJheSAgXG4gICAgZnVuY3Rpb24gYWRkVG9kb01ldGhvZHMoYXJyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRNZXRob2RzOiAoKSA9PiBhcnIuZm9yRWFjaCh2YWwgPT4gdG9kb0FycmF5LnB1c2goVXBkYXRlVG9kbygpLERlbGV0ZVRvZG8oKSkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7IFRpdGxlIH0sXG4gICAgICAgIHsgdG9kb0xpc3QgfSxcbiAgICAgICAgUHVzaFRvZG8odG9kb0xpc3QpLFxuICAgICAgICBEZWxldGVUb2RvKHRvZG9MaXN0KSxcbiAgICAgICAgVXBkYXRlVG9kbyh0b2RvTGlzdCksXG4gICAgICAgIC8vIGFkZFRvZG9NZXRob2RzKHRvZG9MaXN0KVxuICAgICAgICBcbiAgICAgIFxuICAgICAgICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0QXJyYXlDcmVhdGUodGl0bGUpIHtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXVxuICAgIGNvbnN0IFByb2plY3RzID0gcHJvamVjdEFycmF5XG5cbiAgICBjb25zdCBhZGRMb2NhbFN0b3JhZ2UgPSAoYXJyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFycilcbiAgICAgICAgYXJyLmZvckVhY2godmFsID0+IHByb2plY3RBcnJheS5wdXNoKE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgIFB1c2hUb2RvKHZhbC50b2RvTGlzdCksIFxuICAgICAgICAgICAgRGVsZXRlVG9kbyh2YWwudG9kb0xpc3QpLFxuICAgICAgICAgICAgVXBkYXRlVG9kbyh2YWwudG9kb0xpc3QpLFxuICAgICAgICAgICAgLy8gYWRkVG9kb01ldGhvZHModmFsLnRvZG9MaXN0KSxcbiAgICAgICAgICAgICkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHt0aXRsZX0sXG4gICAgICAgIHsgUHJvamVjdHMgfSxcbiAgICAgICAgeyBhZGRMb2NhbFN0b3JhZ2UgfSxcbiAgICAgICAgUHVzaFByb2plY3QocHJvamVjdEFycmF5KSxcbiAgICAgICAgRGVsZXRlUHJvamVjdChwcm9qZWN0QXJyYXkpLFxuICAgIClcbiAgICBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVByb2plY3Q6IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlVG9kbyhvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVUb2RvOiAoaW5kZXgpID0+IG9iai5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVzaFByb2plY3Qob2JqKSB7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3Q6IChhcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoKSkgICAgXG4gICAgICAgICAgICByZXR1cm4gb2JqLnB1c2goYXJyKVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1c2hUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG86IChhcnIpID0+IG9iai5wdXNoKGFyciksXG4gICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVUb2RvKGFycikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVRvZG86IChpbmRleCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLlRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBhcnJbaW5kZXhdLkR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgYXJyW2luZGV4XS5Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB9XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuUHJvamVjdHMpKTtcblxuICBcbiAgIFxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCBUaXRsZSA9IHRpdGxlO1xuICAgIGxldCBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIGxldCBEdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBsZXQgUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5LFxuICAgICAgXG4gICAgIFxuICAgICAgICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBQcm9qZWN0LCB7UHJvamVjdEFycmF5Q3JlYXRlfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFByb2plY3RGb3JtIGZyb20gJy4vdmlldy9wcm9qZWN0LWZvcm0uanMnO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSAnLi92aWV3L3Byb2plY3QtcmVuZGVyLmpzJztcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSAnLi92aWV3L3Byb2plY3QtZXZlbnQuanMnO1xuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tICcuL3ZpZXcvcHJvamVjdC10aXRsZS1yZW5kZXIuanMnO1xuaW1wb3J0IFByb2plY3REZWxldGUgZnJvbSAnLi92aWV3L3Byb2plY3QtZGVsZXRlLmpzJztcbmltcG9ydCBUb2RvRm9ybSBmcm9tICcuL3ZpZXcvdG9kby1mb3JtLmpzJztcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gJy4vdmlldy90b2RvLXJlbmRlci5qcyc7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSAnLi92aWV3L3RvZG8tZWRpdC5qcyc7XG5pbXBvcnQgRGVsVG9kbyBmcm9tICcuL3ZpZXcvdG9kby1kZWxldGUuanMnO1xuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gJy4vdmlldy90b2RvLWZvcm0tYnV0dG9uLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBQcm9qZWN0Rm9ybSxcbiAgICAgICAgUHJvamVjdFJlbmRlcixcbiAgICAgICAgUHJvamVjdEV2ZW50LFxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIsICAgICAgICBcbiAgICAgICAgUHJvamVjdERlbGV0ZSxcbiAgICAgICAgVG9kb0Zvcm0sXG4gICAgICAgIFRvZG9SZW5kZXIsXG4gICAgICAgIEVkaXRUb2RvLFxuICAgICAgICBEZWxUb2RvLFxuICAgICAgICBUb2RvRm9ybUJ1dHRvbixcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9IFByb2plY3RBcnJheUNyZWF0ZSgnUHJvamVjdE1hbmFnZXInKTtcblxuXG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gUHJvamVjdCgnZGVmYXVsdCcpXG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuXG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcbiAgICBcbn1cblxuLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuUHJvamVjdHMpXG5cblxuXG4iLCJsZXQgcHJvamVjdElEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3RJZChuZXdWYWwpIHtcbiAgICBwcm9qZWN0SUQgPSBuZXdWYWw7XG5cbiAgICByZXR1cm4gcHJvamVjdElEO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdElkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RJRClcbiAgICByZXR1cm4gTnVtYmVyKHByb2plY3RJRCk7XG59XG4iLCJsZXQgdG9kb0lEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvZG9JZChuZXdWYWwpIHtcbiAgICB0b2RvSUQgPSBuZXdWYWxcbiAgICByZXR1cm4gdG9kb0lEXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvSWQoKSB7XG4gICAgcmV0dXJuIE51bWJlcih0b2RvSUQpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERlbGV0ZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJyk7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbicpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBwcm9qZWN0RGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdERlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScpXG4gICAgcHJvamVjdERlbC50ZXh0Q29udGVudCA9ICdEZWxldGUgUHJvamVjdCc7XG5cbiAgICBwcm9qZWN0RGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICBpZihnZXRQcm9qZWN0SWQoKSA9PT0gMCkgcmV0dXJuOyAgXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElkKCkpICAgICAgICBcbiAgICAgICAgcHJvamVjdC5jaGlsZE5vZGVzW2dldFByb2plY3RJZCgpXS5yZW1vdmUoKVxuICAgICAgICBzdG9yZVByb2plY3QoKVxuICAgICAgXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcnXG5cblxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERlbClcblxufSIsImltcG9ydCB7IHNldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIlxuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXRpdGxlLXJlbmRlclwiXG5pbXBvcnQgVG9kb0Zvcm1CdXR0b24gZnJvbSBcIi4vdG9kby1mb3JtLWJ1dHRvblwiXG5pbXBvcnQgVG9kb1JlbmRlciBmcm9tIFwiLi90b2RvLXJlbmRlclwiXG5pbXBvcnQgRWRpdFRvZG8gZnJvbSBcIi4vdG9kby1lZGl0XCJcbmltcG9ydCBEZWxUb2RvIGZyb20gXCIuL3RvZG8tZGVsZXRlXCJcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIlxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1idXR0b24nKVxuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKVxuICAgIHByb2plY3QuZm9yRWFjaCh2YWwgPT4gdmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBlLnRhcmdldFxuICAgICAgICBsZXQgbm9kZUlkID0gcHJvamVjdC5nZXRBdHRyaWJ1dGUoJ3Byb2plY3QnKVxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHNldFByb2plY3RJZChub2RlSWQpXG4gICAgICAgXG4gICAgICAgXG4gICAgXG4gICAgICAgIFByb2plY3RUaXRsZVJlbmRlcigpXG4gICAgICAgIFRvZG9Gb3JtQnV0dG9uKClcbiAgICAgICAgVG9kb1JlbmRlcigpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgRWRpdFRvZG8oKVxuICAgICAgICBEZWxUb2RvKClcblxuICAgICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0KVxuICAgICAgIFxuICAgICAgICBcbiAgICB9KSlcbiAgXG4gICAgXG4gICBcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC1yZW5kZXJcIjtcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSBcIi4vcHJvamVjdC1ldmVudFwiO1xuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXRpdGxlLXJlbmRlclwiO1xuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTdWJtaXQoaW5wdXQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKVxuICAgIFxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQnKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudD0gJ0FkZCBQcm9qZWN0J1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgc3RvcmVQcm9qZWN0KClcbiAgICAgIFxuICAgICAgICBQcm9qZWN0UmVuZGVyKClcbiAgICAgICAgUHJvamVjdEV2ZW50KClcbiAgICAgICAgUHJvamVjdFRpdGxlUmVuZGVyKClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5oYXNPd25Qcm9wZXJ0eSgnYWRkUHJvamVjdCcpKVxuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnXG4gICAgfSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxufVxuIiwiaW1wb3J0IFByb2plY3RTdWJtaXQgZnJvbSBcIi4vcHJvamVjdC1mb3JtLWJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5wdXQnKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIFByb2plY3RTdWJtaXQoaW5wdXQpIFxuICAgXG5cbn1cbiIsImltcG9ydCB7IHNldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKVxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFByb2plY3RJZChpKSAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgIFxuICAgICAgIFxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgncHJvamVjdCcsaSk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2ldLlRpdGxlO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KSAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIH1cbn0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRQcm9qZWN0SWQoaSkgICBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICBcbiAgICAgICBcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3Byb2plY3QnLGkpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB1c2VyRGF0YVtpXS5UaXRsZTtcbiAgICBcbiAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KSAgICBcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIH1cbn1cbiAgICBcbn0iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCJcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0VGl0bGVSZW5kZXIoKSB7XG4gICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG5cbiAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0uVGl0bGV9YFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgIH0gZWxzZSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJylcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhW2dldFByb2plY3RJZCgpXS5UaXRsZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICB9XG5cbn0iLCJpbXBvcnQgeyBzZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5pbXBvcnQgeyBnZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcblxuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIjtcbmltcG9ydCBFZGl0VG9kbyBmcm9tIFwiLi90b2RvLWVkaXRcIjtcblxuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsVG9kbygpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLXRvZG8nKTtcbiAgICBcbiAgICBidXR0b24uZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKCd0b2RvJyk7XG4gICAgICAgIHNldFRvZG9JZChpZClcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnJlbW92ZVRvZG8oZ2V0VG9kb0lkKCkpXG4gICAgICAgIHBhcmVudC5yZW1vdmUoKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QpXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICAgIFRvZG9SZW5kZXIoKSBcbiAgICAgICAgRWRpdFRvZG8oKVxuICAgICAgICBEZWxUb2RvKClcbiAgICBcbiAgICB9KSlcblxufSIsImltcG9ydCB7IHNldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuaW1wb3J0IFVwZGF0ZVRvZG9Gb3JtIGZyb20gXCIuL3VwZGF0ZS10b2RvLWZvcm1cIjtcbmltcG9ydCBzdG9yZVByb2plY3QgZnJvbSBcIi4uL3N0b3JhZ2UtcHJvamVjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUb2RvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS11cGRhdGUnKTtcbiAgICBcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvJyk7XG4gICAgYnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGZvcm0udGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmdldEF0dHJpYnV0ZSgndG9kbycpXG4gICAgICAgIHNldFRvZG9JZChpZClcbiAgICAgICBcbiAgICAgICAgLy9cbiAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG4gICAgICAgIFVwZGF0ZVRvZG9Gb3JtKClcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKVxuICAgICBcblxuICAgIH0pKVxufSIsImltcG9ydCBUb2RvRm9ybSBmcm9tIFwiLi90b2RvLWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0Zvcm1CdXR0b24oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvLWJ1dHRvbicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvJyk7XG4gICAgXG4gICAgXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZm9ybS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIFRvZG9Gb3JtKClcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cbiIsIlxuaW1wb3J0IFRvZG9TdWJtaXQgZnJvbSBcIi4vdG9kby1zdWJtaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0Zvcm0oKSB7XG4gICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJylcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLWZvcm0nKVxuXG5cbiAgICBjb25zdCBpbnB1dEFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RpdGxlJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgICB9LFxuICAgIF1cbiAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICBcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICBcblxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICBcblxuXG5cbiAgICAgICAgXG5cbiAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgICBcbiAgICB9XG5cbiAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtdG9kbycpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBUb2RvU3VibWl0KClcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWZvcm0nKVxuICAgICAgIFxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxuICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgJ1ByaW9yaXR5JylcbiAgICBcbiAgXG4gICAgLy8gY2hvb3NlcyBmb3IgcHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eUFyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdncmVlbicsXG4gICAgICAgICAgICB0ZXh0OiAnbG93JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICd5ZWxsb3cnLFxuICAgICAgICAgICAgdGV4dDogJ21lZGl1bScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAncmVkJyxcbiAgICAgICAgICAgIHRleHQ6ICdoaWdoJyxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIC8vIGxvb3AgdGhlIGNob29zZSB0byBwdXQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyW2ldLnZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5QXJyW2ldLnRleHQ7XG5cbiAgICAgICAgXG4gICAgICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgXG4gICBjb25zb2xlLmxvZygnaGVsbG8nKVxuXG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi92aWV3XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIjtcbmltcG9ydCB7IHNldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9SZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICBcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJ1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VG9kb0lkKGkpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvLWNhcmQnLCBpKVxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoJ3RvZG8nLCBpKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZS1kZXNjcmlwdGlvbicpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKCd0YXNrQ29sb3InLCBpKVxuICAgIFxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRhdGUnKTtcbiAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5UaXRsZX1gO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRHVlRGF0ZX1gO1xuICAgICAgICAgICAgdGFza0NvbG9yLnN0eWxlLmJvcmRlckxlZnQgPSBgMTBweCBzb2xpZCAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5Qcmlvcml0eX1gO1xuICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvJyk7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsLXRvZG8nKTtcbiAgICAgICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9ICdEZWwnXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY2FyZCcsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZSgndG9kbycsIGkpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWRlc2NyaXB0aW9uJylcbiAgICAgICAgICAgIHRhc2tDb2xvci5zZXRBdHRyaWJ1dGUoJ3Rhc2tDb2xvcicsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRvZG8nKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtdG9kbycpO1xuICAgICAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gJ0RlbCdcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFza0NvbG9yKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vdmlld1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCI7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSBcIi4vdG9kby1lZGl0XCI7XG5pbXBvcnQgRGVsVG9kbyBmcm9tIFwiLi90b2RvLWRlbGV0ZVwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1N1Ym1pdCgpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUaXRsZScpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGVzY3JpcHRpb24nKVxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGF0ZScpXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnUHJpb3JpdHknKVxuICAgIGNvbnN0IHRvZG8gPSBUb2RvKFxuICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgICAgZGF0ZS52YWx1ZSwgXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLCBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLmFkZFRvZG8odG9kbylcbiAgICAgICAgY29uc29sZS5sb2codG9kbylcbiAgICAgICAgc3RvcmVQcm9qZWN0KClcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0KVxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG59IiwiaW1wb3J0IFRvZG9VcGRhdGVTdWJtaXQgZnJvbSBcIi4vdXBkYXRlLXRvZG8tc3VibWl0XCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlVG9kb0Zvcm0oKSB7XG4gICAgICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS11cGRhdGUnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvLXVwZGF0ZS1mb3JtJylcblxuICAgIGNvbnN0IGlucHV0QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGl0bGVVcGRhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb25VcGRhdGUnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdkZXNjcmlwdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZVVwZGF0ZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICBcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICBcblxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgIFxuXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgXG5cbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgaW5wdXRBcnJheVtpXS5wbGFjZWhvbGRlcilcbiAgICAgICBcbiAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbClcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICB9XG5cbiAgIFxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VwZGF0ZS10b2RvJylcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnVXBkYXRlJ1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuICAgICAgICBUb2RvVXBkYXRlU3VibWl0KClcbiAgICAgICAgXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1mb3JtJylcbiAgICB9KVxuXG4gICAgXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxuICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgJ1ByaW9yaXR5VXBkYXRlJylcblxuICAgIC8vIGNob29zZXMgZm9yIHByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHlBcnIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAnZ3JlZW4nLFxuICAgICAgICAgICAgdGV4dDogJ2xvdycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiAneWVsbG93JyxcbiAgICAgICAgICAgIHRleHQ6ICdtZWRpdW0nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ3JlZCcsXG4gICAgICAgICAgICB0ZXh0OiAnaGlnaCcsXG4gICAgICAgIH0sXG4gICAgXTtcblxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyW2ldLnZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5QXJyW2ldLnRleHQ7XG5cbiAgICAgICAgXG4gICAgICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICBcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKVxuXG4gICAgICAgIFxuXG5cbiAgICAgICAgXG4gICBcblxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3ZpZXdcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgZ2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5pbXBvcnQgVG9kb1JlbmRlciBmcm9tIFwiLi90b2RvLXJlbmRlclwiO1xuaW1wb3J0IEVkaXRUb2RvIGZyb20gXCIuL3RvZG8tZWRpdFwiO1xuaW1wb3J0IERlbFRvZG8gZnJvbSBcIi4vdG9kby1kZWxldGVcIjtcbmltcG9ydCBzdG9yZVByb2plY3QgZnJvbSBcIi4uL3N0b3JhZ2UtcHJvamVjdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1VwZGF0ZVN1Ym1pdCgpIHtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1RpdGxlVXBkYXRlJylcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Rlc2NyaXB0aW9uVXBkYXRlJylcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRGF0ZVVwZGF0ZScpXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQcmlvcml0eVVwZGF0ZScpXG4gICBcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLlRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZSwgXG4gICAgLy8gcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2dldFRvZG9JZCgpXS5EZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWUsICAgICAgICAgICAgICBcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLkR1ZURhdGUgPSBpbnB1dERhdGUudmFsdWUsICAgICAgICAgICAgICBcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLlByaW9yaXR5ID0gaW5wdXRQcmlvcml0eS52YWx1ZSwgICAgICAgICAgICAgICBcbiAgICAvLyBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbZ2V0VG9kb0lkKCldLnVwZGEgICBcbiAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udXBkYXRlVG9kbyhnZXRUb2RvSWQoKSxpbnB1dFRpdGxlLnZhbHVlLCBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLCBpbnB1dERhdGUudmFsdWUsIGlucHV0UHJpb3JpdHkudmFsdWUpXG4gICAgXG4gICAgc3RvcmVQcm9qZWN0KClcbiAgICBUb2RvUmVuZGVyKCkgXG4gICAgRWRpdFRvZG8oKVxuICAgIERlbFRvZG8oKVxuICAgIFxuICAgIFxuICAgICAgXG4gICAgICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFZpZXcsIHtwcm9qZWN0TWFuYWdlcn1mcm9tICcuL3ZpZXcuanMnOyBcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuLy8gc3RvcmVQcm9qZWN0KClcblxuVmlldygpLlByb2plY3RGb3JtKClcblZpZXcoKS5Qcm9qZWN0UmVuZGVyKClcblZpZXcoKS5Qcm9qZWN0RXZlbnQoKVxuVmlldygpLlByb2plY3RUaXRsZVJlbmRlcigpXG5WaWV3KCkuUHJvamVjdERlbGV0ZSgpXG5WaWV3KCkuVG9kb1JlbmRlcigpXG5WaWV3KCkuVG9kb0Zvcm1CdXR0b24oKVxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGUpID0+IHtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSAhPT0gbnVsbCkge1xuIFxuICAgIHByb2plY3RNYW5hZ2VyLmFkZExvY2FsU3RvcmFnZShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSlcbiAgICBcbiAgIFxuICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLlByb2plY3RzKVxuICBcbiAgICB9XG4gfSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9