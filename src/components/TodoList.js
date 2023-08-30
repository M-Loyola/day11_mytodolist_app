import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./css/TodoList.css";
import { resetTodoList } from "./todoSlice";

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const fetchData = async () => {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoList(response.data));
        }
        fetchData();
    },[])

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
