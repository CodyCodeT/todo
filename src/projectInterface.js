import projectCreate from "./projectCreate";
import sidebarInterface from "./sidebarInterface";

export default function projectInterface(projectListArray) {
  const container = document.querySelector("#formcontainer");
  const form = document.createElement("form");
  const projectName = document.createElement("input");
  const submit = document.createElement("button");
  const sidebar = document.querySelector('#sidebar')
  
  container.style.display = 'flex'
  
  submit.textContent = "Submit";
  projectName.placeholder = "New Project Name";
  projectName.maxLength = 15
  
  container.appendChild(form);
  form.appendChild(projectName);
  form.appendChild(submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    projectCreate(projectName.value, projectListArray);
    const newProjectButton = document.querySelector('#newproject')
    const newTodoButton = document.querySelector('#newtodo')
    newProjectButton.disabled = false
    newTodoButton.disabled = false
    container.style.display = 'none'
    container.innerHTML = ''
    sidebar.innerHTML = ''
    sidebarInterface(projectListArray);
  });
}
