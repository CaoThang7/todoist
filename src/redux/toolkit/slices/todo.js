import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, name: 'Learn React Native', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn Javascript', completed: true, priority: 'High' },
    { id: 3, name: 'Learn Flutter', completed: true, priority: 'Low' },
]

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: initialState,
    reducers: {
        createTodo: (state, action) => {
            state.push(action.payload)
        },
        updateTodo: (state, action) => {
            let data = action.payload;
            const updatedArray = [];
            state.map((item) => {
                if (item.id === data.id) {
                    item.id = data.id;
                    item.name = data.name;
                    item.completed = data.completed;
                    item.priority = data.priority;
                }
                updatedArray.push(item);
            })
        },
        removeTodo: (state, action) => {
            const findIndexTodos = state.findIndex((i) => i.id === action.payload);
            state.splice(findIndexTodos, 1);
        },
    },
})

export default todoListSlice.reducer