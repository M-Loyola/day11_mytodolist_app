import { useSelector } from "react-redux";
import DoneItem from "./DoneItem";
import { Col, Row } from "antd";

export const DoneGroup = () => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => todo.done))
    return (
        <Row justify="center" className="todoGroup">
            {todoList.map((todo) => (
                <Col key={todo.id} xs={24} sm={12} md={8} >
                    <DoneItem todo={todo} />
                </Col>
            ))}
        </Row>
    );
}