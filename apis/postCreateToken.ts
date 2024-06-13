import { authAxios } from './axios';

/**
 * access 토큰 재발급
 */
export const postCreateToken = async () => {
  try {
    const response = await authAxios.post('/auth/refresh-token', {
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
