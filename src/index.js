import View, {projectManager}from './view.js'; 
import storeProject from './storage-project.js';
import './style.css'

// storeProject()

View().ProjectForm()
View().ProjectRender()
View().ProjectEvent()
View().ProjectTitleRender()
View().ProjectDelete()
View().TodoRender()
View().TodoFormButton()


window.addEventListener('load', (e) => {
    if(localStorage.getItem("ProjectArray") !== null) {
 
    projectManager.addLocalStorage(JSON.parse(localStorage.getItem("ProjectArray")))
    console.log(projectManager)
    // console.log(projectManager.hasOwnProperty('addProject'))
    }
 })

