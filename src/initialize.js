import sidebarInterface from "./sidebarInterface";
import todoLoader from "./todoLoader";
import projectInterface from "./projectInterface";
import toDo from "./todoForm";

export default function initialize(projectListArray) {
  const container = document.querySelector("#container");
  const sidebar = document.createElement("div");
  const newTodo = document.createElement("button");
  const todos = document.createElement("div");
  const newProject = document.createElement("button");
  todos.id = "todos";
  newTodo.id = "newtodo";
  sidebar.id = "sidebar";
  newProject.id = "newproject";
  newTodo.textContent = "+";
  newProject.textContent = "New Project +";
  newTodo.title = "Add a new Todo";
  container.appendChild(todos);
  container.appendChild(newTodo);
  container.appendChild(sidebar);
  container.appendChild(newProject);
  sidebarInterface(projectListArray);
  todos.innerHTML = ''
  todoLoader(projectListArray, 0);
  
  
  const newProjectButton = document.querySelector("#newproject");
newProjectButton.addEventListener("click", function () {
  projectInterface(projectListArray);
  newTodoForm.disabled = true
  newProjectButton.disabled = true
  document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && newProject.disabled == true) {
    const form = document.querySelector('#formcontainer')
    form.innerHTML = ''
    form.style.display = 'none'
    newTodoForm.disabled = false
    newProjectButton.disabled = false
  } else { 
    return
  }
})
})
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

}
