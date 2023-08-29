import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todoList: [],
   },
   reducers: {
      addTodoItem: (state, action) => {
         state.todoList.push(action.payload);
      },
      deleteTodoItem: (state, action) => {
         const todoToUpdate = state.todoList.find((todo) => todo.id === action.payload);
         if (todoToUpdate) {
            todoToUpdate.done = !todoToUpdate.done;
         }
      }
   }
});

export const { addTodoItem, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
