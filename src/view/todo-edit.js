import { setTodoId } from "./get-set-todo-id";


import UpdateTodo from "./update-todo-form";

export default function EditTodo() {
    const form = document.querySelector('.form-update');
    const button = document.querySelectorAll('.edit-todo');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        setTodoId(id)
        // console.log(parent)
        // console.log(Number(id))

        form.textContent = ''
        UpdateTodo()
        form.classList.toggle('show-form')

    }))
}
