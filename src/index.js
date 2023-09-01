import initialize from "./initialize.js";
import toDo from "./todoInterface.js";
import projectInterface from "./projectInterface.js";
import css from "./style.css";

var projectListArray = [{ name: "default", todos: [] }];
//title, description, dueDate, priority

initialize(projectListArray);

const newTodoForm = document.querySelector("#newtodo");
newTodoForm.addEventListener("click", function () {
  toDo(projectListArray);
  newTodoForm.disabled = true
  newProject.disabled = true
});
const newProject = document.querySelector("#newproject");
newProject.addEventListener("click", function () {
  projectInterface(projectListArray);
  newTodoForm.disabled = true
  newProject.disabled = true
});
