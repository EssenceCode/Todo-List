import { projectManager } from "../project";
import { getProjectId } from "./get-set-project-id";
import { getTodoId } from "./get-set-todo-id";

import UpdateTodoRender from "./update-render";
import storeProject from "../storage-project";



export default function TodoUpdateSubmit() {
    const inputTitle = document.getElementById("TitleUpdate")
    const inputDescription = document.getElementById("DescriptionUpdate")
    const inputDate = document.getElementById("DateUpdate")
    const inputPriority = document.getElementById("PriorityUpdate")
   
    projectManager.Projects[getProjectId()].updateTodo(getTodoId(),inputTitle.value, inputDescription.value, inputDate.value, inputPriority.value)
    
    storeProject()
    UpdateTodoRender()
   
}