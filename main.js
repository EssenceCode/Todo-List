/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

function CreateProjects(title) { 
    const todoArray = [];

    const Title = title 
 
    const todoList = todoArray
  
   
    return Object.assign(
        {},
        { Title },
        { todoList },
        PushTodo(todoArray),
        DeleteTodo(todoList),
      
        )
}

function ProjectArrayCreate(title) {
    const projectArray = []
    const projectList = projectArray

    return Object.assign(
        {},
        {title},
        { projectList },
        PushProject(projectArray),
        DeleteProject(projectArray)
    )
    
}


function PushProject(obj) {
    return {
        addProject: (arr) => obj.push(arr)
    }
}

function DeleteProject(obj) {
    return {
        removeProject: (index) => obj.splice(index, 1)
    }
}

function PushTodo(obj) {
    return {
        pushTodo: (arr) => obj.push(arr),
        
    }
}

function DeleteTodo(obj) {
    return {
        removeTodo: (index) => obj.splice(index, 1)
    }
}






/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodo)
/* harmony export */ });
function createTodo(title, description, dueDate, priority, note) {
    let Title = title;
    let Description = description;
    let DueDate = dueDate;
    let Priority = priority;
    let Note = note;

    return {
        Title,
        Description,
        DueDate,
        Priority,
        Note,
        
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
/* harmony export */   "default": () => (/* binding */ ViewController)
/* harmony export */ });
function ViewController() {

    return {
        createProjectButton
    }
}

function createProjectButton(obj) {
    const content = document.querySelector('.content')
    const project = document.createElement('button')
    project.textContent = obj.getTitle
    
    content.appendChild(project)
    
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/view.js");


 

// const arr = []
const projectArr = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.ProjectArrayCreate)('projectArray')
// function clearData(obj) {
//     obj.filter(val => val !== val)
// }

const project1 = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])('project1')
const project2 = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])('project2')
const project3 = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])('project2')
const project4 = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])('project3')


const todo1 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])('todo1')
const todo2 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])('todo2')


projectArr.addProject(project1)
projectArr.addProject(project2)

projectArr.projectList[0].pushTodo(todo1)
projectArr.projectList[0].pushTodo(todo2)

projectArr.projectList[1].pushTodo(todo2)


// console.log(projectArr.projectList[0].todoList)
// projectArr.removeProject(0)
projectArr.projectList[0].removeTodo(0)

console.log(projectArr.projectList)





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsVUFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixTQUFTLE1BQU07QUFDZixVQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05pRTtBQUM5QjtBQUNOOztBQUU3QjtBQUNBLG1CQUFtQiwrREFBa0I7QUFDckM7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1REFBYTtBQUM5QixpQkFBaUIsdURBQWE7QUFDOUIsaUJBQWlCLHVEQUFhO0FBQzlCLGlCQUFpQix1REFBYTs7O0FBRzlCLGNBQWMsb0RBQVU7QUFDeEIsY0FBYyxvREFBVTs7O0FBR3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvamVjdHModGl0bGUpIHsgXG4gICAgY29uc3QgdG9kb0FycmF5ID0gW107XG5cbiAgICBjb25zdCBUaXRsZSA9IHRpdGxlIFxuIFxuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0FycmF5XG4gIFxuICAgXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7IFRpdGxlIH0sXG4gICAgICAgIHsgdG9kb0xpc3QgfSxcbiAgICAgICAgUHVzaFRvZG8odG9kb0FycmF5KSxcbiAgICAgICAgRGVsZXRlVG9kbyh0b2RvTGlzdCksXG4gICAgICBcbiAgICAgICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdEFycmF5Q3JlYXRlKHRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW11cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RBcnJheVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7dGl0bGV9LFxuICAgICAgICB7IHByb2plY3RMaXN0IH0sXG4gICAgICAgIFB1c2hQcm9qZWN0KHByb2plY3RBcnJheSksXG4gICAgICAgIERlbGV0ZVByb2plY3QocHJvamVjdEFycmF5KVxuICAgIClcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBQdXNoUHJvamVjdChvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRQcm9qZWN0OiAoYXJyKSA9PiBvYmoucHVzaChhcnIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBEZWxldGVQcm9qZWN0KG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVByb2plY3Q6IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFB1c2hUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHB1c2hUb2RvOiAoYXJyKSA9PiBvYmoucHVzaChhcnIpLFxuICAgICAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIERlbGV0ZVRvZG8ob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlVG9kbzogKGluZGV4KSA9PiBvYmouc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn1cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlKSB7XG4gICAgbGV0IFRpdGxlID0gdGl0bGU7XG4gICAgbGV0IERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgbGV0IER1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGxldCBQcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGxldCBOb3RlID0gbm90ZTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIFRpdGxlLFxuICAgICAgICBEZXNjcmlwdGlvbixcbiAgICAgICAgRHVlRGF0ZSxcbiAgICAgICAgUHJpb3JpdHksXG4gICAgICAgIE5vdGUsXG4gICAgICAgIFxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdDb250cm9sbGVyKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEJ1dHRvbihvYmopIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBvYmouZ2V0VGl0bGVcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3QpXG4gICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ3JlYXRlUHJvamVjdCwgeyBQcm9qZWN0QXJyYXlDcmVhdGUgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IGNyZWF0ZVRvZG8gZnJvbSAnLi90b2RvLmpzJztcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldy5qcyc7IFxuXG4vLyBjb25zdCBhcnIgPSBbXVxuY29uc3QgcHJvamVjdEFyciA9IFByb2plY3RBcnJheUNyZWF0ZSgncHJvamVjdEFycmF5Jylcbi8vIGZ1bmN0aW9uIGNsZWFyRGF0YShvYmopIHtcbi8vICAgICBvYmouZmlsdGVyKHZhbCA9PiB2YWwgIT09IHZhbClcbi8vIH1cblxuY29uc3QgcHJvamVjdDEgPSBDcmVhdGVQcm9qZWN0KCdwcm9qZWN0MScpXG5jb25zdCBwcm9qZWN0MiA9IENyZWF0ZVByb2plY3QoJ3Byb2plY3QyJylcbmNvbnN0IHByb2plY3QzID0gQ3JlYXRlUHJvamVjdCgncHJvamVjdDInKVxuY29uc3QgcHJvamVjdDQgPSBDcmVhdGVQcm9qZWN0KCdwcm9qZWN0MycpXG5cblxuY29uc3QgdG9kbzEgPSBjcmVhdGVUb2RvKCd0b2RvMScpXG5jb25zdCB0b2RvMiA9IGNyZWF0ZVRvZG8oJ3RvZG8yJylcblxuXG5wcm9qZWN0QXJyLmFkZFByb2plY3QocHJvamVjdDEpXG5wcm9qZWN0QXJyLmFkZFByb2plY3QocHJvamVjdDIpXG5cbnByb2plY3RBcnIucHJvamVjdExpc3RbMF0ucHVzaFRvZG8odG9kbzEpXG5wcm9qZWN0QXJyLnByb2plY3RMaXN0WzBdLnB1c2hUb2RvKHRvZG8yKVxuXG5wcm9qZWN0QXJyLnByb2plY3RMaXN0WzFdLnB1c2hUb2RvKHRvZG8yKVxuXG5cbi8vIGNvbnNvbGUubG9nKHByb2plY3RBcnIucHJvamVjdExpc3RbMF0udG9kb0xpc3QpXG4vLyBwcm9qZWN0QXJyLnJlbW92ZVByb2plY3QoMClcbnByb2plY3RBcnIucHJvamVjdExpc3RbMF0ucmVtb3ZlVG9kbygwKVxuXG5jb25zb2xlLmxvZyhwcm9qZWN0QXJyLnByb2plY3RMaXN0KVxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=