export default function sortTodos(projectListArray) {
    for (let i = 0; i < projectListArray.length; i++) {
        projectListArray[i].todos.sort((a, b) => b.priority - a.priority);
        
    }
}