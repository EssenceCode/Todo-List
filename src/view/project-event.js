import { setProjectId } from "./get-set-project-id"
import ProjectTitleRender from "./project-title-render"
import TodoFormButton from "./todo-form-button"
import TodoRender from "./todo-render"







export default function ProjectEvent() {
    const project = document.querySelectorAll('.project')
    const buttonContainer = document.querySelector('.add-todo-button')
    
    const title = document.querySelector('.project-title')
    project.forEach(val => val.addEventListener('click', (e) => {
        let project = e.target
        let nodeId = project.getAttribute('project')
        title.textContent = ''
        buttonContainer.textContent = ''
        setProjectId(nodeId)
       
       
    
        ProjectTitleRender()
        TodoFormButton()
        TodoRender()
        
        
     

     
       
        
    }))
  
    
   
}