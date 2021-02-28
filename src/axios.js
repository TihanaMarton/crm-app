import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://crm-app-f834c-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;