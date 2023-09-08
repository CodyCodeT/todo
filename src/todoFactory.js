
export default function todoFactory(title, description, dueDate, priority, projectNo, projectListArray) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    projectListArray[`${projectNo}`].todos.push(this);
};

//need to define defaultProject at index.js and somehow get the value to have permanance
