import sidebarInterface from "./sidebarInterface";

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
}
