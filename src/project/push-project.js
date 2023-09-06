export default function PushProject(obj) {
    return {
        addProject: (arr) => {
            console.log(arr)    
            return obj.push(arr)
        }
    }
}