import PushProject from "./project/push-project";
import PushTodo from "./project/push-todo";
import DeleteProject from "./project/del-project";
import DeleteTodo from "./project/del-todo";
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
    const Projects = projectArray

    const addProject = (arr) => projectArray.push(arr)

    return Object.assign(
        {},
        {title},
        { Projects },
        { addProject },
        // PushProject(projectArray),
        DeleteProject(projectArray)
    )
    
}



