import TodoForm from "./todo-form";

export default function TodoFormButton() {
    const container = document.querySelector(".add-todo-button");
    const form = document.querySelector(".form");
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.classList.add("add-todo");
    
    
    button.appendChild(span)
    button.addEventListener("click", () => {
        form.textContent = ""
        TodoForm()
        form.classList.toggle("show-form")
        
    })

    container.appendChild(button)
}
