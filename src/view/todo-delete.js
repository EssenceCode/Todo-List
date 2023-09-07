import { setTodoId } from "./get-set-todo-id";
import { projectManager } from "../view";
import { getProjectId } from "./get-set-project-id"
import { getTodoId } from "./get-set-todo-id";

import TodoRender from "./todo-render";
import EditTodo from "./todo-edit";



export default function DelTodo() {
    const button = document.querySelectorAll('.del-todo');
    
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute('todo');
        setTodoId(id)
        projectManager.Projects[getProjectId()].removeTodo(getTodoId())
        parent.remove()
       
        console.log(getTodoId())
        console.log(id)
        
        console.log(projectManager.Projects[getProjectId()].todoList)
        
        TodoRender() 
        EditTodo()
        DelTodo()

    }))

}