import React, { useState } from "react";
import "./Input.css";
// tool to interact with redux
import { useDispatch } from "react-redux";
// import the action
import { saveTodo } from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Input;
