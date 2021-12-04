import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
// for grabbing data from redux
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app_container">
        {/* todo list */}
        <div className="app_todoContainer">
          {todoList.map((item) => (
            // todo component
            <TodoItem name={item.item} done={item.done} id={item.id}></TodoItem>
          ))}
        </div>
        {/* input */}
        <Input></Input>
      </div>
    </div>
  );
}

export default App;
