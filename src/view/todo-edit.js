import { setTodoId } from "./get-set-todo-id";
import UpdateTodo from "./update-todo-form";
import storeProject from "../storage-project";


export default function EditTodo() {
    const form = document.querySelector('.form-update');
    
    const button = document.querySelectorAll('.edit-todo');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        form.textContent = ''
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        setTodoId(id)
       
        //
        UpdateTodo()
        form.classList.toggle('show-form')
     

    }))
}