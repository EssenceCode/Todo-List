import { setTodoId } from "./get-set-todo-id";
import { getTodoId } from "./get-set-todo-id";

import UpdateTodo from "./update-todo-form";

export default function EditTodo() {
    const button = document.querySelectorAll('.edit-todo');
    const form = document.querySelector('.form-update');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        setTodoId(id)
        console.log(getTodoId() === Number(id))
        form.textContent = ''
        UpdateTodo()
        form.classList.toggle('show-form')

    }))
}
