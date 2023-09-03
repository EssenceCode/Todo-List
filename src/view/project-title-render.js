import { projectArray } from "../view"
import { getProjectId } from "./get-set-project-id"
export default function ProjectTitleRender() {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = `${projectArray.Projects[getProjectId()].Title}`

    content.appendChild(title)

}