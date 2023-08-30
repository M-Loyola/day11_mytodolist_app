import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./css/TodoGroup.css";

const TodoGroup = (props) => {
    const todoList = props.todoList;
    return (
        <ul className="todoGroup">
            {todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} done={todo.done} isDone={props.isDone} />
            ))}
        </ul>
    );
};

export default TodoGroup;
