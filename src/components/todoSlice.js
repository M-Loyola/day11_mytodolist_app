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

   }
});

export const { resetTodoList } = todoSlice.actions;
export default todoSlice.reducer;
