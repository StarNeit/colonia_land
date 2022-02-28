import axios from 'axios';

const httpApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT as string,
});

export default httpApiClient;
