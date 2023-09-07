import Todo from "../todo"
import { projectManager } from "../view";
import { getProjectId } from "./get-set-project-id";
import storeProject from "../storage-project";
import TodoRender from "./todo-render";
import EditTodo from "./todo-edit";
import DelTodo from "./todo-delete";



export default function TodoSubmit() {
    const title = document.getElementById('Title')
    const description = document.getElementById('Description')
    const date = document.getElementById('Date')
    const priority = document.getElementById('Priority')
    const todo = Todo(
        title.value, 
        description.value, 
        date.value, 
        priority.value, 
        );
        projectManager.Projects[getProjectId()].addTodo(todo)
        console.log(todo)
        storeProject()
        // console.log(projectManager.Projects[getProjectId()].todoList)
        TodoRender() 
        EditTodo()
        DelTodo()
        
      
       
}