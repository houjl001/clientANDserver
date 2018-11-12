import axios from 'axios';
import api from './api'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api/';

export default api;
