import todoLoader from "./todoLoader";

export default function displayAll(projectListArray) {
    const todos = document.querySelector('#todos')
    todos.innerHTML = ''
    for (let i = 0; i < projectListArray.length; i++) {
            todoLoader(projectListArray, i)
    }
}//project list array stores a list of todos from the extension .todos
//I need to generate all the todos by looping through the length of the todo list
//projectListArray[i]>todos[j]>1,2,3