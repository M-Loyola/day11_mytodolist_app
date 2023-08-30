import { useSelector } from "react-redux";
import DoneItem from "./DoneItem";

export const DoneGroup = (props) => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => todo.done))
    return (
        <ul className="todoGroup">
            {todoList.map((todo) => (
                <DoneItem key={todo.id} todo={todo} done={todo.done} isDone={props.isDone} />
            ))}
        </ul>
    );
}