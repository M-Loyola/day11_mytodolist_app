import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Input, Modal, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import "./css/TodoItem.css";
import { resetTodoList } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const [updateValue, setUpdateValue] = useState("");
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

    const onTriggerToggle = async () => {
        await todoApi.updateTodoTask(props.todo.id, { done: !props.todo.done });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
    };

    const handleUpdateConfirm = async () => {
        await todoApi.updateTodoTask(props.todo.id, { text: updateValue });
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
        setIsUpdateModalVisible(false);
        setUpdateValue("");
    }

    const handleDeleteConfirm = async () => {
        await todoApi.deleteTodoTask(props.todo.id);
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
        setIsDeleteModalVisible(false);
    };

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const showUpdateModal = () => {
        setIsUpdateModalVisible(true);
    };

    const handleUpdateCancel = () => {
        setUpdateValue("");
        setIsUpdateModalVisible(false);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const currentDate = new Date().toISOString().split("T")[0];

    return (
        <Card className={`todoItem ${props.todo.done && "done"}`}>
            <Row justify="space-between" align="middle" gutter={[16, 8]}>
                <Col onClick={onTriggerToggle}><p>{currentDate}: {props.todo.text}</p></Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="updateButton" onClick={showUpdateModal}><CloseOutlined /></button>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="deleteButton" onClick={showDeleteModal}><CloseOutlined /></button>
                </Col>
            </Row>
            <Modal
                title="Delete Todo"
                open={isDeleteModalVisible}
                onOk={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
            >
                <p>Do you want to delete this?</p>
            </Modal>
            <Modal
                title="Update Todo"
                open={isUpdateModalVisible}
                onOk={handleUpdateConfirm}
                onCancel={handleUpdateCancel}
            >
                <p>What do you want to update?</p>
                <Input
                    value={updateValue}
                    onChange={(input) => setUpdateValue(input.target.value)}
                    placeholder="Please input here"
                />
            </Modal>
        </Card>
    );
};

export default TodoItem;
