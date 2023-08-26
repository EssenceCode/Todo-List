
export default function CreateProjects(title, id =  crypto.randomUUID()) { 
    const todoArray = [];

    const Title = title 
    const Id = id
 
    const todoList = todoArray  
   
    return Object.assign(
        {},
        { Id },
        { Title },
        { todoList },
        PushTodo(todoArray),
        DeleteTodo(todoList),
      
        )
}



export function ProjectArrayCreate(title) {
    const projectArray = []
    let currentId;
    const projectList = projectArray

    return Object.assign(
        {},
        {title},
        { projectList },
        { currentId },
        PushProject(projectArray),
        DeleteProject(projectArray)
    )
    
}


function PushProject(obj) {
    return {
        addProject: (arr) => obj.push(arr)
    }
}

function DeleteProject(obj) {
    return {
        removeProject: (index) => obj.splice(index, 1)
    }
}

function PushTodo(obj) {
    return {
        addTodo: (arr) => obj.push(arr),
        
    }
}

function DeleteTodo(obj) {
    return {
        removeTodo: (index) => obj.splice(index, 1)
    }
}




