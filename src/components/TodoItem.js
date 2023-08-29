import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ todo }) => {
    return (
      <li className="todoItem"> {todo.text} </li>
    );
  };

export default TodoItem;