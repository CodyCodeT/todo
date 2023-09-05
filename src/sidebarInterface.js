import todoLoader from "./todoLoader";
import displayAll from "./displayAll";

export default function sidebarInterface(projectListArray) {
  const sidebar = document.querySelector("#sidebar");
  const showAll = document.createElement('button')
  const todos = document.querySelector('#todos')
  showAll.textContent = 'All'
  showAll.classList = 'sidebarelement'

  sidebar.appendChild(showAll)

//create elements for the projects in the sidebar
let previouslySelected = null

  for (let i = 0; i < projectListArray.length; i++) {
    const element = document.createElement("button");
    element.addEventListener("click", (e) => {
      todos.innerHTML = ''
      todoLoader(projectListArray, i)

      element.value = i

      e.target.id = 'selected'
      if (showAll.id === 'selected') {
        previouslySelected = showAll;
      }
      
      if (previouslySelected) {
        previouslySelected.removeAttribute('id')
      }

      previouslySelected = e.target

    });
    showAll.addEventListener('click', (e) => {
      displayAll(projectListArray);
      e.target.id = 'selected'
      // previouslySelected = e.target
      if (previouslySelected) {
        previouslySelected.removeAttribute('id')
      }
    }) 


    element.textContent = `${projectListArray[i].name}`;
    element.classList = "sidebarelement";
    sidebar.appendChild(element);
  }
}
