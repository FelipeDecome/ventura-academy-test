import axios from 'axios';

const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3030';

const api = axios.create({
    baseURL: URL,
});

export default api;
