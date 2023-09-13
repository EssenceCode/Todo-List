
import TodoUpdateSubmit from "./update-todo-submit";
import EditTodo from "./todo-edit";
import DelTodo from "./todo-delete";

export default function UpdateTodoForm() {
        
    const formContainer = document.querySelector(".form-update");
    const form = document.createElement("form")
    form.classList.add("todo-update-form")

    const inputArray = [
        {
            label: "TitleUpdate",
            placeholder: "title",
            type: "text",
            title: "Title"
        },
        {
            label: "DescriptionUpdate",
            placeholder: "description",
            type: "text",
            title: "Description"
        },
        {
            label: "DateUpdate",
            placeholder: "",
            type: "date",
            title: "Date"
        },
    ]

     
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement("label");
        const input = document.createElement("input");
       
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
        label.setAttribute("for", inputArray[i].label)
       

        label.textContent = inputArray[i].title
        label.textContent = inputArray[i].title
        label.textContent = inputArray[i].title
       


        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
        input.setAttribute("id", inputArray[i].label)
      


        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
        input.setAttribute("type", inputArray[i].type)
     

        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
        input.setAttribute("placeholder", inputArray[i].placeholder)
       
    
        form.appendChild(label)
        form.appendChild(input)
    }

   

    const button = document.createElement("button");
    button.classList.add("update-todo")
    button.textContent = "Update"

    button.addEventListener("click", (e) => {
        e.preventDefault()
        
        TodoUpdateSubmit()
        EditTodo()
        DelTodo()
        
        formContainer.classList.toggle("show-form")
    })

    
    const inputPriority = document.createElement("select");
    const labelPriority = document.createElement("label")
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", "PriorityUpdate")

    // chooses for priority
    const priorityArr = [
        {
            value: "green",
            text: "low",
        },
        {
            value: "yellow",
            text: "medium",
        },
        {
            value: "red",
            text: "high",
        },
    ];


    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i].value;
        option.text = priorityArr[i].text;

        
        inputPriority.appendChild(option);
    }

    
    form.appendChild(labelPriority)
    form.appendChild(inputPriority)

    form.appendChild(button)

    return formContainer.appendChild(form)
}