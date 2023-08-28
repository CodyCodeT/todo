import toDo from './todoInterface.js'
import projectCreate from './projectHandler.js'
import newTodo from './newTodo.js'

var projectListArray = [
    { name: 'default', todos: [] }
];
//title, description, dueDate, priority


const newTodoForm = document.querySelector('#newtodo');
newTodoForm.addEventListener('click', function() { 
    toDo(projectListArray)
});
const test = projectCreate('test', projectListArray);
console.table(projectListArray);
//Write a function that handles the creation of an array of arrays that can hold project data