let todoID = null;

export function setTodoId(newVal) {
    todoID = newVal
    return todoID
}

export function getTodoId() {
    return Number(todoID);
}
