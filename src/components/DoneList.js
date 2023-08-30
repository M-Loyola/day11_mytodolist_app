import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as todoApi from "../api/todoApi";
import { DoneGroup } from "./DoneGroup";
import { resetTodoList } from "./todoSlice";

export const DoneList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoList(response.data));
        }
        fetchData();
    }, [dispatch])

    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle">Done List</h2>
            <div className="todoListComponents">
                <DoneGroup />
            </div>
        </div>
    );
}
