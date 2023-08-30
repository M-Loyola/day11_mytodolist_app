import { api } from "./api"

export const getTodoTasks = () => {
    return api.get('/todos');
}

export const updateTodoTask = (id, todoList) => {
    return api.put(`/todos/${id}`, todoList); //first url and second is request body
}