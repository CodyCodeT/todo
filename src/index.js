import initialize from "./initialize.js";
import toDo from "./todoForm.js";
import projectInterface from "./projectInterface.js";
import todoFactory from "./todoFactory.js";
import css from "./style.css";

var projectListArray = [{ name: "default", todos: [] }];
//title, description, dueDate, priority
// for (let i = 0; i < 5; i++) {
//   const todo = new todoFactory('test', '', new Date(), 1, 0, projectListArray)
// }
initialize(projectListArray);

const newTodoForm = document.querySelector("#newtodo");
newTodoForm.addEventListener("click", function () {
  toDo(projectListArray);
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
  projectInterface(projectListArray);
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


