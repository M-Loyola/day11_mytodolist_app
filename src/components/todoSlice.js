import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name: "todo",
   initialState: {
      todoList: [],
   },
   reducers: {
      updateTodoList: (state, action) => {
         state.todoList.push(action.payload);
      },
   }
});

export const { updateTodoList } = todoSlice.actions;
export default todoSlice.reducer;
