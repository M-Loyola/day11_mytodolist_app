import { useSelector } from "react-redux";
import { DoneGroup } from "./DoneGroup";

export const DoneList = (props) => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => todo.done))
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle">Dont List</h2>
            <div className="todoListComponents">
                <DoneGroup isDone={props.isDone} todoList={todoList} />
            </div>
        </div>
    );
}
