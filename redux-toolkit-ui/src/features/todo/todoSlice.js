import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
      toggleTodo.completed = !toggleTodo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      // const indexToDelete = state.todos.findIndex(
      //   (item) => item.id === action.payload
      // );
      // if (indexToDelete !== -1) {
      //   state.todos.splice(indexToDelete, 1);
      // }
    },
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
