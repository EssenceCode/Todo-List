export default function createTodo(title, description, dueDate, priority, note ) {
    let Title = title;
    let Description = description;
    let DueDate = dueDate;
    let Priority = priority;
    let Note = note;

    const UpdateTodo = (title,description,dueDate,priority,note) => {
        Title = title;
        Description = description;
        DueDate = dueDate;
        Priority = priority;
        Note = note;
    }

    return {
        Title,
        Description,
        DueDate,
        Priority,
        Note,
        UpdateTodo
        
    }
}

