
import TodoSubmit from "./todo-submit";

export default function TodoForm() {
    
    const formContainer = document.querySelector('.form')
    const form = document.createElement('form')
    form.classList.add('todo-form')


    const inputArray = [
        {
            label: 'Title',
            placeholder: 'title',
            type: 'text',
        },
        {
            label: 'Description',
            placeholder: 'description',
            type: 'text',
        },
        {
            label: 'Date',
            placeholder: '',
            type: 'date',
        },
    ]
   
    for (let i = 0; i < inputArray.length; i++) {
        const label = document.createElement('label');
        const input = document.createElement('input');
       
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
        label.setAttribute('for', inputArray[i].label)
       

        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
        label.textContent = inputArray[i].label
       


        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
        input.setAttribute('id', inputArray[i].label)
      


        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
        input.setAttribute('type', inputArray[i].type)
     

        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
        input.setAttribute('placeholder', inputArray[i].placeholder)
       



        

    
        form.appendChild(label)

        form.appendChild(input)
        
    }

   
    const button = document.createElement('button');
    button.classList.add('submit-todo')
    button.textContent = 'Submit'

    button.addEventListener('click', (e) => {
        e.preventDefault()
        TodoSubmit()
        formContainer.classList.toggle('show-form')
       
        
    })

    const inputPriority = document.createElement('select');
    const labelPriority = document.createElement('label')
    labelPriority.textContent = "Priority"
    inputPriority.setAttribute("id", 'Priority')
    
  
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


    form.appendChild(labelPriority)
    form.appendChild(inputPriority)

    form.appendChild(button)

    formContainer.appendChild(form)
        
   

}
