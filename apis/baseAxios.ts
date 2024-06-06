import axios from 'axios';
import { isAxiosError } from 'axios';
import { postToken } from './postToken';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
});

baseAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`;

  return config;
});

baseAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    const { config } = error;

    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        const res = await postToken();
        localStorage.setItem('accessToken', res.accessToken);

        return axios({
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
      }
    }

    return Promise.reject(error);
  }
);

export default baseAxios;
