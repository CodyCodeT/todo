/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/newTodo.js":
/*!************************!*\
  !*** ./src/newTodo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTodo)
/* harmony export */ });

function newTodo(title, description, dueDate, priority, projectNo, projectListArray) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    projectListArray[`${projectNo}`].todos.push(this);
    console.table(projectListArray[`${projectNo}`].todos);
};

//need to define defaultProject at index.js and somehow get the value to have permanance


/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectCreate)
/* harmony export */ });
function projectCreate(name, projectListArray) {
    projectListArray.push({ name: name, todos: [] });
}
//here we create an array to store todo's in a project


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
/* harmony import */ var _newTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTodo.js */ "./src/newTodo.js");


function toDo(projectListArray) {
  const title = document.createElement("input");
  title.classList = "todo";
  title.placeholder = "Title";
  const container = document.querySelector("#container");
  const description = document.createElement("input");
  description.classList = "todo";
  description.placeholder = "Description";
  const dueDate = document.createElement("input");
  dueDate.classList = "todo";
  dueDate.placeholder = "Due Date";
  const priority = document.createElement("input");
  priority.classList = "todo";
  priority.placeholder = "Priority";
  const submit = document.createElement("button");
  submit.classList = "todo";
  submit.textContent = "Submit";
  const todoForm = document.createElement("form");
  todoForm.classList = "todo";
  const projectList = document.createElement("select");
  projectList.classList = "todo";

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
  todoForm.appendChild(projectList);
  todoForm.appendChild(submit);
  container.appendChild(todoForm);
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const createdTodo = new _newTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      projectList.value,
      projectListArray
    );
    container.innerHTML = ""; 
  });
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
/* harmony import */ var _todoInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoInterface.js */ "./src/todoInterface.js");
/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandler.js */ "./src/projectHandler.js");
/* harmony import */ var _newTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newTodo.js */ "./src/newTodo.js");




var projectListArray = [
    { name: 'default', todos: [] }
];
//title, description, dueDate, priority


const newTodoForm = document.querySelector('#newtodo');
newTodoForm.addEventListener('click', function() { 
    (0,_todoInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"])(projectListArray)
});
const test = (0,_projectHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"])('test', projectListArray);
console.table(projectListArray);
//Write a function that handles the creation of an array of arrays that can hold project data
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEMsc0NBQXNDLFVBQVU7QUFDaEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1ZlO0FBQ2YsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSG1DOztBQUVwQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtREFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O1VDbERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNVO0FBQ2I7O0FBRWxDO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDZEQUFJO0FBQ1IsQ0FBQztBQUNELGFBQWEsOERBQWE7QUFDMUI7QUFDQSw2RiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbmV3VG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RIYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb0ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1RvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdE5vLCBwcm9qZWN0TGlzdEFycmF5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIHByb2plY3RMaXN0QXJyYXlbYCR7cHJvamVjdE5vfWBdLnRvZG9zLnB1c2godGhpcyk7XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdEFycmF5W2Ake3Byb2plY3ROb31gXS50b2Rvcyk7XG59O1xuXG4vL25lZWQgdG8gZGVmaW5lIGRlZmF1bHRQcm9qZWN0IGF0IGluZGV4LmpzIGFuZCBzb21laG93IGdldCB0aGUgdmFsdWUgdG8gaGF2ZSBwZXJtYW5hbmNlXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0Q3JlYXRlKG5hbWUsIHByb2plY3RMaXN0QXJyYXkpIHtcbiAgICBwcm9qZWN0TGlzdEFycmF5LnB1c2goeyBuYW1lOiBuYW1lLCB0b2RvczogW10gfSk7XG59XG4vL2hlcmUgd2UgY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIHRvZG8ncyBpbiBhIHByb2plY3RcbiIsImltcG9ydCBuZXdUb2RvIGZyb20gXCIuL25ld1RvZG8uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Ebyhwcm9qZWN0TGlzdEFycmF5KSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QgPSBcInRvZG9cIjtcbiAgdGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJ0b2RvXCI7XG4gIGRlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlLmNsYXNzTGlzdCA9IFwidG9kb1wiO1xuICBkdWVEYXRlLnBsYWNlaG9sZGVyID0gXCJEdWUgRGF0ZVwiO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0ID0gXCJ0b2RvXCI7XG4gIHByaW9yaXR5LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiO1xuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQuY2xhc3NMaXN0ID0gXCJ0b2RvXCI7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIHRvZG9Gb3JtLmNsYXNzTGlzdCA9IFwidG9kb1wiO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHByb2plY3RMaXN0LmNsYXNzTGlzdCA9IFwidG9kb1wiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgb3B0aW9uLnRleHQgPSBwcm9qZWN0TGlzdEFycmF5W2ldLm5hbWU7XG4gICAgb3B0aW9uLnZhbHVlID0gW2ldO1xuICB9XG5cbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcbiAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjcmVhdGVkVG9kbyA9IG5ldyBuZXdUb2RvKFxuICAgICAgdGl0bGUudmFsdWUsXG4gICAgICBkZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICBwcmlvcml0eS52YWx1ZSxcbiAgICAgIHByb2plY3RMaXN0LnZhbHVlLFxuICAgICAgcHJvamVjdExpc3RBcnJheVxuICAgICk7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IFxuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvRG8gZnJvbSAnLi90b2RvSW50ZXJmYWNlLmpzJ1xuaW1wb3J0IHByb2plY3RDcmVhdGUgZnJvbSAnLi9wcm9qZWN0SGFuZGxlci5qcydcbmltcG9ydCBuZXdUb2RvIGZyb20gJy4vbmV3VG9kby5qcydcblxudmFyIHByb2plY3RMaXN0QXJyYXkgPSBbXG4gICAgeyBuYW1lOiAnZGVmYXVsdCcsIHRvZG9zOiBbXSB9XG5dO1xuLy90aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XG5cblxuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3dG9kbycpO1xubmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgXG4gICAgdG9Ebyhwcm9qZWN0TGlzdEFycmF5KVxufSk7XG5jb25zdCB0ZXN0ID0gcHJvamVjdENyZWF0ZSgndGVzdCcsIHByb2plY3RMaXN0QXJyYXkpO1xuY29uc29sZS50YWJsZShwcm9qZWN0TGlzdEFycmF5KTtcbi8vV3JpdGUgYSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGNyZWF0aW9uIG9mIGFuIGFycmF5IG9mIGFycmF5cyB0aGF0IGNhbiBob2xkIHByb2plY3QgZGF0YSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==