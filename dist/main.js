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

function CreateProjects(title, id =  crypto.randomUUID()) { 
    const todoArray = [];

    const Title = title 
    const Id = id
 
    const todoList = todoArray  
   
    return Object.assign(
        {},
        { Id },
        { Title },
        { todoList },
        PushTodo(todoArray),
        DeleteTodo(todoList),
      
        )
}



function ProjectArrayCreate(title) {
    const projectArray = []
    let currentId;
    const projectList = projectArray

    return Object.assign(
        {},
        {title},
        { projectList },
        { currentId },
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
        addTodo: (arr) => obj.push(arr),
        
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
function createTodo(title, description, dueDate, priority ) {
    let Title = title;
    let Description = description;
    let DueDate = dueDate;
    let Priority = priority;
    // let Note = note;

    return {
        Title,
        Description,
        DueDate,
        Priority,
        // Note,
        
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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



function ViewController() {

    return {
      
        CreateProjectButton,
        CreateDropMenu
      
        
        
    }
}


function CreateProjectButton(obj, id) {
    const content = document.querySelector('.sidebar')
    const project = document.createElement('button')
    project.classList.add('project')
    project.textContent = obj.Title
    
    project.addEventListener('click', (e) => {
        console.log(id)
    })

    content.appendChild(project)
    
}

function CreateDropMenu(obj) {
    const content = document.querySelector('.form-container')
    const dropMenu = document.getElementById("lang");
    for (let i = 0; i <= obj.projectList.length; i++) {
        let option = new Option()
        option.value = obj.projectList[i].Id
        option.text = obj.projectList[i].Title
        console.log(obj.projectList[i].Title)
       
        dropMenu.options.add(option)
        
    }
    content.appendChild(dropMenu)
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


 

const inputId = document.getElementById('projectId');


const projectForm = document.getElementById('project-form');
const projectBtn = document.querySelector('.project-button');
const TodoForm = document.getElementById('todo-form');
const todoBtn = document.querySelector('.todo-button');

const projectArray = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.ProjectArrayCreate)('projectArray')

let currentId;
projectBtn.addEventListener('click', (e) => {
    const project = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectForm.value);
    currentId = project.Id
    projectArray.addProject(project);
    // inputId = project
    (0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])().CreateProjectButton(project, currentId)
    console.log(projectArray.projectList)
    // console.log(`CurrentID:${currentId}`)
   

});

todoBtn.addEventListener('click', (e) => {
    const todo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TodoForm.value);
    projectArray.projectList[0].addTodo(todo)
    ;(0,_view_js__WEBPACK_IMPORTED_MODULE_2__["default"])().CreateDropMenu(projectArray)
//    console.log(projectArray.projectList) 
})




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ2U7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsVUFBVSxJQUFJO0FBQ2QsVUFBVSxPQUFPO0FBQ2pCLFVBQVUsVUFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsU0FBUyxNQUFNO0FBQ2YsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsV0FBVztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmlFO0FBQ3BDOztBQUVkOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2QkFBNkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUM5QjtBQUNBOztBQUU3Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLCtEQUFrQjs7QUFFdkM7QUFDQTtBQUNBLG9CQUFvQix1REFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFJO0FBQ1I7QUFDQSxnQ0FBZ0MsVUFBVTtBQUMxQzs7QUFFQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLG9EQUFJO0FBQ3JCO0FBQ0EsSUFBSSxxREFBSTtBQUNSO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2plY3RzKHRpdGxlLCBpZCA9ICBjcnlwdG8ucmFuZG9tVVVJRCgpKSB7IFxuICAgIGNvbnN0IHRvZG9BcnJheSA9IFtdO1xuXG4gICAgY29uc3QgVGl0bGUgPSB0aXRsZSBcbiAgICBjb25zdCBJZCA9IGlkXG4gXG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2RvQXJyYXkgIFxuICAgXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7IElkIH0sXG4gICAgICAgIHsgVGl0bGUgfSxcbiAgICAgICAgeyB0b2RvTGlzdCB9LFxuICAgICAgICBQdXNoVG9kbyh0b2RvQXJyYXkpLFxuICAgICAgICBEZWxldGVUb2RvKHRvZG9MaXN0KSxcbiAgICAgIFxuICAgICAgICApXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdEFycmF5Q3JlYXRlKHRpdGxlKSB7XG4gICAgY29uc3QgcHJvamVjdEFycmF5ID0gW11cbiAgICBsZXQgY3VycmVudElkO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdEFycmF5XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHt0aXRsZX0sXG4gICAgICAgIHsgcHJvamVjdExpc3QgfSxcbiAgICAgICAgeyBjdXJyZW50SWQgfSxcbiAgICAgICAgUHVzaFByb2plY3QocHJvamVjdEFycmF5KSxcbiAgICAgICAgRGVsZXRlUHJvamVjdChwcm9qZWN0QXJyYXkpXG4gICAgKVxuICAgIFxufVxuXG5cbmZ1bmN0aW9uIFB1c2hQcm9qZWN0KG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFByb2plY3Q6IChhcnIpID0+IG9iai5wdXNoKGFycilcbiAgICB9XG59XG5cbmZ1bmN0aW9uIERlbGV0ZVByb2plY3Qob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlUHJvamVjdDogKGluZGV4KSA9PiBvYmouc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gUHVzaFRvZG8ob2JqKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkVG9kbzogKGFycikgPT4gb2JqLnB1c2goYXJyKSxcbiAgICAgICAgXG4gICAgfVxufVxuXG5mdW5jdGlvbiBEZWxldGVUb2RvKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW92ZVRvZG86IChpbmRleCkgPT4gb2JqLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5cblxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSApIHtcbiAgICBsZXQgVGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICBsZXQgRHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgbGV0IFByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgLy8gbGV0IE5vdGUgPSBub3RlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgVGl0bGUsXG4gICAgICAgIERlc2NyaXB0aW9uLFxuICAgICAgICBEdWVEYXRlLFxuICAgICAgICBQcmlvcml0eSxcbiAgICAgICAgLy8gTm90ZSxcbiAgICAgICAgXG4gICAgfVxufVxuXG4iLCJpbXBvcnQgQ3JlYXRlUHJvamVjdCwgeyBQcm9qZWN0QXJyYXlDcmVhdGUgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld0NvbnRyb2xsZXIoKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgXG4gICAgICAgIENyZWF0ZVByb2plY3RCdXR0b24sXG4gICAgICAgIENyZWF0ZURyb3BNZW51XG4gICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBDcmVhdGVQcm9qZWN0QnV0dG9uKG9iaiwgaWQpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKVxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IG9iai5UaXRsZVxuICAgIFxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICB9KVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgIFxufVxuXG5mdW5jdGlvbiBDcmVhdGVEcm9wTWVudShvYmopIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJylcbiAgICBjb25zdCBkcm9wTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZ1wiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBvYmoucHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IG5ldyBPcHRpb24oKVxuICAgICAgICBvcHRpb24udmFsdWUgPSBvYmoucHJvamVjdExpc3RbaV0uSWRcbiAgICAgICAgb3B0aW9uLnRleHQgPSBvYmoucHJvamVjdExpc3RbaV0uVGl0bGVcbiAgICAgICAgY29uc29sZS5sb2cob2JqLnByb2plY3RMaXN0W2ldLlRpdGxlKVxuICAgICAgIFxuICAgICAgICBkcm9wTWVudS5vcHRpb25zLmFkZChvcHRpb24pXG4gICAgICAgIFxuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRyb3BNZW51KVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0LCB7IFByb2plY3RBcnJheUNyZWF0ZSB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3LmpzJzsgXG5cbmNvbnN0IGlucHV0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElkJyk7XG5cblxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9uJyk7XG5jb25zdCBUb2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcbmNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idXR0b24nKTtcblxuY29uc3QgcHJvamVjdEFycmF5ID0gUHJvamVjdEFycmF5Q3JlYXRlKCdwcm9qZWN0QXJyYXknKVxuXG5sZXQgY3VycmVudElkO1xucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QocHJvamVjdEZvcm0udmFsdWUpO1xuICAgIGN1cnJlbnRJZCA9IHByb2plY3QuSWRcbiAgICBwcm9qZWN0QXJyYXkuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAvLyBpbnB1dElkID0gcHJvamVjdFxuICAgIFZpZXcoKS5DcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3QsIGN1cnJlbnRJZClcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkucHJvamVjdExpc3QpXG4gICAgLy8gY29uc29sZS5sb2coYEN1cnJlbnRJRDoke2N1cnJlbnRJZH1gKVxuICAgXG5cbn0pO1xuXG50b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0b2RvID0gVG9kbyhUb2RvRm9ybS52YWx1ZSk7XG4gICAgcHJvamVjdEFycmF5LnByb2plY3RMaXN0WzBdLmFkZFRvZG8odG9kbylcbiAgICBWaWV3KCkuQ3JlYXRlRHJvcE1lbnUocHJvamVjdEFycmF5KVxuLy8gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5LnByb2plY3RMaXN0KSBcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=