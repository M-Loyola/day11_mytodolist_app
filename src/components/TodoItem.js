import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const completeItem = () => {
        dispatch(deleteTodoItem(props.todo.id))
    }

    return (
        <li className={`todoItem ${props.todo.done ? "done" : ""}`}>
            {props.todo.text}
            <button onClick={completeItem}>ERASE ME FROM EXISTENCE</button>
        </li>
    );
};

export default TodoItem;