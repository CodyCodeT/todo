import todoFactory from "./todoFactory.js";
import todoLoader from "./todoLoader.js";

export default function toDo(projectListArray) {
  const title = document.createElement("input");
  const container = document.querySelector("#formcontainer");
  const description = document.createElement("input");
  const dueDate = document.createElement("input");
  const priority = document.createElement("select");
  const submit = document.createElement("button");
  const todoForm = document.createElement("form");
  const projectList = document.createElement("select");
  const todos = document.querySelector("#todos");

  container.style.display = "flex";

  title.placeholder = "Title";
  description.placeholder = "Description";
  dueDate.placeholder = "Due Date";
  priority.placeholder = "Priority";
  submit.textContent = "Submit";

  const selectedProject = document.querySelector("#selected");
  const firstOption = document.createElement("option");
  if (selectedProject != null && selectedProject.textContent != 'All') {
    firstOption.textContent = selectedProject.textContent;
    firstOption.value = selectedProject.value;
    projectList.appendChild(firstOption);
  }

//priorities are handled here

  const highPriority = document.createElement("option");
  highPriority.textContent = "High Priority";
  highPriority.value = 2
  const normalPriority = document.createElement("option");
  normalPriority.textContent = "Normal Priority";
  normalPriority.value = 1
  normalPriority.selected = true
  const lowPriority = document.createElement("option");
  lowPriority.textContent = "Low Priority";
  lowPriority.value = 0

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
  priority.appendChild(highPriority);
  priority.appendChild(normalPriority);
  priority.appendChild(lowPriority);

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

    document.addEventListener('keydown', (e) => {
      console.log(e.key);
      if (e.key === 'Escape' && newTodoButton.disabled == true) {
        todoLoader(projectListArray, selectedProject)
        console.log('object');
      } else { 
        return
      }
    })
    
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

