import todoLoader from "./todoLoader";

export default function editTodo(projectListArray, iIndex, jIndex) {
  const todos = document.querySelector('#todos')
  const formContainer = document.querySelector("#formcontainer");
  formContainer.style.display = "flex";

  const editForm = document.createElement("form");

  const title = document.createElement("input");
   title.value = `${projectListArray[iIndex].todos[jIndex].title}`;
  
  const description = document.createElement("input");
   description.value = `${projectListArray[iIndex].todos[jIndex].description}`;

  const dateDue = document.createElement("input");
   dateDue.type = "date";
   dateDue.value = `${projectListArray[iIndex].todos[jIndex].dueDate}`;
   dateDue.required = true

  const submit = document.createElement("button");
   submit.textContent = 'Submit'
   submit.type = "submit";
  
  

  formContainer.appendChild(editForm);
   editForm.appendChild(title);
   editForm.appendChild(description);
   editForm.appendChild(dateDue);
   editForm.appendChild(submit);

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    projectListArray[iIndex].todos[jIndex].title = title.value;
    projectListArray[iIndex].todos[jIndex].description = description.value;
    projectListArray[iIndex].todos[jIndex].dueDate = dateDue.value;

    formContainer.style.display = 'none'
    formContainer.innerHTML = ''
    todos.innerHTML = ''
    todoLoader(projectListArray, iIndex)
  });
  document.addEventListener('keydown', function cancel(e) {
    if (e.key === 'Escape') {
        formContainer.style.display = 'none'
        formContainer.innerHTML = 'none'
        document.removeEventListener('keydown', cancel)
    }
  })
}
