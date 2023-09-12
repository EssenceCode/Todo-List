import Project, { projectManager } from "../project";
import ProjectRender from "./project-render";
import ProjectEvent from "./project-event";
import ProjectTitleRender from "./project-title-render";
import storeProject from "../storage-project";

export default function ProjectSubmit() {
    const container = document.querySelector(".sidebar");
    const todo = document.querySelector(".todo-container");
    const input = document.querySelector(".project-input")
    
    const projectTitle = document.querySelector(".project-title");

    const button = document.createElement("button");
    button.classList.add("project-add")
    button.textContent= "Add Project"
    button.addEventListener("click", () => {
        projectTitle.textContent = ""
        todo.textContent = ""

        const project = Project(input.value);
        projectManager.addProject(project)
    
        storeProject()
      
        ProjectRender()
        ProjectEvent()
        ProjectTitleRender()
        
    
        input.value = ""
    })
    container.appendChild(button);

}
