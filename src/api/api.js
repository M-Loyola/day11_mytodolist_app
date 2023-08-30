import axios from "axios";

export const api = axios.create({
    baseURL: 'https://64ee17611f87218271424c04.mockapi.io/'
});

// api.get('/todos').then(response => console.log(response.data));