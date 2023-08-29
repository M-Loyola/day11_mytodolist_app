import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleItemAsDone } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const toggleDone = () => {
        dispatch(toggleItemAsDone(props.todo.id));
    }
    const deleteItem = () => {
        if(window.confirm("Do you want to delete this?")){
            dispatch(deleteTodoItem(props.todo.id));
        }
    }

    return (
        <li className={`todoItem ${props.todo.done && "done"}`}>
            <p onClick={toggleDone}>{props.todo.text}</p>
            <span className="deleteButton">
                <button className="deleteButton" onClick={deleteItem}>X</button>
            </span>
        </li>
    );
};

export default TodoItem;