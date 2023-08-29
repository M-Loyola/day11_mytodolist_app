import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = (props) => {
    return (
        <ul className="todoGroup">
            {props.todoList.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;
