import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todoList: [],
   },
   reducers: {
      resetTodoList: (state, action) => {
         state.todoList = action.payload;
      },
      addTodoItem: (state, action) => {
         state.todoList.push(action.payload);
      },

      onToggle: (state, action) => {
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

export const { addTodoItem, onToggle, deleteTodoItem , resetTodoList} = todoSlice.actions;
export default todoSlice.reducer;
