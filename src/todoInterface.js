import todoFactory from "./todoFactory.js";
import todoLoader from "./todoLoader.js";

export default function toDo(projectListArray) {
  const title = document.createElement("input");
  const container = document.querySelector("#formcontainer");
  const description = document.createElement("input");
  const dueDate = document.createElement("input");
  const priority = document.createElement("input");
  const submit = document.createElement("button");
  const todoForm = document.createElement("form");
  const projectList = document.createElement("select");
  const todos = document.querySelector('#todos')

  container.style.display = "flex";

  title.placeholder = "Title";
  description.placeholder = "Description";
  dueDate.placeholder = "Due Date";
  priority.placeholder = "Priority";
  submit.textContent = "Submit";

  for (let i = 0; i < projectListArray.length; i++) {
    var option = document.createElement("option");
    projectList.appendChild(option);
    option.text = projectListArray[i].name;
    option.value = [i];
  }

  todoForm.appendChild(title);
  todoForm.appendChild(description);
  todoForm.appendChild(dueDate);
  todoForm.appendChild(priority);
  todoForm.appendChild(projectList);
  todoForm.appendChild(submit);
  container.appendChild(todoForm);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const createTodo = new todoFactory(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      projectList.value,
      projectListArray
    );
    todos.innerHTML = ''
    todoLoader(projectListArray, projectList.value)
    container.style.display = "none";
    const newTodoButton = document.querySelector("#newtodo");
    const newProjectButton = document.querySelector("#newproject");
    newTodoButton.disabled = false;
    newProjectButton.disabled = false;
    container.innerHTML = "";
  });
}
