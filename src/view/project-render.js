import { setProjectId } from "./get-set-project-id";
import { projectManager } from "../view";


export default function ProjectRender() {
    const content = document.querySelector('.project-container')
    const userData = JSON.parse(localStorage.getItem("ProjectArray"))
    content.textContent = ''

    if(!localStorage.getItem("ProjectArray")) {
        
        for (let i = 0; i < projectManager.Projects.length; i++) {
        setProjectId(i)   
        const project = document.createElement('button');    
       
        project.setAttribute('project',i);
        project.classList.add('project');
        
        project.textContent = projectManager.Projects[i].Title;
        
       
        content.appendChild(project)    
        
      
    }
} else {
    for (let i = 0; i < userData.length; i++) {
        setProjectId(i)   
        const project = document.createElement('button');    
       
        project.setAttribute('project',i);
        project.classList.add('project');
        
        project.textContent = userData[i].Title;
    
       
        content.appendChild(project)    
        
      
    }
}
    
}