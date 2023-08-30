import { useDispatch, useSelector } from "react-redux";
import { DoneGroup } from "./DoneGroup";
import * as todoApi from "../api/todoApi";
import { useEffect } from "react";
import { resetTodoList } from "./todoSlice";

export const DoneList = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        const fetchData = async () => {
            const response = await todoApi.getTodoTasks();
            dispatch(resetTodoList(response.data));
        }
        fetchData();
    },[])
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle">Done List</h2>
            <div className="todoListComponents">
                <DoneGroup />
            </div>
        </div>
    );
}
