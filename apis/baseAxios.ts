import axios from 'axios';
import { isAxiosError } from 'axios';
import { postCreateToken } from './postCreateToken';
import { STORAGE_KEYS } from '@/constants/storageKey';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 30000,
});

baseAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    STORAGE_KEYS.accessToken
  )}`;

  return config;
});

baseAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;

    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        const res = await postCreateToken();
        localStorage.setItem(STORAGE_KEYS.accessToken, res.accessToken);

        return axios({
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${localStorage.getItem(
              STORAGE_KEYS.accessToken
            )}`,
          },
        });
      }
    }

    return Promise.reject(error);
  }
);

export default baseAxios;
