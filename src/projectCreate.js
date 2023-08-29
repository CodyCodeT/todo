export default function projectCreate(name, projectListArray) {
    projectListArray.push({ name: name, todos: [] });
    console.table(projectListArray);
}
//here we create an array to store todo's in a project
