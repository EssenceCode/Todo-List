export default function ViewController() {

    return {
        createProjectButton
    }
}

function createProjectButton(obj) {
    const content = document.querySelector('.content')
    const project = document.createElement('button')
    project.textContent = obj.getTitle
    
    content.appendChild(project)
    
}