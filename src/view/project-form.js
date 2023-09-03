import ProjectFormButton from "./project-form-button";

export default function ProjectForm() {
    const container = document.querySelector('.sidebar');

    const input = document.createElement('input');
    input.classList.add('project-input')
    input.setAttribute('type', 'text');

    
    container.appendChild(input);
    ProjectFormButton(input) 
   

}
