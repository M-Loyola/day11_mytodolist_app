import { Button, Input, Space, notification } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import "./css/TodoGenerator.css";
import { addTodoItem } from "./todoSlice";

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [api, contextHolder] = notification.useNotification();
    const [inputValue, setInputValue] = useState("");

    const handleTodoItem = () => {
        if (inputValue.trim() === '') {
            api.error({
                message: 'Error',
                description:
                    'Please enter an item to proceed!',
                duration: 2,
            });
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
            {contextHolder}
            <Input
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <Button type="primary" onClick={handleTodoItem}>Submit</Button>
        </Space.Compact>
    );
};

export default TodoGenerator;
