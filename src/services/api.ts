import axios from 'axios';

const URL =
    process.env.NODE_ENV === 'production' ? 'https://backend-ventura-academy.herokuapp.com' : 'http://localhost:3030';

const api = axios.create({
    baseURL: URL,
});

export default api;
