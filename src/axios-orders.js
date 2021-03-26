import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-33b47-default-rtdb.firebaseio.com/'
})

export default instance;