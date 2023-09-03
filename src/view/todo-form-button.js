import TodoForm from "./todo-form";

export default function TodoFormButton() {
    const container = document.querySelector('.add-todo-button');
    const form = document.querySelector('.form');
    const button = document.createElement('button');
    const span = document.createElement('span');
    button.classList.add('add-todo');
    // button.textContent = 'Add Todo'
    
    button.appendChild(span)
    button.addEventListener('click', (e) => {
        form.textContent = ''
        TodoForm()
        form.classList.toggle('show-form')
        
    })

    container.appendChild(button)
}
