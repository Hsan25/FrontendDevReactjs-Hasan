import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://restaurant-api.dicoding.dev',
  headers: {
    'Content-Type': 'aplication/json'
  }
});

export default axiosInstance;