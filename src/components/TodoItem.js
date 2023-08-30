import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Modal, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./css/TodoItem.css";
import { deleteTodoItem, onToggle } from "./todoSlice";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const onTriggerToggle = () => {
        if(props.isDone) {
            console.log("somethingsomething")
        } else {
            dispatch(onToggle(props.todo.id));
        }
    };

    const handleDeleteConfirm = () => {
        dispatch(deleteTodoItem(props.todo.id));
        setIsDeleteModalVisible(false);
    };

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const currentDate = new Date().toISOString().split("T")[0];

    return (
        <Card className={`todoItem ${props.todo.done && "done"}`}>
            <Row justify="space-between" align="middle" gutter={[16, 8]}>
                <Col className={`${props.todo.done  ? 'done' : ''}`} onClick={onTriggerToggle}><p>{currentDate}: {props.todo.text}</p></Col>
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
        </Card>
    );
};

export default TodoItem;
