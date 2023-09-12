import View from "./view";
import { projectManager } from "./project";
import "./style.css";

// storeProject()

View().ProjectForm();
View().ProjectRender();
View().ProjectEvent();
View().ProjectTitleRender();
View().ProjectDelete();
View().TodoRender();
View().TodoFormButton();


window.addEventListener("load", () => {
  if (localStorage.getItem("ProjectArray") !== null) {
    projectManager.addLocalStorage(
      JSON.parse(localStorage.getItem("ProjectArray")),
    );
  }
});
