import ProjectForm from "./view/project-form";
import ProjectRender from "./view/project-render";
import ProjectEvent from "./view/project-event";
import ProjectTitleRender from "./view/project-title-render";
import ProjectDelete from "./view/project-delete";
import TodoRender from "./view/todo-render";
import TodoFormButton from "./view/todo-form-button";
import EditTodo from "./view/todo-edit";
import DelTodo from "./view/todo-delete";

export default function View() {

    return {
        ProjectForm,
        ProjectRender,
        ProjectEvent,
        ProjectTitleRender,        
        ProjectDelete,
        TodoRender,
        TodoFormButton,
        EditTodo,
        DelTodo,
    }
}




