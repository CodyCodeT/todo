import initialize from "./initialize.js";
import todoFactory from "./todoFactory.js";
import css from "./style.css";

var projectListArray = [{ name: "default", todos: [] }];

//For developing CSS
for (let i = 0; i < 5; i++) {
  const todo = new todoFactory('test', `${i}`, new Date(), 1, 0, projectListArray)
}


initialize(projectListArray);