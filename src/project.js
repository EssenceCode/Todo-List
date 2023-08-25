
export default function CreateProjects(title) { 
    const todoArray = [];

    const Title = title 
 
    const todoList = todoArray
  
   
    return Object.assign(
        {},
        { Title },
        { todoList },
        PushTodo(todoArray),
        DeleteTodo(todoList),
      
        )
}

export function ProjectArrayCreate(title) {
    const projectArray = []
    const projectList = projectArray

    return Object.assign(
        {},
        {title},
        { projectList },
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
        pushTodo: (arr) => obj.push(arr),
        
    }
}

function DeleteTodo(obj) {
    return {
        removeTodo: (index) => obj.splice(index, 1)
    }
}




