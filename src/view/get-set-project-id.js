let projectID = null;

export function setProjectId(newVal) {
    projectID = newVal;

    return projectID;
}

export function getProjectId() {
   
    return Number(projectID);
}
