import PushProject from "./project/push-project";
import PushTodo from "./project/push-todo";
import DeleteProject from "./project/del-project";
import DeleteTodo from "./project/del-todo";
import UpdateTodo from "./project/update-todo";

export default function CreateProjects(title) {
  const todoArray = [];
  const Title = title;

  const todoList = todoArray;

  

  return {
    Title,
    todoList,
    ...PushTodo(todoList),
    ...DeleteTodo(todoList),
    ...UpdateTodo(todoList),
  };
}

export function ProjectArrayCreate(title) {
  const projectArray = [];
  const Projects = projectArray;

  const addLocalStorage = (arr) => {
    arr.forEach((val) =>
      projectArray.push({
        ...val,
        ...PushTodo(val.todoList),
        ...DeleteTodo(val.todoList),
        ...UpdateTodo(val.todoList),
      }),
    );
  };

  return {
    title,
    Projects,
    addLocalStorage,
    ...PushProject(projectArray),
    ...DeleteProject(projectArray),
  };
}

export const projectManager = ProjectArrayCreate("ProjectManager");



const defaultProject = CreateProjects("default")

if(!localStorage.getItem("ProjectArray")) {

    projectManager.addProject(defaultProject)
    
}

