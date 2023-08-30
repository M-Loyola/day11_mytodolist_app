import { useSelector } from "react-redux";
import DoneItem from "./DoneItem";

export const DoneGroup = (props) => {
    const todoList = props.todoList;
    return (
        <ul className="todoGroup">
            {(props.isDone ? todoList.filter(task=> task.done) : todoList).map((todo) => (
                <DoneItem key={todo.id} todo={todo} done={todo.done} isDone={props.isDone} />
            ))}
        </ul>
    );
}