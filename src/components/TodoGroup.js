import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./css/TodoGroup.css";

const TodoGroup = () => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => !todo.done))
    // const todoList = props.todoList;
    return (
        <ul className="todoGroup">
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;
