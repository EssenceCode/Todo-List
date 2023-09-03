import Project from "../project";
import { projectArray } from "../view";
import ProjectRender from "./project-render";
import ProjectEvent from "./project-event";
import ProjectTitleRender from "./project-title-render";

export default function ProjectFormButton(input) {
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
        projectArray.addProject(project)
        ProjectRender()
        ProjectEvent()
        ProjectTitleRender() 
        console.log(projectArray.Projects)
   
        input.value = ''
    })
    container.appendChild(button);

}
