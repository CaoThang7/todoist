import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;

export const searchSelector = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchSelector,
    (todoList, search) => {
        return todoList.filter((todo) => {
            return todo.name.includes(search);
        });
    }
);