import todoSorter from "./todoSorter";
import displayAll from "./displayAll";
export default function todoLoader(projectListArray, i) {
  const todos = document.querySelector("#todos");
  const selected = document.querySelector("#selected");
  

  todoSorter(projectListArray);

  for (let j = 0; j < projectListArray[i].todos.length; j++) {
    const todoBox = document.createElement("div");
    todoBox.classList = "todobox";
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const deleteTodo = document.createElement("button");

    deleteTodo.textContent = "Delete";
    title.textContent = `${projectListArray[i].todos[j].title}`;
    description.textContent = `${projectListArray[i].todos[j].description}`;
    dueDate.textContent = `${projectListArray[i].todos[j].dueDate}`;

    deleteTodo.addEventListener("click", () => {
      projectListArray[i].todos.splice(j, 1);
      todos.innerHTML = "";
      console.log(selected.textContent);
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
