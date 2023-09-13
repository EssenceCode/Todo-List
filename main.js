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
/* harmony import */ var _view_update_todo_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/update-todo-form */ "./src/view/update-todo-form.js");










function View() {

    return {
        ProjectForm: _view_project_form__WEBPACK_IMPORTED_MODULE_0__["default"],
        ProjectRender: _view_project_render__WEBPACK_IMPORTED_MODULE_1__["default"],
        ProjectEvent: _view_project_event__WEBPACK_IMPORTED_MODULE_2__["default"],
        ProjectTitleRender: _view_project_title_render__WEBPACK_IMPORTED_MODULE_3__["default"],        
        ProjectDelete: _view_project_delete__WEBPACK_IMPORTED_MODULE_4__["default"],
        TodoRender: _view_todo_render__WEBPACK_IMPORTED_MODULE_5__["default"],
        TodoFormButton: _view_todo_form_button__WEBPACK_IMPORTED_MODULE_6__["default"],
        UpdateTodoForm: _view_update_todo_form__WEBPACK_IMPORTED_MODULE_7__["default"],
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
/* harmony import */ var _project_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-render */ "./src/view/project-render.js");
/* harmony import */ var _project_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-event */ "./src/view/project-event.js");






function ProjectDelete() {
    const project = document.querySelector(".project-container");
    const todo = document.querySelector(".todo-container")
    const title = document.querySelector(".project-title")
    const button = document.querySelector(".add-todo-button")
    const container = document.querySelector(".sidebar");
    const projectDel = document.createElement("button");
    projectDel.classList.add("project-delete")
    projectDel.textContent = "Delete Project";
    // project.textContent = ""
    projectDel.addEventListener("click", () => {

        if((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)() === 0) return;  
        _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.removeProject((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)())        
        project.childNodes[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].remove()
        ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_2__["default"])()
       
      
        todo.textContent = ""
        title.textContent = ""
        button.textContent = ""

        ;(0,_project_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
        ;(0,_project_event__WEBPACK_IMPORTED_MODULE_4__["default"])()
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
       
       
        console.log(projects)
        console.log((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_0__.getProjectId)())
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
    console.log((0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)())
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
/* harmony import */ var _update_show_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-show-form */ "./src/view/update-show-form.js");




function EditTodo() {
    const form = document.querySelector(".form-update");
    
    const button = document.querySelectorAll(".edit-todo");
    button.forEach(btn => btn.addEventListener("click", (e) => {
        
        const parent = e.target.parentElement
        const id = parent.getAttribute("todo")
        ;(0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_0__.setTodoId)(id)
        ;(0,_update_show_form__WEBPACK_IMPORTED_MODULE_1__["default"])()

        
   
        
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
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");
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
 
    (0,_todo_edit__WEBPACK_IMPORTED_MODULE_3__["default"])()
    ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_4__["default"])()
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

/***/ "./src/view/update-render.js":
/*!***********************************!*\
  !*** ./src/view/update-render.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateTodoRender)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project */ "./src/project.js");
/* harmony import */ var _get_set_project_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-set-project-id */ "./src/view/get-set-project-id.js");
/* harmony import */ var _get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-set-todo-id */ "./src/view/get-set-todo-id.js");
/* eslint-disable no-plusplus */





function UpdateTodoRender() {
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
            editBtn.addEventListener("click", () => {
                
            })
    
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

/***/ "./src/view/update-show-form.js":
/*!**************************************!*\
  !*** ./src/view/update-show-form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdateShowForm)
/* harmony export */ });
function UpdateShowForm() {
    const form = document.querySelector(".form-update");

    // const form = document.querySelector(".TitleUpdate");
    // const form = document.querySelector(".DescriptionUpdate");
    // const form = document.querySelector(".DateUpdate");
    // const form = document.querySelector(".form-update");

    return form


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
/* harmony import */ var _todo_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-edit */ "./src/view/todo-edit.js");
/* harmony import */ var _todo_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-delete */ "./src/view/todo-delete.js");





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
        ;(0,_todo_edit__WEBPACK_IMPORTED_MODULE_1__["default"])()
        ;(0,_todo_delete__WEBPACK_IMPORTED_MODULE_2__["default"])()
        
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

    return formContainer.appendChild(form)
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
/* harmony import */ var _update_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-render */ "./src/view/update-render.js");
/* harmony import */ var _storage_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage-project */ "./src/storage-project.js");









function TodoUpdateSubmit() {
    const inputTitle = document.getElementById("TitleUpdate")
    const inputDescription = document.getElementById("DescriptionUpdate")
    const inputDate = document.getElementById("DateUpdate")
    const inputPriority = document.getElementById("PriorityUpdate")
   
    _project__WEBPACK_IMPORTED_MODULE_0__.projectManager.Projects[(0,_get_set_project_id__WEBPACK_IMPORTED_MODULE_1__.getProjectId)()].updateTodo((0,_get_set_todo_id__WEBPACK_IMPORTED_MODULE_2__.getTodoId)(),inputTitle.value, inputDescription.value, inputDate.value, inputPriority.value)
    
    ;(0,_storage_project__WEBPACK_IMPORTED_MODULE_4__["default"])()
    ;(0,_update_render__WEBPACK_IMPORTED_MODULE_3__["default"])()
   
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

console.log((0,_view__WEBPACK_IMPORTED_MODULE_0__["default"])().UpdateTodoForm())


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVB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QSxJQUFJLG9EQUFjLFVBQVUsaUVBQVksZUFBZSwyREFBUztBQUNoRTtBQUNBLElBQUksNkRBQVk7QUFDaEIsSUFBSSwyREFBZ0I7QUFDcEI7QUFDQTs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNpQjtBQUN0Qjs7QUFFckI7O0FBRUEsaURBQUk7QUFDSixpREFBSTtBQUNKLGlEQUFJO0FBQ0osaURBQUk7QUFDSixpREFBSTtBQUNKLGlEQUFJO0FBQ0osaURBQUk7O0FBRUosWUFBWSxpREFBSTs7O0FBR2hCO0FBQ0E7QUFDQSxJQUFJLG9EQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvZGVsLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QvcHVzaC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0L3B1c2gtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC91cGRhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3RvcmFnZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L2dldC1zZXQtcHJvamVjdC1pZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9nZXQtc2V0LXRvZG8taWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvcHJvamVjdC1ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LWZvcm0tYnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy9wcm9qZWN0LXRpdGxlLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWRlbGV0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWVkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1mb3JtLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy90b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdG9kby1zdWJtaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlLXJlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdmlldy91cGRhdGUtc2hvdy1mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3L3VwZGF0ZS10b2RvLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcvdXBkYXRlLXRvZG8tc3VibWl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIC0tZm9udC1jb2xvcjpjb3JuZmxvd2VyYmx1ZTs7XG4gICAgLS1wcm9qZWN0LXdpZHRoOiAxMjBweDtcbiAgICAtLXByb2plY3QtaGVpZ2h0OiA1MHB4O1xuICAgIC0tcHJvamVjdC1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IHJnYigxMDAsIDE0OSwgMjM3KTtcbiAgICAtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxNDksIDIzNyk7XG4gICAgLS1idXR0b24taG92ZXItY29sb3I6IHJnYigyNTUsMjU1LDI1NSk7XG4gICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiBzb2xpZCByZ2IoMTAwLCAxNDksIDIzNyk7XG5cbiAgIFxuICAgIC0tdG9kby1lbGVtZW50cy1jb2xvcjpyZ2IoNzAsIDEzMCwgMTgwKTtcbiAgICAtLXRvZG8tYnV0dG9ucy13aWR0aDogNTBweDtcbiAgICAtLXRvZG8tYnV0dG9ucy1oZWlnaHQ6IDI1cHg7XG59XG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSxcbnNlbGVjdCxcbmJ1dHRvbiB7IC0tcHJvamVjdC1hZGQtd2lkdGg6IDEwMHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gICBwYWRkaW5nOiAyNXB4O1xuICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICBcblxufVxuXG4ucHJvamVjdC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICBcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnNpZGViYXIge1xuXG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGdhcDogMjBweDtcblxufVxuXG4ucHJvamVjdCB7XG4gICAgd2lkdGg6IHZhcigtLXByb2plY3Qtd2lkdGgpO1xuICAgIGhlaWdodDogdmFyKC0tcHJvamVjdC1oZWlnaHQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7IFxuXG59XG5cbi5wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLnByb2plY3QtYWRkLCAucHJvamVjdC1kZWxldGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDJweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWFkZDphY3RpdmUsIC5wcm9qZWN0LWRlbGV0ZTphY3RpdmUge1xuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLmFkZC10b2RvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmZvcm0ge1xuICAgIFxuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLXVwZGF0ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMjtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgXG4gICAgZ2FwOiAxMHB4O1xufVxuXG4uc2hvdy1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuLnRvZG8tZm9ybSwgLnRvZG8tdXBkYXRlLWZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGdhcDogMnB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi50b2RvLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgY29sb3I6IHZhcigtLXRvZG8tZWxlbWVudHMtY29sb3IpO1xufVxuLnRvZG8tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbn1cblxuLnRvZG8tZGF0ZSwgLnRvZG8tYnV0dG9ucyB7XG4gICAgbWFyZ2luOiA2cHggNXB4O1xufVxuXG4uZWRpdC10b2RvLCAuZGVsLXRvZG8sIC51cGRhdGUtdG9kbyB7XG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpOztcbn1cblxuLmVkaXQtdG9kbzphY3RpdmUsIC5kZWwtdG9kbzphY3RpdmUsIC51cGRhdGUtdG9kbzphY3RpdmUge1xuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XG59XG5cbi5hZGQtdG9kbyB7XG4gICBcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpOztcbn1cblxuLmFkZC10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuLmFkZC10b2RvID4gc3BhbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWRkLXRvZG8gPiBzcGFuOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnYWRkIHRvZG8nO1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogLTMwcHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XG59XG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xufVxuXG5cbi5zdWJtaXQtdG9kbyB7XG4gICAgd2lkdGg6IHZhcigtLXRvZG8tYnV0dG9ucy13aWR0aCk7XG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnN1Ym1pdC10b2RvOmFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcbn1cblxuZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuYTpsaW5rIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6dmFyKC0tZm9udC1jb2xvcik7XG4gIH1cblxuYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6cGx1bTtcbn0gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsK0NBQStDO0lBQy9DLG1EQUFtRDtJQUNuRCxzQ0FBc0M7SUFDdEMsK0NBQStDOzs7SUFHL0MsdUNBQXVDO0lBQ3ZDLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7OztTQUdTLDBCQUEwQjtFQUNqQyxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsbUNBQW1DO0dBQ25DLGtCQUFrQjtHQUNsQix3QkFBd0I7OztBQUczQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsU0FBUzs7QUFFYjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4Qyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjOztJQUVkLGFBQWE7O0lBRWIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxnQ0FBZ0M7QUFDcEM7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGlCQUFpQjs7SUFFakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDhDQUE4QztJQUM5QyxnREFBZ0Q7SUFDaEQsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtFQUN6Qjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgLS1mb250LWNvbG9yOmNvcm5mbG93ZXJibHVlOztcXG4gICAgLS1wcm9qZWN0LXdpZHRoOiAxMjBweDtcXG4gICAgLS1wcm9qZWN0LWhlaWdodDogNTBweDtcXG4gICAgLS1wcm9qZWN0LWJvcmRlci13aWR0aDogMnB4O1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3I6IHJnYigxMDAsIDE0OSwgMjM3KTtcXG4gICAgLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTQ5LCAyMzcpO1xcbiAgICAtLWJ1dHRvbi1ob3Zlci1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcXG4gICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiBzb2xpZCByZ2IoMTAwLCAxNDksIDIzNyk7XFxuXFxuICAgXFxuICAgIC0tdG9kby1lbGVtZW50cy1jb2xvcjpyZ2IoNzAsIDEzMCwgMTgwKTtcXG4gICAgLS10b2RvLWJ1dHRvbnMtd2lkdGg6IDUwcHg7XFxuICAgIC0tdG9kby1idXR0b25zLWhlaWdodDogMjVweDtcXG59XFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0LFxcbmJ1dHRvbiB7IC0tcHJvamVjdC1hZGQtd2lkdGg6IDEwMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICBwYWRkaW5nOiAyNXB4O1xcbiAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgXFxuXFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICBcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IHZhcigtLXByb2plY3Qtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXByb2plY3QtaGVpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTsgXFxuXFxufVxcblxcbi5wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWFkZCwgLnByb2plY3QtZGVsZXRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtYWRkOmFjdGl2ZSwgLnByb2plY3QtZGVsZXRlOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogc3RlZWxibHVlO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tdXBkYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIFxcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaG93LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4udG9kby1mb3JtLCAudG9kby11cGRhdGUtZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcblxcbi50b2RvLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGNvbG9yOiB2YXIoLS10b2RvLWVsZW1lbnRzLWNvbG9yKTtcXG59XFxuLnRvZG8tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udG9kby1kYXRlLCAudG9kby1idXR0b25zIHtcXG4gICAgbWFyZ2luOiA2cHggNXB4O1xcbn1cXG5cXG4uZWRpdC10b2RvLCAuZGVsLXRvZG8sIC51cGRhdGUtdG9kbyB7XFxuICAgIHdpZHRoOiB2YXIoLS10b2RvLWJ1dHRvbnMtd2lkdGgpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXRvZG8tYnV0dG9ucy1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpOztcXG59XFxuXFxuLmVkaXQtdG9kbzphY3RpdmUsIC5kZWwtdG9kbzphY3RpdmUsIC51cGRhdGUtdG9kbzphY3RpdmUge1xcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWJ1dHRvbi1ib3JkZXItd2lkdGgpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uYWRkLXRvZG8ge1xcbiAgIFxcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpOztcXG59XFxuXFxuLmFkZC10b2RvOmFjdGl2ZSB7XFxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tYnV0dG9uLWJvcmRlci13aWR0aCk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5hZGQtdG9kbyA+IHNwYW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5hZGQtdG9kbyA+IHNwYW46OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFkZC10b2RvID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJ2FkZCB0b2RvJztcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgbGVmdDogLTMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubG93LXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB5ZWxsb3c7XFxufVxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmVkO1xcbn1cXG5cXG5cXG4uc3VibWl0LXRvZG8ge1xcbiAgICB3aWR0aDogdmFyKC0tdG9kby1idXR0b25zLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS10b2RvLWJ1dHRvbnMtaGVpZ2h0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LXRvZG86YWN0aXZlIHtcXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1idXR0b24tYm9yZGVyLXdpZHRoKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYTpsaW5rIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjp2YXIoLS1mb250LWNvbG9yKTtcXG4gIH1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOnBsdW07XFxufSAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQdXNoUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0L3B1c2gtcHJvamVjdFwiO1xuaW1wb3J0IFB1c2hUb2RvIGZyb20gXCIuL3Byb2plY3QvcHVzaC10b2RvXCI7XG5pbXBvcnQgRGVsZXRlUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0L2RlbC1wcm9qZWN0XCI7XG5pbXBvcnQgRGVsZXRlVG9kbyBmcm9tIFwiLi9wcm9qZWN0L2RlbC10b2RvXCI7XG5pbXBvcnQgVXBkYXRlVG9kbyBmcm9tIFwiLi9wcm9qZWN0L3VwZGF0ZS10b2RvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3RzKHRpdGxlKSB7XG4gIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuICBjb25zdCBUaXRsZSA9IHRpdGxlO1xuXG4gIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0FycmF5O1xuXG4gIFxuXG4gIHJldHVybiB7XG4gICAgVGl0bGUsXG4gICAgdG9kb0xpc3QsXG4gICAgLi4uUHVzaFRvZG8odG9kb0xpc3QpLFxuICAgIC4uLkRlbGV0ZVRvZG8odG9kb0xpc3QpLFxuICAgIC4uLlVwZGF0ZVRvZG8odG9kb0xpc3QpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdEFycmF5Q3JlYXRlKHRpdGxlKSB7XG4gIGNvbnN0IHByb2plY3RBcnJheSA9IFtdO1xuICBjb25zdCBQcm9qZWN0cyA9IHByb2plY3RBcnJheTtcblxuICBjb25zdCBhZGRMb2NhbFN0b3JhZ2UgPSAoYXJyKSA9PiB7XG4gICAgYXJyLmZvckVhY2goKHZhbCkgPT5cbiAgICAgIHByb2plY3RBcnJheS5wdXNoKHtcbiAgICAgICAgLi4udmFsLFxuICAgICAgICAuLi5QdXNoVG9kbyh2YWwudG9kb0xpc3QpLFxuICAgICAgICAuLi5EZWxldGVUb2RvKHZhbC50b2RvTGlzdCksXG4gICAgICAgIC4uLlVwZGF0ZVRvZG8odmFsLnRvZG9MaXN0KSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBQcm9qZWN0cyxcbiAgICBhZGRMb2NhbFN0b3JhZ2UsXG4gICAgLi4uUHVzaFByb2plY3QocHJvamVjdEFycmF5KSxcbiAgICAuLi5EZWxldGVQcm9qZWN0KHByb2plY3RBcnJheSksXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0TWFuYWdlciA9IFByb2plY3RBcnJheUNyZWF0ZShcIlByb2plY3RNYW5hZ2VyXCIpO1xuXG5cblxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBDcmVhdGVQcm9qZWN0cyhcImRlZmF1bHRcIilcblxuaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG5cbiAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxuICAgIFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9qZWN0KG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVByb2plY3Q6IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVsZXRlVG9kbyhvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVUb2RvOiAoaW5kZXgpID0+IG9iai5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVzaFByb2plY3Qob2JqKSB7XG4gIFxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3Q6IChhcnIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoKSkgICAgXG4gICAgICAgICAgICByZXR1cm4gb2JqLnB1c2goYXJyKVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1c2hUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFRvZG86IChhcnIpID0+IG9iai5wdXNoKGFyciksXG4gICAgICAgIFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVUb2RvKGFycikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHVwZGF0ZVRvZG86IChpbmRleCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLlRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICBhcnJbaW5kZXhdLkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICBhcnJbaW5kZXhdLkR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgYXJyW2luZGV4XS5Qcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB9XG4gICAgfVxufVxuICAiLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RvcmVQcm9qZWN0KCkge1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdE1hbmFnZXIuUHJvamVjdHMpKTtcblxuICBcbiAgIFxufVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IFRpdGxlID0gdGl0bGU7XG4gICAgY29uc3QgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBjb25zdCBEdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBjb25zdCBQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgXG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIFRpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHksICBcbiAgICB9XG59XG5cbiIsImltcG9ydCBQcm9qZWN0Rm9ybSBmcm9tIFwiLi92aWV3L3Byb2plY3QtZm9ybVwiO1xuaW1wb3J0IFByb2plY3RSZW5kZXIgZnJvbSBcIi4vdmlldy9wcm9qZWN0LXJlbmRlclwiO1xuaW1wb3J0IFByb2plY3RFdmVudCBmcm9tIFwiLi92aWV3L3Byb2plY3QtZXZlbnRcIjtcbmltcG9ydCBQcm9qZWN0VGl0bGVSZW5kZXIgZnJvbSBcIi4vdmlldy9wcm9qZWN0LXRpdGxlLXJlbmRlclwiO1xuaW1wb3J0IFByb2plY3REZWxldGUgZnJvbSBcIi4vdmlldy9wcm9qZWN0LWRlbGV0ZVwiO1xuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdmlldy90b2RvLXJlbmRlclwiO1xuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gXCIuL3ZpZXcvdG9kby1mb3JtLWJ1dHRvblwiO1xuXG5pbXBvcnQgVXBkYXRlVG9kb0Zvcm0gZnJvbSBcIi4vdmlldy91cGRhdGUtdG9kby1mb3JtXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldygpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIFByb2plY3RGb3JtLFxuICAgICAgICBQcm9qZWN0UmVuZGVyLFxuICAgICAgICBQcm9qZWN0RXZlbnQsXG4gICAgICAgIFByb2plY3RUaXRsZVJlbmRlciwgICAgICAgIFxuICAgICAgICBQcm9qZWN0RGVsZXRlLFxuICAgICAgICBUb2RvUmVuZGVyLFxuICAgICAgICBUb2RvRm9ybUJ1dHRvbixcbiAgICAgICAgVXBkYXRlVG9kb0Zvcm0sXG4gICAgfVxufVxuXG5cblxuXG4iLCJsZXQgcHJvamVjdElEID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb2plY3RJZChuZXdWYWwpIHtcbiAgICBwcm9qZWN0SUQgPSBuZXdWYWw7XG5cbiAgICByZXR1cm4gcHJvamVjdElEO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdElkKCkge1xuICAgXG4gICAgcmV0dXJuIE51bWJlcihwcm9qZWN0SUQpO1xufVxuIiwibGV0IHRvZG9JRCA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2RvSWQobmV3VmFsKSB7XG4gICAgdG9kb0lEID0gbmV3VmFsXG4gICAgcmV0dXJuIHRvZG9JRFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9kb0lkKCkge1xuICAgIHJldHVybiBOdW1iZXIodG9kb0lEKTtcbn1cbiIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHN0b3JlUHJvamVjdCBmcm9tIFwiLi4vc3RvcmFnZS1wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdFJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXJlbmRlclwiO1xuaW1wb3J0IFByb2plY3RFdmVudCBmcm9tIFwiLi9wcm9qZWN0LWV2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZWxldGUoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIilcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnV0dG9uXCIpXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuICAgIGNvbnN0IHByb2plY3REZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3REZWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlXCIpXG4gICAgcHJvamVjdERlbC50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgICAvLyBwcm9qZWN0LnRleHRDb250ZW50ID0gXCJcIlxuICAgIHByb2plY3REZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICBpZihnZXRQcm9qZWN0SWQoKSA9PT0gMCkgcmV0dXJuOyAgXG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnJlbW92ZVByb2plY3QoZ2V0UHJvamVjdElkKCkpICAgICAgICBcbiAgICAgICAgcHJvamVjdC5jaGlsZE5vZGVzW2dldFByb2plY3RJZCgpXS5yZW1vdmUoKVxuICAgICAgICBzdG9yZVByb2plY3QoKVxuICAgICAgIFxuICAgICAgXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgICAgICAgUHJvamVjdFJlbmRlcigpXG4gICAgICAgIFByb2plY3RFdmVudCgpXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGVsKVxuICAgIFxuXG59IiwiaW1wb3J0IHsgc2V0UHJvamVjdElkICwgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcbmltcG9ydCBQcm9qZWN0VGl0bGVSZW5kZXIgZnJvbSBcIi4vcHJvamVjdC10aXRsZS1yZW5kZXJcIlxuaW1wb3J0IFRvZG9Gb3JtQnV0dG9uIGZyb20gXCIuL3RvZG8tZm9ybS1idXR0b25cIlxuaW1wb3J0IFRvZG9SZW5kZXIgZnJvbSBcIi4vdG9kby1yZW5kZXJcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RFdmVudCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIilcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKVxuICAgIHByb2plY3QuZm9yRWFjaCh2YWwgPT4gdmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IG5vZGVJZCA9IHByb2plY3RzLmdldEF0dHJpYnV0ZShcInByb2plY3RcIilcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCJcbiAgICAgICAgc2V0UHJvamVjdElkKG5vZGVJZClcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgIGNvbnNvbGUubG9nKGdldFByb2plY3RJZCgpKVxuICAgICAgICBQcm9qZWN0VGl0bGVSZW5kZXIoKVxuICAgICAgICBUb2RvRm9ybUJ1dHRvbigpXG4gICAgICAgIFRvZG9SZW5kZXIoKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgIFxuXG4gICAgIFxuICAgICAgIFxuICAgICAgICBcbiAgICB9KSlcbiAgXG4gICAgXG4gICBcbn0iLCJpbXBvcnQgUHJvamVjdCwgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdFJlbmRlciBmcm9tIFwiLi9wcm9qZWN0LXJlbmRlclwiO1xuaW1wb3J0IFByb2plY3RFdmVudCBmcm9tIFwiLi9wcm9qZWN0LWV2ZW50XCI7XG5pbXBvcnQgUHJvamVjdFRpdGxlUmVuZGVyIGZyb20gXCIuL3Byb2plY3QtdGl0bGUtcmVuZGVyXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFN1Ym1pdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5wdXRcIilcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hZGRcIilcbiAgICBidXR0b24udGV4dENvbnRlbnQ9IFwiQWRkIFByb2plY3RcIlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgIHRvZG8udGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QoaW5wdXQudmFsdWUpO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QpXG4gICAgXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICBcbiAgICAgICAgUHJvamVjdFJlbmRlcigpXG4gICAgICAgIFByb2plY3RFdmVudCgpXG4gICAgICAgIFByb2plY3RUaXRsZVJlbmRlcigpXG4gICAgICAgIFxuICAgIFxuICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCJcbiAgICB9KVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG59XG4iLCJpbXBvcnQgUHJvamVjdFN1Ym1pdCBmcm9tIFwiLi9wcm9qZWN0LWZvcm0tYnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0XCIpXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIFByb2plY3RTdWJtaXQoKSBcbiAgIFxuXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgc2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlbmRlcigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKVxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSlcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNldFByb2plY3RJZChpKSAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTsgICAgXG4gICAgICAgXG4gICAgICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwicHJvamVjdFwiLGkpO1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2ldLlRpdGxlO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KSAgICBcbiAgICAgICAgXG4gICAgICBcbiAgICB9XG59IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2V0UHJvamVjdElkKGkpICAgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpOyAgICBcbiAgICAgICBcbiAgICAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0XCIsaSk7XG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gdXNlckRhdGFbaV0uVGl0bGU7XG4gICAgXG4gICAgICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCkgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgfVxufVxuICAgIFxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3Byb2plY3RcIlxuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFRpdGxlUmVuZGVyKCkge1xuICAgY29uc3QgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKVxuXG4gICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS5UaXRsZX1gXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhW2dldFByb2plY3RJZCgpXS5UaXRsZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgY29uc29sZS5sb2coZ2V0UHJvamVjdElkKCkpXG4gICB9XG5cbn0iLCJpbXBvcnQgeyBzZXRUb2RvSWQgLCBnZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiXG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxUb2RvKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsLXRvZG9cIik7XG4gICAgXG4gICAgYnV0dG9uLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQuZ2V0QXR0cmlidXRlKFwidG9kb1wiKTtcbiAgICAgICAgc2V0VG9kb0lkKGlkKVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0ucmVtb3ZlVG9kbyhnZXRUb2RvSWQoKSlcbiAgICAgICAgcGFyZW50LnJlbW92ZSgpXG4gICAgICBcbiAgICAgICAgc3RvcmVQcm9qZWN0KClcbiAgICAgICBcbiAgICAgICBcbiAgICAgIFxuICAgIFxuICAgIH0pKVxuXG59IiwiaW1wb3J0IHsgc2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5cbmltcG9ydCBVcGRhdGVTaG93Rm9ybSBmcm9tIFwiLi91cGRhdGUtc2hvdy1mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRUb2RvKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdXBkYXRlXCIpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC10b2RvXCIpO1xuICAgIGJ1dHRvbi5mb3JFYWNoKGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50LmdldEF0dHJpYnV0ZShcInRvZG9cIilcbiAgICAgICAgc2V0VG9kb0lkKGlkKVxuICAgICAgICBVcGRhdGVTaG93Rm9ybSgpXG5cbiAgICAgICAgXG4gICBcbiAgICAgICAgXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctZm9ybVwiKVxuICAgICBcblxuICAgIH0pKVxufSIsImltcG9ydCBUb2RvRm9ybSBmcm9tIFwiLi90b2RvLWZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb0Zvcm1CdXR0b24oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC10b2RvXCIpO1xuICAgIFxuICAgIFxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBmb3JtLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgICBUb2RvRm9ybSgpXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctZm9ybVwiKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbilcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5cbmltcG9ydCBUb2RvU3VibWl0IGZyb20gXCIuL3RvZG8tc3VibWl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9Gb3JtKCkge1xuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIilcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm1cIilcblxuXG4gICAgY29uc3QgaW5wdXRBcnJheSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInRpdGxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgfSxcbiAgICBdXG4gICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgIFxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgIFxuXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS5sYWJlbFxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0ubGFiZWxcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLmxhYmVsXG4gICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICBcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgIFxuXG5cblxuICAgICAgICBcblxuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXG4gICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC10b2RvXCIpXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgVG9kb1N1Ym1pdCgpXG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctZm9ybVwiKVxuICAgICAgIFxuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCJcbiAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJpb3JpdHlcIilcbiAgICBcbiAgXG4gICAgLy8gY2hvb3NlcyBmb3IgcHJpb3JpdHlcbiAgICBjb25zdCBwcmlvcml0eUFyciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIHRleHQ6IFwibG93XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgdGV4dDogXCJtZWRpdW1cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwicmVkXCIsXG4gICAgICAgICAgICB0ZXh0OiBcImhpZ2hcIixcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIC8vIGxvb3AgdGhlIGNob29zZSB0byBwdXQgaW4gdGhlIHNlbGVjdCBlbGVtZW50XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyW2ldLnZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5QXJyW2ldLnRleHQ7XG5cbiAgICAgICAgXG4gICAgICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWxQcmlvcml0eSlcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICAgICAgXG4gIFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgc2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5cbmltcG9ydCBFZGl0VG9kbyBmcm9tIFwiLi90b2RvLWVkaXRcIjtcbmltcG9ydCBEZWxUb2RvIGZyb20gXCIuL3RvZG8tZGVsZXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9SZW5kZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKVxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSlcblxuICAgXG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIlxuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RBcnJheVwiKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2V0VG9kb0lkKGkpXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tY2FyZFwiLCBpKVxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoXCJ0b2RvXCIsIGkpO1xuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgdGFza0NvbG9yLnNldEF0dHJpYnV0ZShcInRhc2tDb2xvclwiLCBpKVxuICAgIFxuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5UaXRsZX1gO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRGVzY3JpcHRpb259YDtcbiAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TWFuYWdlci5Qcm9qZWN0c1tnZXRQcm9qZWN0SWQoKV0udG9kb0xpc3RbaV0uRHVlRGF0ZX1gO1xuICAgICAgICAgICAgdGFza0NvbG9yLnN0eWxlLmJvcmRlckxlZnQgPSBgMTBweCBzb2xpZCAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5Qcmlvcml0eX1gO1xuICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10b2RvXCIpO1xuICAgICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsLXRvZG9cIik7XG4gICAgICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcInRvZG9cIiwgaSk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKFwidGFza0NvbG9yXCIsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRvZG9cIik7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgICAgICBcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbC10b2RvXCIpO1xuICAgICAgICAgICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJEZWxcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrVGl0bGUuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgICAgICB0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrQ29sb3IpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpXG4gICAgXG4gICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2spXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZWRpdEJ0bilcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZGVsQnRuKVxuICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9XG4gXG4gICAgRWRpdFRvZG8oKVxuICAgIERlbFRvZG8oKVxufVxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4uL3RvZG9cIlxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgc3RvcmVQcm9qZWN0IGZyb20gXCIuLi9zdG9yYWdlLXByb2plY3RcIjtcbmltcG9ydCBUb2RvUmVuZGVyIGZyb20gXCIuL3RvZG8tcmVuZGVyXCI7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9TdWJtaXQoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRpdGxlXCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRlc2NyaXB0aW9uXCIpXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGF0ZVwiKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQcmlvcml0eVwiKVxuICAgIGNvbnN0IHRvZG8gPSBUb2RvKFxuICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLCBcbiAgICAgICAgZGF0ZS52YWx1ZSwgXG4gICAgICAgIHByaW9yaXR5LnZhbHVlLCBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLmFkZFRvZG8odG9kbylcbiAgICAgICAgXG4gICAgICAgIHN0b3JlUHJvamVjdCgpXG4gICAgICAgIFxuICAgICAgICBUb2RvUmVuZGVyKCkgXG4gICBcbiAgICAgICAgXG4gICAgICBcbiAgICAgICBcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdElkIH0gZnJvbSBcIi4vZ2V0LXNldC1wcm9qZWN0LWlkXCI7XG5pbXBvcnQgeyBzZXRUb2RvSWQgfSBmcm9tIFwiLi9nZXQtc2V0LXRvZG8taWRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVUb2RvUmVuZGVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIilcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikpXG4gICBcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcInRvZG9cIiwgaSk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKFwidGFza0NvbG9yXCIsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7cHJvamVjdE1hbmFnZXIuUHJvamVjdHNbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRvZG9cIik7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsLXRvZG9cIik7XG4gICAgICAgICAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhc2tUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHRhc2tDb2xvcilcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRGV0YWlscylcbiAgICBcbiAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFzaylcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkZWxCdG4pXG4gICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZXRUb2RvSWQoaSlcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1jYXJkXCIsIGkpXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZShcInRvZG9cIiwgaSk7XG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICB0YXNrQ29sb3Iuc2V0QXR0cmlidXRlKFwidGFza0NvbG9yXCIsIGkpXG4gICAgXG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlRpdGxlfWA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EZXNjcmlwdGlvbn1gO1xuICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3VzZXJEYXRhW2dldFByb2plY3RJZCgpXS50b2RvTGlzdFtpXS5EdWVEYXRlfWA7XG4gICAgICAgICAgICB0YXNrQ29sb3Iuc3R5bGUuYm9yZGVyTGVmdCA9IGAxMHB4IHNvbGlkICR7dXNlckRhdGFbZ2V0UHJvamVjdElkKCldLnRvZG9MaXN0W2ldLlByaW9yaXR5fWA7XG4gICAgICAgICAgIFxuICAgIFxuICAgIFxuICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRvZG9cIik7XG4gICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtdG9kb1wiKTtcbiAgICAgICAgICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgICAgICAgICAgdGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQodGFza0NvbG9yKVxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKVxuICAgIFxuICAgIFxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZCh0YXNrKVxuICAgICAgICAgICAgdG9kby5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGVkaXRCdG4pXG4gICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlbEJ0bilcbiAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVNob3dGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdXBkYXRlXCIpO1xuXG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuVGl0bGVVcGRhdGVcIik7XG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRGVzY3JpcHRpb25VcGRhdGVcIik7XG4gICAgLy8gY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRGF0ZVVwZGF0ZVwiKTtcbiAgICAvLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXVwZGF0ZVwiKTtcblxuICAgIHJldHVybiBmb3JtXG5cblxufSIsIlxuaW1wb3J0IFRvZG9VcGRhdGVTdWJtaXQgZnJvbSBcIi4vdXBkYXRlLXRvZG8tc3VibWl0XCI7XG5pbXBvcnQgRWRpdFRvZG8gZnJvbSBcIi4vdG9kby1lZGl0XCI7XG5pbXBvcnQgRGVsVG9kbyBmcm9tIFwiLi90b2RvLWRlbGV0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVUb2RvRm9ybSgpIHtcbiAgICAgICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS11cGRhdGVcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidG9kby11cGRhdGUtZm9ybVwiKVxuXG4gICAgY29uc3QgaW5wdXRBcnJheSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiVGl0bGVVcGRhdGVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInRpdGxlXCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlRpdGxlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25VcGRhdGVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZVVwZGF0ZVwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRhdGVcIlxuICAgICAgICB9LFxuICAgIF1cblxuICAgICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgIFxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXRBcnJheVtpXS5sYWJlbClcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0QXJyYXlbaV0ubGFiZWwpXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgIFxuXG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gaW5wdXRBcnJheVtpXS50aXRsZVxuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0QXJyYXlbaV0udGl0bGVcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpbnB1dEFycmF5W2ldLnRpdGxlXG4gICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpbnB1dEFycmF5W2ldLmxhYmVsKVxuICAgICAgXG5cblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0QXJyYXlbaV0udHlwZSlcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBpbnB1dEFycmF5W2ldLnR5cGUpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRBcnJheVtpXS50eXBlKVxuICAgICBcblxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dEFycmF5W2ldLnBsYWNlaG9sZGVyKVxuICAgICAgIFxuICAgIFxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgIH1cblxuICAgXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidXBkYXRlLXRvZG9cIilcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBcbiAgICAgICAgVG9kb1VwZGF0ZVN1Ym1pdCgpXG4gICAgICAgIEVkaXRUb2RvKClcbiAgICAgICAgRGVsVG9kbygpXG4gICAgICAgIFxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWZvcm1cIilcbiAgICB9KVxuXG4gICAgXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgY29uc3QgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGxhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCJcbiAgICBpbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiUHJpb3JpdHlVcGRhdGVcIilcblxuICAgIC8vIGNob29zZXMgZm9yIHByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JpdHlBcnIgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcImdyZWVuXCIsXG4gICAgICAgICAgICB0ZXh0OiBcImxvd1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIHRleHQ6IFwibWVkaXVtXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlOiBcInJlZFwiLFxuICAgICAgICAgICAgdGV4dDogXCJoaWdoXCIsXG4gICAgICAgIH0sXG4gICAgXTtcblxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyW2ldLnZhbHVlO1xuICAgICAgICBvcHRpb24udGV4dCA9IHByaW9yaXR5QXJyW2ldLnRleHQ7XG5cbiAgICAgICAgXG4gICAgICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG5cbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsUHJpb3JpdHkpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pXG5cbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxufSIsImltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL3Byb2plY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RJZCB9IGZyb20gXCIuL2dldC1zZXQtcHJvamVjdC1pZFwiO1xuaW1wb3J0IHsgZ2V0VG9kb0lkIH0gZnJvbSBcIi4vZ2V0LXNldC10b2RvLWlkXCI7XG5cbmltcG9ydCBVcGRhdGVUb2RvUmVuZGVyIGZyb20gXCIuL3VwZGF0ZS1yZW5kZXJcIjtcbmltcG9ydCBzdG9yZVByb2plY3QgZnJvbSBcIi4uL3N0b3JhZ2UtcHJvamVjdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kb1VwZGF0ZVN1Ym1pdCgpIHtcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUaXRsZVVwZGF0ZVwiKVxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkRlc2NyaXB0aW9uVXBkYXRlXCIpXG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEYXRlVXBkYXRlXCIpXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUHJpb3JpdHlVcGRhdGVcIilcbiAgIFxuICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzW2dldFByb2plY3RJZCgpXS51cGRhdGVUb2RvKGdldFRvZG9JZCgpLGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUsIGlucHV0RGF0ZS52YWx1ZSwgaW5wdXRQcmlvcml0eS52YWx1ZSlcbiAgICBcbiAgICBzdG9yZVByb2plY3QoKVxuICAgIFVwZGF0ZVRvZG9SZW5kZXIoKVxuICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBzdG9yZVByb2plY3QoKVxuXG5WaWV3KCkuUHJvamVjdEZvcm0oKTtcblZpZXcoKS5Qcm9qZWN0UmVuZGVyKCk7XG5WaWV3KCkuUHJvamVjdEV2ZW50KCk7XG5WaWV3KCkuUHJvamVjdFRpdGxlUmVuZGVyKCk7XG5WaWV3KCkuUHJvamVjdERlbGV0ZSgpO1xuVmlldygpLlRvZG9SZW5kZXIoKTtcblZpZXcoKS5Ub2RvRm9ybUJ1dHRvbigpO1xuXG5jb25zb2xlLmxvZyhWaWV3KCkuVXBkYXRlVG9kb0Zvcm0oKSlcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0QXJyYXlcIikgIT09IG51bGwpIHtcbiAgICBwcm9qZWN0TWFuYWdlci5hZGRMb2NhbFN0b3JhZ2UoXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdEFycmF5XCIpKSxcbiAgICApO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==