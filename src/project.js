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

    const addLocalStorage = (arr) => {
        // projectArray.push(arr)
        // console.log(arr)
        // console.log(projectArray)
        // console.log(Projects)
        // console.log(projectManager)
        arr.forEach(val => projectArray.push(Object.assign({}, val)));
    }

    return Object.assign(
        {},
        {title},
        { Projects },
        { addLocalStorage },
        PushProject(projectArray),
        DeleteProject(projectArray)
    )
    
}



