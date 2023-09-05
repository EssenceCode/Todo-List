import Projects from './project.js';
import Todo from './todo.js';
import View from './view.js'; 
// import ProjectStorage from './storage.project.js';
import './style.css'


const todo = Todo('todo1')

const project = Projects('project1')

project.addTodo(todo)



View().ProjectForm()
View().ProjectRender()
View().ProjectEvent()
View().ProjectTitleRender()
View().ProjectDelete()

View().TodoRender()
View().TodoFormButton()

// ProjectStorage()

