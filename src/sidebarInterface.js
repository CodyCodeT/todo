import todoLoader from "./todoLoader";
import displayAll from "./displayAll";

export default function sidebarInterface(projectListArray) {
  const sidebar = document.querySelector("#sidebar");
  const showAll = document.createElement('button')
  const todos = document.querySelector('#todos')
  showAll.textContent = 'All'
  showAll.classList = 'sidebarelement'
  showAll.addEventListener('click', () => {
    displayAll(projectListArray);
  }) 
  sidebar.appendChild(showAll)

  for (let i = 0; i < projectListArray.length; i++) {
    const element = document.createElement("button");
    element.addEventListener("click", () => {
      todos.innerHTML = ''
      todoLoader(projectListArray, i)
      
    });


    element.textContent = `${projectListArray[i].name}`;
    element.classList = "sidebarelement";
    sidebar.appendChild(element);
  }
}
