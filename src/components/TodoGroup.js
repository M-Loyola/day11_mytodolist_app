import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./css/TodoGroup.css";

const TodoGroup = () => {
    const todoList = useSelector((state) => state.todo.todoList.filter(todo => !todo.done))
    return (
        <Row justify="center" className="todoGroup">
            {todoList.map((todo) => (
                <Col key={todo.id} xs={24} sm={12} md={8} >
                    <TodoItem todo={todo} />
                </Col>
            ))}
        </Row>
    );
};

export default TodoGroup;
