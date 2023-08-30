import TodoItem from "./TodoItem";
import "./css/TodoGroup.css";

const TodoGroup = (props) => {
    return (
        <ul className="todoGroup">
            {props.todoList.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;
