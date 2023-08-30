import React from "react";
import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./css/TodoList.css";

const TodoList = (props) => {
    const todoList = useSelector((state) => state.todo.todoList)
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup isDone={props.isDone} todoList={todoList} />
                {!props.isDone && <TodoGenerator />}
            </div>
        </div>
    );
};

export default TodoList;
