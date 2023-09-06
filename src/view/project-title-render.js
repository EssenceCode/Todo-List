import { projectManager } from "../view"
import { getProjectId } from "./get-set-project-id"
export default function ProjectTitleRender() {
   const userData = JSON.parse(localStorage.getItem("ProjectArray"))

   if(!localStorage.getItem("ProjectArray")) {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = `${projectManager.Projects[getProjectId()].Title}`

    content.appendChild(title)
   } else {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = userData[getProjectId()].Title
    content.appendChild(title)
   }

}