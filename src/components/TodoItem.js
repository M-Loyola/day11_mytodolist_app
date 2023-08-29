import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleItemAsDone } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const completeItem = () => {
        dispatch(deleteTodoItem(props.todo.id))
    }

    const toggleDone = () => {
        dispatch(toggleItemAsDone(props.todo.id));
    }
    const deleteItem = () => {
        dispatch(deleteTodoItem(props.todo.id));
    }

    return (
        <li className={`todoItem ${props.todo.done && "done"}`}>
            <p onClick={toggleDone}>{props.todo.text}</p>
            <span>
            <button className="deleteButton" onClick={deleteItem}>
                ERASE ME FROM EXISTENCE
            </button>
            </span>
        </li>
    );
};

export default TodoItem;