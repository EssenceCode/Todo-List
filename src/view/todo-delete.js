import { setTodoId , getTodoId } from "./get-set-todo-id";
import { projectManager } from "../project";
import { getProjectId } from "./get-set-project-id"
import storeProject from "../storage-project";
import TodoRender from "./todo-render";





export default function DelTodo() {
    const button = document.querySelectorAll(".del-todo");
    
    button.forEach(btn => btn.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        const id = parent.getAttribute("todo");
        setTodoId(id)
        console.log(getTodoId())
        console.log(projectManager.Projects[getProjectId()].todoList)
        projectManager.Projects[getProjectId()].removeTodo(getTodoId())
        parent.remove()
      
        storeProject()
       
        TodoRender()
      
    
    }))

}