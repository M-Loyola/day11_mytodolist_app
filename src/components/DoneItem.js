import { CloseOutlined } from "@ant-design/icons";
import { Card, Col, Modal, Row } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as todoApi from "../api/todoApi";
import "./css/TodoItem.css";
import { resetTodoList } from "./todoSlice";

const DoneItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const onTriggerToggle = () => {
        navigate('/done/' + props.todo.id);
    };

    const handleDeleteConfirm = async () => {
        await todoApi.deleteTodoTask(props.todo.id);
        const response = await todoApi.getTodoTasks();
        dispatch(resetTodoList(response.data));
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
        <Card className={`todoItem ${props.todo.done && "done"}`} style={{ height: '150px', margin: '5px', position: 'relative' }}>
            <div className="buttonsContainer" style={{ position: 'absolute', top: 0, right: 0 }}>
                <button className="deleteButton" onClick={showDeleteModal}><CloseOutlined /></button>
            </div>
            <Row justify="space-between" align="middle" gutter={[16, 8]} style={{ justifyContent: 'space-between' }}>
                <Col onClick={onTriggerToggle}><p className="itemTask">{currentDate}: {props.todo.text}</p></Col>
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

export default DoneItem;
