import CreateProject, { ProjectArrayCreate } from './project.js';
import createTodo from './todo.js';
import View from './view.js'; 

// const arr = []
const projectArr = ProjectArrayCreate('projectArray')
// function clearData(obj) {
//     obj.filter(val => val !== val)
// }

const project1 = CreateProject('project1')
const project2 = CreateProject('project2')
const project3 = CreateProject('project2')
const project4 = CreateProject('project3')


const todo1 = createTodo('todo1')
const todo2 = createTodo('todo2')


projectArr.addProject(project1)
projectArr.addProject(project2)

projectArr.projectList[0].pushTodo(todo1)
projectArr.projectList[0].pushTodo(todo2)

projectArr.projectList[1].pushTodo(todo2)


// console.log(projectArr.projectList[0].todoList)
// projectArr.removeProject(0)
projectArr.projectList[0].removeTodo(0)

console.log(projectArr.projectList)




