import { setProjectId } from "./get-set-project-id";
import { projectArray } from "../view";

export default function ProjectRender() {
    const content = document.querySelector('.project-container')
    content.textContent = ''
    for (let i = 0; i < projectArray.Projects.length; i++) {
        setProjectId(i)   
        const project = document.createElement('button');    
       
        project.setAttribute('project',i);
        project.classList.add('project');
        
        project.textContent = projectArray.Projects[i].Title;
    
       
        content.appendChild(project)    
        

   
        
    }
    
}