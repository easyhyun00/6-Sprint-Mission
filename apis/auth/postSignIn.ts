import { baseAxios } from '../axios';
import { LoginFormData } from '@/types/auth';

/**
 * 로그인
 */
export const postSignIn = async (signInForm: LoginFormData) => {
  console.log('api', signInForm);
  try {
    const response = await baseAxios.post('/auth/signIn', signInForm);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
