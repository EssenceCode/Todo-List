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
    --background-color: aliceblue;
    --font-color:cornflowerblue;;
    --project-width: 120px;
    --project-height: 50px;
    --project-border-width: 2px;
    --button-hover-border-color: rgb(100, 149, 237);
    --button-hover-background-color: rgb(100, 149, 237);
    --button-hover-color: rgb(255,255,255);
    --button-border-color: solid rgb(100, 149, 237);

   
    --todo-elements-color:rgb(70, 130, 180);
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
    gap: 10px;
}

.header-container {
   padding: 25px;
   background: var(--background-color);
   text-align: center;
   color: var(--font-color);
   

}

.project-wrapper {
    height: 100vh;
    background-color: var(--background-color);
    display: grid;
    grid-column: 1;
    grid-row: 1 / 4;
    place-items: center;
   
}

.project-container {
    display: grid;
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
    border: 2px var(--button-border-color);
    background: white;
    color: var(--font-color); 

}

.project:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.project-add, .project-delete {
    border-radius: 5px;
    border: 2px var(--button-border-color);
    background: white;
    color: var(--font-color);
}

.project-add:active, .project-delete:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.project-title {
    font-size: 2rem;
    color: steelblue;
}

.add-todo-button {
    margin-top: 25px;
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
    
    gap: 10px;
}

.show-form {
    display: grid;
    place-content: center;
    
}

.todo-form, .todo-update-form {
    display: grid;
    place-content: center;
    background: var(--background-color);
    height: 200px;
    width: 250px;
    gap: 2px;
    margin-top: 25px;
}

.todo-card {
    background-color: var(--background-color);
    display: flex;
    justify-content: space-around;
    color: var(--todo-elements-color);
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
    border: 1px var(--button-border-color);
    background: white;
    color: var(--font-color);;
}

.edit-todo:active, .del-todo:active, .update-todo:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

.add-todo {
   
    width: 80px;
    height: 25px;
    border-radius: 25px;
    border: 0;
    border: 1px var(--button-border-color);
    background: white;
    color: var(--font-color);;
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
    border: 1px var(--button-border-color);
    background: white;

    justify-self: center;
}

.submit-todo:active {
    border-width: var(--button-border-width);
    border-color: var(--button-hover-border-color);
    background: var(--button-hover-background-color);
    color: var(--button-hover-color);
}

footer {
    margin-top: auto;
    background: var(--background-color);
    color: var(--font-color);
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 10px;
}

a:link {
    text-decoration: none;
    color:var(--font-color);
  }

a:visited {
    text-decoration: none;
    color:plum;
}  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,2BAA2B;IAC3B,sBAAsB;IACtB,sBAAsB;IACtB,2BAA2B;IAC3B,+CAA+C;IAC/C,mDAAmD;IACnD,sCAAsC;IACtC,+CAA+C;;;IAG/C,uCAAuC;IACvC,0BAA0B;IAC1B,2BAA2B;AAC/B;AACA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;;;SAGS,0BAA0B;EACjC,YAAY;EACZ,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;;AAGA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;GACG,aAAa;GACb,mCAAmC;GACnC,kBAAkB;GAClB,wBAAwB;;;AAG3B;;AAEA;IACI,aAAa;IACb,yCAAyC;IACzC,aAAa;IACb,cAAc;IACd,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;;IAEI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,SAAS;;AAEb;;AAEA;IACI,2BAA2B;IAC3B,6BAA6B;IAC7B,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;;AAE5B;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;;IAEd,aAAa;;IAEb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mCAAmC;IACnC,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,6BAA6B;IAC7B,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,SAAS;IACT,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,8BAA8B;AAClC;AACA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,sCAAsC;IACtC,iBAAiB;;IAEjB,oBAAoB;AACxB;;AAEA;IACI,wCAAwC;IACxC,8CAA8C;IAC9C,gDAAgD;IAChD,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;EACzB;;AAEF;IACI,qBAAqB;IACrB,UAAU;AACd","sourcesContent":[":root {\n    --background-color: aliceblue;\n    --font-color:cornflowerblue;;\n    --project-width: 120px;\n    --project-height: 50px;\n    --project-border-width: 2px;\n    --button-hover-border-color: rgb(100, 149, 237);\n    --button-hover-background-color: rgb(100, 149, 237);\n    --button-hover-color: rgb(255,255,255);\n    --button-border-color: solid rgb(100, 149, 237);\n\n   \n    --todo-elements-color:rgb(70, 130, 180);\n    --todo-buttons-width: 50px;\n    --todo-buttons-height: 25px;\n}\n* {\n    padding: 0;\n    margin: 0;\n}\n\ninput,\ntextarea,\nselect,\nbutton { --project-add-width: 100px;\n  width: 150px;\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: 10px;\n}\n\n.header-container {\n   padding: 25px;\n   background: var(--background-color);\n   text-align: center;\n   color: var(--font-color);\n   \n\n}\n\n.project-wrapper {\n    height: 100vh;\n    background-color: var(--background-color);\n    display: grid;\n    grid-column: 1;\n    grid-row: 1 / 4;\n    place-items: center;\n   \n}\n\n.project-container {\n    display: grid;\n    gap: 10px;\n}\n\n.sidebar {\n\n    grid-column: 1;\n    display: grid;\n    margin-top: 10px;\n    gap: 20px;\n\n}\n\n.project {\n    width: var(--project-width);\n    height: var(--project-height);\n    border-radius: 5px;\n    border: 2px var(--button-border-color);\n    background: white;\n    color: var(--font-color); \n\n}\n\n.project:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.project-add, .project-delete {\n    border-radius: 5px;\n    border: 2px var(--button-border-color);\n    background: white;\n    color: var(--font-color);\n}\n\n.project-add:active, .project-delete:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.project-title {\n    font-size: 2rem;\n    color: steelblue;\n}\n\n.add-todo-button {\n    margin-top: 25px;\n}\n\n.form {\n    \n    display: none;\n}\n\n.form-update {\n    display: none;\n}\n\n.todo-container {\n    grid-column: 2;\n\n    display: grid;\n    \n    gap: 10px;\n}\n\n.show-form {\n    display: grid;\n    place-content: center;\n    \n}\n\n.todo-form, .todo-update-form {\n    display: grid;\n    place-content: center;\n    background: var(--background-color);\n    height: 200px;\n    width: 250px;\n    gap: 2px;\n    margin-top: 25px;\n}\n\n.todo-card {\n    background-color: var(--background-color);\n    display: flex;\n    justify-content: space-around;\n    color: var(--todo-elements-color);\n}\n.todo-buttons {\n    display: flex;\n    gap: 5px;\n}\n\n.todo-date, .todo-buttons {\n    margin: 6px 5px;\n}\n\n.edit-todo, .del-todo, .update-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px var(--button-border-color);\n    background: white;\n    color: var(--font-color);;\n}\n\n.edit-todo:active, .del-todo:active, .update-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo {\n   \n    width: 80px;\n    height: 25px;\n    border-radius: 25px;\n    border: 0;\n    border: 1px var(--button-border-color);\n    background: white;\n    color: var(--font-color);;\n}\n\n.add-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\n.add-todo > span {\n    position: absolute;\n}\n\n.add-todo > span::before {\n    position: relative;\n}\n\n.add-todo > span::before {\n    content: 'add todo';\n    top: -10px;\n    left: -30px;\n    font-size: 1rem;\n    text-align: center;\n}\n\n.low-priority {\n    border-left: 10px solid green;\n}\n.medium-priority {\n    border-left: 10px solid yellow;\n}\n.high-priority {\n    border-left: 10px solid red;\n}\n\n\n.submit-todo {\n    width: var(--todo-buttons-width);\n    height: var(--todo-buttons-height);\n    border-radius: 5px;\n    border: 1px var(--button-border-color);\n    background: white;\n\n    justify-self: center;\n}\n\n.submit-todo:active {\n    border-width: var(--button-border-width);\n    border-color: var(--button-hover-border-color);\n    background: var(--button-hover-background-color);\n    color: var(--button-hover-color);\n}\n\nfooter {\n    margin-top: auto;\n    background: var(--background-color);\n    color: var(--font-color);\n    width: 100%;\n    height: 25px;\n    display: flex;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 10px;\n}\n\na:link {\n    text-decoration: none;\n    color:var(--font-color);\n  }\n\na:visited {\n    text-decoration: none;\n    color:plum;\n}  "],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ CreateProjects),
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _project_push_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/push-project */ "./src/project/push-project.js");
/* harmony import */ var _project_push_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/push-todo */ "./src/project/push-todo.js");
/* harmony import */ var _project_del_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/del-project */ "./src/project/del-project.js");
/* harmony import */ var _project_del_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/del-todo */ "./src/project/del-todo.js");
/* harmony import */ var _project_update_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/update-todo */ "./src/project/update-todo.js");






function CreateProjects(title) {
  const todoArray = [];
  const Title = title;

  const todoList = todoArray;

  console.log("hello");

  return {
    Title,
    todoList,
    ...(0,_project_push_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList),
    ...(0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(todoList),
    ...(0,_project_update_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(todoList),
  };
}

function ProjectArrayCreate(title) {
  const projectArray = [];
  const Projects = projectArray;

  const addLocalStorage = (arr) => {
    arr.forEach((val) =>
      projectArray.push({
        ...val,
        ...(0,_project_push_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(val.todoList),
        ...(0,_project_del_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(val.todoList),
        ...(0,_project_update_todo__WEBPACK_IMPORTED_MODULE_4__["default"])(val.todoList),
      }),
    );
  };

  return {
    title,
    Projects,
    addLocalStorage,
    ...(0,_project_push_project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectArray),
    ...(0,_project_del_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projectArray),
  };
}

const projectManager = ProjectArrayCreate("ProjectManager");



const defaultProject = CreateProjects("default")

if(!localStorage.getItem("ProjectArray")) {

    projectManager.addProject(defaultProject)
    
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


function storeProject() {

    localStorage.setItem("ProjectArray", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects));

  
   
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
    const Title = title;
    const Description = description;
    const DueDate = dueDate;
    const Priority = priority;
   


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
/* harmony export */   "default": () => (/* binding */ View)
/* harmony export */ });
/* harmony import */ var _view_project_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/project-form */ "./src/view/project-form.js");
/* harmony import */ var _view_project_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/project-render */ "./src/view/project-render.js");
/* harmony import */ var _view_project_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/project-event */ "./src/view/project-event.js");
/* harmony import */ var _view_project_title_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/project-title-render */ "./src/view/project-title-render.js");
/* harmony import */ var _view_project_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/project-delete */ "./src/view/project-delete.js");
/* harmony import */ var _view_todo_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _view_todo_form_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/todo-form-button */ "./src/view/todo-form-button.js");
/* harmony import */ var _view_todo_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _view_todo_delete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/todo-delete */ "./src/view/todo-delete.js");










function View() {

    return {
        ProjectForm: _view_project_form__WEBPACK_IMPORTED_MODULE_0__["default"],
        ProjectRender: _view_project_render__WEBPACK_IMPORTED_MODULE_1__["default"],
        ProjectEvent: _view_project_event__WEBPACK_IMPORTED_MODULE_2__["default"],
        ProjectTitleRender: _view_project_title_render__WEBPACK_IMPORTED_MODULE_3__["default"],        
        ProjectDelete: _view_project_delete__WEBPACK_IMPORTED_MODULE_4__["default"],
        TodoRender: _view_todo_render__WEBPACK_IMPORTED_MODULE_5__["default"],
        TodoFormButton: _view_todo_form_button__WEBPACK_IMPORTED_MODULE_6__["default"],
        EditTodo: _view_todo_edit__WEBPACK_IMPORTED_MODULE_7__["default"],
        DelTodo: _view_todo_delete__WEBPACK_IMPORTED_MODULE_8__["default"],
    }
}






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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");




function ProjectDelete() {
    const project = document.querySelector(".project-container");
    const todo = document.querySelector(".todo-container")
    const title = document.querySelector(".project-title")
    const button = document.querySelector(".add-todo-button")
    const container = document.querySelector(".sidebar");
    const projectDel = document.createElement("button");
    projectDel.classList.add("project-delete")
    projectDel.textContent = "Delete Project";

    projectDel.addEventListener("click", () => {

        if((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)() === 0) return;  
        _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.removeProject((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)())        
        project.childNodes[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].remove()
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_2__["default"])()
      
        todo.textContent = ""
        title.textContent = ""
        button.textContent = ""


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






function ProjectEvent() {
    const project = document.querySelectorAll(".project")
    const buttonContainer = document.querySelector(".add-todo-button")
    
    const title = document.querySelector(".project-title")
    project.forEach(val => val.addEventListener("click", (e) => {
        const projects = e.target
        const nodeId = projects.getAttribute("project")
        title.textContent = ""
        buttonContainer.textContent = ""
        ;(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(nodeId)
       
       
    
        ;(0,_project_title_render__WEBPACK_IMPORTED_MODULE_1__["default"])()
        ;(0,_todo_form_button__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
        
     

     
       
        
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
/* harmony import */ var _project_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-render */ "./src/view/project-render.js");
/* harmony import */ var _project_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-event */ "./src/view/project-event.js");
/* harmony import */ var _project_title_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-title-render */ "./src/view/project-title-render.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");






function ProjectSubmit() {
    const container = document.querySelector(".sidebar");
    const todo = document.querySelector(".todo-container");
    const input = document.querySelector(".project-input")
    
    const projectTitle = document.querySelector(".project-title");

    const button = document.createElement("button");
    button.classList.add("project-add")
    button.textContent= "Add Project"
    button.addEventListener("click", () => {
        projectTitle.textContent = ""
        todo.textContent = ""

        const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(input.value);
        _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.addProject(project)
    
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_4__["default"])()
      
        ;(0,_project_render__WEBPACK_IMPORTED_MODULE_1__["default"])()
        ;(0,_project_event__WEBPACK_IMPORTED_MODULE_2__["default"])()
        ;(0,_project_title_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
    
        input.value = ""
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
    const container = document.querySelector(".sidebar");

    const input = document.createElement("input");
    input.classList.add("project-input")
    input.setAttribute("type", "text");

    
    container.appendChild(input);
    (0,_project_form_button__WEBPACK_IMPORTED_MODULE_0__["default"])() 
   

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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* eslint-disable no-plusplus */




function ProjectRender() {
    const content = document.querySelector(".project-container")
    const userData = JSON.parse(localStorage.getItem("ProjectArray"))
    content.textContent = ""

    if(!localStorage.getItem("ProjectArray")) {
        
        for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects.length; i++) {
        (0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(i)   
        const project = document.createElement("button");    
       
        project.setAttribute("project",i);
        project.classList.add("project");
        
        project.textContent = _project__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[i].Title;
        
       
        content.appendChild(project)    
        
      
    }
} else {
    for (let i = 0; i < userData.length; i++) {
        (0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(i)   
        const project = document.createElement("button");    
       
        project.setAttribute("project",i);
        project.classList.add("project");
        
        project.textContent = userData[i].Title;
    
       
        content.appendChild(project)    
        
      
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");



function ProjectTitleRender() {
   const userData = JSON.parse(localStorage.getItem("ProjectArray"))

   if(!localStorage.getItem("ProjectArray")) {
    const content = document.querySelector(".project-title")
    const title = document.createElement("h2")
    title.textContent = `${_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].Title}`

    content.appendChild(title)
   } else {
    const content = document.querySelector(".project-title")
    const title = document.createElement("h2")
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");







function DelTodo() {
    const button = document.querySelectorAll(".del-todo");
    
    button.forEach(btn => btn.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute("todo");
        (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
        _project__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].removeTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.getTodoId)())
        parent.remove()
      
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_3__["default"])()
        // TodoRender() 
      
    
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
    const form = document.querySelector(".form-update");
    
    const button = document.querySelectorAll(".edit-todo");
    button.forEach(btn => btn.addEventListener("click", (e) => {
        form.textContent = ""
        const parent = e.target.parentElement
        const id = parent.getAttribute("todo")
        ;(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
  
        
   
        ;(0,_update_todo_form__WEBPACK_IMPORTED_MODULE_1__["default"])()
        form.classList.toggle("show-form")
     

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
    const container = document.querySelector(".add-todo-button");
    const form = document.querySelector(".form");
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.classList.add("add-todo");
    
    
    button.appendChild(span)
    button.addEventListener("click", () => {
        form.textContent = ""
        ;(0,_todo_form__WEBPACK_IMPORTED_MODULE_0__["default"])()
        form.classList.toggle("show-form")
        
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
/* eslint-disable no-plusplus */



function TodoForm() {
    
    const formContainer = document.querySelector(".form")
    const form = document.createElement("form")
    form.classList.add("todo-form")


    const inputArray = [
        {
            label: "Title",
            placeholder: "title",
            type: "text",
        },
        {
            label: "Description",
            placeholder: "description",
            type: "text",
        },
        {
            label: "Date",
            placeholder: "",
            type: "date",
        },
    ]
   
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
       
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
       

        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
       


        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
      


        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
     

        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
       



        

    
        form.appendChild(label)

        form.appendChild(input)
        
    }

   
    const button = document.createElement("button");
    button.classList.add("submit-todo")
    button.textContent = "Submit"

    button.addEventListener("click", (e) => {
        e.preventDefault()
        ;(0,_todo_submit__WEBPACK_IMPORTED_MODULE_0__["default"])()
        formContainer.classList.toggle("show-form")
       
        
    })

    const inputPriority = document.createElement("select");
    const labelPriority = document.createElement("label")
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", "Priority")
    
  
    // chooses for priority
    const priorityArr = [
        {
            value: "green",
            text: "low",
        },
        {
            value: "yellow",
            text: "medium",
        },
        {
            value: "red",
            text: "high",
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* eslint-disable no-plusplus */




function TodoRender() {
    const container = document.querySelector(".todo-container")
    const userData = JSON.parse(localStorage.getItem("ProjectArray"))

   
    container.textContent = ""
    if(!localStorage.getItem("ProjectArray")) {
        for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList.length; i++) {
            (0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.setTodoId)(i)
           
            const todo = document.createElement("div");
           
            const task = document.createElement("div");
            
            const taskTitle = document.createElement("div");
            const taskDetails = document.createElement("div");
            const taskColor = document.createElement("span")
            
            const title = document.createElement("div");
            const description = document.createElement("div");
            const dueDate = document.createElement("div");
          
    
            todo.classList.add("todo-card", i)
            todo.setAttribute("todo", i);
            task.classList.add("todo-title-description")
            taskColor.setAttribute("taskColor", i)
    
            title.classList.add("todo-title");
            description.classList.add("todo-description");
            dueDate.classList.add("todo-date");
              
    
            title.textContent = `${_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Title}`;
            description.textContent = `${_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Description}`;
            dueDate.textContent = `${_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].DueDate}`;
            taskColor.style.borderLeft = `10px solid ${_project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Priority}`;
           
    
    
            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-todo");
            editBtn.textContent = "Edit";
       
    
            const delBtn = document.createElement("button");
            delBtn.classList.add("del-todo");
            delBtn.textContent = "Del"
            
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
           
            const todo = document.createElement("div");
           
            const task = document.createElement("div");
            
            const taskTitle = document.createElement("div");
            const taskDetails = document.createElement("div");
            const taskColor = document.createElement("span")
            
            const title = document.createElement("div");
            const description = document.createElement("div");
            const dueDate = document.createElement("div");
          
    
            todo.classList.add("todo-card", i)
            todo.setAttribute("todo", i);
            task.classList.add("todo-title-description")
            taskColor.setAttribute("taskColor", i)
    
            title.classList.add("todo-title");
            description.classList.add("todo-description");
            dueDate.classList.add("todo-date");
              
    
            title.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Title}`;
            description.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Description}`;
            dueDate.textContent = `${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].DueDate}`;
            taskColor.style.borderLeft = `10px solid ${userData[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].todoList[i].Priority}`;
           
    
    
            const editBtn = document.createElement("button");
            editBtn.classList.add("edit-todo");
            editBtn.textContent = "Edit";
            
    
    
            const delBtn = document.createElement("button");
            delBtn.classList.add("del-todo");
            delBtn.textContent = "Del"
            
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");









function TodoSubmit() {
    const title = document.getElementById("Title")
    const description = document.getElementById("Description")
    const date = document.getElementById("Date")
    const priority = document.getElementById("Priority")
    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(
        title.value, 
        description.value, 
        date.value, 
        priority.value, 
        );
        _project__WEBPACK_IMPORTED_MODULE_1__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_2__.getProjectId)()].addTodo(todo)
        
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_3__["default"])()
        
        ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_4__["default"])() 
   
        
      
       
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




function UpdateTodoForm() {
        
    const formContainer = document.querySelector(".form-update");
    const form = document.createElement("form")
    form.classList.add("todo-update-form")

    const inputArray = [
        {
            label: "TitleUpdate",
            placeholder: "title",
            type: "text",
            title: "Title"
        },
        {
            label: "DescriptionUpdate",
            placeholder: "description",
            type: "text",
            title: "Description"
        },
        {
            label: "DateUpdate",
            placeholder: "",
            type: "date",
            title: "Date"
        },
    ]

     
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
       
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
       

        label.textContent = inputArray[i].title
        label.textContent = inputArray[i].title
        label.textContent = inputArray[i].title
       


        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
      


        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
     

        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
       
    
        form.appendChild(label)
        form.appendChild(input)
    }

   

    const button = document.createElement("button");
    button.classList.add("update-todo")
    button.textContent = "Update"

    button.addEventListener("click", (e) => {
        e.preventDefault()
        
        ;(0,_update_todo_submit__WEBPACK_IMPORTED_MODULE_0__["default"])()
        
        formContainer.classList.toggle("show-form")
    })

    
    const inputPriority = document.createElement("select");
    const labelPriority = document.createElement("label")
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", "PriorityUpdate")

    // chooses for priority
    const priorityArr = [
        {
            value: "green",
            text: "low",
        },
        {
            value: "yellow",
            text: "medium",
        },
        {
            value: "red",
            text: "high",
        },
    ];


    // eslint-disable-next-line no-plusplus
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* harmony import */ var _todo_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-render */ "./src/view/todo-render.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");









function TodoUpdateSubmit() {
    const inputTitle = document.getElementById("TitleUpdate")
    const inputDescription = document.getElementById("DescriptionUpdate")
    const inputDate = document.getElementById("DateUpdate")
    const inputPriority = document.getElementById("PriorityUpdate")
   
    _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].updateTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)(),inputTitle.value, inputDescription.value, inputDate.value, inputPriority.value)
    
    ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_todo_render__WEBPACK_IMPORTED_MODULE_3__["default"])() 
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// storeProject()

(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectForm();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectRender();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectEvent();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectTitleRender();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().ProjectDelete();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().TodoRender();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().TodoFormButton();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().EditTodo();
(0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().DelTodo();

window.addEventListener("load", () => {
  if (localStorage.getItem("ProjectArray") !== null) {
    _project__WEBPACK_IMPORTED_MODULE_1__.projectManager.addLocalStorage(
      JSON.parse(localStorage.getItem("ProjectArray")),
    );
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVB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QUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNpQjtBQUN0Qjs7QUFFckI7O0FBRUEsaURBQUk7QUFDSixpREFBSTtBQUNKLGlEQUFJO0FBQ0osaURBQUk7QUFDSixpREFBSTtBQUNKLGlEQUFJO0FBQ0osaURBQUk7QUFDSixpREFBSTtBQUNKLGlEQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvcHVzaC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0L3B1c2gtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC91cGRhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2dldC1zZXQtcHJvamVjdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9nZXQtc2V0LXRvZG8taWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWZvcm0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXRpdGxlLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1mb3JtLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlLXRvZG8tZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGUtdG9kby1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgLS1mb250LWNvbG9yOmNvcm5mbG93ZXJibHVlOztcbiAgICAtLXByb2plY3Qtd2lkdGg6IDEyMHB4O1xuICAgIC0tcHJvamVjdC1oZWlnaHQ6IDUwcHg7XG4gICAgLS1wcm9qZWN0LWJvcmRlci13aWR0aDogMnB4O1xuICAgIC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiKDEwMCwgMTQ5LCAyMzcpO1xuICAgIC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDE0OSwgMjM3KTtcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAtLWJ1dHRvbi1ib3JkZXItY29sb3I6IHNvbGlkIHJnYigxMDAsIDE0OSwgMjM3KTtcblxuICAgXG4gICAgLS10b2RvLWVsZW1lbnRzLWNvbG9yOnJnYig3MCwgMTMwLCAxODApO1xuICAgIC0tdG9kby1idXR0b25zLXdpZHRoOiA1MHB4O1xuICAgIC0tdG9kby1idXR0b25zLWhlaWdodDogMjVweDtcbn1cbioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0LFxuYnV0dG9uIHsgLS1wcm9qZWN0LWFkZC13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgIHBhZGRpbmc6IDI1cHg7XG4gICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgIFxuXG59XG5cbi5wcm9qZWN0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBncmlkLXJvdzogMSAvIDQ7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgIFxufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2lkZWJhciB7XG5cbiAgICBncmlkLWNvbHVtbjogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZ2FwOiAyMHB4O1xuXG59XG5cbi5wcm9qZWN0IHtcbiAgICB3aWR0aDogdmFyKC0tcHJvamVjdC13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWhlaWdodCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTsgXG5cbn1cblxuLnByb2plY3Q6YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufVxuXG4ucHJvamVjdC1hZGQsIC5wcm9qZWN0LWRlbGV0ZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLnByb2plY3QtYWRkOmFjdGl2ZSwgLnByb2plY3QtZGVsZXRlOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG4uYWRkLXRvZG8tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uZm9ybSB7XG4gICAgXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tdXBkYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAyO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5zaG93LWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG4udG9kby1mb3JtLCAudG9kby11cGRhdGUtZm9ybSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZ2FwOiAycHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnRvZG8tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBjb2xvcjogdmFyKC0tdG9kby1lbGVtZW50cy1jb2xvcik7XG59XG4udG9kby1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xufVxuXG4udG9kby1kYXRlLCAudG9kby1idXR0b25zIHtcbiAgICBtYXJnaW46IDZweCA1cHg7XG59XG5cbi5lZGl0LXRvZG8sIC5kZWwtdG9kbywgLnVwZGF0ZS10b2RvIHtcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7O1xufVxuXG4uZWRpdC10b2RvOmFjdGl2ZSwgLmRlbC10b2RvOmFjdGl2ZSwgLnVwZGF0ZS10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLmFkZC10b2RvIHtcbiAgIFxuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7O1xufVxuXG4uYWRkLXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufVxuXG4uYWRkLXRvZG8gPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hZGQtdG9kbyA+IHNwYW46OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdhZGQgdG9kbyc7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG93LXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcbn1cbi5tZWRpdW0tcHJpb3JpdHkge1xuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHllbGxvdztcbn1cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZWQ7XG59XG5cblxuLnN1Ym1pdC10b2RvIHtcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uc3VibWl0LXRvZG86YWN0aXZlIHtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xufVxuXG5mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hOmxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcbiAgfVxuXG5hOnZpc2l0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjpwbHVtO1xufSAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwrQ0FBK0M7SUFDL0MsbURBQW1EO0lBQ25ELHNDQUFzQztJQUN0QywrQ0FBK0M7OztJQUcvQyx1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTs7O1NBR1MsMEJBQTBCO0VBQ2pDLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTtHQUNHLGFBQWE7R0FDYixtQ0FBbUM7R0FDbkMsa0JBQWtCO0dBQ2xCLHdCQUF3Qjs7O0FBRzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixTQUFTOztBQUViOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsYUFBYTs7SUFFYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixZQUFZO0lBQ1osUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsaUJBQWlCOztJQUVqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCOztBQUVGO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgICAtLWZvbnQtY29sb3I6Y29ybmZsb3dlcmJsdWU7O1xcbiAgICAtLXByb2plY3Qtd2lkdGg6IDEyMHB4O1xcbiAgICAtLXByb2plY3QtaGVpZ2h0OiA1MHB4O1xcbiAgICAtLXByb2plY3QtYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiKDEwMCwgMTQ5LCAyMzcpO1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxNDksIDIzNyk7XFxuICAgIC0tYnV0dG9uLWhvdmVyLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xcbiAgICAtLWJ1dHRvbi1ib3JkZXItY29sb3I6IHNvbGlkIHJnYigxMDAsIDE0OSwgMjM3KTtcXG5cXG4gICBcXG4gICAgLS10b2RvLWVsZW1lbnRzLWNvbG9yOnJnYig3MCwgMTMwLCAxODApO1xcbiAgICAtLXRvZG8tYnV0dG9ucy13aWR0aDogNTBweDtcXG4gICAgLS10b2RvLWJ1dHRvbnMtaGVpZ2h0OiAyNXB4O1xcbn1cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3QsXFxuYnV0dG9uIHsgLS1wcm9qZWN0LWFkZC13aWR0aDogMTAwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgIHBhZGRpbmc6IDI1cHg7XFxuICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICBcXG5cXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICB3aWR0aDogdmFyKC0tcHJvamVjdC13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpOyBcXG5cXG59XFxuXFxuLnByb2plY3Q6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtYWRkLCAucHJvamVjdC1kZWxldGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQ6YWN0aXZlLCAucHJvamVjdC1kZWxldGU6YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS11cGRhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgXFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNob3ctZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi50b2RvLWZvcm0sIC50b2RvLXVwZGF0ZS1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLnRvZG8tY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgY29sb3I6IHZhcigtLXRvZG8tZWxlbWVudHMtY29sb3IpO1xcbn1cXG4udG9kby1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi50b2RvLWRhdGUsIC50b2RvLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDZweCA1cHg7XFxufVxcblxcbi5lZGl0LXRvZG8sIC5kZWwtdG9kbywgLnVwZGF0ZS10b2RvIHtcXG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XFxuICAgIGhlaWdodDogdmFyKC0tdG9kby1idXR0b25zLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7O1xcbn1cXG5cXG4uZWRpdC10b2RvOmFjdGl2ZSwgLmRlbC10b2RvOmFjdGl2ZSwgLnVwZGF0ZS10b2RvOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICAgXFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7O1xcbn1cXG5cXG4uYWRkLXRvZG86YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3BhbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnYWRkIHRvZG8nO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBsZWZ0OiAtMzBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHllbGxvdztcXG59XFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZWQ7XFxufVxcblxcblxcbi5zdWJtaXQtdG9kbyB7XFxuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtdG9kbzphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOnZhcigtLWZvbnQtY29sb3IpO1xcbiAgfVxcblxcbmE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6cGx1bTtcXG59ICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFB1c2hQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QvcHVzaC1wcm9qZWN0XCI7XG5pbXBvcnQgUHVzaFRvZG8gZnJvbSBcIi4vcHJvamVjdC9wdXNoLXRvZG9cIjtcbmltcG9ydCBEZWxldGVQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QvZGVsLXByb2plY3RcIjtcbmltcG9ydCBEZWxldGVUb2RvIGZyb20gXCIuL3Byb2plY3QvZGVsLXRvZG9cIjtcbmltcG9ydCBVcGRhdGVUb2RvIGZyb20gXCIuL3Byb2plY3QvdXBkYXRlLXRvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdHModGl0bGUpIHtcbiAgY29uc3QgdG9kb0FycmF5ID0gW107XG4gIGNvbnN0IFRpdGxlID0gdGl0bGU7XG5cbiAgY29uc3QgdG9kb0xpc3QgPSB0b2RvQXJyYXk7XG5cbiAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcblxuICByZXR1cm4ge1xuICAgIFRpdGxlLFxuICAgIHRvZG9MaXN0LFxuICAgIC4uLlB1c2hUb2RvKHRvZG9MaXN0KSxcbiAgICAuLi5EZWxldGVUb2RvKHRvZG9MaXN0KSxcbiAgICAuLi5VcGRhdGVUb2RvKHRvZG9MaXN0KSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RBcnJheUNyZWF0ZSh0aXRsZSkge1xuICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgY29uc3QgUHJvamVjdHMgPSBwcm9qZWN0QXJyYXk7XG5cbiAgY29uc3QgYWRkTG9jYWxTdG9yYWdlID0gKGFycikgPT4ge1xuICAgIGFyci5mb3JFYWNoKCh2YWwpID0+XG4gICAgICBwcm9qZWN0QXJyYXkucHVzaCh7XG4gICAgICAgIC4uLnZhbCxcbiAgICAgICAgLi4uUHVzaFRvZG8odmFsLnRvZG9MaXN0KSxcbiAgICAgICAgLi4uRGVsZXRlVG9kbyh2YWwudG9kb0xpc3QpLFxuICAgICAgICAuLi5VcGRhdGVUb2RvKHZhbC50b2RvTGlzdCksXG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgUHJvamVjdHMsXG4gICAgYWRkTG9jYWxTdG9yYWdlLFxuICAgIC4uLlB1c2hQcm9qZWN0KHByb2plY3RBcnJheSksXG4gICAgLi4uRGVsZXRlUHJvamVjdChwcm9qZWN0QXJyYXkpLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBQcm9qZWN0QXJyYXlDcmVhdGUoXCJQcm9qZWN0TWFuYWdlclwiKTtcblxuXG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gQ3JlYXRlUHJvamVjdHMoXCJkZWZhdWx0XCIpXG5cbmlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuXG4gICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcbiAgICBcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlUHJvamVjdChvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVQcm9qZWN0OiAoaW5kZXgpID0+IG9iai5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVRvZG8ob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlVG9kbzogKGluZGV4KSA9PiBvYmouc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1c2hQcm9qZWN0KG9iaikge1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0OiAoYXJyKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KCkpICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9iai5wdXNoKGFycilcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXNoVG9kbyhvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRUb2RvOiAoYXJyKSA9PiBvYmoucHVzaChhcnIpLFxuICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlVG9kbyhhcnIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cGRhdGVUb2RvOiAoaW5kZXgsdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgYXJyW2luZGV4XS5UaXRsZSA9IHRpdGxlO1xuICAgICAgICAgICAgYXJyW2luZGV4XS5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgYXJyW2luZGV4XS5EdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIGFycltpbmRleF0uUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdCgpIHtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RNYW5hZ2VyLlByb2plY3RzKSk7XG5cbiAgXG4gICBcbn1cblxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBUaXRsZSA9IHRpdGxlO1xuICAgIGNvbnN0IERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgY29uc3QgRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgY29uc3QgUHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgIFxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBUaXRsZSxcbiAgICAgICAgRGVzY3JpcHRpb24sXG4gICAgICAgIER1ZURhdGUsXG4gICAgICAgIFByaW9yaXR5LCAgXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgUHJvamVjdEZvcm0gZnJvbSBcIi4vdmlldy9wcm9qZWN0LWZvcm1cIjtcbmltcG9ydCBQcm9qZWN0UmVuZGVyIGZyb20gXCIuL3ZpZXcvcHJvamVjdC1yZW5kZXJcIjtcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSBcIi4vdmlldy9wcm9qZWN0LWV2ZW50XCI7XG5pbXBvcnQgUHJvamVjdFRpdGxlUmVuZGVyIGZyb20gXCIuL3ZpZXcvcHJvamVjdC10aXRsZS1yZW5kZXJcIjtcbmltcG9ydCBQcm9qZWN0RGVsZXRlIGZyb20gXCIuL3ZpZXcvcHJvamVjdC1kZWxldGVcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3ZpZXcvdG9kby1yZW5kZXJcIjtcbmltcG9ydCBUb2RvRm9ybUJ1dHRvbiBmcm9tIFwiLi92aWV3L3RvZG8tZm9ybS1idXR0b25cIjtcbmltcG9ydCBFZGl0VG9kbyBmcm9tIFwiLi92aWV3L3RvZG8tZWRpdFwiO1xuaW1wb3J0IERlbFRvZG8gZnJvbSBcIi4vdmlldy90b2RvLWRlbGV0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgUHJvamVjdEZvcm0sXG4gICAgICAgIFByb2plY3RSZW5kZXIsXG4gICAgICAgIFByb2plY3RFdmVudCxcbiAgICAgICAgUHJvamVjdFRpdGxlUmVuZGVyLCAgICAgICAgXG4gICAgICAgIFByb2plY3REZWxldGUsXG4gICAgICAgIFRvZG9SZW5kZXIsXG4gICAgICAgIFRvZG9Gb3JtQnV0dG9uLFxuICAgICAgICBFZGl0VG9kbyxcbiAgICAgICAgRGVsVG9kbyxcbiAgICB9XG59XG5cblxuXG5cbiIsImxldCBwcm9qZWN0SUQgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvamVjdElkKG5ld1ZhbCkge1xuICAgIHByb2plY3RJRCA9IG5ld1ZhbDtcblxuICAgIHJldHVybiBwcm9qZWN0SUQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWQoKSB7XG4gICBcbiAgICByZXR1cm4gTnVtYmVyKHByb2plY3RJRCk7XG59XG4iLCJsZXQgdG9kb0lEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvZG9JZChuZXdWYWwpIHtcbiAgICB0b2RvSUQgPSBuZXdWYWxcbiAgICByZXR1cm4gdG9kb0lEXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2RvSWQoKSB7XG4gICAgcmV0dXJuIE51bWJlcih0b2RvSUQpO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERlbGV0ZSgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIilcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgcHJvamVjdERlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdERlbC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZWxldGVcIilcbiAgICBwcm9qZWN0RGVsLnRleHRDb250ZW50ID0gXCJEZWxldGUgUHJvamVjdFwiO1xuXG4gICAgcHJvamVjdERlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXG4gICAgICAgIGlmKGdldFByb2plY3RJZCgpID09PSAwKSByZXR1cm47ICBcbiAgICAgICAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChnZXRQcm9qZWN0SWQoKSkgICAgICAgIFxuICAgICAgICBwcm9qZWN0LmNoaWxkTm9kZXNbZ2V0UHJvamVjdElkKCldLnJlbW92ZSgpXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICBcbiAgICAgICAgdG9kby50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiXCJcblxuXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsKVxuXG59IiwiaW1wb3J0IHsgc2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmltcG9ydCBQcm9qZWN0VGl0bGVSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC10aXRsZS1yZW5kZXJcIlxuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gXCIuL3RvZG8tZm9ybS1idXR0b25cIlxuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIilcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKVxuICAgIHByb2plY3QuZm9yRWFjaCh2YWwgPT4gdmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5vZGVJZCA9IHByb2plY3RzLmdldEF0dHJpYnV0ZShcInByb2plY3RcIilcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgc2V0UHJvamVjdElkKG5vZGVJZClcbiAgICAgICBcbiAgICAgICBcbiAgICBcbiAgICAgICAgUHJvamVjdFRpdGxlUmVuZGVyKClcbiAgICAgICAgVG9kb0Zvcm1CdXR0b24oKVxuICAgICAgICBUb2RvUmVuZGVyKClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICBcblxuICAgICBcbiAgICAgICBcbiAgICAgICAgXG4gICAgfSkpXG4gIFxuICAgIFxuICAgXG59IiwiaW1wb3J0IFByb2plY3QsIHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC1yZW5kZXJcIjtcbmltcG9ydCBQcm9qZWN0RXZlbnQgZnJvbSBcIi4vcHJvamVjdC1ldmVudFwiO1xuaW1wb3J0IFByb2plY3RUaXRsZVJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXRpdGxlLXJlbmRlclwiO1xuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTdWJtaXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWlucHV0XCIpXG4gICAgXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWRkXCIpXG4gICAgYnV0dG9uLnRleHRDb250ZW50PSBcIkFkZCBQcm9qZWN0XCJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICB0b2RvLnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KVxuICAgIFxuICAgICAgICBzdG9yZVByb2plY3QoKVxuICAgICAgXG4gICAgICAgIFByb2plY3RSZW5kZXIoKVxuICAgICAgICBQcm9qZWN0RXZlbnQoKVxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIoKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiXG4gICAgfSlcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxufVxuIiwiaW1wb3J0IFByb2plY3RTdWJtaXQgZnJvbSBcIi4vcHJvamVjdC1mb3JtLWJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKVxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBQcm9qZWN0U3VibWl0KCkgXG4gICBcblxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHNldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIilcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCJcblxuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZXRQcm9qZWN0SWQoaSkgICBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7ICAgIFxuICAgICAgIFxuICAgICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcInByb2plY3RcIixpKTtcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tpXS5UaXRsZTtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCkgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgfVxufSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFByb2plY3RJZChpKSAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgICAgXG4gICAgICAgXG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwicHJvamVjdFwiLGkpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHVzZXJEYXRhW2ldLlRpdGxlO1xuICAgIFxuICAgICAgIFxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgIH1cbn1cbiAgICBcbn0iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0XCJcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RUaXRsZVJlbmRlcigpIHtcbiAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSlcblxuICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0uVGl0bGV9YFxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgIH0gZWxzZSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB1c2VyRGF0YVtnZXRQcm9qZWN0SWQoKV0uVGl0bGVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgfVxuXG59IiwiaW1wb3J0IHsgc2V0VG9kb0lkICwgZ2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIlxuXG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxUb2RvKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsLXRvZG9cIik7XG4gICAgXG4gICAgYnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKFwidG9kb1wiKTtcbiAgICAgICAgc2V0VG9kb0lkKGlkKVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0ucmVtb3ZlVG9kbyhnZXRUb2RvSWQoKSlcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICBcbiAgICAgICAgc3RvcmVQcm9qZWN0KClcbiAgICAgICAgLy8gVG9kb1JlbmRlcigpIFxuICAgICAgXG4gICAgXG4gICAgfSkpXG5cbn0iLCJpbXBvcnQgeyBzZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcblxuaW1wb3J0IFVwZGF0ZVRvZG9Gb3JtIGZyb20gXCIuL3VwZGF0ZS10b2RvLWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFRvZG8oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS11cGRhdGVcIik7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LXRvZG9cIik7XG4gICAgYnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZm9ybS50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICBjb25zdCBpZCA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoXCJ0b2RvXCIpXG4gICAgICAgIHNldFRvZG9JZChpZClcbiAgXG4gICAgICAgIFxuICAgXG4gICAgICAgIFVwZGF0ZVRvZG9Gb3JtKClcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpXG4gICAgIFxuXG4gICAgfSkpXG59IiwiaW1wb3J0IFRvZG9Gb3JtIGZyb20gXCIuL3RvZG8tZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvRm9ybUJ1dHRvbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWJ1dHRvblwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRvZG9cIik7XG4gICAgXG4gICAgXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZvcm0udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIFRvZG9Gb3JtKClcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuaW1wb3J0IFRvZG9TdWJtaXQgZnJvbSBcIi4vdG9kby1zdWJtaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0Zvcm0oKSB7XG4gICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybVwiKVxuXG5cbiAgICBjb25zdCBpbnB1dEFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJUaXRsZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwidGl0bGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJEYXRlXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICB9LFxuICAgIF1cbiAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgXG5cbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgIFxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgXG5cblxuXG4gICAgICAgIFxuXG4gICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dClcbiAgICAgICAgXG4gICAgfVxuXG4gICBcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LXRvZG9cIilcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBUb2RvU3VibWl0KClcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1mb3JtXCIpXG4gICAgICAgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxuICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJQcmlvcml0eVwiKVxuICAgIFxuICBcbiAgICAvLyBjaG9vc2VzIGZvciBwcmlvcml0eVxuICAgIGNvbnN0IHByaW9yaXR5QXJyID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJncmVlblwiLFxuICAgICAgICAgICAgdGV4dDogXCJsb3dcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwieWVsbG93XCIsXG4gICAgICAgICAgICB0ZXh0OiBcIm1lZGl1bVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJyZWRcIixcbiAgICAgICAgICAgIHRleHQ6IFwiaGlnaFwiLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgLy8gbG9vcCB0aGUgY2hvb3NlIHRvIHB1dCBpbiB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJbaV0udmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlBcnJbaV0udGV4dDtcblxuICAgICAgICBcbiAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYWJlbFByaW9yaXR5KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eSlcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxuICAgICAgICBcbiAgXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgeyBzZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1JlbmRlcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpXG4gICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKVxuXG4gICBcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcInRvZG9cIiwgaSk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKFwidGFza0NvbG9yXCIsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7cHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRvZG9cIik7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgXG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtdG9kb1wiKTtcbiAgICAgICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFza0NvbG9yKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyRGF0YVtnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNldFRvZG9JZChpKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgdGFza0NvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNhcmRcIiwgaSlcbiAgICAgICAgICAgIHRvZG8uc2V0QXR0cmlidXRlKFwidG9kb1wiLCBpKTtcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgIHRhc2tDb2xvci5zZXRBdHRyaWJ1dGUoXCJ0YXNrQ29sb3JcIiwgaSlcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt1c2VyRGF0YVtnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uVGl0bGV9YDtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLkRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLkR1ZURhdGV9YDtcbiAgICAgICAgICAgIHRhc2tDb2xvci5zdHlsZS5ib3JkZXJMZWZ0ID0gYDEwcHggc29saWQgJHt1c2VyRGF0YVtnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uUHJpb3JpdHl9YDtcbiAgICAgICAgICAgXG4gICAgXG4gICAgXG4gICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtdG9kb1wiKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsLXRvZG9cIik7XG4gICAgICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cbiBcblxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9TdWJtaXQoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRpdGxlXCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRlc2NyaXB0aW9uXCIpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGF0ZVwiKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcmlvcml0eVwiKVxuICAgIGNvbnN0IHRvZG8gPSBUb2RvKFxuICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgICAgZGF0ZS52YWx1ZSwgXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLCBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLmFkZFRvZG8odG9kbylcbiAgICAgICAgXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICAgIFxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICBcbiAgICAgICAgXG4gICAgICBcbiAgICAgICBcbn0iLCJcbmltcG9ydCBUb2RvVXBkYXRlU3VibWl0IGZyb20gXCIuL3VwZGF0ZS10b2RvLXN1Ym1pdFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVRvZG9Gb3JtKCkge1xuICAgICAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXVwZGF0ZVwiKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXVwZGF0ZS1mb3JtXCIpXG5cbiAgICBjb25zdCBpbnB1dEFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJUaXRsZVVwZGF0ZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwidGl0bGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGl0bGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblVwZGF0ZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiRGVzY3JpcHRpb25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJEYXRlVXBkYXRlXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiRGF0ZVwiXG4gICAgICAgIH0sXG4gICAgXVxuXG4gICAgIFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgXG5cbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLnRpdGxlXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS50aXRsZVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0udGl0bGVcbiAgICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICBcblxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgIFxuXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGlucHV0QXJyYXlbaV0ucGxhY2Vob2xkZXIpXG4gICAgICAgXG4gICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgfVxuXG4gICBcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ1cGRhdGUtdG9kb1wiKVxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVXBkYXRlXCJcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIFxuICAgICAgICBUb2RvVXBkYXRlU3VibWl0KClcbiAgICAgICAgXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctZm9ybVwiKVxuICAgIH0pXG5cbiAgICBcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBjb25zdCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgbGFiZWxQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxuICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJQcmlvcml0eVVwZGF0ZVwiKVxuXG4gICAgLy8gY2hvb3NlcyBmb3IgcHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eUFyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIHRleHQ6IFwibG93XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgdGV4dDogXCJtZWRpdW1cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwicmVkXCIsXG4gICAgICAgICAgICB0ZXh0OiBcImhpZ2hcIixcbiAgICAgICAgfSxcbiAgICBdO1xuXG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHlBcnJbaV0udmFsdWU7XG4gICAgICAgIG9wdGlvbi50ZXh0ID0gcHJpb3JpdHlBcnJbaV0udGV4dDtcblxuICAgICAgICBcbiAgICAgICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbn0iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0SWQgfSBmcm9tIFwiLi9nZXQtc2V0LXByb2plY3QtaWRcIjtcbmltcG9ydCB7IGdldFRvZG9JZCB9IGZyb20gXCIuL2dldC1zZXQtdG9kby1pZFwiO1xuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIjtcblxuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvVXBkYXRlU3VibWl0KCkge1xuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRpdGxlVXBkYXRlXCIpXG4gICAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGVzY3JpcHRpb25VcGRhdGVcIilcbiAgICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRhdGVVcGRhdGVcIilcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcmlvcml0eVVwZGF0ZVwiKVxuICAgXG4gICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnVwZGF0ZVRvZG8oZ2V0VG9kb0lkKCksaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgaW5wdXREYXRlLnZhbHVlLCBpbnB1dFByaW9yaXR5LnZhbHVlKVxuICAgIFxuICAgIHN0b3JlUHJvamVjdCgpXG4gICAgVG9kb1JlbmRlcigpIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBWaWV3IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gc3RvcmVQcm9qZWN0KClcblxuVmlldygpLlByb2plY3RGb3JtKCk7XG5WaWV3KCkuUHJvamVjdFJlbmRlcigpO1xuVmlldygpLlByb2plY3RFdmVudCgpO1xuVmlldygpLlByb2plY3RUaXRsZVJlbmRlcigpO1xuVmlldygpLlByb2plY3REZWxldGUoKTtcblZpZXcoKS5Ub2RvUmVuZGVyKCk7XG5WaWV3KCkuVG9kb0Zvcm1CdXR0b24oKTtcblZpZXcoKS5FZGl0VG9kbygpO1xuVmlldygpLkRlbFRvZG8oKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpICE9PSBudWxsKSB7XG4gICAgcHJvamVjdE1hbmFnZXIuYWRkTG9jYWxTdG9yYWdlKFxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSksXG4gICAgKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=