import { projectManager } from "./view";

export default function storeProject() {

    localStorage.setItem("ProjectArray", JSON.stringify(projectManager.Projects));

  
   
}

export function Replacer() {
      let json = JSON.stringify(projectManager.Projects, function(key, value) {
        if (typeof value === "function") {
          return "/Function(" + value.toString() + ")/";
        }
        return value;
      });
    
      return json
     
}



