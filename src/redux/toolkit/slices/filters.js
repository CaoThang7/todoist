import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: '',
    status: 'All',
    priority: []
}

export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        searchTodo: (state, action) => {
            state.search = action.payload
        }
    },
})

export default filtersSlice.reducer