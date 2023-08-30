import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./css/TodoGroup.css";

const TodoGroup = (props) => {
    const todoTask = useSelector(state => state.todo.todoList)
    return (
        <ul className="todoGroup">
            {(props.isDone ? todoTask.filter(task=> task.done) : todoTask).map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;
