import { projectManager } from "./project";

export default function storeProject() {

    localStorage.setItem("ProjectArray", JSON.stringify(projectManager.Projects));

  
   
}


