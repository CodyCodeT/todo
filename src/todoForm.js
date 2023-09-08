import todoFactory from "./todoFactory.js";
import todoLoader from "./todoLoader.js";

export default function toDo(projectListArray) {
  //main element creation
  const container = document.querySelector("#formcontainer");
  container.style.display = "flex";
  const title = document.createElement("input");
  const description = document.createElement("textarea");
  const priority = document.createElement("select");
  const submit = document.createElement("button");
  const todoForm = document.createElement("form");
  const projectList = document.createElement("select");
  const todos = document.querySelector("#todos");

  title.placeholder = "Title";
  description.placeholder = "Description";
  description.id = 'description'
  priority.placeholder = "Priority";
  submit.textContent = "Submit";
  submit.type = 'submit'

  //the default project is defined here

  const selectedProject = document.querySelector("#selected");
  const firstOption = document.createElement("option");
  if (selectedProject != null && selectedProject.textContent != "All") {
    firstOption.textContent = selectedProject.textContent;
    firstOption.value = selectedProject.value;
    projectList.appendChild(firstOption);
  }

  //dates are handled here

  const dueDate = document.createElement("input");
  const dateLabel = document.createElement("label");
  dueDate.id = "duedate";
  dateLabel.htmlFor = "duedate";
  dateLabel.textContent = "Due Date";
  dueDate.type = "date";
  dueDate.required = true;

  //priorities are handled here

  const highPriority = document.createElement("option");
  highPriority.textContent = "High Priority";
  highPriority.value = 2;
  const normalPriority = document.createElement("option");
  normalPriority.textContent = "Normal Priority";
  normalPriority.value = 1;
  normalPriority.selected = true;
  const lowPriority = document.createElement("option");
  lowPriority.textContent = "Low Priority";
  lowPriority.value = 0;

  for (let i = 0; i < projectListArray.length; i++) {
    var option = document.createElement("option");
    projectList.appendChild(option);
    option.text = projectListArray[i].name;
    option.value = [i];
  }

  todoForm.appendChild(title);
  todoForm.appendChild(description);
  todoForm.appendChild(dateLabel);
  todoForm.appendChild(dueDate);

  todoForm.appendChild(priority);
  priority.appendChild(highPriority);
  priority.appendChild(normalPriority);
  priority.appendChild(lowPriority);

  todoForm.appendChild(projectList);
  todoForm.appendChild(submit);
  container.appendChild(todoForm);

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const createTodo = new todoFactory(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      projectList.value,
      projectListArray
    );
    todos.innerHTML = "";
    todoLoader(projectListArray, projectList.value);
    container.style.display = "none";
    const newTodoButton = document.querySelector("#newtodo");
    const newProjectButton = document.querySelector("#newproject");
    newTodoButton.disabled = false;
    newProjectButton.disabled = false;
    container.innerHTML = "";
  });
}
