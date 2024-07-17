import { authAxios } from 'api/api';
import { STORAGE_KEYS } from 'constants/storageKey';

/**
 * access 토큰 재발급
 */
export const reissueToken = async () => {
  try {
    const response = await authAxios.post('auth/refresh-token', {
      refreshToken: localStorage.getItem(STORAGE_KEYS.accessToken),
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
