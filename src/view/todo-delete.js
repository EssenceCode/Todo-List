import { setTodoId } from "./get-set-todo-id";
import { projectManager } from "../view";
import { getProjectId } from "./get-set-project-id"
import { getTodoId } from "./get-set-todo-id";

import TodoRender from "./todo-render";
import EditTodo from "./todo-edit";

import storeProject from "../storage-project";


export default function DelTodo() {
    const button = document.querySelectorAll('.del-todo');
    
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute('todo');
        setTodoId(id)
        projectManager.Projects[getProjectId()].removeTodo(getTodoId())
        parent.remove()
        console.log(projectManager.Projects[getProjectId()].todoList)
        storeProject()
        TodoRender() 
        EditTodo()
        DelTodo()
    
    }))

}