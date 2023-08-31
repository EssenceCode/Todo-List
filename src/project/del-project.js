export default function DeleteProject(obj) {
    return {
        removeProject: (index) => obj.splice(index, 1)
    }
}