import { Button, Input, Space, notification } from 'antd';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import * as todoApi from "../api/todoApi";
import "./css/TodoGenerator.css";
import { resetTodoList } from "./todoSlice";

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [api, contextHolder] = notification.useNotification();
    const [inputValue, setInputValue] = useState("");

    const handleTodoItem = async () => {
        if (inputValue.trim() === '') {
            api.error({
                message: 'Error',
                description:
                    'Please enter an item to proceed!',
                duration: 2,
            });
        } else {
            await todoApi.addTodoTask(
                {
                    id: uuidv4(),
                    text: inputValue,
                    done: false
                }
            );
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoList(response.data));
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
