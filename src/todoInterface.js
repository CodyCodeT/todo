import newTodo from "./newTodo.js";

export default function toDo(projectListArray) {
  const title = document.createElement("input");
  title.classList = "todo";
  title.placeholder = "Title";
  const container = document.querySelector("#container");
  const description = document.createElement("input");
  description.classList = "todo";
  description.placeholder = "Description";
  const dueDate = document.createElement("input");
  dueDate.classList = "todo";
  dueDate.placeholder = "Due Date";
  const priority = document.createElement("input");
  priority.classList = "todo";
  priority.placeholder = "Priority";
  const submit = document.createElement("button");
  submit.classList = "todo";
  submit.textContent = "Submit";
  const todoForm = document.createElement("form");
  todoForm.classList = "todo";
  const projectList = document.createElement("select");
  projectList.classList = "todo";

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
    const createdTodo = new newTodo(
      title.value,
      description.value,
      dueDate.value,
      priority.value,
      projectList.value,
      projectListArray
    );
    container.innerHTML = ""; 
  });
}
