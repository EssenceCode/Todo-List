import TodoForm from "./todo-form";
import DelTodo from "./todo-delete";
import EditTodo from "./todo-edit";
export default function TodoFormButton() {
    const container = document.querySelector('.add-todo-button');
    const form = document.querySelector('.form');
    const button = document.createElement('button');
    const span = document.createElement('span');
    button.classList.add('add-todo');
    
    
    button.appendChild(span)
    button.addEventListener('click', (e) => {
        form.textContent = ''
        TodoForm()
        form.classList.toggle('show-form')
        
    })

    container.appendChild(button)
}
