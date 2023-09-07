import { projectManager } from "../view";
import { getProjectId } from "./get-set-project-id";
import { getTodoId } from "./get-set-todo-id";
import TodoRender from "./todo-render";
import EditTodo from "./todo-edit";
import DelTodo from "./todo-delete";
import storeProject from "../storage-project";



export default function TodoUpdateSubmit() {
    const inputTitle = document.getElementById('TitleUpdate')
    const inputDescription = document.getElementById('DescriptionUpdate')
    const inputDate = document.getElementById('DateUpdate')
    const inputPriority = document.getElementById('PriorityUpdate')
   
    projectManager.Projects[getProjectId()].todoList[getTodoId()].Title = inputTitle.value, 
    projectManager.Projects[getProjectId()].todoList[getTodoId()].Description = inputDescription.value,              
    projectManager.Projects[getProjectId()].todoList[getTodoId()].DueDate = inputDate.value,              
    projectManager.Projects[getProjectId()].todoList[getTodoId()].Priority = inputPriority.value,               
                   
    projectManager.Projects[getProjectId()].todoList
    
    storeProject()
    TodoRender() 
    EditTodo()
    DelTodo()
    
    
      
       
}