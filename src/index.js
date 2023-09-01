import Projects from './project.js';
import Todo from './todo.js';
import View from './view.js'; 
import './style.css'

const todo = Todo('todo1')

const project = Projects('project1')

project.addTodo(todo)

// console.log(project.todoList[0].Title('changetodo'))
// console.log(project.todoList[0])

View().ProjectForm()
View().ProjectRender()
View().ProjectEvent()
View().ProjectTitleRender()
View().ProjectDelete()

View().TodoRender()
View().TodoFormButton()

View().EditTodo()
View().DelTodo()
