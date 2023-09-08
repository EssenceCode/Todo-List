import { setTodoId } from "./get-set-todo-id";
import UpdateTodoForm from "./update-todo-form";
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
        console.log(id)
        console.log('hello')
        UpdateTodoForm()
        form.classList.toggle('show-form')
     

    }))
}