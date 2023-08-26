import CreateProject, { ProjectArrayCreate } from './project.js';
import Todo from './todo.js';

export default function ViewController() {

    return {
      
        CreateProjectButton,
        CreateDropMenu
      
        
        
    }
}


function CreateProjectButton(obj, id) {
    const content = document.querySelector('.sidebar')
    const project = document.createElement('button')
    project.classList.add('project')
    project.textContent = obj.Title
    
    project.addEventListener('click', (e) => {
        console.log(id)
    })

    content.appendChild(project)
    
}

function CreateDropMenu(obj) {
    const content = document.querySelector('.form-container')
    const dropMenu = document.getElementById("lang");
    for (let i = 0; i <= obj.projectList.length; i++) {
        let option = new Option()
        option.value = obj.projectList[i].Id
        option.text = obj.projectList[i].Title
        console.log(obj.projectList[i].Title)
       
        dropMenu.options.add(option)
        
    }
    content.appendChild(dropMenu)
}

