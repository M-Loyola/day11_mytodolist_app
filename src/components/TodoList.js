import { useDispatch, useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./css/TodoList.css";
import { useEffect } from "react";
import * as todoApi from "../api/todoApi";
import { resetTodoList } from "./todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        todoApi.getTodoTasks().then( response => {
            dispatch(resetTodoList(response.data));
        });
    },[])

    const todoList = useSelector((state) => state.todo.todoList.filter(todo => !todo.done))
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup />
                <TodoGenerator />
            </div>
        </div>
    );
};

export default TodoList;
