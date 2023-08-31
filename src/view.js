import Project, {ProjectArrayCreate} from './project.js';
import Todo from './todo.js';
export default function View() {

    return {
        ProjectForm,
        ProjectRender,
        ProjectTitleRender,        
        ProjectEvent,
        ProjectDelete,
        TodoForm,
        RenderTodo,
        EditTodo,
        TodoFormButton,
    }
}
let projectID = null;

function setProjectId(newVal) {
    projectID = newVal;

    return projectID;
}

function getProjectId() {
    // console.log(projectID)
    return Number(projectID);
}

let todoID = null;

function setTodoId(newVal) {
    todoID = newVal
    return todoID
}

function getTodoId() {
    return Number(todoID);
}



// projects
function ProjectForm() {
    const container = document.querySelector('.sidebar');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    
    container.appendChild(input);
    ProjectFormButton(input) 
   

}

function ProjectFormButton(input) {
    const container = document.querySelector('.sidebar');
    const todo = document.querySelector('.todo-container')
    
    const projectTitle = document.querySelector('.project-title');

    const button = document.createElement('button');
    button.classList.add('project-add')
    button.textContent= 'Add Project'
    button.addEventListener('click', (e) => {
        projectTitle.textContent = ''
        todo.textContent = ''

        const project = Project(input.value);
        projectArray.addProject(project)
        View().ProjectRender(projectArray)
        View().ProjectEvent()
        View().ProjectTitleRender() 
        console.log(projectArray.Projects)
   
        input.value = ''
    })
    container.appendChild(button);

}

function ProjectRender() {
    const content = document.querySelector('.project-container')
    content.textContent = ''
    for (let i = 0; i < projectArray.Projects.length; i++) {
    const project = document.createElement('button');
 

    project.setAttribute('project',i);
    project.classList.add('project');
    setProjectId(i)
    project.textContent = projectArray.Projects[i].Title;

   
    content.appendChild(project)    
        
    }
    
}

function ProjectEvent() {
    const project = document.querySelectorAll('.project')
    const buttonContainer = document.querySelector('.add-todo-button')

    const title = document.querySelector('.project-title')
    project.forEach(val => val.addEventListener('click', (e) => {
        let project = e.target
        let nodeId = project.getAttribute('project')
        title.textContent = ''
        buttonContainer.textContent = ''
        setProjectId(nodeId)
        console.log(getProjectId())
        console.log(project)
        View().ProjectTitleRender()
        View().TodoFormButton()
        View().RenderTodo()
       
        
    }))
  
    
   
}

function ProjectDelete() {
    const project = document.querySelector('.project-container');
    const todo = document.querySelector('.todo-container')
    const title = document.querySelector('.project-title')
    const button = document.querySelector('.add-todo-button')
    const container = document.querySelector('.sidebar');
    const projectDel = document.createElement('button');
    projectDel.classList.add('project-delete')
    projectDel.textContent = 'Delete Project';

    projectDel.addEventListener('click', (e) => {

        if(getProjectId() === 0) return;  
        projectArray.removeProject(getProjectId())        
        project.childNodes[getProjectId()].remove()
        
        
        todo.textContent = ''
        title.textContent = ''
        button.textContent = ''


    })

    container.appendChild(projectDel)

}

function ProjectTitleRender() {
    const content = document.querySelector('.project-title')
    const title = document.createElement('h2')
    title.textContent = `${projectArray.Projects[getProjectId()].Title}`

    content.appendChild(title)

}
// todo 

function TodoForm() {
    
    const form = document.querySelector('.form')

    const inputTitle = document.createElement('input');
    const inputDescription= document.createElement('input');
    const inputDate = document.createElement('input');
    const inputPriority = document.createElement('select');
    const inputNote= document.createElement('input');

    const button = document.createElement('button');
    button.classList.add('submit-todo')
    button.textContent = 'Submit'

    button.addEventListener('click', (e) => {
        const todo = Todo(
                         inputTitle.value, 
                         inputDescription.value, 
                         inputDate.value, 
                         inputPriority.value, 
                         inputNote.value
                         );
   
   
    
        projectArray.Projects[getProjectId()].addTodo(todo)
        View().RenderTodo() 
        View().EditTodo()
        form.classList.toggle('show-form')
    })

    inputTitle.setAttribute('type', 'text')
    inputDescription.setAttribute('type', 'text')
    inputDate.setAttribute('type', 'date')
    inputPriority.setAttribute('type', 'text')
    inputNote.setAttribute('type', 'text')
  
    inputTitle.setAttribute("placeholder", 'title')
    inputDescription.setAttribute("placeholder", 'description')  
    inputPriority.setAttribute("placeholder", 'priority')  
    
    inputNote.setAttribute("placeholder", 'note')  

    // chooses for priority
    const priorityArr = ['low', 'medium', 'high'];
    // loop the choose to put in the select element
    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i];
        option.text = priorityArr[i];
        
        inputPriority.appendChild(option);
    }


    form.appendChild(inputTitle)
    form.appendChild(inputDescription)
    form.appendChild(inputDate)
    form.appendChild(inputPriority)
    form.appendChild(inputNote)

    form.appendChild(button)


        
   

}


function RenderTodo() {
    const container = document.querySelector('.todo-container')
    container.textContent = ''
    for (let i = 0; i < projectArray.Projects[getProjectId()].todoList.length; i++) {
        const todo = document.createElement('div');
        todo.setAttribute('todo', i);
        
        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priority = document.createElement('p');
        const note = document.createElement('p');

        title.textContent = `Title:${projectArray.Projects[getProjectId()].todoList[i].Title}`;
        description.textContent = `Description:${projectArray.Projects[getProjectId()].todoList[i].Description}`;
        dueDate.textContent = `Date:${projectArray.Projects[getProjectId()].todoList[i].dueDate}`;
        priority.textContent = `Priority:${projectArray.Projects[getProjectId()].todoList[i].Priority}`;
        note.textContent = `Note:${projectArray.Projects[getProjectId()].todoList[i].Note}`;


        const button = document.createElement('button');
        button.classList.add('edit-todo')
        button.textContent = 'Edit';
 
        todo.appendChild(title)
        todo.appendChild(description)
        todo.appendChild(dueDate)
        todo.appendChild(priority)
        todo.appendChild(note)
        
        todo.appendChild(button)

        container.appendChild(todo)
     
        
    }
}

function UpdateTodo() {
        
    const form = document.querySelector('.form-update');

    const inputTitle = document.createElement('input');
    const inputDescription= document.createElement('input');
    const inputDate = document.createElement('input');
    const inputPriority = document.createElement('select');
    const inputNote= document.createElement('input');

    const button = document.createElement('button');
    button.classList.add('update-todo')
    button.textContent = 'Update'

    button.addEventListener('click', (e) => {
      

        projectArray.Projects[getProjectId()].todoList[getTodoId()].Title = inputTitle.value, 
        projectArray.Projects[getProjectId()].todoList[getTodoId()].Description = inputDescription.value,              
        projectArray.Projects[getProjectId()].todoList[getTodoId()].dueDate = inputDate.value,              
        projectArray.Projects[getProjectId()].todoList[getTodoId()].Priority = inputPriority.value,               
        projectArray.Projects[getProjectId()].todoList[getTodoId()].Note = inputNote.value                  

   
   
    
        console.log(projectArray.Projects[getProjectId()].todoList)
        View().RenderTodo() 
        View().EditTodo()
        form.classList.toggle('show-form')
    })


    inputTitle.setAttribute('type', 'text')
    inputDescription.setAttribute('type', 'text')
    inputDate.setAttribute('type', 'date')
    inputPriority.setAttribute('type', 'text')
    inputNote.setAttribute('type', 'text')
  
    inputTitle.setAttribute("placeholder", 'title')
    inputDescription.setAttribute("placeholder", 'description')  
    inputPriority.setAttribute("placeholder", 'priority')  
    
    inputNote.setAttribute("placeholder", 'note')  

    // chooses for priority
    const priorityArr = ['low', 'medium', 'high'];
    // loop the choose to put in the select element
    for(let i = 0; i < priorityArr.length; i++) {
        const option = document.createElement("option");
        option.value = priorityArr[i];
        option.text = priorityArr[i];
        
        inputPriority.appendChild(option);
    }


    form.appendChild(inputTitle)
    form.appendChild(inputDescription)
    form.appendChild(inputDate)
    form.appendChild(inputPriority)
    form.appendChild(inputNote)

    form.appendChild(button)


        
   

}

function EditTodo() {
    const button = document.querySelectorAll('.edit-todo');
    const form = document.querySelector('.form-update');
    button.forEach(btn => btn.addEventListener('click', (e) => {
        const parent = e.target.parentElement
        const id = parent.getAttribute('todo')
        setTodoId(id)
        // console.log()
        form.textContent = ''
        UpdateTodo()
        form.classList.toggle('show-form')

    }))
}

function TodoFormButton() {
    const container = document.querySelector('.add-todo-button');
    const form = document.querySelector('.form');
    const button = document.createElement('button');
    button.classList.add('add-todo');
    button.textContent = 'Add Todo'

    button.addEventListener('click', (e) => {
        form.textContent = ''
        View().TodoForm()
        form.classList.toggle('show-form')
    })

    container.appendChild(button)
}



export const projectArray = ProjectArrayCreate('projectArray');


const defaultProject = Project('default')

projectArray.addProject(defaultProject)


