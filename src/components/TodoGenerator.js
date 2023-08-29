import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoSlice";
import "./css/TodoGenerator.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");

    const handleTodoItem = () => {
        dispatch(addTodoItem(
            {
                id: uuidv4(),
                text: inputValue,
                done: false
            }
        ));
        setInputValue("");
    }

    return (
        <div className="todoGenerator">
            <input value={inputValue} onChange={event => setInputValue(event.target.value)} />
            <button onClick={handleTodoItem}>Add</button>
        </div>
    );
};

export default TodoGenerator;
