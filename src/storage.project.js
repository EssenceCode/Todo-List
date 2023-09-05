import { projectManager } from "./view";

export default function storeProject() {
    localStorage.setItem("ProjectManager", JSON.stringify(projectManager));
  

}



