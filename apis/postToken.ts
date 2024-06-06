import baseAxios from './baseAxios';

/**
 * access 토큰 재발급
 */
export const postToken = async () => {
  try {
    const response = await baseAxios.post('/auth/refresh-token', {
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
