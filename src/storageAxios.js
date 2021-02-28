import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://crm-app-f834c.appspot.com'

});

export default instance;