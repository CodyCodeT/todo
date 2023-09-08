import todoSorter from "./todoSorter";
import displayAll from "./displayAll";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";
export default function todoLoader(projectListArray, i) {
  const todos = document.querySelector("#todos");
  const selected = document.querySelector("#selected");
  

  todoSorter(projectListArray);

  for (let j = 0; j < projectListArray[i].todos.length; j++) {
    const todoBox = document.createElement("div");
    todoBox.classList = "todobox";
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const deleteTodo = document.createElement("button");

    //handle date distance in the creation of the todo elements that way the today date is still accessible in the array

    const due = new Date(projectListArray[i].todos[j].dueDate);
    const today = new Date()
    const dueDate = document.createElement('p')
    dueDate.textContent = `Due on ${format(due, 'MMM-d-yy')} ${formatDistance(today, due)}`


    deleteTodo.textContent = "Delete";
    title.textContent = `${projectListArray[i].todos[j].title}`;
    description.textContent = `${projectListArray[i].todos[j].description}`;

    deleteTodo.addEventListener("click", () => {
      projectListArray[i].todos.splice(j, 1);
      todos.innerHTML = "";
      if (selected != null && selected.textContent === "All") {
        displayAll(projectListArray);
      } else {
        todoLoader(projectListArray, i);
      }
    });

    todos.appendChild(todoBox);
    todoBox.appendChild(title);
    todoBox.appendChild(description);
    todoBox.appendChild(dueDate);
    todoBox.appendChild(deleteTodo);
  }
}
