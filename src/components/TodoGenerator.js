import { useDispatch } from "react-redux";
import { updateTodoList } from "./todoSlice";
import "./css/TodoGenerator.css"
import { useState } from "react";

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");

    const handleTodoItem = () => {
        dispatch(updateTodoList([]));
        setInputValue("");
    }

    return (
        <div className="todoGenerator">
            <input value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button onClick={handleTodoItem} type="primary">Add</button>
        </div>
    );
};

export default TodoGenerator;
