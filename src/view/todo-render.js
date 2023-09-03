import { projectArray } from "../view";
import { getProjectId } from "./get-set-project-id";
import { setTodoId } from "./get-set-todo-id";


export default function TodoRender() {
    const container = document.querySelector('.todo-container')
   
    container.textContent = ''
    for (let i = 0; i < projectArray.Projects[getProjectId()].todoList.length; i++) {
        setTodoId(i)
       
        const todo = document.createElement('div');
       
        const task = document.createElement('div');
        const taskTitle = document.createElement('div');
        const taskDetails = document.createElement('div');
        const taskColor = document.createElement('span')
        taskColor.setAttribute('taskColor', i)

        const buttonContain = document.createElement('div');
        buttonContain.classList.add('todo-buttons')

        todo.classList.add('todo-card', i)
        todo.setAttribute('todo', i);
        
        const title = document.createElement('div');
        title.classList.add('todo-title');
        const description = document.createElement('div');
        description.classList.add('todo-description');

        const dueDate = document.createElement('div');
        dueDate.classList.add('todo-date');
          

        title.textContent = `${projectArray.Projects[getProjectId()].todoList[i].Title}`;
        description.textContent = `${projectArray.Projects[getProjectId()].todoList[i].Description}`;
        dueDate.textContent = `${projectArray.Projects[getProjectId()].todoList[i].DueDate}`;
        taskColor.style.borderLeft = `10px solid 
        
        ${projectArray.Projects[getProjectId()].todoList[i].Priority}`;
       


        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-todo');
        editBtn.textContent = 'Edit';

        const delBtn = document.createElement('button');
        delBtn.classList.add('del-todo');
        delBtn.textContent = 'Del'
        
        taskTitle.appendChild(title)
        taskDetails.appendChild(description)
        
        todo.appendChild(taskColor)
        task.appendChild(taskTitle)
        task.appendChild(taskDetails)


        todo.appendChild(task)
        todo.appendChild(dueDate)
      
        
        buttonContain.appendChild(editBtn)
        buttonContain.appendChild(delBtn)

        todo.appendChild(buttonContain)
        container.appendChild(todo)
   
    }
}
