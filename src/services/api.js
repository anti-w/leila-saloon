import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://leila-saloon-server-production.up.railway.app',
});
