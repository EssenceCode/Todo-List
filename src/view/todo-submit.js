import Todo from "../todo"
import { projectManager } from "../project";
import { getProjectId } from "./get-set-project-id";
import storeProject from "../storage-project";
import TodoRender from "./todo-render";




export default function TodoSubmit() {
    const title = document.getElementById("Title")
    const description = document.getElementById("Description")
    const date = document.getElementById("Date")
    const priority = document.getElementById("Priority")
    const todo = Todo(
        title.value, 
        description.value, 
        date.value, 
        priority.value, 
        );
        projectManager.Projects[getProjectId()].addTodo(todo)
        
        storeProject()
        
        TodoRender() 
   
        
      
       
}