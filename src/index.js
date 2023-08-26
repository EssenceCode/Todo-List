import Project, { ProjectArrayCreate } from './project.js';
import Todo from './todo.js';
import View from './view.js'; 

const inputId = document.getElementById('projectId');


const projectForm = document.getElementById('project-form');
const projectBtn = document.querySelector('.project-button');
const TodoForm = document.getElementById('todo-form');
const todoBtn = document.querySelector('.todo-button');

const projectArray = ProjectArrayCreate('projectArray')

let currentId;
projectBtn.addEventListener('click', (e) => {
    const project = Project(projectForm.value);
    currentId = project.Id
    projectArray.addProject(project);
    // inputId = project
    View().CreateProjectButton(project, currentId)
    console.log(projectArray.projectList)
    // console.log(`CurrentID:${currentId}`)
   

});

todoBtn.addEventListener('click', (e) => {
    const todo = Todo(TodoForm.value);
    projectArray.projectList[0].addTodo(todo)
    View().CreateDropMenu(projectArray)
//    console.log(projectArray.projectList) 
})



