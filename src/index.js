import View, {projectManager}from './view.js'; 

import './style.css'


View().ProjectForm()
View().ProjectRender()
View().ProjectEvent()
View().ProjectTitleRender()
View().ProjectDelete()
View().TodoRender()
View().TodoFormButton()


window.addEventListener('load', (e) => {
    if(localStorage.getItem("ProjectManager")) {
 
    projectManager.Projects = JSON.parse(localStorage.getItem("ProjectManager"))
    console.log(projectManager)
    console.log('hello')
    }
 })
