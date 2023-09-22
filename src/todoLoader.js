import todoSorter from "./todoSorter";
import displayAll from "./displayAll";
import editTodo from "./editTodo";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";
import descriptionView from "./descriptionView";

export default function todoLoader(projectListArray, i) {
  const todos = document.querySelector("#todos");
  const selected = document.querySelector("#selected");

  todoSorter(projectListArray);

  for (let j = 0; j < projectListArray[i].todos.length; j++) {
    const todoBox = document.createElement("div");
    todoBox.classList = "todobox";
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const buttonsRight = document.createElement('div');
    
    const details = document.createElement("button");
    details.classList = 'buttonsright'
    details.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
    const editButton = document.createElement("button");
    editButton.classList = 'buttonsright'
    editButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>';
    const deleteButton = document.createElement("button");
    deleteButton.classList = 'buttonsright'
    deleteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';

    //handle date distance in the creation of the todo elements that way the today date is still accessible in the array

    const due = new Date(projectListArray[i].todos[j].dueDate);
    const today = new Date();
    const dueDate = document.createElement("p");
    dueDate.textContent = `Due on ${format(due, "MMM-d-yy")} ${formatDistance(
      today,
      due
    )}`;

    title.textContent = `${projectListArray[i].todos[j].title}`;
    description.textContent = `${projectListArray[i].todos[j].description}`;

    editButton.addEventListener("click", (e) => {
      editTodo(projectListArray, i, j);
    });

    deleteButton.addEventListener("click", () => {
      projectListArray[i].todos.splice(j, 1);
      todos.innerHTML = "";
      if (selected != null && selected.textContent === "All") {
        displayAll(projectListArray);
      } else {
        todoLoader(projectListArray, i);
      }
    });
    details.addEventListener("click", function (event) {
      descriptionView(projectListArray, i, j);
    });
    todos.appendChild(todoBox);
    todoBox.appendChild(title);
    todoBox.appendChild(dueDate);
    todoBox.appendChild(buttonsRight);
    buttonsRight.appendChild(details);
    buttonsRight.appendChild(editButton);
    buttonsRight.appendChild(deleteButton);
  }
}
