import { useSelector } from "react-redux";

export const TodoItemDetail = () => {
    const todoList = useSelector((state) => state.todo.todoList).find(task => task.id = "")
    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todoList.id}</div>
            <div>{todoList.name}</div>
        </div>
    );
}