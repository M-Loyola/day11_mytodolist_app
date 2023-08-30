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
      toggleItemAsDone: (state, action) => {
         const todoToUpdate = state.todoList.find((todo) => todo.id === action.payload);
         if (todoToUpdate) {
            todoToUpdate.done = !todoToUpdate.done;
         }
      },

      deleteTodoItem: (state, action) => {
         state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
      }
   }
});

export const { addTodoItem, toggleItemAsDone, deleteTodoItem } = todoSlice.actions;
export default todoSlice.reducer;
