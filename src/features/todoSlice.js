// contain everything in connection with redux
// type 'rxslice' to create a redux slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 'state' is the current state we have here
    // 'action' is what will be executed and contain payload
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload == item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTodo, setCheck } = todoSlice.actions;
// returning the current state
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
