import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-994f9-default-rtdb.firebaseio.com/'
});

export default instance;