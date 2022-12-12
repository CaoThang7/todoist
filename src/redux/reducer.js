const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn React Native', completed: false, priority: 'Medium' },
        { id: 2, name: 'Learn Javascript', completed: true, priority: 'High' },
        { id: 3, name: 'Learn Flutter', completed: true, priority: 'Low' },
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({ state, action });
    switch (action.type) {
        case 'todoList/createTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'todoList/EditTodo':
            let data = action.payload;
            const updatedArray = [];
            state.todoList.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.name = data.name;
                    item.completed = data.completed;
                    item.priority = data.priority;
                }
                updatedArray.push(item);
            })
            return {
                todoList: updatedArray
            }
        case 'todoList/removeTodo':
            const filteredTodos = state.todoList.filter((i) => i.id !== action.payload);
            return {
                todoList: filteredTodos
            }
        default:
            return state;
    }
}


export default rootReducer;