import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoSlice";
import "./css/TodoGenerator.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Input, Space } from 'antd';

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
        <Space.Compact className="todoGenerator">
            <Input 
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <Button type="primary" onClick={handleTodoItem}>Submit</Button>
        </Space.Compact>
    );
};

export default TodoGenerator;
