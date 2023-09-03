let projectID = null;

export function setProjectId(newVal) {
    projectID = newVal;

    return projectID;
}

export function getProjectId() {
    // console.log(projectID)
    return Number(projectID);
}
