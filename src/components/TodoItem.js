import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { deleteTodoItem, toggleItemAsDone } from "./todoSlice";
import { Card, Col, Row } from "antd";

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const toggleDone = () => {
        dispatch(toggleItemAsDone(props.todo.id));
    }
    const deleteItem = () => {
        if(window.confirm("Do you want to delete this?")){
            dispatch(deleteTodoItem(props.todo.id));
        }
    }

    return (
        <Card className={`todoItem ${props.todo.done && "done"}`}>
            <Row justify="space-between" align="middle" gutter={[16, 8]}>
                <Col onClick={toggleDone}>{props.todo.text}</Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button className="deleteButton" onClick={deleteItem}>X</button>
                </Col>
            </Row>
        </Card>
    );
};

export default TodoItem;