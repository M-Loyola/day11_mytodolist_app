import React, { useState } from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleItemAsDone } from "./todoSlice";
import { Card, Col, Row, Modal } from "antd";
import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const toggleDone = () => {
        dispatch(toggleItemAsDone(props.todo.id));
    };

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteTodoItem(props.todo.id));
        setIsDeleteModalVisible(false);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    return (
        <Card className={`todoItem ${props.todo.done && "done"}`}>
            <Row justify="space-between" align="middle" gutter={[16, 8]}>
                <Col onClick={toggleDone}><p>{props.todo.text}</p></Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="deleteButton" onClick={showDeleteModal}><CloseOutlined /></button>
                </Col>
            </Row>
            <Modal
                title="Delete Todo"
                visible={isDeleteModalVisible}
                onOk={handleDeleteConfirm}
                onCancel={handleDeleteCancel}
            >
                <p>Do you want to delete this?</p>
            </Modal>
        </Card>
    );
};

export default TodoItem;
