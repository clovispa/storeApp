import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://sva.talana.com:8000/api/'
});

export default apiClient
