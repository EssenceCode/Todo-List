import Project, {ProjectArrayCreate} from './project.js';
import ProjectForm from './view/project-form.js';
import ProjectRender from './view/project-render.js';
import ProjectEvent from './view/project-event.js';
import ProjectTitleRender from './view/project-title-render.js';
import ProjectDelete from './view/project-delete.js';
import TodoForm from './view/todo-form.js';
import TodoRender from './view/todo-render.js';
import EditTodo from './view/todo-edit.js';
import DelTodo from './view/todo-delete.js';
import TodoFormButton from './view/todo-form-button.js';
export default function View() {

    return {
        ProjectForm,
        ProjectRender,
        ProjectEvent,
        ProjectTitleRender,        
        ProjectDelete,
        TodoForm,
        TodoRender,
        EditTodo,
        DelTodo,
        TodoFormButton,
    }
}

export const projectArray = ProjectArrayCreate('projectArray');

const allProjectArr = ProjectArrayCreate('allProjectArray')

const defaultProject = Project('default')
const allProject = Project('ALL PROJECTS')

projectArray.addProject(defaultProject)
allProjectArr.addProject(projectArray)
console.log(allProjectArr)



