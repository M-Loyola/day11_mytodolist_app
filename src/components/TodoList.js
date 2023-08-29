import { useSelector } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import "./css/TodoList.css";

const TodoList = () => {
    const todoList = useSelector((state) => state.todo.todoList)
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todoList={todoList} />
                <TodoGenerator />
            </div>
        </div>
    );
};

export default TodoList;
