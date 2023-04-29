import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://639d73671ec9c6657baa7b37.mockapi.io/api/users',
});