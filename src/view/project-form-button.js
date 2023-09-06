import Project from "../project";
import { projectManager } from "../view";
import ProjectRender from "./project-render";
import ProjectEvent from "./project-event";
import ProjectTitleRender from "./project-title-render";
import storeProject from "../storage-project";

export default function ProjectSubmit(input) {
    const container = document.querySelector('.sidebar');
    const todo = document.querySelector('.todo-container')
    
    const projectTitle = document.querySelector('.project-title');

    const button = document.createElement('button');
    button.classList.add('project-add')
    button.textContent= 'Add Project'
    button.addEventListener('click', (e) => {
        projectTitle.textContent = ''
        todo.textContent = ''

        const project = Project(input.value);
        projectManager.addProject(project)
        storeProject()
        ProjectRender()
        ProjectEvent()
        ProjectTitleRender()
        
        console.log(projectManager.Projects)
        console.log(projectManager.hasOwnProperty('addProject'))
        input.value = ''
    })
    container.appendChild(button);

}
