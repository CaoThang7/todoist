export const createTodo = (data) => {
    return {
        type: 'todoList/createTodo',
        payload: data
    }
}

export const editTodo = (data) => {
    return {
        type: 'todoList/EditTodo',
        payload: data
    }
}

export const removeTodo = (data) => {
    return {
        type: 'todoList/removeTodo',
        payload: data
    }
}
