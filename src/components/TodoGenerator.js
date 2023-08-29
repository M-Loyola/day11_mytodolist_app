import { Button, Input, Space } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./css/TodoGenerator.css";
import { addTodoItem } from "./todoSlice";

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("");

    const handleTodoItem = () => {
        if (inputValue.trim() === '') {
            window.confirm("Input can't be blank");
        } else {
            dispatch(addTodoItem(
                {
                    id: uuidv4(),
                    text: inputValue,
                    done: false
                }
            ));
            setInputValue("");
        }
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
