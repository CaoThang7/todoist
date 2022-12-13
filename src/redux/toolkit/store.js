import { configureStore } from "@reduxjs/toolkit"
import filtersSlice from "../toolkit/slices/filters"
import todoListSlice from "../toolkit/slices/todo"

export default configureStore({
  reducer: {
    filters: filtersSlice,
    todoList: todoListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})