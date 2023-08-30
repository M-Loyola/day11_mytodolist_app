import { api } from "./api"

export const getTodoTasks = () => {
    return api.get('/todos');
}