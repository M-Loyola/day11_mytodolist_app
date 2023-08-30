import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./css/TodoList.css";
import { useEffect } from "react";

const TodoList = (props) => {
    useEffect(()=> {

    },[])

    const todoList = useSelector((state) => state.todo.todoList.filter(todo => !todo.done))
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
