import todoLoader from "./todoLoader";
import displayAll from "./displayAll";

export default function sidebarInterface(projectListArray) {
  const sidebar = document.querySelector("#sidebar");
  sidebar.innerHTML = "";
  const showAll = document.createElement("button");
  const todos = document.querySelector("#todos");
  showAll.textContent = "All";
  showAll.classList = "sidebarelement";

  sidebar.appendChild(showAll);

  //create elements for the projects in the sidebar
  let previouslySelected = null;

  for (let i = 0; i < projectListArray.length; i++) {
    const elementContainer = document.createElement("div");
    const element = document.createElement("button");

    //loads in the selected project list

    element.addEventListener("click", (e) => {
      todos.innerHTML = "";
      todoLoader(projectListArray, i);

      element.value = i;

      e.target.id = "selected";
      if (showAll.id === "selected") {
        previouslySelected = showAll;
      }

      if (previouslySelected) {
        previouslySelected.removeAttribute("id");
      }

      previouslySelected = e.target;
    });
    //function to show all the todos regardless of project
    showAll.addEventListener("click", (e) => {
      displayAll(projectListArray);
      e.target.id = "selected";
      if (previouslySelected) {
        previouslySelected.removeAttribute("id");
      }
    });

    element.textContent = `${projectListArray[i].name}`;
    element.classList = "sidebarelement";
    elementContainer.classList = 'sidebardiv'
    sidebar.appendChild(elementContainer);
    elementContainer.appendChild(element);
    //delete button for each sidebar element that isn't default
    if (i > 0) {
      const deleteElement = document.createElement("button");
      elementContainer.appendChild(deleteElement);
      deleteElement.textContent = "Delete";
      deleteElement.addEventListener("click", (e) => {
        projectListArray.splice(i, 1);
        sidebarInterface(projectListArray);
      });
    }
  }
}
