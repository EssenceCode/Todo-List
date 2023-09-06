import { projectManager } from "./view";

export default function storeProject() {
    
    localStorage.setItem("ProjectArray", JSON.stringify(projectManager.Projects));
     

    
   
}

