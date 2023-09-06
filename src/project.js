import PushProject from "./project/push-project";
import PushTodo from "./project/push-todo";
import DeleteProject from "./project/del-project";
import DeleteTodo from "./project/del-todo";
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
    const Projects = projectArray

    return Object.assign(
        {},
        {title},
        { Projects },
        PushProject(projectArray),
        DeleteProject(projectArray)
    )
    
}



