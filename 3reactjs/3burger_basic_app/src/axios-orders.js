import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-neo-default-rtdb.firebaseio.com/',
});

export default instance;