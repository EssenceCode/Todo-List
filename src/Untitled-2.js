// import ProjectRender from './view/Project-render.js';
// import ProjectEvent from './view/project-event.js';
// import ProjectForm from './view/project-form.js';
// import ProjectFormButton from './view/project-submit.js';
// import ProjectDelete from './view/project-delete.js';
// import ProjectTitleRender from './view/project-title-render.js';

// import TodoForm from './view/todo-form.js';
// import RenderTodo from './view/todo-render.js';
// import AddTodoButton from './view/todo-submit.js';

import Project, { ProjectArrayCreate } from './project.js';
import Todo from './todo.js';
export default function View() {

    return {
        ProjectForm,
        ProjectRender,
        ProjectEvent,
        ProjectDelete,
        RenderTodo,
        TodoForm,
        AddTodoButton,
        ProjectTitleRender,
        
    }
    // return Object.assign(
    //     {},
    //     ProjectForm(ProjectFormButton()),


    // )
}