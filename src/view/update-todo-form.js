import { projectArray } from "../view";
import { getProjectId } from "./get-set-project-id";
import { getTodoId } from "./get-set-todo-id";
import TodoRender from "./todo-render";
import EditTodo from "./todo-edit";
import DelTodo from "./todo-delete";

export default function UpdateTodo() {
        
    const form = document.querySelector('.form-update');

    const inputTitle = document.createElement('input');
    const inputDescription= document.createElement('input');
    const inputDate = document.createElement('input');
    const inputPriority = document.createElement('select');
   

    const button = document.createElement('button');
    button.classList.add('update-todo')
    button.textContent = 'Update'

    button.addEventListener('click', (e) => {
      

        projectArray.Projects[getProjectId()].todoList[getTodoId()].Title = inputTitle.value, 
        projectArray.Projects[getProjectId()].todoList[getTodoId()].Description = inputDescription.value,              
        projectArray.Projects[getProjectId()].todoList[getTodoId()].DueDate = inputDate.value,              
        projectArray.Projects[getProjectId()].todoList[getTodoId()].Priority = inputPriority.value,               
                       

   
   
    
        console.log(projectArray.Projects[getProjectId()].todoList)
        TodoRender() 
     
        EditTodo()
        DelTodo()
        form.classList.toggle('show-form')
    })


    inputTitle.setAttribute('type', 'text')
    inputDescription.setAttribute('type', 'text')
    inputDate.setAttribute('type', 'date')
    inputPriority.setAttribute('type', 'text')
    
  
    inputTitle.setAttribute("placeholder", 'title')
    inputDescription.setAttribute("placeholder", 'description')  
    inputPriority.setAttribute("placeholder", 'priority')  
    
   

    // chooses for priority
    const priorityArr = [
        {
            value: 'green',
            text: 'low',
        },
        {
            value: 'yellow',
            text: 'medium',
        },
        {
            value: 'red',
            text: 'high',
        },
    ];
    // loop the choose to put in the select element
    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i].value;
        option.text = priorityArr[i].text;

        
        inputPriority.appendChild(option);
    }



    form.appendChild(inputTitle)
    form.appendChild(inputDescription)
    form.appendChild(inputDate)
    form.appendChild(inputPriority)
 

    form.appendChild(button)


        
   

}