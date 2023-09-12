import { projectManager } from "../project";
import { getProjectId } from "./get-set-project-id";
import storeProject from "../storage-project";
import ProjectRender from "./project-render";
import ProjectEvent from "./project-event";

export default function ProjectDelete() {
    const project = document.querySelector(".project-container");
    const todo = document.querySelector(".todo-container")
    const title = document.querySelector(".project-title")
    const button = document.querySelector(".add-todo-button")
    const container = document.querySelector(".sidebar");
    const projectDel = document.createElement("button");
    projectDel.classList.add("project-delete")
    projectDel.textContent = "Delete Project";
    // project.textContent = ""
    projectDel.addEventListener("click", () => {

        if(getProjectId() === 0) return;  
        projectManager.removeProject(getProjectId())        
        project.childNodes[getProjectId()].remove()
        storeProject()
       
      
        todo.textContent = ""
        title.textContent = ""
        button.textContent = ""

        ProjectRender()
        ProjectEvent()
    })

    container.appendChild(projectDel)
    

}