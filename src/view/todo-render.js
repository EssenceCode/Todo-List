import { projectManager } from "../view";
import { getProjectId } from "./get-set-project-id";
import { setTodoId } from "./get-set-todo-id";


export default function TodoRender() {
    const container = document.querySelector('.todo-container')
   
    container.textContent = ''
    for (let i = 0; i < projectManager.Projects[getProjectId()].todoList.length; i++) {
        setTodoId(i)
       
        const todo = document.createElement('div');
       
        const task = document.createElement('div');
        
        const taskTitle = document.createElement('div');
        const taskDetails = document.createElement('div');
        const taskColor = document.createElement('span')
        
        const title = document.createElement('div');
        const description = document.createElement('div');
        const dueDate = document.createElement('div');
      

        todo.classList.add('todo-card', i)
        todo.setAttribute('todo', i);
        task.classList.add('todo-title-description')
        taskColor.setAttribute('taskColor', i)

        title.classList.add('todo-title');
        description.classList.add('todo-description');
        dueDate.classList.add('todo-date');
          

        title.textContent = `${projectManager.Projects[getProjectId()].todoList[i].Title}`;
        description.textContent = `${projectManager.Projects[getProjectId()].todoList[i].Description}`;
        dueDate.textContent = `${projectManager.Projects[getProjectId()].todoList[i].DueDate}`;
        taskColor.style.borderLeft = `10px solid ${projectManager.Projects[getProjectId()].todoList[i].Priority}`;
       


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
      
        
        todo.appendChild(editBtn)
        todo.appendChild(delBtn)

       
        container.appendChild(todo)
   
    }
}
